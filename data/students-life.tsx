
import type { CampusStackProps } from "@/components/common/CampusStack";

export const studentLifeData: CampusStackProps = {
  sectionTitle: "Student Life",

  heading: (
    <>
      Discover Your Potential
      <span> Build Your Future</span>
    </>
  ),

  learnMoreText: "Explore More",
  learnMoreHref: "/student-life",

  stats: [
    {
      value: 50,
      suffix: "+",
      label: "Student Clubs",
    },
    {
      value: 30,
      suffix: "+",
      label: "Annual Events",
    },
  ],

  description:
    "Explore student activities, events, clubs, and opportunities to develop your skills and build lasting friendships.",

  slides: [
    {
      id: "student01",
      image: "/images/student-life1.webp",
      imageAlt: "Student activities",
      title: "Learn. Grow. Achieve.",
      description:
        "Discover new opportunities and develop your skills through student activities.",

      menuItems: [
        { label: "Student Clubs", href: "/clubs" },
        { label: "Events", href: "/events" },
        { label: "Activities", href: "/activities" },
      ],
    },

    {
      id: "student02",
      image: "/images/student-life2.webp",
      imageAlt: "Student campus experience",
      title: "Experience Campus Life.",
      description:
        "Make memories, build friendships, and discover new interests.",

      menuItems: [
        { label: "Campus Events", href: "/events" },
        { label: "Student Support", href: "/support" },
      ],
    },
  ],
};
