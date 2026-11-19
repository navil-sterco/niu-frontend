import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetailsView from "@/components/program-details/program-details-view/program-details-view";
import {
  getProgramDetails,
  getProgramDetailsSlugs,
} from "@/lib/program-details/program-details-data";
import { stripHtml } from "@/lib/program-details/program-details-utils";

interface ProgramDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProgramDetailsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProgramDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgramDetails(slug);
  if (!program) return { title: "Program not found" };

  const description =
    stripHtml(program.sections.overview?.html).slice(0, 160) ||
    `Explore ${program.title} at Noida International University.`;

  return { title: program.title, description };
}

export default async function ProgramDetailsPage({ params }: ProgramDetailsPageProps) {
  const { slug } = await params;
  const program = await getProgramDetails(slug);
  if (!program) notFound();

  return <ProgramDetailsView program={program} />;
}