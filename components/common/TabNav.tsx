"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  tabs: { slug: string; label: string }[];
  basePath: string; 
}

export default function TabNav({ tabs, basePath }: Props) {
  const pathname = usePathname();

  return (
    <ul aria-label="Sections">
      {tabs.map((tab) => {
        const href = `${basePath}/${tab.slug}`;
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <li key={tab.slug} className={active ? "active" : undefined}>
            <Link href={href} aria-current={active ? "page" : undefined}>
              {tab.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
