import type { TeachingPedagogiesSection } from "@/types/program-details";
import type { SectionMeta } from "@/lib/program-details/section-config";
import ApplyButton from "@/components/program-details/shared/apply-button/apply-button";
import CmsHtml from "@/components/program-details/shared/cms-html/cms-html";
import ProgramImageView from "@/components/program-details/shared/program-image/program-image";
import SectionHeading from "@/components/program-details/shared/section-heading/section-heading";
import "./program-teaching-pedagogies.css";

interface ProgramTeachingPedagogiesProps {
  data: TeachingPedagogiesSection;
  meta: SectionMeta;
}

export default function ProgramTeachingPedagogies({ data, meta }: ProgramTeachingPedagogiesProps) {
  const items = data.items ?? [];
  const gridClass = data.image ? "teaching_grid" : "teaching_grid teaching_grid--no-image";

  return (
    <div id={meta.id} className="pd-section teaching_ped">
      <div className="container-md">
        <div className={gridClass}>
          {data.image && (
            <figure>
              <ProgramImageView
                image={data.image}
                className="img-fluid w-100"
                sizes="(max-width: 991px) 100vw, 60vw"
              />
            </figure>
          )}
          <div className="teaching_list">
            <div className="teaching_text">
              <SectionHeading title={meta.title} show={meta.showHeading} />
              <CmsHtml html={data.html} />
            </div>
            {items.map((item) => (
              <div className="project_grid" key={item.id}>
                {item.icon && (
                  <figure>
                    <ProgramImageView image={item.icon} className="img-fluid w-100" />
                  </figure>
                )}
                <div className="project_text">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
            <ApplyButton link={data.cta} />
          </div>
        </div>
      </div>
    </div>
  );
}