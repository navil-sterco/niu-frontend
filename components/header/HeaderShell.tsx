"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useHeaderConfig } from "@/hooks/useHeaderConfig";
import { useSticky } from "@/hooks/useSticky";
import { resolveVariant } from "@/lib/header-service";
import type { HeaderConfig } from "@/types/header";
import HeaderLogo from "@/components/header/HeaderLogo";
import MainNav from "@/components/header/MainNav";
import SearchPanel from "@/components/header/SearchPanel";
import SideMenu from "@/components/header/SideMenu";
import SlideMenu from "@/components/header/SlideMenu";
import TollFree from "@/components/header/TollFree";

export default function HeaderShell({ initialConfig }: { initialConfig: HeaderConfig }) {
  const { config, status } = useHeaderConfig(initialConfig);
  const pathname = usePathname() || "/";
  const { variant, className } = resolveVariant(pathname, config);

  const sticky = useSticky(config.stickyOffset);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setMegaOpen(false);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAll]);

  useEffect(() => {
    const lock = menuOpen || searchOpen;
    document.documentElement.style.overflow = lock ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  const headerClass = [variant === "home" ? "home_header" : "inner_header", className, sticky ? "sticky" : ""]
    .filter(Boolean)
    .join(" ");

  const openMenu = () => {
    setSearchOpen(false);
    setMenuOpen(true);
  };
  const openSearch = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };

  return (
    <header className={headerClass} data-header-status={status}>
      <div className={variant === "home" ? "container-fluid" : "container-md"}>
        {variant === "inner" && config.topBar && <TollFree phone={config.topBar.phone} />}

        <HeaderLogo brand={config.brand} />

        <MainNav
          config={config}
          variant={variant}
          megaOpen={megaOpen}
          menuOpen={menuOpen}
          onMegaToggle={() => setMegaOpen((v) => !v)}
          onMegaClose={() => setMegaOpen(false)}
          onOpenMenu={openMenu}
        />

        <SlideMenu config={config} open={menuOpen} onClose={() => setMenuOpen(false)} />
        {config.search.enabled && <SearchPanel config={config.search} open={searchOpen} onClose={() => setSearchOpen(false)} />}
      </div>

      {variant === "home" && (
        <SideMenu items={config.sideMenu} menuOpen={menuOpen} onOpenMenu={openMenu} onOpenSearch={openSearch} />
      )}
    </header>
  );
}
