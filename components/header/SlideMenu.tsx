"use client";

import { useEffect, useRef, useState } from "react";
import type { HeaderConfig, HeaderLink } from "@/types/header";
import HeaderImage from "@/components/header/HeaderImage";
import SmartLink from "@/components/header/SmartLink";

interface Props {
  config: HeaderConfig;
  open: boolean;
  onClose: () => void;
}

interface Entry {
  id: string;
  label: string;
  href?: string;
  children?: HeaderLink[];
  mobileOnly?: boolean; 
}

export default function SlideMenu({ config, open, onClose }: Props) {
  const { slideMenu, nav, mega, topBar } = config;
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLDivElement>(null);

  const entries: Entry[] = [
    ...nav.map((n) => ({
      id: `nav-${n.id}`,
      label: n.label,
      href: n.href,
      children: n.mega && mega ? mega.links : undefined,
      mobileOnly: true,
    })),
    ...slideMenu.items,
  ];

  useEffect(() => {
    if (open) closeRef.current?.focus();
    else setExpanded(null);
  }, [open]);

  return (
    <>
      <div
        id="header-slide-menu"
        className={`hembugrside_menu ${open ? "open-slide" : ""}`.trim()}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          ref={closeRef}
          className="close_icon"
          role="button"
          tabIndex={0}
          aria-label={slideMenu.closeLabel}
          onClick={onClose}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onClose())}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17.785" height="17.785" viewBox="0 0 17.785 17.785" aria-hidden="true">
            <g transform="translate(0.531 0.531)">
              <line x2="23.651" transform="rotate(45)" strokeWidth="1.5" />
              <line x2="23.651" transform="translate(16.724 0) rotate(135)" strokeWidth="1.5" />
            </g>
          </svg>
        </div>

        <ul className="mobmenu_top">
          {entries.map((entry) => {
            const hasChildren = !!entry.children?.length;
            const cls = [hasChildren ? "mob_dropdown" : "", hasChildren && expanded === entry.id ? "active" : "", entry.mobileOnly ? "mob_only" : ""]
              .filter(Boolean)
              .join(" ");

            if (!hasChildren) {
              return (
                <li key={entry.id} className={cls || undefined}>
                  <SmartLink href={entry.href ?? "#0"} onClick={onClose}>
                    {entry.label}
                  </SmartLink>
                </li>
              );
            }
            return (
              <li key={entry.id} className={cls}>
                <a
                  href="#0"
                  role="button"
                  aria-expanded={expanded === entry.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setExpanded((cur) => (cur === entry.id ? null : entry.id));
                  }}
                >
                  <span>{entry.label}</span>
                  {slideMenu.chevronIcon && <HeaderImage image={slideMenu.chevronIcon} />}
                </a>
                <ul className="second_level">
                  {entry.children!.map((child) => (
                    <li key={child.id}>
                      <SmartLink href={child.href} onClick={onClose}>
                        {child.label} {child.accent}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <ul className="mobmenu_botm">
          {topBar && (
            <li className="mob_only">
              <a href={topBar.phone.href}>{topBar.phone.label}</a>
            </li>
          )}
          {slideMenu.footer.map((l) => (
            <li key={l.id}>
              <SmartLink href={l.href} onClick={onClose}>
                {l.label}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={`opacity_bg ${open ? "opacitybg_open" : ""}`.trim()} onClick={onClose} aria-hidden="true" />
    </>
  );
}
