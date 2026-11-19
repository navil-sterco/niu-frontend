import parse from "html-react-parser";
import { hasHtml } from "@/lib/contact/contact-utils";
import { sanitizeCmsHtml } from "@/lib/contact/contact-html";

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
