
export interface Program {
    id: number;
    title: string;
    image: string;
    alt: string;
    href: string;
  }
  
  export interface LinkItem {
    id: number;
    label: string;
    href: string;
  }
  
  export const studyData = {
    heading: "STUDY AT NIU",
    tagline: "Discover. Learn. Achieve.",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    arrowIcon: "/images/left-errow.svg",
  };
  
  export const programs: Program[] = [
    { id: 1, title: "Under Graduate", image: "/images/hmug.webp", alt: "Under Graduate", href: "#0" },
    { id: 2, title: "Post Graduate", image: "/images/hmpg.webp", alt: "Post Graduate", href: "#0" },
    { id: 3, title: "Diploma", image: "/images/hmpg.webp", alt: "Diploma", href: "#0" },
  ];
  
  export const browseLinks: LinkItem[] = [
    { id: 1, label: "Browse by School", href: "#" },
    { id: 2, label: "Browse by Department", href: "#" },
  ];
  
  export const contactInfo = {
    email: { address: "admissions@niu.ac.in", icon: "/images/hm-email-icon.svg" },
    phone: { number: "1800-102-1900", icon: "/images/hm-call-icon.svg" },
    apply: { label: "Apply Now", href: "#0" },
  };
  
  export const admissionLinks: LinkItem[] = [
    { id: 1, label: "Admission Process", href: "#0" },
    { id: 2, label: "Scholarship & Financial Assistance", href: "#0" },
    { id: 3, label: "Admission Document & Undertaking", href: "#0" },
    { id: 4, label: "Course, Eligibility & Fee Structure", href: "#0" },
  ];