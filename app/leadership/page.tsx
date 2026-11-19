import type { Metadata } from "next";
import LeadershipPage from "@/components/leadership/leadership-page/leadership-page";
import {
  getLeadershipMembers,
  getLeadershipPageContent,
} from "@/lib/leadership/leadership-service";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getLeadershipPageContent();
  return { title: content.eyebrow, description: content.intro };
}

export default async function Page() {
  const [content, members] = await Promise.all([
    getLeadershipPageContent(),
    getLeadershipMembers(),
  ]);

  return <LeadershipPage content={content} members={members} />;
}
