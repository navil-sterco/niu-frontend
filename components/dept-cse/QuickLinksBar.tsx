import Link from "next/link";
import type { QuickLinksData } from "@/types/department";
import SafeImage from "@/components/dept-cse/SafeImage";

export default function QuickLinksBar({ data }: { data: QuickLinksData }) {
  return (
    <section className="deptcse_menu">
      <div className="container">
        {data.menu.length > 0 && (
          <ul className="dept_menu">
            {data.menu.map((m) => (
              <li key={m.label}>
                <Link href={m.href}>{m.label}</Link>
              </li>
            ))}
          </ul>
        )}

        <ul className="mail_info">
          {data.contacts.map((c) => (
            <li key={c.id}>
              <a href={c.href}>
                <SafeImage src={c.icon.src} alt="" width={c.icon.width} height={c.icon.height} /> {c.label}
              </a>
            </li>
          ))}
          <li>
            <Link href={data.cta.href} className="btn_hovefct">
              {data.cta.label}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
