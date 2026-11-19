import type { OverviewSection } from "@/types/program-details";
import type { SectionMeta } from "@/lib/program-details/section-config";
import CmsHtml from "@/components/program-details/shared/cms-html/cms-html";
import SectionHeading from "@/components/program-details/shared/section-heading/section-heading";
import "@/components/program-details/program-overview/program_overview.css";

interface ProgramOverviewProps {
  data: OverviewSection;
  meta: SectionMeta;
}

export default function ProgramOverview({ data, meta }: ProgramOverviewProps) {
  const stats = data.stats ?? [];
  // console.log(data.stats);

  return (
    <div id={meta.id} className="pd-section program_overview_block">
      <SectionHeading title={meta.title} show={meta.showHeading} />
      <CmsHtml html={data.html} />
      {stats.length > 0 && (
        <ul>
          {stats.map((stat) => (
            <li key={stat.id}>
              <strong>
                {stat.value}
                {stat.superscript ? (
                  <>
                    {" "}
                    <sup>{stat.superscript}</sup>
                  </>
                ) : null}
              </strong>
              <p>{stat.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
