import type {
  FilterOption,
  HappeningItem,
  ImageAsset,
  TabConfig,
  TaxonomyRef,
} from "@/types/happenings";
import {
  departmentOptions,
  eventTypeOptions,
  schoolOptions,
} from "./happenings-shared";

const img = (
  src: string,
  alt: string,
  width: number,
  height: number,
): ImageAsset => ({
  src: `/images/${src}`,
  alt,
  width,
  height,
});

export const happeningsHeading = {
  title: "Happenings",
  subtitle: "Celebrating Achievements, Events, and everyday moments at NIU",
  basePath: "", 
};

export const happeningsTabs: TabConfig[] = [
  {
    slug: "news",
    label: "News",
    status: "ready",
    topTitle: "Top Stories",
    listTitle: "In the News",
    linkItems: true,
  },
  {
    slug: "events",
    label: "Events",
    status: "ready",
    topTitle: "Upcoming Events",
    listTitle: "More Events",
    linkItems: false,
    filterClass: "events_banner",
  },
  { slug: "gallery", label: "Gallery", status: "soon" },
  { slug: "media-coverage", label: "Media Coverage", status: "soon" },
];

export const getTabConfig = (slug: string) =>
  happeningsTabs.find((t) => t.slug === slug);

type Opts = { featured?: boolean; noImage?: boolean; type?: string };
type Row = [
  title: string,
  date: string,
  schoolId: string,
  departmentId: string,
  opts?: Opts,
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ref = (options: FilterOption[], value: string): TaxonomyRef => ({
  slug: value,
  title: options.find((o) => o.value === value)?.label ?? value,
});

const build = (tab: "news" | "events", rows: Row[]): HappeningItem[] =>
  rows.map(([title, date, schoolId, departmentId, o], i) => ({
    id: `${tab}-${i + 1}`,
    tab,
    title,
    date,
    schools: [ref(schoolOptions, schoolId)],
    departments: [ref(departmentOptions, departmentId)],
    eventType: o?.type ? ref(eventTypeOptions, o.type) : undefined,
    featured: o?.featured,
    image: o?.noImage
      ? undefined
      : o?.featured
        ? img("top_stories_img.webp", title, 800, 520)
        : img(i % 2 ? "news_sec2.webp" : "news_sec1.webp", title, 800, 560),
    href: `/${tab}/${slugify(title)}-${i + 1}`,
  }));

const newsRows: Row[] = [
  [
    "The International Championship Of Collegiate A Cappella----------",
    "2026-01-01",
    "cs",
    "cse",
    { featured: true },
  ],
  [
    "NIU Students Showcase Innovation at Annual Tech Fest",
    "2026-01-05",
    "eng",
    "ece",
    { featured: true },
  ],
  [
    "Celebrating Excellence Through NIU Annual Cultural Fest",
    "2026-01-12",
    "mgmt",
    "bba",
    { featured: true },
  ],
  [
    "Celebrating Excellence Through NIU Annual Cultural Fest",
    "2026-01-20",
    "mgmt",
    "fin",
  ],
  ["NIU graduates honoured Arts Awards", "2026-02-02", "sci", "phy"],
  ["NIU graduates honoured Arts Awards", "2026-02-09", "sci", "chem"],
  [
    "NIU Organises Workshop on Emerging Technology Trends",
    "2026-02-14",
    "cs",
    "aiml",
  ],
  [
    "Students Explore Careers Through Industry Interaction Session",
    "2026-02-21",
    "mgmt",
    "bba",
    { noImage: true },
  ],
  [
    "Students Explore Careers Through Industry Interaction Session",
    "2026-02-21",
    "mgmt",
    "bba",
    { noImage: true },
  ],
  [
    "NIU Hosts Expert Talks on Emerging Industry Trends",
    "2026-03-03",
    "cs",
    "cyber",
  ],
  [
    "NIU Hosts Inter-University Sports Championship and Meet",
    "2026-03-10",
    "eng",
    "me",
  ],
  [
    "Research Paper from NIU Faculty Published in Leading Journal",
    "2026-03-18",
    "sci",
    "math",
  ],
  [
    "Research Paper from NIU Faculty Published in Leading Journal",
    "2026-03-18",
    "sci",
    "math",
  ],[
    "Research Paper from NIU Faculty Published in Leading Journal",
    "2026-03-18",
    "sci",
    "math",
  ],[
    "Research Paper from NIU Faculty Published in Leading Journal",
    "2026-03-18",
    "sci",
    "math",
  ],[
    "Research Paper from NIU Faculty Published in Leading Journal",
    "2026-03-18",
    "sci",
    "math",
  ],[
    "Research Paper from NIU Faculty Published in Leading Journal",
    "2026-03-18",
    "sci",
    "math",
  ],
  ["NIU Signs MoU with Global Technology Partner", "2026-03-25", "cs", "cse"],
  [
    "Civil Engineering Students Win National Design Challenge",
    "2026-04-02",
    "eng",
    "ce",
  ],
  [
    "Alumni Meet Brings Together Graduates from Over 20 Batches",
    "2026-04-11",
    "mgmt",
    "fin",
  ],
  [
    "NIU Launches New Centre for Artificial Intelligence",
    "2026-04-19",
    "cs",
    "aiml",
    { noImage: true },
  ],
  [
    "Chemistry Department Hosts Green Energy Seminar",
    "2026-05-04",
    "sci",
    "chem",
  ],
  [
    "Mechanical Engineering Team Unveils Electric Vehicle Prototype",
    "2026-05-12",
    "eng",
    "me",
  ],
  [
    "Placement Season Records Highest Offers in NIU History",
    "2026-05-20",
    "mgmt",
    "bba",
  ],
  [
    "Cyber Security Club Wins Capture-the-Flag Contest",
    "2026-06-06",
    "cs",
    "cyber",
  ],
  [
    "Physics Department Celebrates National Science Day",
    "2026-06-15",
    "sci",
    "phy",
  ],
  [
    "Electronics Students Present Smart Campus Project",
    "2026-06-24",
    "eng",
    "ece",
  ],
  [
    "Mathematics Olympiad Draws Participants from Across the Region",
    "2026-07-08",
    "sci",
    "math",
  ],
];

const eventRows: Row[] = [
  [
    "The International Championship Of Collegiate A Cappella",
    "2026-11-12",
    "cs",
    "cse",
    { featured: true, type: "cultural" },
  ],
  [
    "NIU Students Showcase Innovation at Annual Tech Fest",
    "2026-11-18",
    "eng",
    "ece",
    { featured: true, type: "conference" },
  ],
  [
    "Celebrating Excellence Through NIU Annual Cultural Fest",
    "2026-11-25",
    "mgmt",
    "bba",
    { featured: true, type: "cultural" },
  ],
  [
    "Celebrating Excellence Through NIU Annual Cultural Fest",
    "2026-12-02",
    "mgmt",
    "fin",
    { type: "cultural" },
  ],
  [
    "NIU graduates honoured Arts Awards",
    "2026-12-05",
    "sci",
    "phy",
    { type: "seminar" },
  ],
  [
    "NIU graduates honoured Arts Awards",
    "2026-12-09",
    "sci",
    "chem",
    { type: "seminar" },
  ],
  [
    "NIU Organises Workshop on Emerging Technology Trends",
    "2026-12-12",
    "cs",
    "aiml",
    { type: "workshop" },
  ],
  [
    "Students Explore Careers Through Industry Interaction Session",
    "2026-12-15",
    "mgmt",
    "bba",
    { type: "seminar", noImage: true },
  ],
  [
    "NIU Hosts Expert Talks on Emerging Industry Trends",
    "2026-12-18",
    "cs",
    "cyber",
    { type: "seminar" },
  ],
  [
    "NIU Hosts Inter-University Sports Championship and Meet",
    "2027-01-05",
    "eng",
    "me",
    { type: "sports" },
  ],
  [
    "Hands-on Robotics Workshop for First-Year Students",
    "2027-01-10",
    "eng",
    "me",
    { type: "workshop" },
  ],
  [
    "National Conference on Sustainable Engineering",
    "2027-01-16",
    "eng",
    "ce",
    { type: "conference" },
  ],
  [
    "Data Science Bootcamp with Industry Mentors",
    "2027-01-22",
    "cs",
    "aiml",
    { type: "workshop" },
  ],
  [
    "Inter-School Cricket Tournament",
    "2027-02-03",
    "mgmt",
    "fin",
    { type: "sports" },
  ],
  [
    "Annual Convocation Rehearsal and Orientation",
    "2027-02-10",
    "sci",
    "math",
    { type: "seminar", noImage: true },
  ],
  [
    "Women in Technology Summit",
    "2027-02-18",
    "cs",
    "cse",
    { type: "conference" },
  ],
  [
    "Chemistry Lab Open House",
    "2027-02-26",
    "sci",
    "chem",
    { type: "workshop" },
  ],
  [
    "Entrepreneurship Pitch Day",
    "2027-03-04",
    "mgmt",
    "bba",
    { type: "conference" },
  ],
];

export const allItems: HappeningItem[] = [
  ...build("news", newsRows),
  ...build("events", eventRows),
];
