import type { EligibilitySection } from "@/types/program-details";
import type { SectionMeta } from "@/lib/program-details/section-config";
import CmsHtml from "@/components/program-details/shared/cms-html/cms-html";
import SectionHeading from "@/components/program-details/shared/section-heading/section-heading";
import { hasHtml, hasText } from "@/lib/program-details/program-details-utils";
import "./program-eligibility.css";

interface ProgramEligibilityProps {
  data: EligibilitySection;
  meta: SectionMeta;
}

/** Rendered inside the Overview column (.prog_overview_sec) by ProgramDetailsView. */
export default function ProgramEligibility({ data, meta }: ProgramEligibilityProps) {
  const hasHeadline = hasText(data.highlight) || hasText(data.summary);

  return (
    <div id={meta.id} className="pd-section eligibilty">
      <SectionHeading title={meta.title} show={meta.showHeading} />
      {hasHeadline && (
        <blockquote>
          {hasText(data.highlight) && <span>{data.highlight}</span>}
          {hasText(data.highlight) && hasText(data.summary) ? " " : null}
          {hasText(data.summary) ? data.summary : null}
        </blockquote>
      )}
      {hasHtml(data.html) && (
        <div className="eligibilty_cont">
          <CmsHtml html={data.html} />
        </div>
      )}
    </div>
  );
}