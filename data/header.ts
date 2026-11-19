import type { HeaderConfig, HeaderImageAsset } from "@/types/header";

const img = (
  src: string,
  alt: string,
  width: number,
  height: number,
): HeaderImageAsset => ({
  src: `/images/${src}`,
  alt,
  width,
  height,
});

export const DEFAULT_HEADER: HeaderConfig = {
  version: 1,
  updatedAt: "2026-11-05T00:00:00.000Z",
  stickyOffset: 60,
  defaultVariant: "inner",

  routes: [
    { match: "/", exact: true, variant: "home" },
    { match: "/departments", variant: "inner", className: "schol_header" },
  ],

  brand: {
    href: "/",
    logo: {
      color: img("niu-logo.webp", "Noida International University", 345, 80),
      white: img(
        "niu-white-logo.webp",
        "Noida International University",
        345,
        80,
      ),
    },
    naac: {
      href: "#0",
      color: img("header-naac-logo.webp", "NAAC Grade A+ Accredited", 100, 44),
      white: img("naac-logo-white.webp", "NAAC Grade A+ Accredited", 100, 44),
    },
  },

  nav: [
    { id: "academics", label: "Academics", href: "#0", dropdownIcon: true },
    { id: "program", label: "Program", href: "/program", dropdownIcon: true },
    { id: "research", label: "Research", href: "#0", dropdownIcon: true },
    { id: "campus-life", label: "Campus Life", href: "#0", dropdownIcon: true },
    { id: "placements", label: "Placements", href: "#0", dropdownIcon: true },
    { id: "admission", label: "Admission", href: "#0", mega: true },
  ],

  mega: {
    heading: "Begin Your",
    headingAccent: "Journey at NIU",
    image: img("adm-menubg.webp", "", 1374, 520),
    arrowIcon: img("left-errow.svg", "", 8, 14),
    links: [
      { id: "overview", label: "Overview", href: "#0" },
      { id: "hostel", label: "Hostel Fee and Policies", href: "#0" },
      {
        id: "scholarship",
        label: "Scholarship &",
        accent: "Financial Assistance",
        href: "#0",
      },
      {
        id: "transport",
        label: "Transport Fee and",
        accent: "Policies",
        href: "#0",
      },
      {
        id: "fees",
        label: "Course, Eligibility &",
        accent: "Fee Structure",
        href: "#0",
      },
      {
        id: "documents",
        label: "Admission Document",
        accent: "& Undertaking",
        href: "#0",
      },
      { id: "international", label: "International Admission", href: "#0" },
      { id: "faq", label: "FAQ", href: "#0" },
    ],
    actions: [
      { id: "apply", label: "Apply For 2027", href: "#0", kind: "primary" },
      {
        id: "brochure",
        label: "Download Brochure",
        href: "#0",
        kind: "outline",
        icon: img("pdf-icon.webp", "", 18, 18),
      },
    ],
    bottomLinks: [
      { id: "process", label: "Admission Process", href: "#" },
      { id: "cuet", label: "Apply for CUET counselling", href: "#" },
      { id: "reporting", label: "Student Reporting", href: "#" },
      { id: "guidelines", label: "Guidelines & Policies", href: "#" },
    ],
  },

  topBar: {
    phone: {
      label: "1800-102-1900",
      href: "tel:1800-102-1900",
      icon: img("header-call.svg", "", 18, 18),
    },
  },

  hamburgerIcon: img("hemburgure-icon.svg", "Open menu", 26, 20),

  slideMenu: {
    closeLabel: "Close menu",
    chevronIcon: img("right-chevron.svg", "", 8, 14),
    items: [
      {
        id: "happenings",
        label: "Happenings",
        children: [
          { id: "news-events", label: "News & Events", href: "/news" },
          { id: "gallery", label: "Gallery", href: "/gallery" },
        ],
      },
      { id: "customers", label: "Customers", href: "#0" },
      { id: "contact", label: "Contact", href: "/contact-us" },
    ],
    footer: [
      { id: "terms", label: "Terms & Conditions", href: "#0" },
      { id: "privacy", label: "Privacy Policy", href: "#0" },
      { id: "faq", label: "FAQ", href: "#0" },
    ],
  },

  search: {
    enabled: true,
    placeholder: "Search...",
    action: "/search",
    param: "q",
    closeIcon: img("close-icon.webp", "Close search", 16, 16),
  },

  sideMenu: [
    {
      id: "menu",
      kind: "menu",
      label: "Open menu",
      icon: img("hemburgure-icon.svg", "", 26, 20),
      mobile: "header",
    },
    {
      id: "search",
      kind: "search",
      label: "Search",
      icon: img("search-icon.svg", "", 28, 29),
      mobile: "header",
    },
    {
      id: "info",
      kind: "link",
      label: "Information",
      href: "#0",
      icon: img("info-icon.svg", "", 28, 28),
      mobile: "hide",
    },
    {
      id: "whatsapp",
      kind: "link",
      label: "Chat on WhatsApp",
      href: "https://wa.me/911800102190",
      icon: img("whatsup-icon.svg", "", 32, 32),
      mobile: "float",
    },
  ],
};
