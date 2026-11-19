import type { ProgramDetails } from "@/types/program-details";

const ICON = (src: string, alt: string, width = 24, height = 24) => ({
  src,
  alt,
  width,
  height,
});



const btechCse: ProgramDetails = {
  id: 30,
  slug: "btech-computer-science-engineering",
  title: "B.Tech Computer Science & Engineering",
  description: null,
  duration: "4 Years",
  fee: "₹7,07,700",
  level: {
    id: 94,
    title: "Undergraduate Programmes",
    slug: "undergraduate-programmes",
  },
  schools: [
    {
      id: 10,
      title: "School of Engineering & Technology",
      slug: "school-of-engineering-technology",
    },
  ],
  departments: [
    {
      id: 20,
      title: "Computer Science & Engineering",
      slug: "computer-science-engineering",
    },
  ],

  heading: {
    eyebrow: "Programs",
    title: "B.Tech. Computer Science & Engineering",
  },

  sidebar: {
    banner: {
      src: "/images/programs_sticky_banner.webp",
      alt: "B.Tech Computer Science & Engineering",
      width: 420,
      height: 520,
    },
    badge: {
      image: {
        src: "/images/programs_sticky_img.webp",
        alt: "NBA accreditation",
        width: 102,
        height: 102,
      },
      text: "Accredited specifically recognized for the B.Tech CSE program.",
    },
    facts: [
      {
        id: "level",
        value: "Undergraduate",
        label: "Level",
        icon: ICON("/images/programs_icons3.svg", "Level"),
      },
      {
        id: "duration",
        value: "4 Years",
        label: "Duration",
        icon: ICON("/images/programs_icons2.svg", "Duration"),
      },
      {
        id: "first-year-fee",
        value: "₹ 2.7 L",
        label: "1st Year",
        icon: ICON("/images/programs_icons1.svg", "1st year fee"),
      },
    ],
    applyLink: { label: "Apply Now", href: "/admissions/apply" },
    brochureLink: null,
    brochureIcon: ICON("/images/programs_stickypdf.webp", "PDF", 15, 15),
  },

  sections: {
    overview: {
      menuLabel: "Overview",
      title: "Overview",
      showHeading: true,
      html:
        "<p>The B.Tech Computer Science &amp; Engineering programme at Noida International University is designed to build strong foundations in computer science, programming, software development, and emerging technologies. The programme combines theoretical knowledge with practical learning to help students develop technical expertise, problem-solving abilities, and industry-ready skills.</p>" +
        "<p>Students gain exposure to programming, computing concepts, software development, data handling, and modern technology applications through classroom learning, practical sessions, projects, and industry-oriented activities.</p>",
      stats: [
        {
          id: "ranking",
          value: "Ranked 191",
          description: "across India in the Private Engineering category.",
        },
        {
          id: "naac",
          value: "NAAC A+",
          description: "Accredited with A+ Grade by the NAAC",
        },
        {
          id: "placement",
          value: "90%",
          superscript: "+",
          description: "Placement Success Rate for eligible CS graduates.",
        },
      ],
    },

    eligibility: {
      menuLabel: "Eligibility Criteria",
      title: "Eligibility",
      showHeading: true,
      highlight: "Min.50%",
      summary: "Aggregate in 10+2",
      html:
        "<p>Qualifying entry requirement: WBJEE and JEE (main). Admission to the second year of B. Tech program (Lateral Entry) is based on qualifying JELET.</p>",
    },

    teachingPedagogies: {
      menuLabel: "Teaching Pedagogies",
      title: "Teaching Pedagogies",
      showHeading: true,
      html:
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>",
      image: {
        src: "/images/teaching_img.webp",
        alt: "Teaching pedagogies",
        width: 1090,
        height: 900,
      },
      items: [
        {
          id: "pbl",
          title: "Project-Based Learning (PBL)",
          description:
            "Students apply multidisciplinary knowledge (e.g., thermodynamics, materials science, kinematics) to build physical or digital",
          icon: ICON("/images/project_icons.svg", "", 66, 66),
        },
        {
          id: "lab",
          title: "Experiential & Lab-Based Learning",
          description:
            "Focuses heavily on hands-on practicals, utilizing modern CNC machines, flow loops, and material testing equipment.",
          icon: ICON("/images/project_icons.svg", "", 66, 66),
        },
        {
          id: "cae",
          title: "Computer-Aided Engineering (CAE) Integration",
          description:
            "Extensive use of simulation software like ANSYS, MATLAB, and CATIA to teach concepts like stress analysis,",
          icon: ICON("/images/project_icons.svg", "", 66, 66),
        },
      ],
      cta: { label: "Apply Now", href: "/admissions/apply" },
    },

    peo: {
      menuLabel: "PEO",
      title: "Program Educational Objectives (PEO)",
      showHeading: true,
      subtitle: "Preparing Graduates for Career Success",
      backgroundImage: {
        src: "/images/poe_right_img.svg",
        alt: "",
        width: 1163,
        height: 870,
      },
      items: [
        {
          id: "peo-1",
          number: "01",
          text: "Demonstrate strong technical and professional knowledge in computer science and related domains.",
        },
        {
          id: "peo-2",
          number: "02",
          text: "Apply computational thinking and problem-solving skills to design efficient solutions.",
        },
        {
          id: "peo-3",
          number: "03",
          text: "Exhibit teamwork, innovation, and ethical responsibility in professional practice.",
        },
        {
          id: "peo-4",
          number: "04",
          text: "Engage in lifelong learning to stay updated with emerging technologies.",
        },
      ],
    },

    outcomes: {
      menuLabel: "Program Outcomes",
      title: "Program Outcomes (POs)",
      showHeading: true,
      items: [
        {
          id: "po-1",
          code: "P01",
          title: "Architectural Knowledge",
          description:
            "Apply the knowledge of design, structural systems, building materials, environmental science, and architectural principles to solve complex challenges in the built environment.",
        },
        {
          id: "po-2",
          code: "P02",
          title: "Problem Analysis",
          description:
            "Identify, research, and analyze architectural and urban development problems using contextual knowledge, site studies, and design principles to arrive at creative and functional solutions.",
        },
        {
          id: "po-3",
          code: "P03",
          title: "Design/Development of Solutions",
          description:
            "Design innovative, sustainable, and user-centric architectural solutions and spatial systems that meet functional, cultural, societal, and environmental needs, ensuring public health, safety, and inclusivity.",
        },
        {
          id: "po-4",
          code: "P04",
          title: "Conduct Investigations of Complex Problems",
          description:
            "Use research-based knowledge including case studies, site surveys, material testing, simulations, and design analysis to draw meaningful conclusions for real-world architectural challenges.",
        },
        {
          id: "po-5",
          code: "P05",
          title: "Modern Tool Usage",
          description:
            "Create, select, and apply appropriate techniques, digital resources, and modern architectural tools such as BIM, CAD, 3D modeling, and simulation software to enhance design outcomes, while understanding their limitations.",
        },
        {
          id: "po-6",
          code: "P06",
          title: "The Architect and Society",
          description:
            "Apply contextual reasoning and architectural knowledge to address societal, cultural, legal, and safety issues while designing spaces that respond responsibly to community needs and lifestyles.",
        },
      ],
      cta: { label: "Apply Now", href: "/admissions/apply" },
    },

    curriculum: {
      menuLabel: "Curriculum",
      title: "Curriculum",
      showHeading: true,
      subtitle: "Semester-wise syllabus PDF",
      items: [1, 2, 3, 4, 5].map((n) => ({
        id: `semester-${n}`,
        label: `Semester-${n}`,
        href: null,
        icon: {
          src: "/images/curriculam_pdf.webp",
          alt: "",
          width: 48,
          height: 48,
        },
      })),
    },

    feeStructure: {
      menuLabel: "Fee Structure",
      title: "Fee Structure",
      showHeading: true,
      subtitle: "Plan Your Investment in Your Future",
      html:
        "<p>The fee structure provides students with transparent information about the financial requirements of the B.Tech Computer Science &amp; Engineering programme.</p>",
      highlights: [
        {
          id: "affordable",
          text: "Affordable Transparent Fee Structure",
          icon: ICON("/images/fee_structure_bx3.svg", "", 45, 45),
        },
        {
          id: "value",
          text: "High Value for Your",
          icon: ICON("/images/fee_structure_bx1.svg", "", 45, 45),
        },
        {
          id: "placement",
          text: "Strong Placement Support",
          icon: ICON("/images/fee_structure_bx2.svg", "", 45, 45),
        },
        {
          id: "aid",
          text: "Scholarships & Financial Aid Available",
          icon: ICON("/images/fee_structure_bx4.svg", "", 45, 45),
        },
      ],
      image: {
        src: "/images/fee_structure_img.webp",
        alt: "",
        width: 400,
        height: 560,
      },
      totalLabel: "Total Program Fee",
      totalAmount: "₹ 7,07,700",
      totalNote: "(₹1,15,000 per semester)",
      breakdownTitle: "Fee Breakdown",
      breakdown: [
        { id: "tuition", label: "Tuition Fee", amount: "₹ 3,60,000" },
        { id: "lab", label: "Lab & Resource Fee", amount: "₹ 40,000" },
        { id: "exam", label: "Examination Fee", amount: "₹ 20,000" },
        { id: "other", label: "Other Charges", amount: "₹ 10,000" },
      ],
      breakdownFootnote:
        "Multiple Payment Options | Scholarships for Meritorious students",
      cta: { label: "Apply Now", href: "/admissions/apply" },
    },

    scholarship: {
      menuLabel: "Scholarship",
      title: "Scholarship",
      showHeading: true,
      subtitle: "Support for Your Academic Journey",
      image: {
        src: "/images/scholarship-img.webp",
        alt: "Scholarship",
        width: 546,
        height: 520,
      },
      html:
        "<p>NIU provides scholarship opportunities to encourage meritorious students and support deserving candidates in pursuing higher education.</p>",
      benefitsTitle: "Benefits:",
      benefits: [
        "Financial assistance to reduce the burden of fees",
        "Access to advanced labs and research opportunities",
        "Access to advanced labs and research opportunities",
      ],
      criteriaIntro: "Scholarships are awarded based on:",
      criteria: [
        {
          id: "academic",
          text: "Academic performance (10+2 marks)",
          icon: ICON("/images/perfomance2.svg", "", 56, 56),
        },
        {
          id: "entrance",
          text: "Entrance examination scores",
          icon: ICON("/images/perfomance3.svg", "", 56, 56),
        },
        {
          id: "need",
          text: "Need-based or special category eligibility",
          icon: ICON("/images/perfomance1.svg", "", 56, 56),
        },
      ],
      cta: { label: "Apply Now", href: "/admissions/apply" },
    },

    specialization: {
      menuLabel: "Specialization",
      title: "Specialization",
      showHeading: true,
      html:
        "<p>After successful completion of the programme, students are well-prepared for diverse career opportunities in Software Development, Cloud Computing, Big Data Analytics, Artificial Intelligence &amp; Machine Learning, and Cyber Security.</p>",
      items: [
        "Artificial Intelligence & Machine Learning",
        "Data Science & Big Data Analytics",
        "Cloud Computing & DevOps",
        "Cyber Security",
      ].map((title, i) => ({
        id: `specialization-${i + 1}`,
        title,
        duration: "4 Years",
        href: null,
        image: {
          src: "/images/special_images.webp",
          alt: title,
          width: 560,
          height: 420,
        },
      })),
      cta: { label: "Apply Now", href: "/admissions/apply" },
    },

    faq: {
      menuLabel: "FAQs",
      title: "Frequently Asked Questions",
      showHeading: true,
      items: [
        "What programs does the department offer?",
        "What is the duration of the B.Tech program?",
        "Are internships mandatory during the course?",
        "What is the eligibility for admission to B.Tech CSE?",
        "Does the department have dedicated computer labs?",
        "Is Wi-Fi available across the campus?",
      ].map((question, i) => ({
        id: `faq-${i + 1}`,
        question,
        answerHtml:
          "<p>The department offers undergraduate, postgraduate, and doctoral programs in Computer Science &amp; Engineering</p>",
      })),
    },
  },
};


