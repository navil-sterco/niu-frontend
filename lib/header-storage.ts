import { normalizeHeaderConfig } from "@/lib/header-service";
import type { HeaderConfig } from "@/types/header";

/** sessionStorage copy of the header JSON (lives as long as the browser tab). */
const KEY = "niu.header.config";
const CACHE_VERSION = 1; // bump when the HeaderConfig shape changes → old caches are ignored
export const HEADER_CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

export interface HeaderCacheEntry {
  savedAt: number;
  config: HeaderConfig;
}

const storage = (): Storage | null => {
  try {
    return typeof window !== "undefined" ? window.sessionStorage : null; // may throw in private mode / blocked cookies
  } catch {
    return null;
  }
};

export function readHeaderCache(): HeaderCacheEntry | null {
  const s = storage();
  if (!s) return null;
  try {
    const raw = s.getItem(KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      (parsed as { v?: unknown }).v !== CACHE_VERSION ||
      typeof (parsed as { savedAt?: unknown }).savedAt !== "number"
    ) {
      s.removeItem(KEY);
      return null;
    }
    // re-validate on read: a tampered / old entry can never break the header
    return { savedAt: (parsed as { savedAt: number }).savedAt, config: normalizeHeaderConfig((parsed as { config?: unknown }).config) };
  } catch {
    try {
      s.removeItem(KEY); // corrupted JSON
    } catch {
      /* ignore */
    }
    return null;
  }
}

export function writeHeaderCache(config: HeaderConfig): void {
  try {
    storage()?.setItem(KEY, JSON.stringify({ v: CACHE_VERSION, savedAt: Date.now(), config }));
  } catch {
    /* quota exceeded / private mode – the header still works, it just isn't cached */
  }
}

export const isHeaderCacheFresh = (entry: HeaderCacheEntry) => Date.now() - entry.savedAt < HEADER_CACHE_TTL_MS;

export function clearHeaderCache(): void {
  try {
    storage()?.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
