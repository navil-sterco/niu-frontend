import type { OverviewPageData } from "@/types/overview-types";

export const aboutOverviewData: OverviewPageData = {
  slug: "about-us",
  title: "About Us – Overview",
  description:
    "Noida International University (NIU) is a global centre of learning and innovation, offering diverse programs across 12 schools with students from 60+ nations.",

  heading: {
    eyebrow: "Overview",
    title: "A Premier Campus for Excellence, Innovation & Holistic Education",
  },

  sections: [
    {
      id: "introduction",
      type: "intro-banner",
      introHtml:
        "<p>Noida International University (NIU) is a global centre of learning and innovation, offering diverse programs across <span>12 schools</span>. With students from <span>60+ nations</span>, NIU fosters academic excellence, research, and holistic development in a dynamic learning environment.</p>",
      image: {
        src: "/images/abt-banner.webp",
        alt: "Noida International University campus",
        width: 1920,
        height: 800,
      },
      stats: [
        {
          id: "countries",
          value: 65,
          suffix: "+",
          label: "Countries \nStudent Diversity",
        },
        {
          id: "schools",
          value: 13,
          label: "Schools, Diverse \nAcademic Excellence",
        },
      ],
      descriptionHtml:
        "<p>Noida International University, established under U.P. Legislature Act No. 27 of 2010 and recognized under Section 2(f) of the UGC Act, 1956, is sponsored by the Maruti Educational Trust. Spread across a lush 75-acre campus near the Yamuna Expressway, it offers a distinctive and vibrant academic environment in Greater Noida.</p>",
    },

    {
      id: "global-university",
      type: "gallery",
      title: "A Global University, \nRooted in Excellence",
      descriptionHtml:
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volu</p>",
      primary: {
        id: "campus",
        image: {
          src: "/images/rooted_img1.webp",
          alt: "Campus",
          width: 960,
          height: 800,
        },
        stat: {
          id: "acres",
          value: 75,
          suffix: "+",
          label: "Acres Lush Green Campus",
        },
        icon: {
          src: "/images/abt-popup-icons.svg",
          alt: "",
          width: 80,
          height: 80,
        },
        video: {
          url: "/video/niu.mp4",
          title: "Noida International University",
        },
      },
      secondary: {
        id: "years",
        image: {
          src: "/images/rooted_img2.webp",
          alt: "Institutional excellence",
          width: 960,
          height: 400,
        },
        stat: {
          id: "years",
          value: 15,
          suffix: "+",
          label: "Years of Institutional Excellence",
        },
      },
      tertiary: [
        {
          id: "schools-offered",
          image: {
            src: "/images/rooted_img3.webp",
            alt: "Schools",
            width: 480,
            height: 400,
          },
          stat: { id: "schools-offered", value: 14, label: "Schools offered" },
        },
        {
          id: "programmes",
          image: {
            src: "/images/rooted_img3.webp",
            alt: "Programmes",
            width: 480,
            height: 400,
          },
          stat: {
            id: "programmes",
            value: 100,
            suffix: "+",
            label: "Programmes offered",
          },
        },
      ],
    },

    {
      id: "achievements",
      type: "achievements",
      quote: [
        {
          text: "NIU achieved recognition for its academic prowess by receiving the highest score of ",
        },
        { text: "3.44 out of 4 with Grade A+", highlight: true },
        { text: " in the first cycle of NAAC accreditation" },
      ],
      descriptionHtml:
        "<p>outperforming all other private state universities in India. This honor was bestowed by the prestigious autonomous institution under the UGC, Ministry of Education, Government of India.</p>",
      image: {
        src: "/images/niuabt_img.webp",
        alt: "Noida International University",
        width: 960,
        height: 900,
      },
      heading: [
        { text: "NIU offers a diverse range of programs across " },
        { text: "13 schools", highlight: true },
        { text: "." },
      ],
      bodyHtml:
        "<p>Additionally, NIU houses a 750+ bedded Hospital and a Medical College named Noida International Institute of Medical Sciences (NIIMS), which is recognized as a Centre of Excellence.</p>" +
        "<p>NIIMS is dedicated to developing a unique pedagogy for medical education, with a greater focus on a pragmatic approach that allows students to explore the deeper nuances of medical education.</p>",
      stats: [
        { id: "beds", value: 750, suffix: "+", label: "Bedded Hospital" },
        { id: "schools", value: 13, label: "Schools" },
      ],
    },

    {
      id: "philosophy",
      type: "content-split",
      title: "NIU Philosophy",
      quote:
        "Noida International University is committed to participatory governance, guiding decision-making and supporting its vision and mission",
      bodyHtml:
        "<p>Our governance ideals are expressed in our vision, mission, and objectives, quality policies, and core values. NIU’s strategic plan reflects the University’s objectives and encompasses our vision, institutional priorities, and the strategic actions required to succeed.</p>",
      image: {
        src: "/images/pholosphy-img.webp",
        alt: "NIU philosophy",
        width: 1000,
        height: 700,
      },
    },

    {
      id: "vision-mission",
      type: "vision-mission",
      title: "Vision",
      statement:
        "To be a global Centre of learning, Innovation, Professionalism and Academic Excellence Tempered with values and Ethics",
      image: {
        src: "/images/abt_vision_img.webp",
        alt: "NIU vision",
        width: 820,
        height: 600,
      },
      listTitle: "Mission",
      items: [
        "To nurture world class human resources in all domains for positive and meaningful services to the nation and society.",
        "To inculcate the highest level of integrity, strong character, and commitment",
        "To nurture world class human resources in all domain for positive and meaningful services to the nation and society.",
        "To inculcate the highest level of integrity, strong character and commitment in nation building to serve mankind through providing quality education and healthcare services to the society",
      ],
    },
  ],
};
