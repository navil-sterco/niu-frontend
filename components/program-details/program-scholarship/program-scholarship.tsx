import type { ScholarshipSection } from "@/types/program-details";
import type { SectionMeta } from "@/lib/program-details/section-config";
import ApplyButton from "@/components/program-details/shared/apply-button/apply-button";
import CmsHtml from "@/components/program-details/shared/cms-html/cms-html";
import ProgramImageView from "@/components/program-details/shared/program-image/program-image";
import SectionHeading from "@/components/program-details/shared/section-heading/section-heading";
import { hasHtml, hasText } from "@/lib/program-details/program-details-utils";
import "./program-scholarship.css";

interface ProgramScholarshipProps {
  data: ScholarshipSection;
  meta: SectionMeta;
}

export default function ProgramScholarship({ data, meta }: ProgramScholarshipProps) {
  const benefits = data.benefits ?? [];
  const criteria = data.criteria ?? [];
  const hasGrid =
    Boolean(data.image) ||
    hasHtml(data.html) ||
    benefits.length > 0 ||
    hasText(data.criteriaIntro);

  return (
    <div id={meta.id} className="pd-section scholarship">
      <div className="container">
        <div className="col-lg-9">
          <SectionHeading title={meta.title} show={meta.showHeading} />
          {hasText(data.subtitle) && <blockquote>{data.subtitle}</blockquote>}

          {hasGrid && (
            <div
              className={
                data.image ? "scholarship_grid" : "scholarship_grid scholarship_grid--no-image"
              }
            >
              {data.image && (
                <figure>
                  <ProgramImageView
                    image={data.image}
                    className="img-fluid w-100"
                    sizes="(max-width: 991px) 100vw, 40vw"
                  />
                </figure>
              )}
              <div className="scholarship_cont">
                <CmsHtml html={data.html} />
                {benefits.length > 0 && (
                  <>
                    {hasText(data.benefitsTitle) && <h5>{data.benefitsTitle}</h5>}
                    <ul>
                      {benefits.map((benefit, index) => (
                        <li key={`${index}-${benefit}`}>{benefit}</li>
                      ))}
                    </ul>
                  </>
                )}
                {hasText(data.criteriaIntro) && <p>{data.criteriaIntro}</p>}
              </div>
            </div>
          )}

          {criteria.length > 0 && (
            <div className="scholarship_list">
              <ul>
                {criteria.map((item) => (
                  <li key={item.id}>
                    <figure>
                      <ProgramImageView image={item.icon} className="img-fluid" />
                    </figure>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ApplyButton link={data.cta} />
        </div>
      </div>
    </div>
  );
}