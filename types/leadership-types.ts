
export interface LeadershipSocialLinks {
  linkedin?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  x?: string | null;
}

export interface LeadershipMember {
  id: number;
  slug: string;
  name: string;
  designation: string;
  image: string;
  heroImage?: string | null;
  introductionHeading?: string | null;
  introduction?: string | null;
  biography?: string | null;
  videoUrl?: string | null;
  videoThumbnail?: string | null;
  socialLinks?: LeadershipSocialLinks | null;
}

export interface LeadershipPageContent {
  eyebrow: string;
  title: string;
  intro: string;
}

export interface LeadershipAssets {
  detailsBackground: string;
  detailsOverlay: string;
  videoPlayIcon: string;
}
