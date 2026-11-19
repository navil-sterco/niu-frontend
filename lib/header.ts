// import { cacheLife, cacheTag } from "next/cache";
import { DEFAULT_HEADER } from "@/data/header";
import { fetchHeaderConfig } from "@/lib/header-service";
import type { HeaderConfig, HeaderSource } from "@/types/header";

export async function getHeaderConfig(): Promise<{ config: HeaderConfig; source: HeaderSource }> {
  // "use cache";
  // cacheLife({ stale: 60, revalidate: 300, expire: 3600 });
  // cacheTag("header");

  const url = process.env.HEADER_API_URL?.trim();
  if (!url) return { config: DEFAULT_HEADER, source: "default" };

  const key = process.env.HEADER_API_KEY?.trim();
  try {
    const config = await fetchHeaderConfig(url, { headers: key ? { Authorization: `Bearer ${key}` } : undefined });
    return { config, source: "api" };
  } catch (error) {
    console.error("[header] API failed – using the default header:", error instanceof Error ? error.message : error);
    // cacheLife({ stale: 15, revalidate: 30, expire: 60 }); 
    return { config: DEFAULT_HEADER, source: "default" };
  }
}
