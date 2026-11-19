"use client";

import type { SideMenuItem } from "@/types/header";
import HeaderImage from "@/components/header/HeaderImage";
import SmartLink from "@/components/header/SmartLink";

interface Props {
  items: SideMenuItem[];
  menuOpen: boolean;
  onOpenMenu: () => void;
  onOpenSearch: () => void;
}

export default function SideMenu({ items, menuOpen, onOpenMenu, onOpenSearch }: Props) {
  return (
    <ul className="side_menu">
      {items.map((item) => {
        const icon = <HeaderImage image={item.icon} />;
        return (
          <li key={item.id} data-mobile={item.mobile}>
            {item.kind === "link" && item.href ? (
              <SmartLink href={item.href} aria-label={item.label}>
                {icon}
              </SmartLink>
            ) : (
              <a
                href="#0"
                role="button"
                aria-label={item.label}
                aria-expanded={item.kind === "menu" ? menuOpen : undefined}
                aria-controls={item.kind === "menu" ? "header-slide-menu" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.kind === "menu") onOpenMenu();
                  else if (item.kind === "search") onOpenSearch();
                }}
              >
                {icon}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
