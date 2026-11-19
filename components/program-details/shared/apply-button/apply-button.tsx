import type { ProgramLink as ProgramLinkData } from "@/types/program-details";
import ProgramLink from "@/components/program-details/shared/program-link/program-link";

interface ApplyButtonProps {
  link?: ProgramLinkData | null;
  className?: string;
}

export default function ApplyButton({ link, className }: ApplyButtonProps) {
  if (!link?.href) return null;
  return (
    <div className={["sticky_btn", className].filter(Boolean).join(" ")}>
      <ProgramLink link={link} className="apply-btn" />
    </div>
  );
}