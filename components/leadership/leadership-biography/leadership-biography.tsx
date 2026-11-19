import CmsHtml from "@/components/leadership/shared/cms-html/cms-html";
import "@/components/leadership/leadership-biography/leadership-biography.css";

interface LeadershipBiographyProps {
  html?: string | null;
}

export default function LeadershipBiography({ html }: LeadershipBiographyProps) {
  return <CmsHtml html={html} className="leader_bio" />;
}
