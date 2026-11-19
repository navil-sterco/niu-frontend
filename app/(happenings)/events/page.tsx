import HappeningsTab, { tabMetadata, type TabPageProps } from "@/components/happenings/HappeningsTab";

export const metadata = tabMetadata("events");

export default function Page({ searchParams }: TabPageProps) {
  return <HappeningsTab tab="events" searchParams={searchParams} />;
}
