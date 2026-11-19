
import { cacheLife, cacheTag } from "next/cache";

import { mediaTypeOptions } from "@/data/happenings-shared";
import { loadAllHappenings } from "@/lib/happenings-source";
import { deriveOptions } from "@/lib/happenings-options";

import type {
  FilterField,
  FilterValues,
  HappeningItem,
  HeroSlide,
  PageResult,
  TabData,
  TabSlug,
} from "@/types/happenings";

export const PAGE_SIZE = 7;

const TOP_COUNT = 3;
const HERO_COUNT = 5;

type ListTab = "news" | "events";

const isListTab = (tab: string): tab is ListTab =>
  tab === "news" || tab === "events";

const byDateDesc = (
  a: HappeningItem,
  b: HappeningItem,
) =>
  a.date < b.date ? 1 : a.date > b.date ? -1 : 0;

type RawParams = Record<
  string,
  string | string[] | undefined
>;

export function parseFilters(
  raw: RawParams,
  fields: FilterField[],
): FilterValues {
  const out: FilterValues = {};

  for (const field of fields) {
    const value = Array.isArray(raw[field.key])
      ? raw[field.key]?.[0]
      : raw[field.key];

    if (
      typeof value === "string" &&
      field.options.some((option) => option.value === value)
    ) {
      out[field.key] = value;
    }
  }

  return out;
}

export async function getFilterFields(
  tab: TabSlug,
): Promise<FilterField[]> {
  "use cache";

  cacheLife({
    stale: 60,
    revalidate: 300,
    expire: 3600,
  });

  cacheTag("happenings", `happenings:${tab}`);

  const { items } = await loadAllHappenings();

  const {
    schools,
    departments,
    types,
    months,
    years,
  } = deriveOptions(
    isListTab(tab)
      ? items.filter((item) => item.tab === tab)
      : items,
  );

  const school: FilterField = {
    key: "school",
    kind: "select",
    label: "Select School",
    options: schools,
  };

  const department: FilterField = {
    key: "department",
    kind: "select",
    label: "Select Department",
    options: departments,
    dependsOn: "school",
  };

  const month: FilterField = {
    key: "month",
    kind: "select",
    label: "Select Month",
    options: months,
  };

  const eventType: FilterField = {
    key: "type",
    kind: "select",
    label: "Select Event type",
    options: types,
  };

  const fields: Record<TabSlug, FilterField[]> = {
    news: [
      school,
      department,
      month,
    ],

    events: [
      school,
      department,
      month,
      eventType,
    ],

    gallery: [
      {
        key: "media",
        kind: "toggle",
        label: "Type",
        options: mediaTypeOptions,
      },
      school,
      {
        key: "year",
        kind: "select",
        label: "Select Year",
        options: years,
      },
    ],

    "media-coverage": [],
  };

  return fields[tab];
}

async function queryTab(
  tab: ListTab,
  filters: FilterValues,
): Promise<HappeningItem[]> {
  const { items } = await loadAllHappenings();

  return items
    .filter((item) => item.tab === tab)
    .filter(
      (item) =>
        !filters.school ||
        item.schools.some(
          (school) => school.slug === filters.school,
        ),
    )
    .filter(
      (item) =>
        !filters.department ||
        item.departments.some(
          (department) =>
            department.slug === filters.department,
        ),
    )
    .filter(
      (item) =>
        !filters.month ||
        item.date.startsWith(filters.month),
    )
    .filter(
      (item) =>
        !filters.year ||
        item.date.startsWith(`${filters.year}-`),
    )
    .filter(
      (item) =>
        !filters.type ||
        item.eventType?.slug === filters.type,
    )
    .sort(byDateDesc);
}

const splitTop = (items: HappeningItem[]) => ({
  top: items.slice(0, TOP_COUNT),
  rest: items.slice(TOP_COUNT),
});

function buildHero(
  items: HappeningItem[],
  tab: ListTab,
): HeroSlide[] {
  return items
    .filter(
      (item) =>
        item.tab === tab &&
        item.featured &&
        item.image,
    )
    .sort(byDateDesc)
    .slice(0, HERO_COUNT)
    .map((item) => {
      const desktop = item.image!;
      const mobile = item.detailImage ?? desktop;

      return {
        id: `hero-${item.id}`,
        desktopImage: {
          ...desktop,
          width: 1920,
          height: 800,
        },
        mobileImage: {
          ...mobile,
          width: 768,
          height: 960,
        },
        date: item.date,
        tag: tab === "news" ? "News" : "Event",
        heading: item.title,
        href: item.href,
        ctaLabel: "Know More",
      };
    });
}

export async function getHappeningsTab(
  tab: TabSlug,
  filters: FilterValues,
): Promise<TabData> {
  "use cache";

  cacheLife({
    stale: 60,
    revalidate: 300,
    expire: 3600,
  });

  cacheTag("happenings", `happenings:${tab}`);

  if (!isListTab(tab)) {
    return {
      hero: [],
      top: [],
      list: [],
      total: 0,
      pageSize: PAGE_SIZE,
    };
  }

  const { items } = await loadAllHappenings();

  const { top, rest } = splitTop(
    await queryTab(tab, filters),
  );

  return {
    hero: buildHero(items, tab),
    top,
    list: rest.slice(0, PAGE_SIZE),
    total: rest.length,
    pageSize: PAGE_SIZE,
  };
}

export async function getHappeningsPage(
  tab: TabSlug,
  filters: FilterValues,
  page: number,
): Promise<PageResult> {
  "use cache";

  cacheLife({
    stale: 60,
    revalidate: 300,
    expire: 3600,
  });

  cacheTag("happenings", `happenings:${tab}`);

  if (!isListTab(tab)) {
    return {
      items: [],
      total: 0,
      page,
      pageSize: PAGE_SIZE,
      hasMore: false,
    };
  }

  const { rest } = splitTop(
    await queryTab(tab, filters),
  );

  const start = (page - 1) * PAGE_SIZE;

  return {
    items: rest.slice(start, start + PAGE_SIZE),
    total: rest.length,
    page,
    pageSize: PAGE_SIZE,
    hasMore: start + PAGE_SIZE < rest.length,
  };
}
