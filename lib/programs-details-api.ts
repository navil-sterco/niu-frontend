import "server-only";

const API_URL =
  "https://project-demo.in/niu-backoffice/api/list/programs";

export interface ProgramApiItem {
  id: number;
  title: string;
  sub_title?: string | null;
  slug: string;
  duration?: string | null;
  fees?: string | null;
  brochures?: string | null;

  "course-level"?: {
    id: number;
    title: string;
    banner_image?: string;
    slug: string;
  } | null;

  details?: {
    detail?: Record<string, unknown>;
    cms?: unknown[];
    modular?: {
      schools?: Array<{
        id: number;
        title: string;
        slug: string;
      }>;
      departments?: Array<{
        id: number;
        title: string;
        slug: string;
      }>;
    } | [];
  } | null;
}

interface ProgramsApiResponse {
  success: boolean;
  data: {
    current_page: number;
    data: ProgramApiItem[];
    last_page: number;
    per_page: number;
    total: number;
  };
}

export async function getAllPrograms(): Promise<ProgramApiItem[]> {
  const firstResponse = await fetch(`${API_URL}?page=1`, {
    next: { revalidate: 300 },
    
  });

  if (!firstResponse.ok) {
    throw new Error("Failed to fetch programs");
  }

  const firstPage: ProgramsApiResponse = await firstResponse.json();

  if (!firstPage.success) {
    throw new Error("Programs API returned an unsuccessful response");
  }

  const lastPage = firstPage.data.last_page;

  const remainingPages = await Promise.all(
    Array.from({ length: Math.max(0, lastPage - 1) }, async (_, index) => {
      const page = index + 2;

      const response = await fetch(`${API_URL}?page=${page}`, {
        next: { revalidate: 300 },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch programs page ${page}`);
      }

      const result: ProgramsApiResponse = await response.json();

      if (!result.success) {
        throw new Error(`Programs API page ${page} was unsuccessful`);
      }

      return result.data.data;
    })
  );

  return [...firstPage.data.data, ...remainingPages.flat()];
}

export async function getProgramBySlug(
  slug: string
): Promise<ProgramApiItem | null> {
  const programs = await getAllPrograms();

  return programs.find((program) => program.slug === slug) ?? null;
}