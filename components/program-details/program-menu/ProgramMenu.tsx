
import Link from "next/link";
import "@/components/program-details/program-menu/program-menu.css";

interface ProgramsMenuProps {
  title: string;
}

const menuItems = [
  { label: "Overview", href: "#overview" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Pedagogy", href: "#pedagogy" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Fees", href: "#fees" },
  { label: "Scholarship", href: "#scholarship" },
  { label: "FAQs", href: "#faqs" },
];

export default function ProgramsMenu({
  title,
}: ProgramsMenuProps) {
  return (
    <nav className="programs_menu" aria-label={`${title} sections`}>
      <div className="container">
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
