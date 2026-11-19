import Link from "next/link";
import type { HodData } from "@/types/department";
import Reveal from "@/components/dept-cse/Reveal";
import SafeImage from "@/components/dept-cse/SafeImage";

export default function HodMessage({ data }: { data: HodData }) {
  const external = (href: string) => /^(https?:|mailto:|tel:)/i.test(href);

  return (
    <section className="hod_mesge" id="hod-message">
      <div className="container-md">
        <div className="hod_grid">
          <Reveal as="figure" className="shine_effect">
            <SafeImage
              src={data.photo.src}
              alt={data.photo.alt}
              width={data.photo.width}
              height={data.photo.height}
              sizes="(max-width: 991px) 90vw, 45vw"
              className="img-fluid w-100"
            />
          </Reveal>

          <div className="hod_info">
            <figure>
              <SafeImage
                src={data.quoteIcon.src}
                alt={data.quoteIcon.alt}
                width={data.quoteIcon.width}
                height={data.quoteIcon.height}
                className="img-fluid"
              />
            </figure>
            <Reveal as="h3">{data.title}</Reveal>
            {data.quote && <Reveal as="blockquote">{data.quote}</Reveal>}
            {data.message && <Reveal as="p">{data.message}</Reveal>}

            <Reveal className="load_more_wrap">
              <Link href={data.moreLink.href} className="load_more">
                <div className="line" />
                <p>{data.moreLink.label}</p>
              </Link>
            </Reveal>

            <Reveal className="name_social">
              <div className="name_deg">
                <p>{data.closing}</p>
                <div className="name">{data.name}</div>
                <div className="deg">{data.designation}</div>
              </div>
              {data.socials.length > 0 && (
                <ul className="social">
                  {data.socials.map((s) => (
                    <li key={s.id}>
                      <a
                        href={s.href}
                        aria-label={s.label}
                        {...(external(s.href) && !s.href.startsWith("mailto:") && !s.href.startsWith("tel:")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <SafeImage src={s.icon.src} alt="" width={s.icon.width} height={s.icon.height} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
