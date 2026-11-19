import type { OverviewIntroBannerSection } from "@/types/overview-types";
import OverviewHtml from "@/components/overview/shared/overview-html/overview-html";
import OverviewImageView from "@/components/overview/shared/overview-image/overview-image";
import OverviewStats from "@/components/overview/shared/overview-stats/overview-stats";
import { hasHtml } from "@/lib/overview/overview-utils";
import "@/components/overview/overview-intro-banner/overview-intro-banner.css";

interface OverviewIntroBannerProps {
  data: OverviewIntroBannerSection;
}

export default function OverviewIntroBanner({
  data,
}: OverviewIntroBannerProps) {
  const hasStats = Boolean(data.stats && data.stats.length > 0);
  const hasDescription = hasHtml(data.descriptionHtml);

  return (
    <section id={data.id} className="abt-banner">
      {hasHtml(data.introHtml) && (
        <div className="container">
          <div className="abt-cont">
            <OverviewHtml html={data.introHtml} />
          </div>
        </div>
      )}

      {data.image && (
        <figure>
          <OverviewImageView
            image={data.image}
            className="img-fluid w-100"
            sizes="100vw"
            priority
          />
        </figure>
      )}

      {(hasStats || hasDescription) && (
        <div className="container">
          <div className="abtcounter_grid">
            <OverviewStats stats={data.stats} />
            <div className="abtcounter_cont">
              <OverviewHtml html={data.descriptionHtml} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
