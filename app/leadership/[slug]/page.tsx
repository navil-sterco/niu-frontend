import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeadershipDetails from "@/components/leadership/leadership-details/leadership-details";
import {
  getLeadershipAssets,
  getLeadershipMember,
  getLeadershipPageContent,
  getLeadershipSlugs,
} from "@/lib/leadership/leadership-service";
import { stripHtml } from "@/lib/leadership/leadership-utils";

interface LeadershipDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getLeadershipSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LeadershipDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = await getLeadershipMember(slug);
  if (!member) return { title: "Profile not found" };

  const description =
    stripHtml(member.introductionHeading).slice(0, 160) ||
    stripHtml(member.biography).slice(0, 160) ||
    `${member.name}, ${member.designation} at Noida International University.`;

  return {
    title: `${member.name} – ${member.designation}`,
    description,
    openGraph: {
      title: `${member.name} – ${member.designation}`,
      description,
      images: [member.heroImage ?? member.image],
    },
  };
}

export default async function LeadershipDetailsPage({ params }: LeadershipDetailsPageProps) {
  const { slug } = await params;
  const member = await getLeadershipMember(slug);
  if (!member) notFound();

  const [content, assets] = await Promise.all([
    getLeadershipPageContent(),
    getLeadershipAssets(),
  ]);
            
  return <LeadershipDetails member={member} content={content} assets={assets} />;
}
