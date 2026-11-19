import "@/components/program-details/program-details.css";

import type { ProgramApiItem } from "@/lib/programs-details-api";

import ProgramsMenu from "@/components/program-details/program-menu/ProgramMenu";

import ProgramOverview from "@/components/program-details/program-overview/ProgramOverview";
// import Eligibility from "@/components/program-details/eligibility/Eligibility";
// import TeachingPedagogy from "@/components/program-details/teaching-pedagogies/TeachingPedagogies";
// import ProgramPoe from "@/components/program-details/program-poe/ProgramPoe";
// import Curriculum from "@/components/program-details/curriculum/Curriculum";
// import FeeStructure from "@/components/program-details/fee-structure/FeeStructure";
// import Scholarship from "@/components/program-details/scholarship/Scholarship";
// import Specialization from "@/components/program-details/specialization/Specialization";
// import ProgramFaq from "./program-faq/ProgramFaq";

interface ProgramDetailsProps {
  program: ProgramApiItem;
}

export default function ProgramDetails({ program }: ProgramDetailsProps) {
  const detail = program.details?.detail ?? {};

  const detailTitle =
    typeof detail.title === "string" ? detail.title : program.title;

  // console.log("Program API:", program);
  // console.log("Program detail:", program.details);

  return (
    <main className="programs_details">
      {detailTitle && <ProgramsMenu title={detailTitle} />}
      {/* {data.overview && <ProgramOverview data={data.overview} />}

      {data.eligibility && <Eligibility data={data.eligibility} />}

      {data.teachingPedagogy && (
        <TeachingPedagogy data={data.teachingPedagogy} />
      )}
         
      {data.poe && <ProgramPoe data={data.poe} />}

      {data.position && (
        <section className="prog_pos" id="career">
          <div className="container">
            <blockquote>{data.position.title}</blockquote>
            <ul>
              {data.position.items.map((item, index) => (
                <li key={`${item.label}-${index}`}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  {item.description && <p>{item.description}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {data.curriculum && <Curriculum data={data.curriculum} />}

      {data.feeStructure && <FeeStructure data={data.feeStructure} />}

      {data.scholarship && <Scholarship data={data.scholarship} />}

      {data.specialization && <Specialization data={data.specialization} />} */}

      {/* {data.faqs && data.faqs.length > 0 && <ProgramFaq items={data.faqs} />} */}
    </main>
  );
}
