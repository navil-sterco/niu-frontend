export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type TabSlug = "news" | "events" | "gallery" | "media-coverage";

export interface TabConfig {
  slug: TabSlug;
  label: string;
  status: "ready" | "soon";
  topTitle?: string;  
  listTitle?: string; 
  linkItems?: boolean;
  filterClass?: string;
}

export interface FilterOption {
  value: string;
  label: string;
  parents?: string[];
}
export interface FilterField {
  key: string;      
  kind: "select" | "toggle";
  label: string;  
  options: FilterOption[];
  dependsOn?: string;   
}
export type FilterValues = Record<string, string>;

export interface HeroSlide {
  id: string;
  desktopImage: ImageAsset;
  mobileImage: ImageAsset;
  date: string;   
  tag: string;  
  heading: string;
  href: string;
  ctaLabel: string;
}

export interface TaxonomyRef {
  slug: string;
  title: string;
}

export interface HappeningItem {
  id: string;
  tab: "news" | "events";
  title: string;
  date: string;   
  schools: TaxonomyRef[];
  departments: TaxonomyRef[];
  eventType?: TaxonomyRef;
  featured?: boolean;   
  image?: ImageAsset; 
  detailImage?: ImageAsset;   
  href: string;
}

export interface TabData {
  hero: HeroSlide[];
  top: HappeningItem[];
  list: HappeningItem[];  
  total: number;  
  pageSize: number;
}

export interface PageResult {
  items: HappeningItem[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
