import type { ReactNode } from "react";
import PageHeading from "@/components/common/PageHeading";
import TabNav from "@/components/common/TabNav";
import { happeningsHeading, happeningsTabs } from "@/data/happenings";
import "@/components/happenings/happenings.css"; 
import "@/components/happenings/happenings-extra.css";

export default function HappeningsLayout({ children }: { children: ReactNode }) {
  const tabs = happeningsTabs.map(({ slug, label }) => ({ slug, label }));

  return (
    <main>
      <PageHeading title={happeningsHeading.title} subtitle={happeningsHeading.subtitle} className="news">
        <TabNav tabs={tabs} basePath={happeningsHeading.basePath} />
      </PageHeading>
      {children}
    </main>
  );
}
