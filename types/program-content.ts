export type ProgramSectionKey =
  | "overview"
  | "eligibility"
  | "teachingPedagogy"
  | "poe"
  | "position"
  | "curriculum"
  | "feeStructure"
  | "scholarship"
  | "specialization"
  | "faqs";

export type ContentSource = "auto" | "local" | "api";

export interface ProgramField {
  key: string;
  label: string;
  value: string | number | string[];
}

export interface ProgramSectionData {
  key: ProgramSectionKey;
  title: string;
  enabled: boolean;
  source: ContentSource;

  // Data passed to a section component when you connect it.
  props: Record<string, unknown>;

  // Generic key/value content for local and API rendering.
  fields: ProgramField[];
}

export interface ProgramSectionConfig {
  enabled: boolean;
  source: ContentSource;
}

export type ProgramSectionSettings = Record<
  ProgramSectionKey,
  ProgramSectionConfig
>;