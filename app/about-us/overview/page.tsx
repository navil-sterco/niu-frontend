import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OverviewPage from "@/components/overview/overview-page/overview-page";
import { getOverviewPage } from "@/lib/overview/overview-service";

const SLUG = "about-us";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getOverviewPage(SLUG);
  if (!data) return { title: "Overview" };
  return { title: data.title, description: data.description ?? undefined };
}

export default async function Page() {
  const data = await getOverviewPage(SLUG);
  if (!data) notFound();
  return <OverviewPage data={data} />;
}
