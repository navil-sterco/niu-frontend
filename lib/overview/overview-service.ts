import { cache } from "react";
import { overviewPages } from "@/data/overview/overview-data";
import type { OverviewPageData } from "@/types/overview-types";

export const getOverviewPage = cache(
  async (slug: string): Promise<OverviewPageData | null> =>
    Object.prototype.hasOwnProperty.call(overviewPages, slug)
      ? overviewPages[slug]
      : null,
);

export async function getOverviewSlugs(): Promise<string[]> {
  return Object.keys(overviewPages);
}
