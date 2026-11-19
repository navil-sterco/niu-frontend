"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function HeaderSwitcher({ home, inner }: { home: ReactNode; inner: ReactNode }) {
  const pathname = usePathname();
  return pathname === "/" ? home : inner;
}