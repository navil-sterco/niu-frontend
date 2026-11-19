import Link from "next/link";
import type { ReactNode } from "react";
import type { ProgramLink as ProgramLinkData } from "@/types/program-details";

interface ProgramLinkProps {
  link: ProgramLinkData;
  className?: string;
  children?: ReactNode;
}

const EXTERNAL = /^(https?:)?\/\//i;
const NON_ROUTE = /^(mailto|tel):/i;

/** Internal links use next/link; external, mailto and tel use a plain <a>. */
export default function ProgramLink({ link, className, children }: ProgramLinkProps) {
  const content = children ?? link.label;

  if (link.external || EXTERNAL.test(link.href)) {
    return (
      <a href={link.href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  if (NON_ROUTE.test(link.href)) {
    return (
      <a href={link.href} className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}