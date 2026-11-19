import type { OverviewContentSplitSection } from "@/types/overview-types";
import OverviewHtml from "@/components/overview/shared/overview-html/overview-html";
import OverviewImageView from "@/components/overview/shared/overview-image/overview-image";
import OverviewText from "@/components/overview/shared/overview-text/overview-text";
import { hasText, hasTextValue } from "@/lib/overview/overview-utils";
import "@/components/overview/overview-content-split/overview-content-split.css";

interface OverviewContentSplitProps {
  data: OverviewContentSplitSection;
}

export default function OverviewContentSplit({
  data,
}: OverviewContentSplitProps) {
  return (
    <section
      id={data.id}
      className={data.image ? "philosy" : "philosy philosy--no-image"}
    >
      <div className="container">
        <div
          className={
            data.image ? "philosy_grid" : "philosy_grid philosy_grid--no-image"
          }
        >
          <div className="philosy_content">
            {hasText(data.title) && <h4>{data.title}</h4>}
            {hasTextValue(data.quote) && (
              <blockquote>
                <OverviewText text={data.quote} />
              </blockquote>
            )}
            <OverviewHtml html={data.bodyHtml} />
          </div>
          {data.image && (
            <figure>
              <OverviewImageView
                image={data.image}
                className="img-fluid w-100"
                sizes="(max-width: 991px) 100vw, 60vw"
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
