import HappeningsTab, { tabMetadata, type TabPageProps } from "@/components/happenings/HappeningsTab";

export const metadata = tabMetadata("media-coverage");

export default function Page({ searchParams }: TabPageProps) {
  return <HappeningsTab tab="media-coverage" searchParams={searchParams} />;
}
