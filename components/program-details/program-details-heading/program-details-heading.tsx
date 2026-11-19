import type { ProgramHeading } from "@/types/program-details";
import "@/components/program-details/program-details-heading/program-details-heading.css";

interface ProgramDetailsHeadingProps {
  heading: ProgramHeading;
}

export default function ProgramDetailsHeading({ heading }: ProgramDetailsHeadingProps) {
  return (
    <section className="common_head">
      <div className="container">
        <div className="common_title">
          <h1>{heading.eyebrow}</h1>
          <blockquote>{heading.title}</blockquote>
        </div>
      </div>
    </section>
  );
}