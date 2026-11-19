import parse from "html-react-parser";
import { hasHtml } from "@/lib/leadership/leadership-utils";
import { sanitizeCmsHtml } from "@/lib/leadership/leadership-html";

interface CmsHtmlProps {
  html?: string | null;
  className?: string;
}

export default function CmsHtml({ html, className }: CmsHtmlProps) {
  if (!hasHtml(html)) return null;
  const clean = sanitizeCmsHtml(html ?? "");
  if (!hasHtml(clean)) return null;

  return (
    <div className={["cms-html", className].filter(Boolean).join(" ")}>
      {parse(clean)}
    </div>
  );
}
