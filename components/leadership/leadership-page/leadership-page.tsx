import type {
  LeadershipMember,
  LeadershipPageContent,
} from "@/types/leadership-types";
import LeadershipHeading from "@/components/leadership/leadership-heading/leadership-heading";
import LeadershipGrid from "@/components/leadership/leadership-grid/leadership-grid";
import "@/components/leadership/shared/leadership-shared.css";
import "@/components/leadership/leadership-page/leadership-page.css";

interface LeadershipPageProps {
  content: LeadershipPageContent;
  members: LeadershipMember[];
}

export default function LeadershipPage({ content, members }: LeadershipPageProps) {
  return (
    <div className="ld-page">
      <LeadershipHeading eyebrow={content.eyebrow} title={content.title} />

      <section className="leadership">
        <div className="container">
          {content.intro && (
            <div className="lead_cont">
              <p>{content.intro}</p>
            </div>
          )}
          <LeadershipGrid members={members} />
        </div>
      </section>
    </div>
  );
}