const btechCseAiMl: ProgramDetails = {
  id: 31,
  slug: "btech-computer-science-engineering-ai-ml",
  title: "B.Tech Computer Science & Engineering – AI & ML",
  description: null,
  duration: "4 Years",
  fee: "₹7,47,700",
  level: null,
  schools: [
    {
      id: 10,
      title: "School of Engineering & Technology",
      slug: "school-of-engineering-technology",
    },
  ],
  departments: null,

  heading: {
    eyebrow: "Programs",
    title: "B.Tech Computer Science & Engineering – AI & ML",
  },

  sidebar: {
    facts: [
      { id: "duration", value: "4 Years", label: "Duration" },
      { id: "fee", value: "₹7,47,700", label: "Total Fee" },
    ],
    applyLink: { label: "Apply Now", href: "/admissions/apply" },
    brochureLink: null,
  },

  sections: {
    overview: null,
    eligibility: null,
    teachingPedagogies: null,
    peo: null,
    outcomes: null,
    curriculum: null,
    feeStructure: null,
    scholarship: null,
    specialization: null,
    faq: null,
  },
};

export const programDetailsBySlug: Record<string, ProgramDetails> = {
  [btechCse.slug]: btechCse,
  [btechCseAiMl.slug]: btechCseAiMl,
};

export const programDetailsList: ProgramDetails[] = Object.values(
  programDetailsBySlug,
);