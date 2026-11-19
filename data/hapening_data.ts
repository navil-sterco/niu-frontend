
export interface HappeningBase {
    id: number;
    image: string;
    alt: string;
    href: string;
  }
  
  export interface HappeningPlain extends HappeningBase {
    type: "plain";
    date: string;   
    title: string;
  }
  
  export interface HappeningEvent extends HappeningBase {
    type: "event";
    day: string;    
    month: string;  
    year: string;   
    heading: string;      
    titleMain: string;    
    titleHighlight: string;
  }
  
  export type HappeningItem = HappeningPlain | HappeningEvent;
  
  export const happeningSection = {
    title: "Happenings",
    arrowIcon: "/images/left-errow.svg",
    cta: { label: "Learn More", href: "#0" },
  };
  
  export const featuredHappening: HappeningPlain = {
    id: 1,
    type: "plain",
    image: "/images/hmhapning-lg1.webp",
    alt: "NIU graduates honoured Arts Awards",
    date: "01.Jan.2026",
    title: "NIU graduates honoured Arts Awards",
    href: "#",
  };
  
  export const happenings: HappeningItem[] = [
    {
      id: 2,
      type: "event",
      image: "/images/hmhapning-sm1.webp",
      alt: "Workshop on Climate Change",
      day: "05",
      month: "Mar",
      year: "26",
      heading: "WORKSHOP ON",
      titleMain: "CLIMATE",
      titleHighlight: "CHANGE",
      href: "#",
    },
    {
      id: 3,
      type: "plain",
      image: "/images/hmhapning-sm2.webp",
      alt: "Exploring New Frontiers with NIU",
      date: "01.Jan.2026",
      title: "Exploring New Frontiers with NIU",
      href: "#",
    },
    {
      id: 4,
      type: "plain",
      image: "/images/hmhapning-sm3.webp",
      alt: "NIU graduates honoured Arts Awards",
      date: "01.Jan.2026",
      title: "NIU graduates honoured Arts Awards",
      href: "#",
    },
    {
      id: 5,
      type: "plain",
      image: "/images/hmhapning-sm4.webp",
      alt: "Shaping Tomorrow: The NIU Experience",
      date: "01.Jan.2026",
      title: "Shaping Tomorrow: The NIU Experience",
      href: "#",
    },
  ];