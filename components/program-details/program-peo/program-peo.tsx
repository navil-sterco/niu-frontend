import type { PeoSection } from "@/types/program-details";
import type { SectionMeta } from "@/lib/program-details/section-config";
import CmsHtml from "@/components/program-details/shared/cms-html/cms-html";
import ProgramImageView from "@/components/program-details/shared/program-image/program-image";
import SectionHeading from "@/components/program-details/shared/section-heading/section-heading";
import { hasText } from "@/lib/program-details/program-details-utils";
import "./program-peo.css";

interface ProgramPeoProps {
  data: PeoSection;
  meta: SectionMeta;
}

export default function ProgramPeo({ data, meta }: ProgramPeoProps) {
  const items = data.items ?? [];
  const showTitleBlock = (meta.showHeading && meta.title) || hasText(data.subtitle);

  return (
    <div id={meta.id} className="pd-section prog_poe">
      <ProgramImageView image={data.backgroundImage} className="img-fluid poe_right_img" />
      <div className="container-lg max-container-lg">
        <div className="prog_poe_grp">
          <div className="col-lg-7">
            {showTitleBlock && (
              <div className="prog_poe_ttl">
                <SectionHeading title={meta.title} show={meta.showHeading} />
                {hasText(data.subtitle) && <blockquote>{data.subtitle}</blockquote>}
              </div>
            )}
            <CmsHtml html={data.html} className="prog_poe_html" />
            {items.length > 0 && (
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <strong>{item.number}</strong>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}