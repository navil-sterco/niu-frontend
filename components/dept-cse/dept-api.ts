
import { cache } from "react";

import { departmentOptions, departments } from "@/data/department";
import { normalizeDepartment, normalizeOptions } from "@/lib/normalize";

import type {
  DepartmentOption,
  DepartmentPageData,
} from "@/types/department";

const API_BASE = process.env.API_BASE_URL?.replace(/\/+$/, "");

const TIMEOUT_MS = 8000;
const REVALIDATE_SECONDS = 300;

type FetchResult =
  | {
      ok: true;
      json: unknown;
    }
  | {
      ok: false;
      status: number;
    };



function cleanSlug(slug?: string | null): string {
  if (typeof slug !== "string") {
    return "";
  }

  return slug
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "");
}



async function fetchJson(
  path: string,
  tags: string[] = []
): Promise<FetchResult> {
  if (!API_BASE) {
    console.warn("[API] API_BASE_URL is not configured");

    return {
      ok: false,
      status: 0,
    };
  }

  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, TIMEOUT_MS);

  try {
    const response = await fetch(`${API_BASE}${path}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal: controller.signal,
      next: {
        revalidate: REVALIDATE_SECONDS,
        tags,
      },
    });

    if (!response.ok) {
      console.error(
        `[API] Request failed: ${path}`,
        response.status
      );

      return {
        ok: false,
        status: response.status,
      };
    }

    const json: unknown = await response.json();

    return {
      ok: true,
      json,
    };
  } catch (error) {
    console.error(
      `[API] ${path} failed:`,
      error instanceof Error
        ? error.message
        : error
    );

    return {
      ok: false,
      status: 0,
    };
  } finally {
    clearTimeout(timer);
  }
}


export const getDepartmentOptions = cache(
  async (): Promise<DepartmentOption[]> => {
    const response = await fetchJson(
      "/departments",
      ["departments"]
    );

    if (response.ok) {
      const options = normalizeOptions(response.json);

      if (options.length > 0) {
        return options.filter(
          (item) =>
            typeof item.slug === "string" &&
            item.slug.trim().length > 0
        );
      }

      console.warn(
        "[API] Department options are empty. Using local data."
      );
    }

    return departmentOptions.filter(
      (item) =>
        typeof item.slug === "string" &&
        item.slug.trim().length > 0
    );
  }
);

  

export const getDepartmentPage = cache(
  async (
    slug?: string | null
  ): Promise<DepartmentPageData | null> => {
    const clean = cleanSlug(slug);

    if (!clean) {
      console.error(
        "[Department] Invalid or missing slug:",
        slug
      );

      return null;
    }

    const response = await fetchJson(
      `/departments/${encodeURIComponent(clean)}`,
      ["departments", `department:${clean}`]
    );

    if (response.ok) {
      const data = normalizeDepartment(
        response.json,
        clean
      );

      if (data) {
        return data;
      }

      console.error(
        `[API] Invalid department response for: ${clean}`
      );
    } else if (response.status === 404) {
      console.warn(
        `[API] Department not found: ${clean}`
      );

      return null;
    }

    return departments[clean] ?? null;
  }
);
