import { cacheLife, cacheTag } from "next/cache";
import { departmentOptions, departments } from "@/data/department";
import { normalizeDepartment, normalizeOptions } from "@/lib/departments-normalize";
import type { DepartmentOption, DepartmentPageData } from "@/types/department";



const API_BASE = process.env.API_BASE_URL?.replace(/\/+$/, "");
const TIMEOUT_MS = 8000;

type FetchResult = { ok: true; json: unknown } | { ok: false; status: number };

async function fetchJson(path: string): Promise<FetchResult> {
  if (!API_BASE) return { ok: false, status: 0 };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return { ok: false, status: res.status };
    return { ok: true, json: await res.json() };
  } catch (error) {
    console.error(`[api] ${path} failed:`, error instanceof Error ? error.message : error);
    return { ok: false, status: 0 };
  } finally {
    clearTimeout(timer);
  }
}

const cleanSlug = (slug: string) => slug.toLowerCase().replace(/[^a-z0-9-]/g, "");

export async function getDepartmentPage(slug: string): Promise<DepartmentPageData | null> {
  "use cache";
  cacheLife({ stale: 60, revalidate: 300, expire: 3600 });
  cacheTag("departments");

  const clean = cleanSlug(slug);
  if (!clean) return null;
  cacheTag(`department:${clean}`);

  const res = await fetchJson(`/departments/${clean}`);

  if (res.ok) {
    const data = normalizeDepartment(res.json, clean);
    if (data) return data;
    console.error(`[api] /departments/${clean} returned an unexpected shape – using local data`);
  } else if (res.status === 404) {
    return null;
  }

  return departments[clean] ?? null;
}

export async function getDepartmentOptions(): Promise<DepartmentOption[]> {
  "use cache";
  cacheLife({ stale: 60, revalidate: 300, expire: 3600 });
  cacheTag("departments");

  const res = await fetchJson("/departments");
  if (res.ok) {
    const options = normalizeOptions(res.json);
    if (options.length) return options;
  }
  return departmentOptions;
}
