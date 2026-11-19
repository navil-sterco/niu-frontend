interface Props {
  title: string;
  subtitle: string;
}

export default function ProgramsHero({ title, subtitle }: Props) {
  return (
    <section className="common_head">
      <div className="container">
        <div className="common_title">
          <h1>{title}</h1>
          <blockquote>{subtitle}</blockquote>
        </div>
      </div>
    </section>
  );
}
