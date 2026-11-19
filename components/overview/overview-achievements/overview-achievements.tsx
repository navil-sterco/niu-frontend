import type { OverviewAchievementsSection } from "@/types/overview-types";
import OverviewHtml from "@/components/overview/shared/overview-html/overview-html";
import OverviewImageView from "@/components/overview/shared/overview-image/overview-image";
import OverviewStats from "@/components/overview/shared/overview-stats/overview-stats";
import OverviewText from "@/components/overview/shared/overview-text/overview-text";
import { hasHtml, hasTextValue } from "@/lib/overview/overview-utils";
import "@/components/overview/overview-achievements/overview-achievements.css";

interface OverviewAchievementsProps {
  data: OverviewAchievementsSection;
}

export default function OverviewAchievements({
  data,
}: OverviewAchievementsProps) {
  const hasQuote = hasTextValue(data.quote);
  const hasIntro = hasQuote || hasHtml(data.descriptionHtml);
  const hasStats = Boolean(data.stats && data.stats.length > 0);
  const hasSplit =
    Boolean(data.image) ||
    hasTextValue(data.heading) ||
    hasHtml(data.bodyHtml) ||
    hasStats;

  return (
    <section id={data.id} className="niu_achie">
      {hasIntro && (
        <div className="container">
          <div className="col-lg-10">
            <div className="niu_achie_cont">
              {hasQuote && (
                <blockquote>
                  <OverviewText text={data.quote} />
                </blockquote>
              )}
              <OverviewHtml html={data.descriptionHtml} />
            </div>
          </div>
        </div>
      )}

      {hasSplit && (
        <div
          className={
            data.image
              ? "niu_achie_grid"
              : "niu_achie_grid niu_achie_grid--no-image"
          }
        >
          {data.image && (
            <figure>
              <OverviewImageView
                image={data.image}
                className="img-fluid w-100"
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </figure>
          )}
          <div className="niu_cont">
            <div className="niu_cont_grps">
              {hasTextValue(data.heading) && (
                <h4>
                  <OverviewText text={data.heading} />
                </h4>
              )}
              <OverviewHtml html={data.bodyHtml} />
            </div>
            <OverviewStats stats={data.stats} />
          </div>
        </div>
      )}
    </section>
  );
}
