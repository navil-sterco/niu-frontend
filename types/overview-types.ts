export interface OverviewImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TextSegment {
  text: string;
  highlight?: boolean;
}

export type OverviewTextValue = string | TextSegment[];

export interface OverviewStat {
  id: string;
  value: number;
  suffix?: string | null;
  label: OverviewTextValue;
}

export interface OverviewVideoSource {
  url: string;
  title?: string | null;
}

interface OverviewSectionBase {
  id: string;
  isActive?: boolean;
}

export interface OverviewIntroBannerSection extends OverviewSectionBase {
  type: "intro-banner";
  introHtml?: string | null;
  image?: OverviewImage | null;
  stats?: OverviewStat[] | null;
  descriptionHtml?: string | null;
}

export interface OverviewGalleryTile {
  id: string;
  image: OverviewImage;
  stat?: OverviewStat | null;
  icon?: OverviewImage | null;
  video?: OverviewVideoSource | null;
}

export interface OverviewGallerySection extends OverviewSectionBase {
  type: "gallery";
  title?: OverviewTextValue | null;
  descriptionHtml?: string | null;
  primary?: OverviewGalleryTile | null;
  secondary?: OverviewGalleryTile | null;
  tertiary?: OverviewGalleryTile[] | null;
}

export interface OverviewAchievementsSection extends OverviewSectionBase {
  type: "achievements";
  quote?: OverviewTextValue | null;
  descriptionHtml?: string | null;
  image?: OverviewImage | null;
  heading?: OverviewTextValue | null;
  bodyHtml?: string | null;
  stats?: OverviewStat[] | null;
}

export interface OverviewContentSplitSection extends OverviewSectionBase {
  type: "content-split";
  title?: string | null;
  quote?: OverviewTextValue | null;
  bodyHtml?: string | null;
  image?: OverviewImage | null;
}

export interface OverviewVisionMissionSection extends OverviewSectionBase {
  type: "vision-mission";
  title?: string | null;
  statement?: OverviewTextValue | null;
  image?: OverviewImage | null;
  listTitle?: string | null;
  items?: string[] | null;
}

export type OverviewSection =
  | OverviewIntroBannerSection
  | OverviewGallerySection
  | OverviewAchievementsSection
  | OverviewContentSplitSection
  | OverviewVisionMissionSection;

export type OverviewSectionType = OverviewSection["type"];

export interface OverviewHeadingData {
  eyebrow: string;
  title: string;
}

export interface OverviewPageData {
  slug: string;
  title: string;
  description?: string | null;
  heading: OverviewHeadingData;
  sections: OverviewSection[];
}
