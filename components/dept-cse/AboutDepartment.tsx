import type { AboutData } from "@/types/department";
import Reveal from "@/components/dept-cse/Reveal";
import SafeImage from "@/components/dept-cse/SafeImage";

export default function AboutDepartment({ data }: { data: AboutData }) {
  return (
    <section className="about_dept">
      <div className="container">
        <div className="heading">
          <Reveal as="h1">{data.eyebrow}</Reveal>
          {data.quote && <Reveal as="blockquote">{data.quote}</Reveal>}
        </div>

        <Reveal as="figure" className="shine_effect">
          <SafeImage
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            sizes="(max-width: 1320px) 100vw, 1320px"
            className="img-fluid w-100"
          />
          {data.imageCaption && (
            <figcaption>
              <p>{data.imageCaption}</p>
            </figcaption>
          )}
        </Reveal>

        <div className="key_area">
          {data.paragraphs.map((text, i) => (
            <Reveal as="p" key={i}>
              {text}
            </Reveal>
          ))}

          {data.keyAreas.length > 0 && (
            <div className="key">
              <Reveal as="h2">
                <span>{data.keyAreasTitle}</span>
              </Reveal>
              <ul>
                {data.keyAreas.map((area, i) => (
                  <Reveal as="li" key={area} delay={(i + 1) * 100}>
                    {area}
                  </Reveal>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
