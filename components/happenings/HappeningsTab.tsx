import type { Metadata } from "next";
import { Suspense } from "react";
import { getTabConfig, happeningsHeading } from "@/data/happenings";
import { getFilterFields, getHappeningsTab, parseFilters } from "@/lib/happenings";
import type { TabSlug } from "@/types/happenings";
import ComingSoon from "@/components/happenings/ComingSoon";
import TabSkeleton from "@/components/happenings/TabSkeleton";
import TabView from "@/components/happenings/TabView";

export type TabPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export function tabMetadata(tab: TabSlug): Metadata {
  const config = getTabConfig(tab);
  return { title: config ? `${config.label} | ${happeningsHeading.title}` : happeningsHeading.title };
}

async function TabContent({ tab, searchParams }: { tab: TabSlug } & TabPageProps) {
  const config = getTabConfig(tab);
  if (!config) return null;
  if (config.status !== "ready") return <ComingSoon label={config.label} />;

  const fields = await getFilterFields(config.slug);
  const filters = parseFilters(await searchParams, fields); 
  const data = await getHappeningsTab(config.slug, filters);

  return <TabView config={config} data={data} fields={fields} filters={filters} basePath={happeningsHeading.basePath} />;
}

export default function HappeningsTab({ tab, searchParams }: { tab: TabSlug } & TabPageProps) {
  return (
    <Suspense fallback={<TabSkeleton />}>
      <TabContent tab={tab} searchParams={searchParams} />
    </Suspense>
  );
}
