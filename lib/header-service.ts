import { DEFAULT_HEADER } from "@/data/header";
import type {
  HeaderConfig,
  HeaderImageAsset,
  HeaderLink,
  HeaderVariant,
  MegaAction,
  MegaMenuConfig,
  MobileDisplay,
  NavItem,
  RouteRule,
  SideMenuItem,
  SlideMenuConfig,
  SlideMenuItem,
} from "@/types/header";



const D = DEFAULT_HEADER;

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => typeof v === "object" && v !== null && !Array.isArray(v);
const str = (v: unknown, fb = ""): string => (typeof v === "string" ? v.trim() : typeof v === "number" ? String(v) : fb);
const num = (v: unknown, fb: number): number => {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : fb;
};
const list = <T>(v: unknown, map: (x: unknown, i: number) => T | null): T[] =>
  Array.isArray(v) ? v.map(map).filter((x): x is T => x !== null) : [];

export const safeHref = (v: unknown, fb = "#"): string => {
  const s = str(v);
  if (!s) return fb;
  return s.startsWith("/") || s.startsWith("#") || /^(https?:|mailto:|tel:)/i.test(s) ? s : fb;
};

const safeSrc = (v: unknown): string => {
  const s = str(v);
  return s.startsWith("/") || /^https?:\/\//i.test(s) ? s.replace(/([^:]\/)\/+/g, "$1") : "";
};

function image(v: unknown, fb?: HeaderImageAsset): HeaderImageAsset | undefined {
  if (typeof v === "string") {
    const src = safeSrc(v);
    return src ? { src, alt: fb?.alt ?? "", width: fb?.width ?? 100, height: fb?.height ?? 100 } : fb;
  }
  if (!isObj(v)) return fb;
  const src = safeSrc(v.src);
  if (!src) return fb;
  return {
    src,
    alt: str(v.alt, fb?.alt ?? ""),
    width: Math.max(1, num(v.width, fb?.width ?? 100)),
    height: Math.max(1, num(v.height, fb?.height ?? 100)),
  };
}

const imageOr = (v: unknown, fb: HeaderImageAsset): HeaderImageAsset => image(v, fb) ?? fb;

const link = (v: unknown, i: number): HeaderLink | null => {
  if (!isObj(v) || !str(v.label)) return null;
  return {
    id: str(v.id, `link-${i}`),
    label: str(v.label),
    accent: str(v.accent) || undefined,
    href: safeHref(v.href),
  };
};

const variantOf = (v: unknown, fb: HeaderVariant): HeaderVariant => (v === "home" || v === "inner" ? v : fb);
const mobileOf = (v: unknown, fb: MobileDisplay): MobileDisplay => (v === "header" || v === "float" || v === "hide" ? v : fb);

function brand(v: unknown): HeaderConfig["brand"] {
  if (!isObj(v)) return D.brand;
  const logo = isObj(v.logo) ? v.logo : {};
  const naac = isObj(v.naac) ? v.naac : {};
  return {
    href: safeHref(v.href, D.brand.href),
    logo: {
      color: imageOr(logo.color, D.brand.logo.color),
      white: imageOr(logo.white, D.brand.logo.white),
    },
    naac: {
      href: safeHref(naac.href, D.brand.naac.href),
      color: imageOr(naac.color, D.brand.naac.color),
      white: imageOr(naac.white, D.brand.naac.white),
    },
  };
}

function nav(v: unknown): NavItem[] {
  const items = list<NavItem>(v, (x, i) =>
    isObj(x) && str(x.label)
      ? {
          id: str(x.id, `nav-${i}`),
          label: str(x.label),
          href: safeHref(x.href),
          dropdownIcon: x.dropdownIcon === true,
          mega: x.mega === true,
        }
      : null
  );
  return items.length ? items : D.nav;
}

function mega(v: unknown): MegaMenuConfig | undefined {
  if (v === null) return undefined; 
  if (!isObj(v)) return D.mega;
  const links = list(v.links, link);
  if (!links.length) return D.mega;
  const actions = list<MegaAction>(v.actions, (x, i) =>
    isObj(x) && str(x.label)
      ? {
          id: str(x.id, `action-${i}`),
          label: str(x.label),
          href: safeHref(x.href),
          kind: x.kind === "outline" ? "outline" : "primary",
          icon: image(x.icon),
        }
      : null
  );
  return {
    heading: str(v.heading, D.mega?.heading ?? ""),
    headingAccent: str(v.headingAccent) || undefined,
    image: image(v.image, D.mega?.image),
    arrowIcon: image(v.arrowIcon, D.mega?.arrowIcon),
    links,
    actions,
    bottomLinks: list(v.bottomLinks, link),
  };
}

