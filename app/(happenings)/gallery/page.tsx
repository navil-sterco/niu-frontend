import HappeningsTab, { tabMetadata, type TabPageProps } from "@/components/happenings/HappeningsTab";

export const metadata = tabMetadata("gallery");

export default function Page({ searchParams }: TabPageProps) {
  return <HappeningsTab tab="gallery" searchParams={searchParams} />;
}
