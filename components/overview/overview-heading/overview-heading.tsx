import type { OverviewHeadingData } from "@/types/overview-types";
import "@/components/overview/overview-heading/overview-heading.css";

interface OverviewHeadingProps {
  heading: OverviewHeadingData;
}

export default function OverviewHeading({ heading }: OverviewHeadingProps) {
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
