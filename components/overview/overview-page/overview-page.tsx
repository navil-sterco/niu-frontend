import { Fragment } from "react";
import type { OverviewPageData, OverviewSection } from "@/types/overview-types";
import OverviewHeading from "@/components/overview/overview-heading/overview-heading";
import OverviewIntroBanner from "@/components/overview/overview-intro-banner/overview-intro-banner";
import OverviewGallery from "@/components/overview/overview-gallery/overview-gallery";
import OverviewAchievements from "@/components/overview/overview-achievements/overview-achievements";
import OverviewContentSplit from "@/components/overview/overview-content-split/overview-content-split";
import OverviewVisionMission from "@/components/overview/overview-vision-mission/overview-vision-mission";
import "@/components/overview/shared/overview-shared.css";
import "@/components/overview/overview-page/overview-page.css";

interface OverviewPageProps {
  data: OverviewPageData;
}

function renderSection(section: OverviewSection) {
  switch (section.type) {
    case "intro-banner":
      return <OverviewIntroBanner data={section} />;
    case "gallery":
      return <OverviewGallery data={section} />;
    case "achievements":
      return <OverviewAchievements data={section} />;
    case "content-split":
      return <OverviewContentSplit data={section} />;
    case "vision-mission":
      return <OverviewVisionMission data={section} />;
    default:
      return null;
  }
}

export default function OverviewPage({ data }: OverviewPageProps) {
  const sections = data.sections.filter(
    (section) => section.isActive !== false,
  );

  return (
    <div className="ov-page">
      <OverviewHeading heading={data.heading} />
      {sections.map((section) => (
        <Fragment key={section.id}>{renderSection(section)}</Fragment>
      ))}
    </div>
  );
}
