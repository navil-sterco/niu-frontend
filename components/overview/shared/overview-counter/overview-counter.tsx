"use client";

import { useEffect, useRef, useState } from "react";

interface OverviewCounterProps {
  value: number;
  suffix?: string | null;
}

const DURATION_MS = 1600;

export default function OverviewCounter({
  value,
  suffix,
}: OverviewCounterProps) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        const startedAt = performance.now();
        setDisplay(0);
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <>
      <span className="num" ref={ref}>
        {display}
      </span>
      {suffix ? <sup>{suffix}</sup> : null}
    </>
  );
}
