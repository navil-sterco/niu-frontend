export type Achievement =
  | {
      id: number;
      type: "logo";
      logo: { src: string; srcSet?: string; alt: string };
      title: { main: string; highlight: string };
      desc: { main: string; highlight?: string };
    }
  | {
      id: number;
      type: "image";
      image: { src: string; alt: string };
    }
  | {
      id: number;
      type: "score";
      image: { src: string; alt: string };
      caption: string;
      score: string;
      outOf: string;
      desc: { main: string; highlight: string };
    }
  | {
      id: number;
      type: "solid";
      fact: string;
      label: string;
      title: { main: string; highlight: string };
      desc: { main: string; highlight: string };
    };

export const achievements: Achievement[] = [
  {
    id: 1,
    type: "logo",
    logo: {
      src: "/images/nba-logo.webp",
      srcSet: "/images/nba-logo1366.webp 1366w, /images/nba-logo.webp 2545w",
      alt: "NBA logo",
    },
    title: { main: "NBA", highlight: "Accredited" },
    desc: { main: "Reflecting excellence in", highlight: "technical education" },
  },
  {
    id: 2,
    type: "logo",
    logo: {
      src: "/images/inc-logo.webp",
      srcSet: "/images/inc-logo1366.webp 1750w, /images/inc-logo.webp 2545w",
      alt: "Indian Nursing Council logo",
    },
    title: { main: "Indian Nursing", highlight: "Council" },
    desc: {
      main: "Ensuring excellence in nursing",
      highlight: "education & professional standards.",
    },
  },
  {
    id: 3,
    type: "image",
    image: { src: "/images/hmach-image1.webp", alt: "ach image" },
  },
  {
    id: 4,
    type: "score",
    image: { src: "/images/ach-nacbg.webp", alt: "ach image" },
    caption: "Sed ut perspiciatis unde",
    score: "3.44",
    outOf: "/4",
    desc: { main: "NAAC A+ First", highlight: "Accreditation Cycle" },
  },
  {
    id: 5,
    type: "solid",
    fact: "06",
    label: "in India",
    title: { main: "Education World", highlight: "Rankings 2024" },
    desc: { main: "School of Business", highlight: "Management" },
  },
  {
    id: 6,
    type: "image",
    image: { src: "/images/hmach-image2.webp", alt: "ach image" },
  },
  {
    id: 7,
    type: "logo",
    logo: {
      src: "/images/dsir-logo.webp",
      srcSet: "/images/dsir-logo1366.webp 1750w, /images/dsir-logo.webp 2545w",
      alt: "DSIR logo",
    },
    title: { main: "SIRO", highlight: "Recognised" },
    desc: {
      main: "Department of Scientific &",
      highlight: "Industrial Research (DSIR)",
    },
  },
  {
    id: 8,
    type: "logo",
    logo: {
      src: "/images/comp-logo.webp",
      srcSet: "/images/comp-logo1366.webp 1750w, /images/comp-logo.webp 2545w",
      alt: "CSR logo",
    },
    title: { main: "Top University", highlight: "of India" },
    desc: { main: "CSR Recognition 2025" },
  },
];