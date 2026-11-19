import type { ContactPageContent } from "@/types/contact-types";

const ICON_SIZE = 56;

const reachDescription =
  "<p>Frequent DTC buses connect Noida and Delhi. Travelers from north India can reach Delhi by state or private buses, then take an auto or cab from the bus terminus to Noida.</p>";

const reachImage = {
  src: "/images/contact_list_img.webp",
  alt: "",
  width: 1000,
  height: 600,
};

export const contactPageContent: ContactPageContent = {
  eyebrow: "Connect With NIU Today",
  title: "Take the First Step Toward Excellence",

  info: [
    {
      id: "campus",
      kind: "address",
      title: "Main Campus",
      value:
        "Campus: Noida International University, Plot 1, Sector-17 A, Yamuna Expressway, Sector 17A, Gautam Budh Nagar, Uttar Pradesh 203201",
      href: null,
      icon: {
        src: "/images/contact-location.svg",
        alt: "",
        width: ICON_SIZE,
        height: ICON_SIZE,
      },
    },
    {
      id: "phone",
      kind: "phone",
      title: "Toll Free No",
      value: "(+91)0120-4862200",
      href: "tel:(+91)0120-4862200",
      icon: {
        src: "/images/contact-phone.svg",
        alt: "",
        width: ICON_SIZE,
        height: ICON_SIZE,
      },
    },
    {
      id: "email",
      kind: "email",
      title: "Mail Us on",
      value: "admissions@niu.edu.in",
      href: "mailto:admissions@niu.edu.in",
      icon: {
        src: "/images/contact-mail.svg",
        alt: "",
        width: ICON_SIZE,
        height: ICON_SIZE,
      },
    },
  ],

  form: {
    title: "Submit Your Request",
    banner: {
      src: "/images/contact-banner.webp",
      alt: "",
      width: 1000,
      height: 700,
    },
    placeholders: {
      name: "Name",
      email: "Email Address",
      phone: "Telephone Number",
      course: "Course Interested in",
      message: "How can we help?",
    },
    courseOptions: [
      {
        value: "btech-computer-science-engineering",
        label: "B.Tech Computer Science & Engineering",
      },
      {
        value: "btech-computer-science-engineering-ai-ml",
        label: "B.Tech Computer Science & Engineering – AI & ML",
      },
      {
        value: "btech-computer-science-in-cyber-security",
        label: "B.Tech Computer Science in Cyber Security",
      },
      {
        value: "btech-computer-science-engineering-data-science-with-hcl-guvi",
        label:
          "B.Tech Computer Science & Engineering – Data Science WITH HCL GUVI",
      },
      {
        value: "btech-computer-science-engineering-robotics-technology",
        label: "B.Tech Computer Science & Engineering – Robotics Technology",
      },
      { value: "btech-biotechnology", label: "B.Tech Biotechnology" },
      {
        value: "btech-mechanical-engineering",
        label: "B.Tech Mechanical Engineering",
      },
      { value: "btech-civil-engineering", label: "B.Tech Civil Engineering" },
      {
        value: "btech-electrical-engineering",
        label: "B.Tech Electrical Engineering",
      },
      {
        value: "btech-semiconductor-with-hcl",
        label: "B.Tech – Semiconductor with HCL",
      },
      {
        value: "btech-lateral-entry-cse-aiml-data-science",
        label: "B.Tech Lateral Entry (CSE, AI/ML, DATA SCIENCE)",
      },
      {
        value: "btech-lateral-entry-all-other-branches",
        label: "B.Tech Lateral Entry (All OTHER branches)",
      },
      {
        value: "mtech-computer-science-engineering",
        label: "M.Tech Computer Science Engineering",
      },
      { value: "mtech-biotechnology", label: "M.Tech Biotechnology" },
      {
        value: "mtech-electrical-engineering",
        label: "M.Tech Electrical Engineering",
      },
      {
        value: "diploma-in-electrical-engineering",
        label: "Diploma in Electrical Engineering",
      },
      {
        value: "diploma-in-mechanical-engineering",
        label: "Diploma in Mechanical Engineering",
      },
      {
        value: "diploma-in-civil-engineering",
        label: "Diploma in Civil Engineering",
      },
      {
        value: "diploma-in-computer-science-engineering",
        label: "Diploma in Computer Science & Engineering",
      },
      {
        value: "bachelor-of-commerce-hons",
        label: "Bachelor of Commerce (Hons.)",
      },
      {
        value:
          "bachelor-of-commerce-integrated-with-acca-association-of-chartered-certified-accountants",
        label:
          "Bachelor of Commerce Integrated with ACCA (Association of Chartered Certified Accountants)",
      },
      {
        value: "bachelor-of-hospital-health-management-with-certification",
        label: "Bachelor of Hospital & Health Management with Certification",
      },
      {
        value: "bachelor-of-business-administration",
        label: "Bachelor of Business Administration",
      },
      {
        value: "bcom-banking-financial-services-and-insurance-bfsi",
        label: "B.Com (Banking Financial Services and Insurance) (BFSI)",
      },
    ],
    robotLabel: "I'm not a robot",
    submitLabel: "Submit",
    successMessage:
      "Thank you! Your request has been submitted. Our admissions team will contact you shortly.",
  },

  reach: {
    title: "How to Reach NIU",
    defaultActiveId: "by-road",
    panels: [
      {
        id: "by-air",
        title: "NIU by Air",
        descriptionHtml: reachDescription,
        image: reachImage,
      },
      {
        id: "by-road",
        title: "NIU by Road",
        descriptionHtml: reachDescription,
        image: reachImage,
      },
      {
        id: "by-rail",
        title: "NIU by Rail",
        descriptionHtml: reachDescription,
        image: reachImage,
      },
    ],
  },

  map: {
    title: "Locate Us on Map",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.5478168691075!2d77.53697457600946!3d28.372517495839826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc74a1da523db%3A0xf0736e7a99d63eb0!2sNoida%20International%20University!5e0!3m2!1sen!2sin!4v1792394943110!5m2!1sen!2sin",
    iframeTitle: "Noida International University on Google Maps",
  },
};
