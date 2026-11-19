import { cacheLife, cacheTag } from "next/cache";
import { allItems } from "@/data/happenings";
import { normalizeHappening } from "@/lib/happenings-normalize";
import type { HappeningItem } from "@/types/happenings";


const API_URL = process.env.HAPPENINGS_API_URL?.trim();
const TIMEOUT_MS = 10_000;
const MAX_PAGES = 25; 

export interface LoadedHappenings {
  source: "api" | "local";
  items: HappeningItem[];
}

async function fetchPage(page: number): Promise<{ rows: unknown[]; lastPage: number }> {
  const url = new URL(API_URL as string);
  url.searchParams.set("page", String(page));

  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, { signal: controller.signal, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json: unknown = await res.json();
      const data = (json as { data?: { data?: unknown; last_page?: unknown } } | null)?.data;
      if (!data || !Array.isArray(data.data)) throw new Error("Unexpected response shape");

      const last = Number(data.last_page);
      return { rows: data.data, lastPage: Number.isFinite(last) ? Math.min(Math.max(last, 1), MAX_PAGES) : 1 };
    } catch (error) {
      lastError = error;
    } finally {
      clearTimeout(timer);
    }
  }
  console.error(`[happenings] page ${page} failed:`, lastError instanceof Error ? lastError.message : lastError);
  throw lastError instanceof Error ? lastError : new Error("Happenings API failed");
}

export async function loadAllHappenings(): Promise<LoadedHappenings> {
  "use cache";
  cacheLife({ stale: 60, revalidate: 300, expire: 3600 });
  cacheTag("happenings");

  if (!API_URL) return { source: "local", items: allItems };

  const first = await fetchPage(1);
  const others = await Promise.all(
    Array.from({ length: first.lastPage - 1 }, (_, i) => fetchPage(i + 2))
  );

  const seen = new Set<string>();
  const items: HappeningItem[] = [];
  for (const row of [first, ...others].flatMap((p) => p.rows)) {
    const item = normalizeHappening(row);
    if (item && !seen.has(item.id)) {
      seen.add(item.id);
      items.push(item);
    }
  }
  return { source: "api", items };
}
