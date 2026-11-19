import type { HappeningItem, ImageAsset, TaxonomyRef } from "@/types/happenings";


type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => typeof v === "object" && v !== null && !Array.isArray(v);
const str = (v: unknown): string => (typeof v === "string" ? v.trim() : typeof v === "number" ? String(v) : "");

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function cleanImageUrl(v: unknown): string {
  const s = str(v);
  return /^https?:\/\//i.test(s) ? s.replace(/([^:]\/)\/+/g, "$1") : "";
}

const image = (url: string, alt: string, width: number, height: number): ImageAsset | undefined =>
  url ? { src: url, alt, width, height } : undefined;

function refOne(v: unknown): TaxonomyRef | undefined {
  if (typeof v === "string" && v.trim()) return { slug: slugify(v), title: v.trim() };
  if (!isObj(v)) return undefined;
  const title = str(v.title) || str(v.name);
  const slug = str(v.slug) || slugify(title);
  return title && slug ? { slug, title } : undefined;
}

function refs(v: unknown): TaxonomyRef[] {
  if (!Array.isArray(v)) return [];
  const seen = new Set<string>();
  const out: TaxonomyRef[] = [];
  for (const entry of v) {
    const ref = refOne(entry);
    if (ref && !seen.has(ref.slug)) {
      seen.add(ref.slug);
      out.push(ref);
    }
  }
  return out;
}

export function tabFromType(v: unknown): "news" | "events" | null {
  const t = (isObj(v) ? str(v.slug) || str(v.title) : str(v)).toLowerCase();
  if (t.startsWith("news")) return "news";
  if (t.startsWith("event")) return "events";
  return null; 
}

const flag = (v: unknown) => v === true || v === 1 || ["1", "true", "yes"].includes(str(v).toLowerCase());

export function normalizeHappening(raw: unknown): HappeningItem | null {
  if (!isObj(raw)) return null;

  const detail = isObj(raw.details) && isObj(raw.details.detail) ? raw.details.detail : {};
  const modular = isObj(raw.details) && isObj(raw.details.modular) ? raw.details.modular : {};

  const pick = (...keys: string[]): unknown => {
    for (const source of [raw, detail]) {
      for (const key of keys) {
        const v = source[key];
        if (v !== undefined && v !== null && v !== "") return v;
      }
    }
    return undefined;
  };

  const tab = tabFromType(pick("happening-type")) ?? tabFromType(pick("type"));
  const title = str(pick("title"));
  const id = str(raw.id);
  if (!tab || !title || !id) return null;

  const slug = str(pick("slug")) || slugify(title);
  const date = str(pick("publish_date")).slice(0, 10);
  const banner = cleanImageUrl(pick("banner_image"));
  const detailImg = cleanImageUrl(pick("detail_image"));

  return {
    id: `${tab}-${id}`,
    tab,
    title,
    date: /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : "",
    schools: refs(modular.schools),
    departments: refs(modular.departments),
    eventType: refOne(pick("events-type", "event-type", "event_type", "eventType")),
    featured: flag(pick("featured", "is_featured", "top")),
    image: image(banner || detailImg, title, 800, 560),
    detailImage: image(detailImg, title, 800, 560),
    href: `/${tab}/${encodeURIComponent(slug)}`,
  };
}