function slideMenu(v: unknown): SlideMenuConfig {
  if (!isObj(v)) return D.slideMenu;
  const items = list<SlideMenuItem>(v.items, (x, i) => {
    if (!isObj(x) || !str(x.label)) return null;
    const children = list(x.children, link);
    return {
      id: str(x.id, `menu-${i}`),
      label: str(x.label),
      href: x.href ? safeHref(x.href) : undefined,
      children: children.length ? children : undefined,
    };
  });
  return {
    closeLabel: str(v.closeLabel, D.slideMenu.closeLabel),
    chevronIcon: image(v.chevronIcon, D.slideMenu.chevronIcon),
    items: items.length ? items : D.slideMenu.items,
    footer: Array.isArray(v.footer) ? list(v.footer, link) : D.slideMenu.footer,
  };
}

function search(v: unknown): HeaderConfig["search"] {
  if (!isObj(v)) return D.search;
  return {
    enabled: v.enabled !== false,
    placeholder: str(v.placeholder, D.search.placeholder),
    action: safeHref(v.action, D.search.action),
    param: str(v.param, D.search.param).replace(/[^a-z0-9_-]/gi, "") || D.search.param,
    closeIcon: image(v.closeIcon, D.search.closeIcon),
  };
}

function sideMenu(v: unknown): SideMenuItem[] {
  if (!Array.isArray(v)) return D.sideMenu;
  return list<SideMenuItem>(v, (x, i) => {
    if (!isObj(x)) return null;
    const kind = x.kind === "menu" || x.kind === "search" || x.kind === "link" ? x.kind : null;
    const icon = image(x.icon);
    if (!kind || !icon) return null;
    return {
      id: str(x.id, `side-${i}`),
      kind,
      label: str(x.label, "Menu"),
      href: x.href ? safeHref(x.href) : undefined,
      icon,
      mobile: mobileOf(x.mobile, "header"),
    };
  });
}

function routes(v: unknown): RouteRule[] {
  if (!Array.isArray(v)) return D.routes;
  return list<RouteRule>(v, (x) =>
    isObj(x) && str(x.match).startsWith("/")
      ? {
          match: str(x.match),
          exact: x.exact === true,
          variant: variantOf(x.variant, "inner"),
          className: str(x.className).replace(/[^a-z0-9_ -]/gi, "") || undefined,
        }
      : null
  );
}

export function normalizeHeaderConfig(raw: unknown): HeaderConfig {
  const root = isObj(raw) && isObj(raw.config) ? raw.config : isObj(raw) && isObj(raw.data) ? raw.data : raw;
  if (!isObj(root)) return D;

  const topPhone = isObj(root.topBar) && isObj(root.topBar.phone) ? root.topBar.phone : null;
  const topBar =
    root.topBar === null
      ? undefined
      : topPhone && str(topPhone.label)
        ? {
            phone: {
              label: str(topPhone.label),
              href: safeHref(topPhone.href, `tel:${str(topPhone.label).replace(/[^\d+]/g, "")}`),
              icon: imageOr(topPhone.icon, D.topBar!.phone.icon),
            },
          }
        : D.topBar;

  return {
    version: num(root.version, D.version),
    updatedAt: str(root.updatedAt) || undefined,
    stickyOffset: Math.min(Math.max(num(root.stickyOffset, D.stickyOffset), 0), 600),
    defaultVariant: variantOf(root.defaultVariant, D.defaultVariant),
    routes: routes(root.routes),
    brand: brand(root.brand),
    nav: nav(root.nav),
    mega: mega(root.mega === undefined ? D.mega : root.mega),
    topBar,
    hamburgerIcon: imageOr(root.hamburgerIcon, D.hamburgerIcon),
    slideMenu: slideMenu(root.slideMenu),
    search: search(root.search),
    sideMenu: sideMenu(root.sideMenu),
  };
}

export function resolveVariant(pathname: string, config: HeaderConfig): { variant: HeaderVariant; className?: string } {
  for (const rule of config.routes) {
    const base = rule.match.replace(/\/+$/, "") || "/";
    const hit = rule.exact ? pathname === rule.match : pathname === base || pathname.startsWith(`${base}/`);
    if (hit) return { variant: rule.variant, className: rule.className };
  }
  return { variant: config.defaultVariant };
}

export interface FetchHeaderOptions {
  signal?: AbortSignal;
  headers?: Record<string, string>;
  timeoutMs?: number;
}

export async function fetchHeaderConfig(url: string, { signal, headers, timeoutMs = 8000 }: FetchHeaderOptions = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const onAbort = () => controller.abort();
  signal?.addEventListener("abort", onAbort);

  try {
    const res = await fetch(url, { signal: controller.signal, headers: { Accept: "application/json", ...headers } });
    if (!res.ok) throw new Error(`Header API returned HTTP ${res.status}`);
    return normalizeHeaderConfig(await res.json());
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener("abort", onAbort);
  }
}