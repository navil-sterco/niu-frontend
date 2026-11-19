import "@/components/leadership/leadership-heading/leadership-heading.css";

interface LeadershipHeadingProps {
  eyebrow: string;
  title: string;
}

export default function LeadershipHeading({ eyebrow, title }: LeadershipHeadingProps) {
  return (
    <section className="common_head">
      <div className="container">
        <div className="common_title">
          <h1>{eyebrow}</h1>
          <blockquote>{title}</blockquote>
        </div>
      </div>
    </section>
  );
}
