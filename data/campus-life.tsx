
import type { CampusStackProps } from "@/components/common/CampusStack";

export const campusLifeData: CampusStackProps = {
  sectionTitle: "Campus Life",

  heading: (
    <>
      World-Class Infrastructure
      <span> for a Balanced Life</span>
    </>
  ),

  learnMoreText: "Learn More",
  learnMoreHref: "#0",

  stats: [
    {
      value: 75,
      suffix: "+",
      label: "Acres Green Campus",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Campus Security & Wi-Fi",
    },
  ],

  description:
    "Academic facilities feature a well-equipped library, modern digital classrooms, spacious seminar halls, and highly advanced Anatomy and Biochemistry labs.",

  slides: [
    {
      id: "slide01",
      image: "/images/hmcampus_life1.webp",
      imageAlt: "NIU campus life",
      title: "Connect. Create. Celebrate.",
      description:
        "Vibrant student experiences that encourage participation, creativity, leadership, and community.",

      menuItems: [
        { label: "Clubs & Societies", href: "#0" },
        { label: "NCC", href: "#0" },
        { label: "Cultural Activities", href: "#0" },
        { label: "NSS", href: "#0" },
        { label: "NIU Events", href: "#0" },
      ],
    },

    {
      id: "slide02",
      image: "/images/hmcampus_life2.webp",
      imageAlt: "NIU campus activities",
      title: "Connect. Create. Celebrate-2.",
      description:
        "Vibrant student experiences that encourage participation, creativity, leadership, and community.",

      menuItems: [
        { label: "Clubs & Societies", href: "#0" },
        { label: "NCC", href: "#0" },
        { label: "Cultural Activities", href: "#0" },
        { label: "NSS", href: "#0" },
      ],
    },

    {
      id: "slide03",
      image: "/images/hmcampus_life3.webp",
      imageAlt: "NIU campus experience",
      title: "Connect. Create. Celebrate-3.",
      description:
        "Vibrant student experiences that encourage participation, creativity, leadership, and community.",

      menuItems: [
        { label: "Clubs & Societies", href: "#0" },
        { label: "NCC", href: "#0" },
        { label: "Cultural Activities", href: "#0" },
        { label: "NSS", href: "#0" },
      ],
    },
  ],
};
