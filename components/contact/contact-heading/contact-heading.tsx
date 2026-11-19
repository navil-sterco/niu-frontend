import "@/components/contact/contact-heading/contact-heading.css";

interface ContactHeadingProps {
  eyebrow: string;
  title: string;
}

export default function ContactHeading({
  eyebrow,
  title,
}: ContactHeadingProps) {
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
