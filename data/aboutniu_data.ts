
export interface AboutSlide {
    id: number;
    image: string;
    alt: string;
    count: number;       
    suffix: string;     
    label: string;       
    videoSrc: string;
  }
  
  export interface PartnerLogo {
    id: number;
    image: string;
    alt: string;
  }
  
  export const aboutNiuSection = {
    title: "About NIU",
    headingMain: "Accreditation, Global Recognition,",
    headingHighlight: "& Commitment to Excellence",
    videoIcon: "/images/video-round-icon.svg",
    virtualTour: { label: "Virtual Tour", href: "#0", icon: "/images/360-degrees.svg" },
  };
  
  export const aboutSlides: AboutSlide[] = [
    {
      id: 1,
      image: "/images/about-hmslide1.webp",
      alt: "NIU campus with 80K+ students",
      count: 80,
      suffix: "K",
      label: "students",
      videoSrc: "video/niu.mp4",
    },
    {
      id: 2,
      image: "/images/about-hmslide2.webp",
      alt: "NIU campus with 70K+ students",
      count: 70,
      suffix: "K",
      label: "students",
      videoSrc: "video/niu.mp4",
    },
    {
      id: 3,
      image: "/images/about-hmslide3.webp",
      alt: "NIU campus with 60K+ students",
      count: 60,
      suffix: "K",
      label: "students",
      videoSrc: "video/niu.mp4",
    },
  ];
  
  export const industrySection = {
    title: "Industry Collaboration",
    subtitle: "Real-world learning through partnerships",
  };
  
  export const partnerLogos: PartnerLogo[] = [
    { id: 1, image: "/images/why-shose-logo1.webp", alt: "Partner logo 1" },
    { id: 2, image: "/images/why-shose-logo2.webp", alt: "Partner logo 2" },
    { id: 3, image: "/images/why-shose-logo1.webp", alt: "Partner logo 3" },
    { id: 4, image: "/images/why-shose-logo3.webp", alt: "Partner logo 4" },
    { id: 5, image: "/images/why-shose-logo4.webp", alt: "Partner logo 5" },
  ];