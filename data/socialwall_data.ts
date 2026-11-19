// components/home/social-wall/social-wall.data.ts

export interface SocialPost {
    id: number;
    image: string;
    alt: string;
  }
  
  export interface SocialLink {
    id: number;
    name: string; // used for alt text and aria-label
    icon: string;
    href: string;
  }
  
  export const socialWallSection = {
    title: "NIU Social Wall",
  };
  
  export const socialPosts: SocialPost[] = [
    { id: 1, image: "/images/hm-social1.webp", alt: "NIU Social Wall post 1" },
    { id: 2, image: "/images/hm-social2.webp", alt: "NIU Social Wall post 2" },
    { id: 3, image: "/images/hm-social3.webp", alt: "NIU Social Wall post 3" },
    { id: 4, image: "/images/hm-social4.webp", alt: "NIU Social Wall post 4" },
  ];
  
  // Names are guessed from the icon filenames (f, x, u, i, in).
  // Please correct them and set the real profile URLs.
  export const socialLinks: SocialLink[] = [
    { id: 1, name: "Facebook", icon: "/images/f.svg", href: "#0" },
    { id: 2, name: "X (Twitter)", icon: "/images/x.svg", href: "#0" },
    { id: 3, name: "YouTube", icon: "/images/u.svg", href: "#0" },
    { id: 4, name: "Instagram", icon: "/images/i.svg", href: "#0" },
    { id: 5, name: "LinkedIn", icon: "/images/in.svg", href: "#0" },
  ];