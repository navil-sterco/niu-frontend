export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface BannerSlide {
  id: string;
  desktopImage: ImageAsset;
  mobileImage: ImageAsset;
  heading: string;
  headingAccent?: string;
}
export interface BannerData {
  slides: BannerSlide[];
  autoplayMs: number;
  switcherLabel: string;
}

export interface AboutData {
  eyebrow: string;
  quote: string;
  image: ImageAsset;
  imageCaption: string;
  paragraphs: string[];
  keyAreasTitle: string;
  keyAreas: string[];
}

export interface IconLink {
  id: string;
  label: string;
  href: string;
  icon: ImageAsset;
}
export interface HodData {
  photo: ImageAsset;
  quoteIcon: ImageAsset;
  title: string;
  quote: string;
  message: string;
  moreLink: LinkItem;
  closing: string;
  name: string;
  designation: string;
  socials: IconLink[];
}

export interface ProgramItem {
  id: string;
  level: string;
  title: string;
  accent?: string;
  href: string;
}
export interface ProgramsData {
  eyebrow: string;
  title: string;
  arrowIcon: ImageAsset;
  items: ProgramItem[];
}

export interface QuickLinksData {
  menu: LinkItem[];
  contacts: IconLink[];
  cta: LinkItem;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  image: ImageAsset;
}
export interface FacultyData {
  eyebrow: string;
  title: string;
  description: string;
  cta: LinkItem;
  members: FacultyMember[];
}

export interface StatItem {
  id: string;
  value: number;
  unit?: string;
  sup?: string;
  label: string;
  labelAccent?: string;
}
export interface LabItem {
  id: string;
  name: string;
  image: ImageAsset;
}
export interface FacilitiesData {
  eyebrow: string;
  title: string;
  titleAccent: string;
  stats: StatItem[];
  labs: LabItem[];
  defaultLabId?: string;
}

export interface AlumniItem {
  id: string;
  name: string;
  course: string;
  batch: string;
  quote: string;
  photo: ImageAsset;
  thumb: ImageAsset;
  videoUrl?: string;
}
export interface AlumniData {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  cta: LinkItem;
  stat: StatItem;
  quoteIcon: ImageAsset;
  videoIcon: ImageAsset;
  items: AlumniItem[];
}

export interface GalleryItem {
  id: string;
  image: ImageAsset;
  fullSrc?: string;
}
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
export interface FaqData {
  title: string;
  items: FaqItem[];
}

export interface DepartmentPageData {
  slug: string;
  name: string;
  seo: { title: string; description: string };
  banner?: BannerData;
  about?: AboutData;
  hod?: HodData;
  programs?: ProgramsData;
  quickLinks?: QuickLinksData;
  faculty?: FacultyData;
  facilities?: FacilitiesData;
  alumni?: AlumniData;
  gallery?: GalleryItem[];
  faq?: FaqData;
}

export interface DepartmentOption {
  slug: string;
  name: string;
}
