import type { ProgramDetails } from "@/types/program-details";
import {
  getAvailableSections,
  type AvailableSection,
} from "@/lib/program-details/section-config";
import { hasItems } from "@/lib/program-details/program-details-utils";
import ProgramDetailsHeading from "@/components/program-details/program-details-heading/program-details-heading";
import ProgramDetailsMenu from "@/components/program-details/program-details-menu/program-details-menu";
import ProgramDetailsSidebar from "@/components/program-details/program-details-sidebar/program-details-sidebar";
import ProgramOverview from "@/components/program-details/program-overview/ProgramOverview";
import ProgramEligibility from "@/components/program-details/program-eligibility/program-eligibility";
import ProgramTeachingPedagogies from "@/components/program-details/program-teaching-pedagogies/program-teaching-pedagogies";
import ProgramPeo from "@/components/program-details/program-peo/program-peo";
import ProgramOutcomes from "@/components/program-details/program-outcomes/program-outcomes";
import ProgramCurriculum from "@/components/program-details/program-curriculum/program-curriculum";
import ProgramFeeStructure from "@/components/program-details/program-fee-structure/program-fee-structure";
import ProgramScholarship from "@/components/program-details/program-scholarship/program-scholarship";
import ProgramSpecialization from "@/components/program-details/program-specialization/program-specialization";
// import ProgramFaq from "@/components/program-details/program-faq/program-faq";
import "@/components/program-details/shared/program-details-shared.css";
import "@/components/program-details/program-details-view/program-details-view.css";

interface ProgramDetailsViewProps {
  program: ProgramDetails;
}

export default function ProgramDetailsView({ program }: ProgramDetailsViewProps) {
  const { sections, sidebar } = program;
  const available = getAvailableSections(program);
  const metaFor = (key: AvailableSection["key"]) =>
    available.find((section) => section.key === key);

  const menuItems = available.map(({ id, menuLabel }) => ({ id, label: menuLabel }));

  const overviewMeta = metaFor("overview");
  const eligibilityMeta = metaFor("eligibility");
  const teachingMeta = metaFor("teachingPedagogies");
  const peoMeta = metaFor("peo");
  const outcomesMeta = metaFor("outcomes");
  const curriculumMeta = metaFor("curriculum");
  const feeMeta = metaFor("feeStructure");
  const scholarshipMeta = metaFor("scholarship");
  const specializationMeta = metaFor("specialization");
  const faqMeta = metaFor("faq");

  const hasSidebar =
    Boolean(sidebar) &&
    (Boolean(sidebar?.banner) ||
      hasItems(sidebar?.facts) ||
      Boolean(sidebar?.applyLink) ||
      Boolean(sidebar?.brochureLink));
  const hasIntro = Boolean(overviewMeta || eligibilityMeta || hasSidebar);
  const hasDetails = hasSidebar || available.some((section) => section.key !== "faq");

  return (
    <div className="pd-page">
      <ProgramDetailsHeading heading={program.heading} />
      <ProgramDetailsMenu items={menuItems} />

      {hasDetails && (
        <section className="programs_details">
          {hasIntro && (
            <div className="container">
              <div className={hasSidebar ? "pro_grp" : "pro_grp pro_grp--no-sidebar"}>
                <div className="prog_overview">
                  <div className="prog_overview_sec">
                    {overviewMeta && sections.overview && (
                      <ProgramOverview data={sections.overview} meta={overviewMeta} />
                    )}
                    {eligibilityMeta && sections.eligibility && (
                      <ProgramEligibility data={sections.eligibility} meta={eligibilityMeta} />
                    )}
                  </div>
                </div>
                {hasSidebar && sidebar && <ProgramDetailsSidebar sidebar={sidebar} />}
              </div>
            </div>
          )}

          {teachingMeta && sections.teachingPedagogies && (
            <ProgramTeachingPedagogies data={sections.teachingPedagogies} meta={teachingMeta} />
          )}
          {peoMeta && sections.peo && <ProgramPeo data={sections.peo} meta={peoMeta} />}
          {outcomesMeta && sections.outcomes && (
            <ProgramOutcomes data={sections.outcomes} meta={outcomesMeta} />
          )}
          {curriculumMeta && sections.curriculum && (
            <ProgramCurriculum data={sections.curriculum} meta={curriculumMeta} />
          )}
          {feeMeta && sections.feeStructure && (
            <ProgramFeeStructure data={sections.feeStructure} meta={feeMeta} />
          )}
          {scholarshipMeta && sections.scholarship && (
            <ProgramScholarship data={sections.scholarship} meta={scholarshipMeta} />
          )}
          {specializationMeta && sections.specialization && (
            <ProgramSpecialization data={sections.specialization} meta={specializationMeta} />
          )}
        </section>
      )}

      {/* {faqMeta && sections.faq && <ProgramFaq data={sections.faq} meta={faqMeta} />} */}
    </div>
  );
}