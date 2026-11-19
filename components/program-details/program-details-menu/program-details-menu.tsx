"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import "@/components/program-details/program-details-menu/program-details-menu.css";

export interface ProgramMenuItem {
  id: string;
  label: string;
}

interface ProgramDetailsMenuProps {
  items: ProgramMenuItem[];
}

const ACTIVE_OFFSET = 24;
const CLICK_LOCK_MS = 1000;

export default function ProgramDetailsMenu({ items }: ProgramDetailsMenuProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const rootRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const lockUntil = useRef(0);

  useEffect(() => {
    const menu = rootRef.current;
    if (!menu) return;
    const page = menu.closest<HTMLElement>(".pd-page");
    const publish = () => page?.style.setProperty("--pd-menu-height", `${menu.offsetHeight}px`);
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(menu);
    return () => {
      observer.disconnect();
      page?.style.removeProperty("--pd-menu-height");
    };
  }, []);

  useEffect(() => {
    const targets = items
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (Date.now() < lockUntil.current) return;

      const menu = rootRef.current;
      const stickyTop = menu ? Number.parseFloat(getComputedStyle(menu).top) || 0 : 0;
      const offset = stickyTop + (menu?.offsetHeight ?? 0) + ACTIVE_OFFSET;

      let current = targets[0].id;
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= offset) current = target.id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = targets[targets.length - 1].id;

      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  useEffect(() => {
    const list = listRef.current;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const link = list.querySelector<HTMLElement>('a[aria-current="location"]');
    if (!link) return;
    list.scrollTo({
      left: link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  if (items.length === 0) return null;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    lockUntil.current = Date.now() + CLICK_LOCK_MS;
    setActiveId(id);
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <section className="programs_menu" ref={rootRef}>
      <div className="container">
        <nav aria-label="Program sections">
          <ul ref={listRef}>
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={isActive ? "active" : undefined}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) => handleClick(event, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}