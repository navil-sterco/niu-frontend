import { Fragment } from "react";
import type { ReactNode } from "react";
import type { OverviewTextValue } from "@/types/overview-types";

interface OverviewTextProps {
  text?: OverviewTextValue | null;
}

export default function OverviewText({ text }: OverviewTextProps) {
  if (!text) return null;
  const segments = typeof text === "string" ? [{ text }] : text;

  return (
    <>
      {segments.map((segment, index) => {
        const nodes: ReactNode[] = [];
        segment.text.split("\n").forEach((line, lineIndex) => {
          if (lineIndex > 0) nodes.push(<br key={`br-${lineIndex}`} />);
          nodes.push(line);
        });
        return segment.highlight ? (
          <span key={index}>{nodes}</span>
        ) : (
          <Fragment key={index}>{nodes}</Fragment>
        );
      })}
    </>
  );
}
