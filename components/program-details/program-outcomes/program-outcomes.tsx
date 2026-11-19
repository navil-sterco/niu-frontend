import type { OutcomesSection } from "@/types/program-details";
import type { SectionMeta } from "@/lib/program-details/section-config";
import ApplyButton from "@/components/program-details/shared/apply-button/apply-button";
import CmsHtml from "@/components/program-details/shared/cms-html/cms-html";
import SectionHeading from "@/components/program-details/shared/section-heading/section-heading";
import "@/components/program-details/program-outcomes/program-outcomes.css";

interface ProgramOutcomesProps {
  data: OutcomesSection;
  meta: SectionMeta;
}

export default function ProgramOutcomes({ data, meta }: ProgramOutcomesProps) {
  const items = data.items ?? [];

  return (
    <div id={meta.id} className="pd-section prog_pos">
      <div className="container">
        <SectionHeading title={meta.title} show={meta.showHeading} variant="display" />
        <div className="col-lg-10">
          <CmsHtml html={data.html} className="prog_pos_html" />
          {items.length > 0 && (
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <strong>{item.code}</strong>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          )}
          <ApplyButton link={data.cta} />
        </div>
      </div>
    </div>
  );
}