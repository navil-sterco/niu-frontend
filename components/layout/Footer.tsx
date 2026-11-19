"use client";

import { useState } from "react";
import "@/styles/footer.css";

type FooterLink = {
  label: string;
  href: string;
  main?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    title: "Programs",
    links: [
      { label: "Undergraduate", href: "#undergraduate" },
      { label: "Postgraduate", href: "#postgraduate" },
      { label: "Diploma", href: "#diploma" },
      { label: "Online Programs", href: "#online-programs" },
      { label: "Scholarship Programs", href: "#scholarships" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Schools", href: "#schools" },
      { label: "Departments", href: "#departments" },
      { label: "Programs", href: "#programs" },
      { label: "Teaching Practices", href: "#teaching-practices" },
      { label: "Academic Calendar", href: "#academic-calendar" },
      { label: "NIUMOOCS", href: "#niumoocs" },
      { label: "Examinations", href: "#examinations" },
      { label: "Results", href: "#results" },
      { label: "Library", href: "#library" },
      { label: "Notices", href: "#notices" },
      { label: "Code of Conduct", href: "#code-of-conduct" },
      { label: "Academic regulations", href: "#academic-regulations" },
      {
        label: "Academics Collaboration / MOUs",
        href: "#academic-collaboration",
      },
      { label: "NIU Journals", href: "#niu-journals" },
      { label: "International Conference", href: "#international-conference" },
      { label: "International Seminar", href: "#international-seminar" },
    ],
  },
  {
    title: "Facilities",
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Message from HOD", href: "#message-from-hod" },
      { label: "The Team", href: "#team" },
      { label: "Placement Cell", href: "#placement-cell" },
      { label: "Training & Placement Process", href: "#placement-process" },
      { label: "Our Recruiters", href: "#recruiters" },
      { label: "Industry Visit", href: "#industry-visit" },
      { label: "Placements Record", href: "#placements-record" },
      { label: "Placement Testimonials", href: "#placement-testimonials" },
      { label: "NIU Star Alumni", href: "#niu-star-alumni" },
      { label: "Placement Contact", href: "#placement-contact" },
      { label: "Placement Policy", href: "#placement-policy" },
    ],
  },
  {
    title: "Campus Life",
    links: [
      { label: "Clubs and Societies", href: "#clubs" },
      { label: "Workshops & Classrooms", href: "#workshops" },
      { label: "Laboratories", href: "#laboratories" },
      { label: "Library", href: "#library" },
      { label: "Auditorium / Seminar Hall", href: "#auditorium" },
      { label: "Cultural Activities", href: "#cultural-activities" },
      { label: "Medical Facilities", href: "#medical-facilities" },
      { label: "NSS", href: "#nss" },
      { label: "Sports", href: "#sports" },
      { label: "Gym Hostel", href: "#gym-hostel" },
      { label: "Transport", href: "#transport" },
    ],
  },
  {
    title: "About NIU",
    links: [
      { label: "Placements", href: "#placements", main: true },
      { label: "Research", href: "#research", main: true },
      {
        label: "International Affairs",
        href: "#international-affairs",
        main: true,
      },
      { label: "Why Us?", href: "#why-us", main: true },
      { label: "Alumni", href: "#alumni", main: true },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Student Support", href: "#student-support", main: true },
      { label: "Policies", href: "#policies", main: true },
      { label: "IQAC", href: "#iqac", main: true },
      { label: "Login", href: "#login", main: true },
      { label: "Fee Pay Online", href: "#fee-pay-online", main: true },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", image: "/images/f.svg", href: "#facebook" },
  { name: "X", image: "/images/x.svg", href: "#x" },
  { name: "YouTube", image: "/images/u.svg", href: "#youtube" },
  { name: "Instagram", image: "/images/i.svg", href: "#instagram" },
  { name: "LinkedIn", image: "/images/in.svg", href: "#linkedin" },
];

const mobileMenuItems = [
  {
    title: "Who We Are",
    links: ["Overview", "Message"],
  },
  {
    title: "Products",
    links: ["Overview", "Message"],
  },
  {
    title: "Services",
    links: ["Overview", "Message"],
  },
  {
    title: "Investors",
    links: ["Overview", "Message"],
  },
  {
    title: "Knowledge Hub",
    links: ["Overview", "Message"],
  },
];

type MobilePanel = "products" | "contact" | "menu";

export default function Footer() {
  const [activePanel, setActivePanel] = useState<MobilePanel | null>(null);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  function togglePanel(panel: MobilePanel) {
    setActivePanel((current) => (current === panel ? null : panel));
  }

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    // console.log("Newsletter email:", email);
  }

  return (
    <>
      <footer className="site-footer desktop">
        <div className="container-md">
          <div className="ftgrid">
            <div className="left_ftr">
              <figure>
                <img
                  src="/images/footer-logo.webp"
                  alt="Noida International University"
                  className="img-fluid w-100"
                />
              </figure>

              <div className="ftcont_info">
                <p>Phone:</p>
                <a href="tel:+918745862200">(+91) 8745862200</a>
                <a href="tel:+911204862200">(+91) 0120-4862200</a>
              </div>

              <div className="ftcont_info">
                <p>Email:</p>
                <a href="mailto:admissions@niu.edu.in">admissions@niu.edu.in</a>
                <a href="mailto:internationaladmissions@niu.edu.in">
                  internationaladmissions@niu.edu.in
                </a>
              </div>

              <div className="social_link">
                {socialLinks.map((social) => (
                  <a
                    href={social.href}
                    key={social.name}
                    aria-label={social.name}
                  >
                    <img src={social.image} alt="" />
                  </a>
                ))}
              </div>
            </div>

            <div className="right_ftr">
              {footerSections.map((section) => (
                <div className="links" key={section.title}>
                  <h5>{section.title}</h5>

                  {section.links.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      className={link.main ? "main_link" : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <ul>
              <li>Copyright © 2026 Noida International University</li>
              <li>
                Website Design and Development by{" "}
                <a
                  href="https://www.stercodigitex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sterco Digitex
                </a>
              </li>
            </ul>

            <form className="input_group" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter Email to Subscribe"
                aria-label="Email address to subscribe"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <img src="/images/ftemail-icon.svg" alt="" />
              </button>
            </form>
          </div>
        </div>
      </footer>

      <div className="mobile-menu-wrapper">
        <div className="mobile-buttons">
          <button
            type="button"
            className={`menu-button ${
              activePanel === "products" ? "active" : ""
            }`}
            aria-expanded={activePanel === "products"}
            onClick={() => togglePanel("products")}
          >
            <img src="/images/product-mob-icon.svg" alt="" />
            <span>Products</span>
          </button>

          <button
            type="button"
            className={`menu-button ${
              activePanel === "contact" ? "active" : ""
            }`}
            aria-expanded={activePanel === "contact"}
            onClick={() => togglePanel("contact")}
          >
            <img src="/images/contct-mob-icon.svg" alt="" />
            <span>Contact</span>
          </button>

          <button
            type="button"
            className={`menu-button ${activePanel === "menu" ? "active" : ""}`}
            aria-expanded={activePanel === "menu"}
            onClick={() => togglePanel("menu")}
          >
            <img src="/images/menu-mob-icon.svg" alt="" />
            <span>Menu</span>
          </button>
        </div>

        <div
          className={`mobile-menu ${activePanel === "products" ? "show" : ""}`}
          aria-hidden={activePanel !== "products"}
        >
          <div className="mobile-panel-content">
            <h2>Products</h2>
            <div className="mobile-product-links">
              <a href="#two-wheelers">2 Wheelers</a>
              <a href="#three-wheelers">3 Wheelers</a>
              <a href="#four-wheelers">4 Wheelers</a>
            </div>
          </div>
        </div>

        <div
          className={`mobile-menu ${activePanel === "contact" ? "show" : ""}`}
          aria-hidden={activePanel !== "contact"}
        >
          <div className="mobile-panel-content contact-wrap">
            <h2>Contact Us</h2>

            <div className="info-box">
              <div className="info-item">
                <img src="/images/map-icon.svg" alt="" />
                <p>
                  Noida International University House, 13, NSEZ, Noida –
                  201305, (U.P), India
                </p>
              </div>

              <div className="info-item">
                <img src="/images/call-icon-1.svg" alt="" />
                <a href="tel:+911202567902">+91 120 2567902-05</a>
              </div>

              <div className="info-item">
                <img src="/images/message-icon-1.svg" alt="" />
                <a href="mailto:contact@niu.edu.in">Contact us by email</a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mobile-menu ${activePanel === "menu" ? "show" : ""}`}
          aria-hidden={activePanel !== "menu"}
        >
          <div className="mobile-panel-content mobmenu_wrap">
            <h2>Explore NIU</h2>

            <ul className="main_menu">
              {mobileMenuItems.map((item) => (
                <li className="mob_dropdown" key={item.title}>
                  <button
                    type="button"
                    className="mobile-submenu-toggle"
                    aria-expanded={expandedMenu === item.title}
                    onClick={() =>
                      setExpandedMenu((current) =>
                        current === item.title ? null : item.title,
                      )
                    }
                  >
                    <span>{item.title}</span>
                    <span aria-hidden="true">
                      {expandedMenu === item.title ? "−" : "+"}
                    </span>
                  </button>

                  {expandedMenu === item.title && (
                    <ul className="second_level">
                      {item.links.map((label) => (
                        <li key={label}>
                          <a
                            href={`#${item.title.toLowerCase().replaceAll(" ", "-")}`}
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <ul className="bottom_menu">
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
              <li>
                <a href="#privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
