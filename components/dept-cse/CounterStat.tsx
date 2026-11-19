"use client";

import { useEffect, useRef, useState } from "react";
import type { StatItem } from "@/types/department";

export default function CounterStat({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(stat.value);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let started = false;
    setDisplay(0);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(stat.value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [stat.value]);

  return (
    <div className="counter_wrap" ref={ref}>
      <div className="counter" aria-label={`${stat.value}${stat.unit ?? ""}${stat.sup ?? ""}`}>
        <span className="num">{display}</span>
        {stat.unit}
        {stat.sup && <sup>{stat.sup}</sup>}
      </div>
      <p>
        {stat.label}
        {stat.labelAccent && (
          <>
            {" "}
            <span>{stat.labelAccent}</span>
          </>
        )}
      </p>
    </div>
  );
}
