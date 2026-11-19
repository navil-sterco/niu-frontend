import type { OverviewPageData } from "@/types/overview-types";
import { aboutOverviewData } from "@/data/overview/about-overview-data";

export const overviewPages: Record<string, OverviewPageData> = {
  [aboutOverviewData.slug]: aboutOverviewData,
};
