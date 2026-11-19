export interface ProgramImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProgramLink {
  label: string;
  href: string;
  external?: boolean;
}


export type ProgramSectionKey =
  | "overview"
  | "eligibility"
  | "teachingPedagogies"
  | "peo"
  | "outcomes"
  | "curriculum"
  | "feeStructure"
  | "scholarship"
  | "specialization"
  | "faq";



export interface ProgramSectionBase {
  menuLabel?: string | null;
  title?: string | null;
  showHeading?: boolean;
  subtitle?: string | null;
  html?: string | null;
}


export interface OverviewStat {
  id: string;
  value: string;
  superscript?: string | null;
  description: string;
}

export interface OverviewSection extends ProgramSectionBase {
  stats?: OverviewStat[] | null;
}

export interface EligibilitySection extends ProgramSectionBase {
  highlight?: string | null;
  summary?: string | null;
}

export interface TeachingPedagogyItem {
  id: string;
  title: string;
  description: string;
  icon?: ProgramImage | null;
}

export interface TeachingPedagogiesSection extends ProgramSectionBase {
  image?: ProgramImage | null;
  items?: TeachingPedagogyItem[] | null;
  cta?: ProgramLink | null;
}

export interface PeoItem {
  id: string;
  number: string;
  text: string;
}

export interface PeoSection extends ProgramSectionBase {
  items?: PeoItem[] | null;
  backgroundImage?: ProgramImage | null;
}

export interface OutcomeItem {
  id: string;
  code: string;
  title: string;
  description: string;
}

export interface OutcomesSection extends ProgramSectionBase {
  items?: OutcomeItem[] | null;
  cta?: ProgramLink | null;
}

export interface CurriculumItem {
  id: string;
  label: string;
  href?: string | null;
  icon?: ProgramImage | null;
}

export interface CurriculumSection extends ProgramSectionBase {
  items?: CurriculumItem[] | null;
}

export interface FeeHighlight {
  id: string;
  text: string;
  icon?: ProgramImage | null;
}

export interface FeeBreakdownRow {
  id: string;
  label: string;
  amount: string;
}

export interface FeeStructureSection extends ProgramSectionBase {
  highlights?: FeeHighlight[] | null;
  totalLabel?: string | null;
  totalAmount?: string | null;
  totalNote?: string | null;
  breakdownTitle?: string | null;
  breakdown?: FeeBreakdownRow[] | null;
  breakdownFootnote?: string | null;
  image?: ProgramImage | null;
  cta?: ProgramLink | null;
}

export interface ScholarshipCriterion {
  id: string;
  text: string;
  icon?: ProgramImage | null;
}

export interface ScholarshipSection extends ProgramSectionBase {
  image?: ProgramImage | null;
  benefitsTitle?: string | null;
  benefits?: string[] | null;
  criteriaIntro?: string | null;
  criteria?: ScholarshipCriterion[] | null;
  cta?: ProgramLink | null;
}

export interface SpecializationItem {
  id: string;
  title: string;
  duration?: string | null;
  image?: ProgramImage | null;
  href?: string | null;
}

export interface SpecializationSection extends ProgramSectionBase {
  items?: SpecializationItem[] | null;
  cta?: ProgramLink | null;
}

export interface FaqItem {
  id: string;
  question: string;
  answerHtml: string;
}

export interface FaqSection extends ProgramSectionBase {
  items?: FaqItem[] | null;
}

export interface ProgramSections {
  overview?: OverviewSection | null;
  eligibility?: EligibilitySection | null;
  teachingPedagogies?: TeachingPedagogiesSection | null;
  peo?: PeoSection | null;
  outcomes?: OutcomesSection | null;
  curriculum?: CurriculumSection | null;
  feeStructure?: FeeStructureSection | null;
  scholarship?: ScholarshipSection | null;
  specialization?: SpecializationSection | null;
  faq?: FaqSection | null;
}


export interface ProgramHeading {
  eyebrow: string;
  title: string;
}

export interface ProgramFact {
  id: string;
  value: string;
  label: string;
  icon?: ProgramImage | null;
}

export interface ProgramSidebar {
  banner?: ProgramImage | null;
  badge?: { image?: ProgramImage | null; text: string } | null;
  facts?: ProgramFact[] | null;
  applyLink?: ProgramLink | null;
  brochureLink?: ProgramLink | null;
  brochureIcon?: ProgramImage | null;
}


export interface ProgramTaxonomyItem {
  id: number | string;
  title: string;
  slug: string;
}

export interface ProgramDetails {
  id?: number | string | null;
  slug: string;
  title: string;
  description?: string | null;
  duration?: string | null;
  fee?: string | null;
  level?: ProgramTaxonomyItem | null;
  schools?: ProgramTaxonomyItem[] | null;
  departments?: ProgramTaxonomyItem[] | null;

  heading: ProgramHeading;
  sidebar?: ProgramSidebar | null;
  sections: ProgramSections;
}