"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import type { HeaderConfig, HeaderVariant } from "@/types/header";
import HeaderImage from "@/components/header/HeaderImage";
import MegaMenu from "@/components/header/MegaMenu";
import SmartLink from "@/components/header/SmartLink";

interface Props {
  config: HeaderConfig;
  variant: HeaderVariant;
  megaOpen: boolean;
  menuOpen: boolean;
  onMegaToggle: () => void;
  onMegaClose: () => void;
  onOpenMenu: () => void;
}

const DROPDOWN_ICON = { src: "/images/drop-icon.svg", alt: "", width: 10, height: 6 };

export default function MainNav({ config, variant, megaOpen, menuOpen, onMegaToggle, onMegaClose, onOpenMenu }: Props) {
  const megaRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: Event) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) onMegaClose();
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [megaOpen, onMegaClose]);

  const onAdmissionClick = (e: MouseEvent) => {
    if (window.matchMedia("(hover: none)").matches) {
      e.preventDefault();
      onMegaToggle();
    }
  };

  return (
    <ul className="navbar_nav">
      {config.nav.map((item) => {
        if (item.mega && config.mega) {
          return (
            <li key={item.id} ref={megaRef} className={`nav-item admison_menu ${megaOpen ? "is-open" : ""}`.trim()}>
              <SmartLink href={item.href} className="nav-link" aria-haspopup="true" aria-expanded={megaOpen} onClick={onAdmissionClick}>
                {item.label}
              </SmartLink>
              <MegaMenu data={config.mega} />
            </li>
          );
        }
        return (
          <li key={item.id} className="nav-item">
            <SmartLink href={item.href} className="nav-link">
              {item.label}
              {variant === "inner" && item.dropdownIcon && <> <HeaderImage image={DROPDOWN_ICON} /></>}
            </SmartLink>
          </li>
        );
      })}

      {variant === "inner" && (
        <li className="nav-item hemburgure_item">
          <a
            href="#0"
            role="button"
            className="nav-link hemburgure"
            aria-label={config.hamburgerIcon.alt || "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="header-slide-menu"
            onClick={(e) => {
              e.preventDefault();
              onOpenMenu();
            }}
          >
            <HeaderImage image={config.hamburgerIcon} />
          </a>
        </li>
      )}
    </ul>
  );
}
