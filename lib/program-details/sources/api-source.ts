import type {
  ProgramDetails,
  ProgramFact,
  ProgramSections,
  ProgramSidebar,
  ProgramTaxonomyItem,
} from "@/types/program-details";
import {
  cleanText,
  hasHtml,
  stripHtml,
} from "@/lib/program-details/program-details-utils";

const API_BASE_URL = (
  process.env.PROGRAM_API_BASE_URL ?? "https://project-demo.in/niu-backoffice/api"
).replace(/\/+$/, "");
const REVALIDATE_SECONDS = 300;
const APPLY_HREF = "/admissions/apply";


interface ApiTaxonomy {
  id?: number | string | null;
  title?: string | null;
  slug?: string | null;
}

interface ApiDetail {
  title?: string | null;
  sub_title?: string | null;
  duration?: string | null;
  fees?: string | null;
  brochures?: string | null;
}

interface ApiModular {
  schools?: ApiTaxonomy[] | null;
  departments?: ApiTaxonomy[] | null;
}

interface ApiProgramDetailResponse {
  status?: boolean;
  success?: boolean;
  data?: {
    detail?: ApiDetail | null;
    cms?: Record<string, unknown> | unknown[] | null;
    modular?: ApiModular | unknown[] | null;
  } | null;
}


async function fetchProgramDetail(
  slug: string,
): Promise<ApiProgramDetailResponse | null> {
  const response = await fetch(
    `${API_BASE_URL}/detail/programs/${encodeURIComponent(slug)}`,
    {
      headers: { Accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS },
    },
  );

  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Program details API failed (${response.status}) for "${slug}"`);
  }
  return (await response.json()) as ApiProgramDetailResponse;
}


function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function buildCmsMap(cms: unknown): Map<string, string> {
  const map = new Map<string, string>();
  if (!isRecord(cms)) return map;
  for (const [key, value] of Object.entries(cms)) {
    if (typeof value === "string" && value.trim()) {
      map.set(key.trim().toLowerCase().replace(/[\s-]+/g, "_"), value);
    }
  }
  return map;
}

function pick(map: Map<string, string>, ...keys: string[]): string | null {
  for (const key of keys) {
    const value = map.get(key);
    if (value) return value;
  }
  return null;
}

function headingsToParagraphs(html: string): string {
  return html.replace(/<(\/?)h[1-6]\b([^>]*)>/gi, "<$1p$2>");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fillPlaceholders(html: string, values: Record<string, string | null>): string {
  const lookup = new Map(
    Object.entries(values).map(([key, value]) => [key.toLowerCase(), value]),
  );
  let output = html.replace(/\{\s*([\w-]+)\s*\}/g, (match, name: string) => {
    const value = lookup.get(name.toLowerCase());
    return value ? escapeHtml(value) : match;
  });
  output = output.replace(
    /<(p|h[1-6]|li|div)\b[^>]*>[^<]*\{[^{}<]+\}[^<]*<\/\1>/gi,
    "",
  );
  return output.replace(/\{\s*[\w-]+\s*\}/g, "");
}

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function removeHeadingsMatching(html: string, text: string): string {
  const target = normalizeText(text);
  return html.replace(
    /<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/gi,
    (match, inner: string) =>
      normalizeText(stripHtml(inner)) === target ? "" : match,
  );
}

function toTaxonomy(items: ApiTaxonomy[] | null | undefined): ProgramTaxonomyItem[] | null {
  if (!Array.isArray(items)) return null;
  const result = items.flatMap((item) => {
    const title = cleanText(item.title);
    const slug = cleanText(item.slug);
    return title && slug ? [{ id: item.id ?? slug, title, slug }] : [];
  });
  return result.length > 0 ? result : null;
}

function splitEligibility(text: string): { highlight: string | null; summary: string | null } {
  const match = text.match(/^(.*?\d+(?:\.\d+)?\s*%)\s*(.*)$/);
  if (match && match[1]) {
    return { highlight: match[1].trim(), summary: cleanText(match[2]) };
  }
  return { highlight: null, summary: text };
}


export function normalizeProgramDetails(
  slug: string,
  response: ApiProgramDetailResponse,
): ProgramDetails | null {
  const ok = response.status ?? response.success ?? false;
  const detail = response.data?.detail;
  const title = cleanText(detail?.title);
  if (!ok || !detail || !title) return null;

  const cms = buildCmsMap(response.data?.cms);
  const modular = isRecord(response.data?.modular)
    ? (response.data?.modular as ApiModular)
    : null;

  const duration = cleanText(detail.duration);
  const fee = cleanText(detail.fees);
  const brochure = cleanText(detail.brochures);

  const sections: ProgramSections = {};

  const overviewRaw = pick(cms, "program_overview", "overview");
  if (overviewRaw) {
    const html = removeHeadingsMatching(
      fillPlaceholders(overviewRaw, { title, description: null }),
      title,
    );
    if (hasHtml(html)) sections.overview = { html };
  }

  const eligibilityRaw = pick(cms, "eligibility_criteria", "eligibility");
  const eligibilityText = cleanText(stripHtml(eligibilityRaw));
  if (eligibilityText) {
    sections.eligibility = splitEligibility(eligibilityText);
  }

  const teachingRaw = pick(cms, "teaching_pedagogies");
  if (teachingRaw) {
    sections.teachingPedagogies = { html: headingsToParagraphs(teachingRaw) };
  }

  const specializationRaw = pick(cms, "specialization");
  if (specializationRaw) {
    sections.specialization = { html: headingsToParagraphs(specializationRaw) };
  }

  const feeRaw = pick(cms, "fee_structure");
  if (feeRaw) {
    sections.feeStructure = {
      subtitle: cleanText(stripHtml(feeRaw)),
      totalLabel: fee ? "Total Program Fee" : null,
      totalAmount: fee,
    };
  }
  const facts: ProgramFact[] = [];
  if (duration) {
    facts.push({
      id: "duration",
      value: duration,
      label: "Duration",
      icon: { src: "/images/programs_icons2.svg", alt: "Duration", width: 24, height: 24 },
    });
  }
  if (fee) {
    facts.push({
      id: "fee",
      value: fee,
      label: "Total Fee",
      icon: { src: "/images/programs_icons1.svg", alt: "Total fee", width: 24, height: 24 },
    });
  }

  const sidebar: ProgramSidebar = {
    facts,
    applyLink: { label: "Apply Now", href: APPLY_HREF },
    brochureLink: brochure
      ? { label: "Download Brochure", href: brochure, external: true }
      : null,
    brochureIcon: { src: "/images/programs_stickypdf.webp", alt: "", width: 15, height: 15 },
  };

  return {
    slug,
    title,
    description: null,
    duration,
    fee,
    level: null, 
    schools: toTaxonomy(modular?.schools),
    departments: toTaxonomy(modular?.departments),
    heading: { eyebrow: "Programs", title },
    sidebar,
    sections,
  };
}

export async function getApiProgramDetails(slug: string): Promise<ProgramDetails | null> {
  const response = await fetchProgramDetail(slug);
  return response ? normalizeProgramDetails(slug, response) : null;
}