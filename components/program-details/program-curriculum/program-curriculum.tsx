import type { CurriculumSection } from "@/types/program-details";
import type { SectionMeta } from "@/lib/program-details/section-config";
import CmsHtml from "@/components/program-details/shared/cms-html/cms-html";
import ProgramImageView from "@/components/program-details/shared/program-image/program-image";
import SectionHeading from "@/components/program-details/shared/section-heading/section-heading";
import { hasText } from "@/lib/program-details/program-details-utils";
import "@/components/program-details/program-curriculum/program-curriculum.css";

interface ProgramCurriculumProps {
  data: CurriculumSection;
  meta: SectionMeta;
}

export default function ProgramCurriculum({ data, meta }: ProgramCurriculumProps) {
  const items = data.items ?? [];

  return (
    <div id={meta.id} className="pd-section curriculam">
      <div className="container">
        <div className="col-lg-10">
          <div className="curri_cont">
            <SectionHeading title={meta.title} show={meta.showHeading} />
            {hasText(data.subtitle) && <blockquote>{data.subtitle}</blockquote>}
            <CmsHtml html={data.html} />
            {items.length > 0 && (
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <figure>
                      <ProgramImageView image={item.icon} className="img-fluid" />
                    </figure>
                    <p>{item.label}</p>
                    {item.href && (
                      <a
                        href={item.href}
                        className="semester_links"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.label} syllabus (PDF)`}
                      />
                    )}
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