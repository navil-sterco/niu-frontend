import type {
  AboutData,
  AlumniData,
  BannerData,
  DepartmentPageData,
  FacilitiesData,
  FacultyData,
  FaqData,
  GalleryItem,
  HodData,
  IconLink,
  ImageAsset,
  LinkItem,
  ProgramsData,
  QuickLinksData,
  StatItem,
} from "@/types/department";

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => typeof v === "object" && v !== null && !Array.isArray(v);

const str = (v: unknown, fallback = ""): string =>
  typeof v === "string" ? v.trim() : typeof v === "number" ? String(v) : fallback;

const num = (v: unknown, fallback = 0): number => {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : fallback;
};

const list = <T>(v: unknown, map: (item: unknown, index: number) => T | null): T[] =>
  Array.isArray(v) ? v.map(map).filter((x): x is T => x !== null) : [];

const safeUrl = (v: unknown): string => {
  const s = str(v);
  return s.startsWith("/") || /^https?:\/\//i.test(s) ? s : "";
};

const safeHref = (v: unknown, fallback = "#"): string => {
  const s = str(v);
  return s.startsWith("/") || s.startsWith("#") || /^(https?:|mailto:|tel:)/i.test(s) ? s : fallback;
};

function image(v: unknown): ImageAsset | null {
  if (typeof v === "string") {
    const src = safeUrl(v);
    return src ? { src, alt: "", width: 1200, height: 800 } : null;
  }
  if (!isObj(v)) return null;
  const src = safeUrl(v.src);
  if (!src) return null;
  return {
    src,
    alt: str(v.alt),
    width: Math.max(1, num(v.width, 1200)),
    height: Math.max(1, num(v.height, 800)),
  };
}

const link = (v: unknown, fallback: LinkItem): LinkItem =>
  isObj(v) ? { label: str(v.label, fallback.label), href: safeHref(v.href, fallback.href) } : fallback;

const iconLinks = (v: unknown): IconLink[] =>
  list(v, (x, i) => {
    if (!isObj(x)) return null;
    const icon = image(x.icon);
    const href = safeHref(x.href, "");
    if (!icon || !href) return null;
    return { id: str(x.id, `icon-${i}`), label: str(x.label), href, icon };
  });

const stat = (v: unknown, i = 0): StatItem | null => {
  if (!isObj(v)) return null;
  return {
    id: str(v.id, `stat-${i}`),
    value: Math.max(0, num(v.value)),
    unit: str(v.unit) || undefined,
    sup: str(v.sup) || undefined,
    label: str(v.label),
    labelAccent: str(v.labelAccent) || undefined,
  };
};

function banner(v: unknown): BannerData | undefined {
  if (!isObj(v)) return undefined;
  const slides = list(v.slides, (s, i) => {
    if (!isObj(s)) return null;
    const desktop = image(s.desktopImage) ?? image(s.mobileImage);
    const mobile = image(s.mobileImage) ?? desktop;
    if (!desktop || !mobile) return null;
    return {
      id: str(s.id, `slide-${i}`),
      desktopImage: desktop,
      mobileImage: mobile,
      heading: str(s.heading),
      headingAccent: str(s.headingAccent) || undefined,
    };
  });
  if (!slides.length) return undefined;
  return {
    slides,
    autoplayMs: Math.max(2000, num(v.autoplayMs, 6000)),
    switcherLabel: str(v.switcherLabel, "Department of"),
  };
}

function about(v: unknown): AboutData | undefined {
  if (!isObj(v)) return undefined;
  const img = image(v.image);
  const paragraphs = list(v.paragraphs, (p) => str(p) || null);
  const keyAreas = list(v.keyAreas, (p) => str(p) || null);
  if (!str(v.quote) && !paragraphs.length && !keyAreas.length) return undefined;
  return {
    eyebrow: str(v.eyebrow, "ABOUT DEPARTMENT"),
    quote: str(v.quote),
    image: img ?? { src: "/images/placeholder.webp", alt: "", width: 1600, height: 800 },
    imageCaption: str(v.imageCaption),
    paragraphs,
    keyAreasTitle: str(v.keyAreasTitle, "Key Areas"),
    keyAreas,
  };
}

function hod(v: unknown): HodData | undefined {
  if (!isObj(v)) return undefined;
  const photo = image(v.photo);
  if (!photo || !str(v.name)) return undefined;
  return {
    photo,
    quoteIcon: image(v.quoteIcon) ?? { src: "/images/quote-yellow.webp", alt: "", width: 60, height: 48 },
    title: str(v.title, "HOD Message"),
    quote: str(v.quote),
    message: str(v.message),
    moreLink: link(v.moreLink, { label: "More", href: "#" }),
    closing: str(v.closing, "Best regards,"),
    name: str(v.name),
    designation: str(v.designation),
    socials: iconLinks(v.socials),
  };
}

function programs(v: unknown): ProgramsData | undefined {
  if (!isObj(v)) return undefined;
  const items = list(v.items, (p, i) => {
    if (!isObj(p) || !str(p.title)) return null;
    return {
      id: str(p.id, `program-${i}`),
      level: str(p.level),
      title: str(p.title),
      accent: str(p.accent) || undefined,
      href: safeHref(p.href),
    };
  });
  if (!items.length) return undefined;
  return {
    eyebrow: str(v.eyebrow, "OUR DEPARTMENTS"),
    title: str(v.title),
    arrowIcon: image(v.arrowIcon) ?? { src: "/images/left-errow.svg", alt: "", width: 22, height: 22 },
    items,
  };
}

