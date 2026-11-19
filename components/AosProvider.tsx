
"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import "aos/dist/aos.css";

export default function AosProvider({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    let cancelled = false;

    const initializeAOS = async () => {
      const AOS = (await import("aos")).default;

      if (cancelled) return;

      AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        easing: "ease-in-out",
      });
    };

    const timer = window.setTimeout(initializeAOS, 500);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
}
