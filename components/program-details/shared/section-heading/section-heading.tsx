interface SectionHeadingProps {
  /** Always comes from config/data, never from the CMS HTML. */
  title?: string | null;
  show?: boolean;
  /** "label" = small bold <h4>. "display" = large <blockquote> (original markup). */
  variant?: "label" | "display";
  className?: string;
}

export default function SectionHeading({
  title,
  show = true,
  variant = "label",
  className,
}: SectionHeadingProps) {
  if (!show || !title?.trim()) return null;
  return variant === "display" ? (
    <blockquote className={className}>{title}</blockquote>
  ) : (
    <h4 className={className}>{title}</h4>
  );
}