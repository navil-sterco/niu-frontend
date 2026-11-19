
import "server-only";

import type {
  LevelCardData,
  Program,
  ProgramLevel,
  School,
} from "@/types/program";

const API_URL =
  process.env.NIU_PROGRAMS_API_URL ?? "https://project-demo.in/niu-backoffice/api/list/programs";

interface ApiSchool {
  id?: number | string;
  title?: string;
  name?: string;
  slug?: string;
}

interface ApiCourseLevel {
  id?: number | string;
  title?: string;
  slug?: string;
  banner_image?: string | null;
  "banner-image"?: string | null;
}

interface ApiProgram {
  id?: number | string;
  title?: string;
  sub_title?: string | null;
  duration?: string | number | null;
  fees?: string | number | null;
  brochures?: string | null;
  slug?: string | null;
  program_level?: string | null;
  "course-level"?: ApiCourseLevel | string | null;
  details?: {
    modular?: {
      schools?: ApiSchool[] | null;
    } | null;
  } | null;
}

interface ApiPagination {
  data?: ApiProgram[];
  current_page?: number;
  last_page?: number;
  total?: number;
  next_page_url?: string | null;
}

interface ApiResponse {
  success?: boolean;
  data?: ApiPagination;
}

interface ProgramsApiResult {
  programs: Program[];
  schools: School[];
  levels: LevelCardData[];
  total: number;
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function inferLevel(item: ApiProgram): ProgramLevel {
  const courseLevel =
    typeof item["course-level"] === "object" &&
    item["course-level"] !== null
      ? item["course-level"].title ??
        item["course-level"].slug ??
        ""
      : item["course-level"] ?? "";

  const text = normalize(
    `${item.program_level ?? ""} ${courseLevel} ${item.title ?? ""} ${item.slug ?? ""}`,
  );

  if (
    /\b(phd|ph d|doctorate|doctoral|doctor of philosophy)\b/.test(text)
  ) {
    return "doctoral";
  }

  if (
    /\b(postgraduate|post graduate|masters|master|mba|mca|m tech|mtech|msc|m sc|ma|llm|llb)\b/.test(
      text,
    )
  ) {
    return "postgraduate";
  }

  return "undergraduate";
}

function mapCourseLevel(
  courseLevel: ApiCourseLevel,
): LevelCardData | null {
  const title = courseLevel.title?.trim();
  const slug = courseLevel.slug?.trim();

  if (!title || !slug) {
    return null;
  }

  const id = inferLevel({
    "course-level": courseLevel,
  });

  return {
    id,
    title,
    image:
      courseLevel.banner_image ??
      courseLevel["banner-image"] ??
      "",
    link: slug,
  };
}

function mapProgram(
  item: ApiProgram,
  schools: School[],
): Program {
  const apiSchool = item.details?.modular?.schools?.[0];
  const schoolName = apiSchool?.title ?? apiSchool?.name ?? "";

  const matchedSchool = schools.find(
    (school) => normalize(school.name) === normalize(schoolName),
  );

  const schoolId =
    matchedSchool?.id ??
    (apiSchool?.id != null ? String(apiSchool.id) : "other");

  const brochure =
    typeof item.brochures === "string" && item.brochures.trim()
      ? item.brochures
      : null;

  const fees =
    item.fees !== null && item.fees !== undefined
      ? String(item.fees)
      : null;

  const slug = item.slug ?? "";

  return {
    id: String(item.id ?? slug ?? item.title ?? ""),
    title: item.title ?? item.sub_title ?? "Untitled Program",
    schoolId,
    level: inferLevel(item),
    duration:
      item.duration !== null && item.duration !== undefined
        ? String(item.duration)
        : "",
    slug,
    eligibilityUrl: "",
    applyUrl: "",
    detailsUrl: slug ? `/program/${slug}` : "",
    fees,
    brochure,
  };
}

export async function fetchProgramsFromApi(): Promise<ProgramsApiResult> {
  const baseUrl = new URL(API_URL);

  const rawPrograms: ApiProgram[] = [];
  let nextUrl: string | null = baseUrl.toString();
  let pageCount = 0;
  let total = 0;

  while (nextUrl && pageCount < 10) {
    const currentUrl = new URL(nextUrl);

    if (currentUrl.origin !== baseUrl.origin) {
      throw new Error("Unexpected pagination URL origin.");
    }

    const response = await fetch(currentUrl.toString(), {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 300,
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new Error(
        `Programs API failed: ${response.status} ${response.statusText}`,
      );
    }

    const json = (await response.json()) as ApiResponse;

    if (!json.success || !json.data || !Array.isArray(json.data.data)) {
      throw new Error("Invalid programs API response.");
    }

    rawPrograms.push(...json.data.data);

    total = json.data.total ?? total;
    nextUrl = json.data.next_page_url ?? null;
    pageCount++;
  }

  const schoolsById = new Map<string, School>();

  for (const item of rawPrograms) {
    for (const school of item.details?.modular?.schools ?? []) {
      const name = school.title ?? school.name;

      if (!name) continue;

      const id = String(school.id ?? normalize(name));

      if (!schoolsById.has(id)) {
        schoolsById.set(id, { id, name });
      }
    }
  }

  const schools = Array.from(schoolsById.values());
  const programs = rawPrograms.map((item) =>
    mapProgram(item, schools),
  );

  // Extract unique course levels from the API response.
  const levelsMap = new Map<ProgramLevel, LevelCardData>();

  for (const item of rawPrograms) {
    const courseLevel = item["course-level"];

    if (!courseLevel || typeof courseLevel !== "object") {
      continue;
    }

    const level = mapCourseLevel(courseLevel);

    if (level && !levelsMap.has(level.id)) {
      levelsMap.set(level.id, level);
    }
  }

  return {
    programs,
    schools,
    levels: Array.from(levelsMap.values()),
    total: total || programs.length,
  };
}
