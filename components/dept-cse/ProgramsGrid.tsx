import Link from "next/link";
import type { ProgramsData } from "@/types/department";
import Reveal from "@/components/dept-cse/Reveal";
import SafeImage from "@/components/dept-cse/SafeImage";

export default function ProgramsGrid({ data }: { data: ProgramsData }) {
  return (
    <section className="cse_dept">
      <div className="container">
        <div className="heading">
          <Reveal as="h4">{data.eyebrow}</Reveal>
          <Reveal as="blockquote">{data.title}</Reveal>
        </div>

        <ul className="dept_wrap">
          {data.items.map((item, i) => (
            <Reveal as="li" key={item.id} delay={Math.min((i % 3) * 100 + 200, 600)}>
              <div className="dept_box">
                <div className="course_name">
                  <span>{item.level}</span>
                  <p>
                    {item.title}
                    {item.accent && <> <span>{item.accent}</span></>}
                  </p>
                </div>
                <div className="left_btn btn_hovefct">
                  <SafeImage src={data.arrowIcon.src} alt="" width={data.arrowIcon.width} height={data.arrowIcon.height} />
                </div>
                <Link
                  href={item.href}
                  className="link_stretched"
                  aria-label={`${item.level} ${item.title} ${item.accent ?? ""}`.trim()}
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
