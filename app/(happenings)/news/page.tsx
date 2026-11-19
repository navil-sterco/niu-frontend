import HappeningsTab, { tabMetadata, type TabPageProps } from "@/components/happenings/HappeningsTab";

export const metadata = tabMetadata("news");

export default function Page({ searchParams }: TabPageProps) {
  return <HappeningsTab tab="news" searchParams={searchParams} />;
}