function quickLinks(v: unknown): QuickLinksData | undefined {
  if (!isObj(v)) return undefined;
  const menu = list(v.menu, (m) => (isObj(m) && str(m.label) ? { label: str(m.label), href: safeHref(m.href) } : null));
  const contacts = iconLinks(v.contacts);
  if (!menu.length && !contacts.length) return undefined;
  return { menu, contacts, cta: link(v.cta, { label: "Apply Now", href: "/apply-now" }) };
}

function faculty(v: unknown): FacultyData | undefined {
  if (!isObj(v)) return undefined;
  const members = list(v.members, (m, i) => {
    if (!isObj(m) || !str(m.name)) return null;
    const imageAsset = image(m.image);
    if (!imageAsset) return null;
    return { id: str(m.id, `faculty-${i}`), name: str(m.name), designation: str(m.designation), image: imageAsset };
  });
  if (!members.length) return undefined;
  return {
    eyebrow: str(v.eyebrow, "Faculty"),
    title: str(v.title),
    description: str(v.description),
    cta: link(v.cta, { label: "Learn More", href: "#" }),
    members,
  };
}

function facilities(v: unknown): FacilitiesData | undefined {
  if (!isObj(v)) return undefined;
  const labs = list(v.labs, (l, i) => {
    if (!isObj(l) || !str(l.name)) return null;
    const imageAsset = image(l.image);
    return imageAsset ? { id: str(l.id, `lab-${i}`), name: str(l.name), image: imageAsset } : null;
  });
  const stats = list(v.stats, stat);
  if (!labs.length && !stats.length) return undefined;
  return {
    eyebrow: str(v.eyebrow),
    title: str(v.title),
    titleAccent: str(v.titleAccent),
    stats,
    labs,
    defaultLabId: str(v.defaultLabId) || undefined,
  };
}

function alumni(v: unknown): AlumniData | undefined {
  if (!isObj(v)) return undefined;
  const items = list(v.items, (a, i) => {
    if (!isObj(a) || !str(a.name)) return null;
    const photo = image(a.photo);
    if (!photo) return null;
    return {
      id: str(a.id, `alumni-${i}`),
      name: str(a.name),
      course: str(a.course),
      batch: str(a.batch),
      quote: str(a.quote),
      photo,
      thumb: image(a.thumb) ?? photo,
      videoUrl: safeUrl(a.videoUrl) || undefined,
    };
  });
  if (!items.length) return undefined;
  return {
    eyebrow: str(v.eyebrow, "ALUMNI"),
    title: str(v.title),
    titleAccent: str(v.titleAccent),
    description: str(v.description),
    cta: link(v.cta, { label: "Learn More", href: "#" }),
    stat: stat(v.stat) ?? { id: "alumni", value: 0, label: "" },
    quoteIcon: image(v.quoteIcon) ?? { src: "/images/quote-green.svg", alt: "", width: 40, height: 32 },
    videoIcon: image(v.videoIcon) ?? { src: "/images/video-round-icon.svg", alt: "", width: 56, height: 56 },
    items,
  };
}

function gallery(v: unknown): GalleryItem[] | undefined {
  const items = list(v, (g, i) => {
    if (!isObj(g)) return null;
    const imageAsset = image(g.image);
    return imageAsset ? { id: str(g.id, `gallery-${i}`), image: imageAsset, fullSrc: safeUrl(g.fullSrc) || undefined } : null;
  });
  return items.length ? items : undefined;
}

function faq(v: unknown): FaqData | undefined {
  if (!isObj(v)) return undefined;
  const items = list(v.items, (q, i) =>
    isObj(q) && str(q.question) && str(q.answer)
      ? { id: str(q.id, `faq-${i}`), question: str(q.question), answer: str(q.answer) }
      : null
  );
  return items.length ? { title: str(v.title, "Frequently Asked Questions"), items } : undefined;
}

export function normalizeDepartment(raw: unknown, slugFallback: string): DepartmentPageData | null {
  const root = isObj(raw) && isObj(raw.data) ? raw.data : raw;
  if (!isObj(root)) return null;
  const name = str(root.name);
  if (!name) return null;
  const seo = isObj(root.seo) ? root.seo : {};

  return {
    slug: str(root.slug, slugFallback) || slugFallback,
    name,
    seo: { title: str(seo.title, `Department of ${name}`), description: str(seo.description) },
    banner: banner(root.banner),
    about: about(root.about),
    hod: hod(root.hod),
    programs: programs(root.programs),
    quickLinks: quickLinks(root.quickLinks),
    faculty: faculty(root.faculty),
    facilities: facilities(root.facilities),
    alumni: alumni(root.alumni),
    gallery: gallery(root.gallery),
    faq: faq(root.faq),
  };
}

export function normalizeOptions(raw: unknown): { slug: string; name: string }[] {
  const root = isObj(raw) && Array.isArray(raw.data) ? raw.data : raw;
  return list(root, (o) => (isObj(o) && str(o.slug) && str(o.name) ? { slug: str(o.slug), name: str(o.name) } : null));
}
