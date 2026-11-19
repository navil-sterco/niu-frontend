import { Fragment } from "react";
import type { FeeStructureSection } from "@/types/program-details";
import type { SectionMeta } from "@/lib/program-details/section-config";
import ApplyButton from "@/components/program-details/shared/apply-button/apply-button";
import CmsHtml from "@/components/program-details/shared/cms-html/cms-html";
import ProgramImageView from "@/components/program-details/shared/program-image/program-image";
import SectionHeading from "@/components/program-details/shared/section-heading/section-heading";
import { hasText } from "@/lib/program-details/program-details-utils";
import "./program-fee-structure.css";

interface ProgramFeeStructureProps {
  data: FeeStructureSection;
  meta: SectionMeta;
}

export default function ProgramFeeStructure({ data, meta }: ProgramFeeStructureProps) {
  const highlights = data.highlights ?? [];
  const breakdown = data.breakdown ?? [];
  const hasSummary = hasText(data.totalAmount);
  const hasBreakdown = breakdown.length > 0;
  const footnoteParts = (data.breakdownFootnote ?? "")
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <div id={meta.id} className="pd-section fee_structure">
      <div className="container-lg max-container-lg">
        <div className="fee_structure_bg">
          <div className="col-lg-7">
            <div className="fee_structure_cont">
              <SectionHeading title={meta.title} show={meta.showHeading} />
              {hasText(data.subtitle) && (
                <blockquote>
                  {/* subtitle may contain <span> to colour a word; sanitized inline */}
                  <CmsHtml html={data.subtitle} as="span" />
                </blockquote>
              )}
              <CmsHtml html={data.html} />
            </div>

            {highlights.length > 0 && (
              <div className="fee_structure_bx">
                <ul>
                  {highlights.map((item) => (
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

            {(hasSummary || hasBreakdown) && (
              <div
                className={
                  hasSummary && hasBreakdown
                    ? "total_program"
                    : "total_program total_program--single"
                }
              >
                <ProgramImageView image={data.image} className="img-fluid total_girl" />

                {hasSummary && (
                  <div className="total_list total_list--summary">
                    {hasText(data.totalLabel) && <h4>{data.totalLabel}</h4>}
                    <blockquote>{data.totalAmount}</blockquote>
                    {hasText(data.totalNote) && <p>{data.totalNote}</p>}
                    <ApplyButton link={data.cta} />
                  </div>
                )}

                {hasBreakdown && (
                  <div className="total_list total_list--breakdown">
                    {hasText(data.breakdownTitle) && <h4>{data.breakdownTitle}</h4>}
                    <div className="fee-table table-responsive">
                      <table>
                        <tbody>
                          {breakdown.map((row) => (
                            <tr key={row.id}>
                              <td>{row.label}</td>
                              <td>{row.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {footnoteParts.length > 0 && (
                        <h5>
                          {footnoteParts.map((part, index) => (
                            <Fragment key={part}>
                              {index > 0 && <span>|</span>}
                              {part}
                            </Fragment>
                          ))}
                        </h5>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}