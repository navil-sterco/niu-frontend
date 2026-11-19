import HtmlContent from "@/components/common/HtmlContent";
import { hasHtml } from "@/lib/overview/overview-utils";

interface OverviewHtmlProps {
  html?: string | null;
}

export default function OverviewHtml({ html }: OverviewHtmlProps) {
  if (!hasHtml(html)) return null;
  return <HtmlContent html={html ?? ""} />;
}
