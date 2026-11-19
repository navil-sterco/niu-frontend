import type { SpecializationSection } from "@/types/program-details";
import type { SectionMeta } from "@/lib/program-details/section-config";
import ApplyButton from "@/components/program-details/shared/apply-button/apply-button";
import CmsHtml from "@/components/program-details/shared/cms-html/cms-html";
import ProgramImageView from "@/components/program-details/shared/program-image/program-image";
import ProgramLink from "@/components/program-details/shared/program-link/program-link";
import SectionHeading from "@/components/program-details/shared/section-heading/section-heading";
import { hasText } from "@/lib/program-details/program-details-utils";
import "./program-specialization.css";

interface ProgramSpecializationProps {
  data: SpecializationSection;
  meta: SectionMeta;
}

export default function ProgramSpecialization({ data, meta }: ProgramSpecializationProps) {
  const items = data.items ?? [];

  return (
    <div id={meta.id} className="pd-section specialization">
      <div className="container">
        <div className="col-lg-10">
          <div className="specialization_grps">
            <div className="special_cont">
              <SectionHeading title={meta.title} show={meta.showHeading} />
              <CmsHtml html={data.html} />
            </div>

            {items.length > 0 && (
              <div className="special_grid">
                {items.map((item) => (
                  <figure key={item.id}>
                    <ProgramImageView
                      image={item.image}
                      className="img-fluid w-100"
                      sizes="(max-width: 767px) 100vw, 40vw"
                    />
                    <figcaption>
                      <h5>{item.title}</h5>
                      {hasText(item.duration) && <p>{item.duration}</p>}
                    </figcaption>
                    {item.href && (
                      <ProgramLink
                        link={{ label: item.title, href: item.href }}
                        className="special_links"
                      />
                    )}
                  </figure>
                ))}
              </div>
            )}

            <ApplyButton link={data.cta} />
          </div>
        </div>
      </div>
    </div>
  );
}