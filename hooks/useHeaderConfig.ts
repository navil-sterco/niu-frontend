"use client";

import { useCallback, useEffect, useState } from "react";
import { normalizeHeaderConfig } from "@/lib/header-service";
import { isHeaderCacheFresh, readHeaderCache, writeHeaderCache } from "@/lib/header-storage";
import type { HeaderConfig } from "@/types/header";

export type HeaderStatus = "ready" | "refreshing" | "error";


export function useHeaderConfig(initial: HeaderConfig) {
  const [config, setConfig] = useState<HeaderConfig>(initial);
  const [status, setStatus] = useState<HeaderStatus>("ready");

  const refresh = useCallback(async (signal?: AbortSignal) => {
    setStatus("refreshing");
    try {
      const res = await fetch("/api/header", { signal, cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const next = normalizeHeaderConfig(await res.json());
      setConfig((prev) => (JSON.stringify(prev) === JSON.stringify(next) ? prev : next));
      writeHeaderCache(next);
      setStatus("ready");
    } catch (error) {
      if (signal?.aborted) return;
      console.warn("[header] refresh failed – keeping the current header:", error);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    const cached = readHeaderCache();

    if (cached && isHeaderCacheFresh(cached)) {
      const serverIsNewer = !!initial.updatedAt && !!cached.config.updatedAt && initial.updatedAt > cached.config.updatedAt;
      if (serverIsNewer) writeHeaderCache(initial);
      else setConfig((prev) => (JSON.stringify(prev) === JSON.stringify(cached.config) ? prev : cached.config));
      return;
    }

    writeHeaderCache(initial); // first visit in this tab → remember what the server rendered
    if (cached) {
      const controller = new AbortController(); // an expired copy existed → check the API quietly
      void refresh(controller.signal);
      return () => controller.abort();
    }
  }, [initial, refresh]);

  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState !== "visible") return;
      const cached = readHeaderCache();
      if (!cached || !isHeaderCacheFresh(cached)) void refresh();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [refresh]);

  return { config, status, refresh };
}
