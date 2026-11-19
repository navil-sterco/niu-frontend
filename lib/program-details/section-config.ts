import type {
  ProgramDetails,
  ProgramSectionKey,
  ProgramSections,
} from "@/types/program-details";
import {
  cleanText,
  hasHtml,
  hasItems,
  hasText,
} from "@/lib/program-details/program-details-utils";

export interface SectionConfig {
  key: ProgramSectionKey;
  /** DOM id. Used by BOTH the menu link and the section element. */
  id: string;
  defaultTitle: string;
  defaultMenuLabel: string;
}

/** Single source of truth for section order and IDs. */
export const SECTION_CONFIG: readonly SectionConfig[] = [
  { key: "overview", id: "overview", defaultTitle: "Overview", defaultMenuLabel: "Overview" },
  { key: "eligibility", id: "eligibility", defaultTitle: "Eligibility", defaultMenuLabel: "Eligibility Criteria" },
  { key: "teachingPedagogies", id: "teaching-pedagogies", defaultTitle: "Teaching Pedagogies", defaultMenuLabel: "Teaching Pedagogies" },
  { key: "peo", id: "program-educational-objectives", defaultTitle: "Program Educational Objectives (PEO)", defaultMenuLabel: "PEO" },
  { key: "outcomes", id: "program-outcomes", defaultTitle: "Program Outcomes (POs)", defaultMenuLabel: "Program Outcomes" },
  { key: "curriculum", id: "curriculum", defaultTitle: "Curriculum", defaultMenuLabel: "Curriculum" },
  { key: "feeStructure", id: "fee-structure", defaultTitle: "Fee Structure", defaultMenuLabel: "Fee Structure" },
  { key: "scholarship", id: "scholarship", defaultTitle: "Scholarship", defaultMenuLabel: "Scholarship" },
  { key: "specialization", id: "specialization", defaultTitle: "Specialization", defaultMenuLabel: "Specialization" },
  { key: "faq", id: "faqs", defaultTitle: "Frequently Asked Questions", defaultMenuLabel: "FAQs" },
];

export interface AvailableSection {
  key: ProgramSectionKey;
  id: string;
  menuLabel: string;
  title: string;
  showHeading: boolean;
}

export type SectionMeta = Pick<AvailableSection, "id" | "title" | "showHeading">;

function isSectionAvailable(key: ProgramSectionKey, s: ProgramSections): boolean {
  switch (key) {
    case "overview":
      return hasHtml(s.overview?.html) || hasItems(s.overview?.stats);
    case "eligibility":
      return (
        hasText(s.eligibility?.highlight) ||
        hasText(s.eligibility?.summary) ||
        hasHtml(s.eligibility?.html)
      );
    case "teachingPedagogies":
      return hasHtml(s.teachingPedagogies?.html) || hasItems(s.teachingPedagogies?.items);
    case "peo":
      return hasItems(s.peo?.items) || hasHtml(s.peo?.html);
    case "outcomes":
      return hasItems(s.outcomes?.items) || hasHtml(s.outcomes?.html);
    case "curriculum":
      return hasItems(s.curriculum?.items);
    case "feeStructure":
      return (
        hasHtml(s.feeStructure?.html) ||
        hasText(s.feeStructure?.subtitle) ||
        hasItems(s.feeStructure?.highlights) ||
        hasItems(s.feeStructure?.breakdown) ||
        hasText(s.feeStructure?.totalAmount)
      );
    case "scholarship":
      return (
        hasHtml(s.scholarship?.html) ||
        hasItems(s.scholarship?.benefits) ||
        hasItems(s.scholarship?.criteria)
      );
    case "specialization":
      return hasHtml(s.specialization?.html) || hasItems(s.specialization?.items);
    case "faq":
      return hasItems(s.faq?.items);
    default:
      return false;
  }
}

/** Sections that have content, in page order. Drives the menu AND the sections. */
export function getAvailableSections(program: ProgramDetails): AvailableSection[] {
  return SECTION_CONFIG.flatMap((config) => {
    const section = program.sections[config.key];
    if (!section || !isSectionAvailable(config.key, program.sections)) return [];

    const title = cleanText(section.title) ?? config.defaultTitle;
    return [
      {
        key: config.key,
        id: config.id,
        title,
        showHeading: section.showHeading !== false,
        menuLabel:
          cleanText(section.menuLabel) ??
          cleanText(section.title) ??
          config.defaultMenuLabel,
      },
    ];
  });
}