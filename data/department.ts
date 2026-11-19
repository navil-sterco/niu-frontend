import type {
  DepartmentOption,
  DepartmentPageData,
  ImageAsset,
} from "@/types/department";

const img = (
  src: string,
  alt: string,
  width: number,
  height: number,
): ImageAsset => ({
  src: `/images/${src}`,
  alt,
  width,
  height,
});

const QUOTE =
  "NIU gave me the knowledge, confidence, and opportunities to build a successful career.";
const VIDEO = "/video/niu.mp4";

const cse: DepartmentPageData = {
  slug: "cse",
  name: "Computer Science & Engineering",
  seo: {
    title: "Department of Computer Science & Engineering | NIU",
    description:
      "Computer Science & Engineering at NIU combines technical skills, practical learning, research, and industry exposure.",
  },

  banner: {
    autoplayMs: 6000,
    switcherLabel: "Department of",
    slides: [
      {
        id: "slide-1",
        desktopImage: img("soet-dek1.webp", "Hero banner", 1920, 900),
        mobileImage: img("soet-mobile1.webp", "Hero banner", 768, 900),
        heading: "Explore Knowledge.",
        headingAccent: "Build Your Future.",
      },
      {
        id: "slide-2",
        desktopImage: img("soet-dek1.webp", "Hero banner", 1920, 900),
        mobileImage: img("soet-mobile1.webp", "Hero banner", 768, 900),
        heading: "Explore Knowledge.",
        headingAccent: "Build Your Future-2",
      },
    ],
  },

  about: {
    eyebrow: "ABOUT DEPARTMENT",
    quote:
      "Computer Science & Engineering at NIU combines technical skills, practical learning, research, and industry exposure.",
    image: img("abtdept-cse.webp", "About CSE", 1600, 800),
    imageCaption:
      "The Department of Computer Science & Engineering at Noida International University is focused on developing technically skilled, innovative, and future-ready professionals.",
    paragraphs: [
      "The Department of Computer Science & Engineering at Noida International University is focused on developing technically skilled, innovative, and future-ready professionals. The department provides students with opportunities to build strong foundations in computing while exploring emerging areas of technology.",
      "Through a combination of classroom learning, practical sessions, projects, industry exposure, and research, students develop the technical knowledge and problem-solving abilities required to address real-world challenges.",
    ],
    keyAreasTitle: "Key Areas",
    keyAreas: [
      "Computer Science & Engineering",
      "Artificial Intelligence & Machine Learning",
      "Cyber Security",
      "Data Science",
    ],
  },

  hod: {
    photo: img("hod-cse-amit-kumar.webp", "HOD Amit Kumar", 680, 760),
    quoteIcon: img("quote-yellow.webp", "Quote", 60, 48),
    title: "HOD Message",
    quote:
      "School of Engineering and Technology of Noida International University, is committed to excellence in education, research, and innovation.",
    message:
      "We are aiming at ensuring that we make high-quality engineers and leaders, one who will be able to confront the real-life challenges and make a difference to the society.",
    moreLink: { label: "More", href: "#hod-message" },
    closing: "Best regards,",
    name: "Amit Kumar",
    designation: "Head of Department",
    socials: [
      {
        id: "mail",
        label: "Email HOD",
        href: "mailto:hod.cse@niu.ac.in",
        icon: img("hod-mail-icon.svg", "Email", 20, 20),
      },
      {
        id: "linkedin",
        label: "HOD on LinkedIn",
        href: "https://www.linkedin.com",
        icon: img("hod-in-icon.svg", "LinkedIn", 20, 20),
      },
    ],
  },

  programs: {
    eyebrow: "OUR DEPARTMENTS",
    title: "Inspiring Minds Inspiring Futures",
    arrowIcon: img("left-errow.svg", "Arrow", 22, 22),
    items: [
      {
        id: "pr-1",
        level: "B.Tech",
        title: "Computer Science &",
        accent: "Engineering",
        href: "/programs/btech-computer-science-and-engineering",
      },
      {
        id: "pr-2",
        level: "B.Tech",
        title: "Computer Science &",
        accent: "Engineering-AI&ML",
        href: "/programs/btech-cse-ai-ml",
      },
      {
        id: "pr-3",
        level: "B.Tech",
        title: "Computer Science in",
        accent: "Cyber Security",
        href: "/programs/btech-cse-cyber-security",
      },
      {
        id: "pr-4",
        level: "B.Tech",
        title: "Computer Science & Engineering",
        accent: "– Data Science WITH HCL GUVI",
        href: "/programs/btech-cse-data-science-hcl-guvi",
      },
      {
        id: "pr-5",
        level: "B.Tech",
        title: "Lateral Entry (CSE, AI/ML,)",
        accent: "Data Science",
        href: "/programs/btech-lateral-entry-cse",
      },
      {
        id: "pr-6",
        level: "B.Tech",
        title: "Lateral Entry",
        accent: "(All other branches)",
        href: "/programs/btech-lateral-entry-other",
      },
      {
        id: "pr-7",
        level: "B.Tech",
        title: "Computer Science Engineering",
        href: "/programs/btech-cse-7",
      },
      {
        id: "pr-8",
        level: "B.Tech",
        title: "Computer Science Engineering",
        href: "/programs/btech-cse-8",
      },
      {
        id: "pr-9",
        level: "B.Tech",
        title: "Computer Science Engineering",
        href: "/programs/btech-cse-9",
      },
    ],
  },

  quickLinks: {
    menu: [
      { label: "Admission Process", href: "/admissions" },
      { label: "Scholarship", href: "/scholarship" },
      { label: "Eligibility", href: "/eligibility" },
      { label: "Download Prospectus", href: "/prospectus" },
    ],
    contacts: [
      {
        id: "email",
        label: "admissions@niu.ac.in",
        href: "mailto:admissions@niu.ac.in",
        icon: img("hm-email-icon.svg", "Email", 18, 18),
      },
      {
        id: "phone",
        label: "1800-102-1900",
        href: "tel:1800-102-1900",
        icon: img("hm-call-icon.svg", "Phone", 18, 18),
      },
    ],
    cta: { label: "Apply Now", href: "/apply-now" },
  },

  faculty: {
    eyebrow: "Faculty",
    title: "Guiding Minds, Shaping Futures",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    cta: { label: "Learn More", href: "/faculty" },
    members: [
      {
        id: "f-1",
        name: "Mr. Hari Kiran Vege",
        designation: "Assoc. Prof. & HOD",
        image: img("dept-faculty1.webp", "Mr. Hari Kiran Vege", 420, 500),
      },
      {
        id: "f-2",
        name: "Dr. Ananya Sharma",
        designation: "Professor, Computer Science Engineering",
        image: img("dept-faculty2.webp", "Dr. Ananya Sharma", 420, 500),
      },
      {
        id: "f-3",
        name: "Mr. Rajesh Khanna",
        designation: "Assoc. Prof. & HOD, Mechanical Engineering",
        image: img("dept-faculty3.webp", "Mr. Rajesh Khanna", 420, 500),
      },
      {
        id: "f-4",
        name: "Dr. Vikram Chauhan",
        designation: "Professor, Civil Engineering",
        image: img("dept-faculty4.webp", "Dr. Vikram Chauhan", 420, 500),
      },
      {
        id: "f-5",
        name: "Ms. Sneha Kapoor",
        designation: "Assistant Professor, Information Technology",
        image: img("dept-faculty4.webp", "Ms. Sneha Kapoor", 420, 500),
      },
      {
        id: "f-6",
        name: "Mr. Hari Kiran Vege",
        designation: "Assoc. Prof. & HOD",
        image: img("dept-faculty1.webp", "Mr. Hari Kiran Vege", 420, 500),
      },
      {
        id: "f-7",
        name: "Dr. Ananya Sharma",
        designation: "Professor, Computer Science Engineering",
        image: img("dept-faculty2.webp", "Dr. Ananya Sharma", 420, 500),
      },
      {
        id: "f-8",
        name: "Mr. Rajesh Khanna",
        designation: "Assoc. Prof. & HOD, Mechanical Engineering",
        image: img("dept-faculty3.webp", "Mr. Rajesh Khanna", 420, 500),
      },
      {
        id: "f-9",
        name: "Dr. Vikram Chauhan",
        designation: "Professor, Civil Engineering",
        image: img("dept-faculty4.webp", "Dr. Vikram Chauhan", 420, 500),
      },
      {
        id: "f-10",
        name: "Ms. Sneha Kapoor",
        designation: "Assistant Professor, Information Technology",
        image: img("dept-faculty4.webp", "Ms. Sneha Kapoor", 420, 500),
      },
    ],
  },

  facilities: {
    eyebrow: "SOET Facilities",
    title: "Next-Generation Labs &",
    titleAccent: "Centers of Excellence",
    defaultLabId: "robotics",
    stats: [
      {
        id: "faculty",
        value: 450,
        sup: "+",
        label: "Renowned",
        labelAccent: "teaching Faculty",
      },
      {
        id: "programmes",
        value: 80,
        sup: "+",
        label: "Programmes to",
        labelAccent: "choose from",
      },
    ],
    labs: [
      {
        id: "computer",
        name: "Basic Computer Lab",
        image: img("computer-lab.webp", "Basic Computer Lab", 800, 1000),
      },
      {
        id: "microbiology",
        name: "Microbiology Lab",
        image: img("microbiology-lab.webp", "Microbiology Lab", 800, 1000),
      },
      {
        id: "biochemistry",
        name: "Biochemistry Lab",
        image: img("biochemistry-lab.webp", "Biochemistry Lab", 800, 1000),
      },
      {
        id: "robotics",
        name: "Robotics & Automation Lab",
        image: img("robotics-lab.webp", "Robotics & Automation Lab", 800, 1000),
      },
      {
        id: "dsa",
        name: "DSA Lab",
        image: img("das-lab.webp", "DSA Lab", 800, 1000),
      },
      {
        id: "physics",
        name: "Physics Lab",
        image: img("physics-lab.webp", "Physics Lab", 800, 1000),
      },
      {
        id: "chemistry",
        name: "Chemistry Lab",
        image: img("chemistry-lab.webp", "Chemistry Lab", 800, 1000),
      },
    ],
  },

  alumni: {
    eyebrow: "ALUMNI",
    title: "Hear from",
    titleAccent: "Our Achievers",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    cta: { label: "Learn More", href: "/alumni" },
    stat: {
      id: "network",
      value: 25,
      unit: "K",
      sup: "+",
      label: "Alumni Network",
    },
    quoteIcon: img("quote-green.svg", "Quote", 40, 32),
    videoIcon: img("video-round-icon.svg", "Play video", 56, 56),
    items: [
      {
        id: "a-1",
        name: "Deeksha G",
        course: "B.Tech CSE",
        batch: "2025",
        quote: QUOTE,
        photo: img("deeksha-hmalumni.webp", "Deeksha G", 700, 860),
        thumb: img("hmalum-deeksha.webp", "Deeksha G", 300, 300),
        videoUrl: VIDEO,
      },
      {
        id: "a-2",
        name: "Rohit Kumar",
        course: "B.Tech CSE",
        batch: "2025",
        quote: QUOTE,
        photo: img("rohit-kumar-hmalumni.webp", "Rohit Kumar", 700, 860),
        thumb: img("hmalum-deeksha.webp", "Rohit Kumar", 300, 300),
        videoUrl: VIDEO,
      },
      {
        id: "a-3",
        name: "Prathyarthi Kashyap",
        course: "B.Tech CSE",
        batch: "2025",
        quote: QUOTE,
        photo: img(
          "prathyarthi-hmalumni.webp",
          "Prathyarthi Kashyap",
          700,
          860,
        ),
        thumb: img("hmalum-deeksha.webp", "Prathyarthi Kashyap", 300, 300),
        videoUrl: VIDEO,
      },
      {
        id: "a-4",
        name: "Rohit Kumar-1",
        course: "B.Tech CSE",
        batch: "2025",
        quote: QUOTE,
        photo: img("rohit-kumar-hmalumni.webp", "Rohit Kumar", 700, 860),
        thumb: img("hmalum-deeksha.webp", "Rohit Kumar", 300, 300),
        videoUrl: VIDEO,
      },
      {
        id: "a-5",
        name: "Rohit Kumar-5",
        course: "B.Tech CSE",
        batch: "2025",
        quote: QUOTE,
        photo: img("prathyarthi-hmalumni.webp", "Rohit Kumar", 700, 860),
        thumb: img("hmalum-deeksha.webp", "Rohit Kumar", 300, 300),
        videoUrl: VIDEO,
      },
    ],
  },

  gallery: [
    {
      id: "g-1",
      image: img("deptgal-558.webp", "Department gallery 1", 400, 558),
    },
    {
      id: "g-2",
      image: img("deptgal-374.webp", "Department gallery 2", 400, 374),
    },
    {
      id: "g-3",
      image: img("deptgal-325.webp", "Department gallery 3", 400, 325),
    },
    {
      id: "g-4",
      image: img("deptgal-433.webp", "Department gallery 4", 400, 433),
    },
    {
      id: "g-5",
      image: img("deptgal-558.webp", "Department gallery 5", 400, 558),
    },
    {
      id: "g-6",
      image: img("deptgal-374.webp", "Department gallery 6", 400, 374),
    },
    {
      id: "g-7",
      image: img("deptgal-325.webp", "Department gallery 7", 400, 325),
    },
    {
      id: "g-8",
      image: img("deptgal-433.webp", "Department gallery 8", 400, 433),
    },
  ],

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        id: "q-1",
        question: "What programs does the department offer?",
        answer:
          "The department offers undergraduate, postgraduate, and doctoral programs in Computer Science & Engineering",
      },
      {
        id: "q-2",
        question: "What is the duration of the B.Tech program?",
        answer:
          "The B.Tech program in Computer Science & Engineering is a four-year full-time programme.",
      },
      {
        id: "q-3",
        question: "Are internships mandatory during the course?",
        answer:
          "Internships and industry projects are part of the curriculum and strongly encouraged every year.",
      },
      {
        id: "q-4",
        question: "What is the eligibility for admission to B.Tech CSE?",
        answer:
          "Candidates need to have completed 10+2 with Physics and Mathematics along with a qualifying score as per university norms.",
      },
      {
        id: "q-5",
        question: "Does the department have dedicated computer labs?",
        answer:
          "Yes. Students have access to basic computer, DSA, robotics and other specialised labs.",
      },
      {
        id: "q-6",
        question: "Is Wi-Fi available across the campus?",
        answer:
          "Yes, high-speed Wi-Fi is available across academic blocks, hostels and common areas.",
      },
    ],
  },
};

const variant = (slug: string, name: string): DepartmentPageData => ({
  ...cse,
  slug,
  name,
  seo: {
    title: `Department of ${name} | NIU`,
    description: cse.seo.description,
  },
});

export const departments: Record<string, DepartmentPageData> = {
  cse,
  ece: variant("ece", "Electronics & Communication Engineering"),
  me: variant("me", "Mechanical Engineering"),
};

export const departmentOptions: DepartmentOption[] = Object.values(
  departments,
).map(({ slug, name }) => ({
  slug,
  name,
}));

export const DEFAULT_DEPARTMENT_SLUG = "cse";
