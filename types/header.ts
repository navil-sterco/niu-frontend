/* Everything the header shows comes from ONE JSON object: HeaderConfig. */

export interface HeaderImageAsset {
  src: string; // "/images/niu-logo.webp" or a full https:// URL
  alt: string;
  width: number;
  height: number;
}

export interface HeaderLink {
  id: string;
  label: string;
  /** optional second line, e.g. "Scholarship &" + accent "Financial Assistance" */
  accent?: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  /** small chevron after the label (inner-page header only) */
  dropdownIcon?: boolean;
  /** opens the big Admission mega menu */
  mega?: boolean;
}

export interface MegaAction {
  id: string;
  label: string;
  href: string;
  kind: "primary" | "outline";
  icon?: HeaderImageAsset;
}

export interface MegaMenuConfig {
  heading: string;
  headingAccent?: string;
  image?: HeaderImageAsset;
  arrowIcon?: HeaderImageAsset;
  links: HeaderLink[];
  actions: MegaAction[];
  bottomLinks: HeaderLink[];
}

export interface SlideMenuItem {
  id: string;
  label: string;
  href?: string;
  children?: HeaderLink[];
}

export interface SlideMenuConfig {
  items: SlideMenuItem[];
  footer: HeaderLink[];
  chevronIcon?: HeaderImageAsset;
  closeLabel: string;
}

export interface SearchConfig {
  enabled: boolean;
  placeholder: string;
  action: string; // "/search"
  param: string; // "q"  →  /search?q=term
  closeIcon?: HeaderImageAsset;
}

/** where a side-menu icon goes on phones / small tablets */
export type MobileDisplay = "header" | "float" | "hide";

export interface SideMenuItem {
  id: string;
  kind: "menu" | "search" | "link";
  label: string;
  href?: string;
  icon: HeaderImageAsset;
  mobile: MobileDisplay;
}

export type HeaderVariant = "home" | "inner";

export interface RouteRule {
  match: string;
  exact?: boolean;
  variant: HeaderVariant;
  className?: string; // e.g. "schol_header"
}

export interface HeaderConfig {
  version: number;
  updatedAt?: string; // ISO date – newest config wins when session cache and server differ
  stickyOffset: number; // px scrolled before the header turns white / compact
  defaultVariant: HeaderVariant;
  routes: RouteRule[];
  brand: {
    href: string;
    logo: { color: HeaderImageAsset; white: HeaderImageAsset };
    naac: { href: string; color: HeaderImageAsset; white: HeaderImageAsset };
  };
  nav: NavItem[];
  mega?: MegaMenuConfig;
  topBar?: { phone: { label: string; href: string; icon: HeaderImageAsset } };
  hamburgerIcon: HeaderImageAsset;
  slideMenu: SlideMenuConfig;
  search: SearchConfig;
  sideMenu: SideMenuItem[];
}

export type HeaderSource = "api" | "default";
