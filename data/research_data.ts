
export interface ResearchItem {
    id: number;
    image: string;
    alt: string;
    title: string;
    href: string;
  }
  
  export interface FactItem {
    id: number;
    prefix?: string;   
    value: number;     
    suffix?: string;  
    plus?: boolean;    
    label: string;     
    sublabel: string;  
  }
  
  export const researchHeading = {
    title: "Research",
    tagline: "A SIRO-recognised",
    taglineHighlight: "research institution",
    description:
      "Our researchers are tackling the world’s greatest problems, from creating a more sustainable world to developing new treatments for chronic diseases.",
    cta: { label: "Learn More", href: "#0" },
    arrowIcon: "/images/left-errow.svg",
  };
  
  export const researchItems: ResearchItem[] = [
    {
      id: 1,
      image: "/images/research-hm1.webp",
      alt: "A Comprehensive Study on Natural Radiation Level in Shivalik Region",
      title: "A Comprehensive Study on Natural Radiation Level in Shivalik Region...",
      href: "#0",
    },
    {
      id: 2,
      image: "/images/research-hm2.webp",
      alt: "Intelligent System for Tourism Industry",
      title: "Intelligent System for Tourism Industry",
      href: "#0",
    },
    {
      id: 3,
      image: "/images/research-hm3.webp",
      alt: "Distribution pattern of Avian species along the elevation zone",
      title: "The distribution pattern of Avian species along the elevation zone...",
      href: "#0",
    },
  ];
  
  export const researchFacts: FactItem[] = [
    {
      id: 1,
      prefix: "₹",
      value: 40,
      suffix: "Lakhs",
      plus: true,
      label: "Research",
      sublabel: "Grant Value",
    },
    {
      id: 2,
      value: 20,
      plus: true,
      label: "Intramural",
      sublabel: "Research Grants",
    },
    {
      id: 3,
      value: 35,
      plus: true,
      label: "Interdisciplinary",
      sublabel: "Research Clusters",
    },
    {
      id: 4,
      value: 100,
      plus: true,
      label: "NSSIP Students",
      sublabel: "Engaged",
    },
  ];