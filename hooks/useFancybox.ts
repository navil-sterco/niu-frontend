"use client";

import { useEffect } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export function useFancybox(group: string) {
  useEffect(() => {
    let cancelled = false;
    let unbind = () => {};

    import("@fancyapps/ui")
      .then(({ Fancybox }) => {
        if (cancelled) return;
        const selector = `[data-fancybox="${group}"]`;
        Fancybox.bind(selector, {});
        unbind = () => Fancybox.unbind(selector);
      })
      .catch((error) => console.error("[fancybox] failed to load", error));

    return () => {
      cancelled = true;
      unbind();
    };
  }, [group]);
}
