import type { OverviewVisionMissionSection } from "@/types/overview-types";
import OverviewImageView from "@/components/overview/shared/overview-image/overview-image";
import OverviewText from "@/components/overview/shared/overview-text/overview-text";
import { hasText, hasTextValue } from "@/lib/overview/overview-utils";
import "@/components/overview/overview-vision-mission/overview-vision-mission.css";

interface OverviewVisionMissionProps {
  data: OverviewVisionMissionSection;
}

export default function OverviewVisionMission({
  data,
}: OverviewVisionMissionProps) {
  const items = data.items ?? [];
  const hasHead = hasText(data.title) || hasTextValue(data.statement);
  const hasList = items.length > 0 || hasText(data.listTitle);

  return (
    <section id={data.id} className="abt_vision">
      <div className="container">
        {hasHead && (
          <div className="col-lg-9">
            <div className="abt_vision_ttl">
              {hasText(data.title) && <h4>{data.title}</h4>}
              {hasTextValue(data.statement) && (
                <blockquote>
                  <OverviewText text={data.statement} />
                </blockquote>
              )}
            </div>
          </div>
        )}

        {(data.image || hasList) && (
          <div
            className={
              data.image ? "vision_grid" : "vision_grid vision_grid--no-image"
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
            {hasList && (
              <div className="vision_list">
                {hasText(data.listTitle) && <h5>{data.listTitle}</h5>}
                {items.length > 0 && (
                  <ul>
                    {items.map((item, index) => (
                      <li key={`${index}-${item}`}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
