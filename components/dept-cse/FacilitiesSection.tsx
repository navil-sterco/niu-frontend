import type { FacilitiesData } from "@/types/department";
import CounterStat from "@/components/dept-cse/CounterStat";
import LabPanels from "@/components/dept-cse/LabPanels";
import Reveal from "@/components/dept-cse/Reveal";

export default function FacilitiesSection({ data }: { data: FacilitiesData }) {
  return (
    <section className="dept_faclite">
      <div className="container">
        <div className="heading_grid">
          <Reveal className="life_heading">
            {data.eyebrow && <h5 className="title_24">{data.eyebrow}</h5>}
            <blockquote className="title_45">
              {data.title} {data.titleAccent && <span>{data.titleAccent}</span>}
            </blockquote>
          </Reveal>

          {data.stats.length > 0 && (
            <Reveal className="life_fact">
              <div className="fact_wrap">
                {data.stats.map((s) => (
                  <CounterStat key={s.id} stat={s} />
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {data.labs.length > 0 && <LabPanels labs={data.labs} defaultActiveId={data.defaultLabId} />}
    </section>
  );
}
