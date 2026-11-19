import Link from "next/link";
import SafeImage from "@/components/common/SafeImage";
import SectionTitle from "@/components/common/SectionTitle";
import { formatDate } from "@/lib/format";
import type { HappeningItem } from "@/types/happenings";

interface Props {
  title: string;
  items: HappeningItem[];
  linkable: boolean;
}

export default function TopSection({ title, items, linkable }: Props) {
  return (
    <section className="top_sec">
      <div className="container">
        <SectionTitle>{title}</SectionTitle>
        <div className="top_grid">
          {items.map((item) => (
            <div className="top_list" key={item.id}>
              <figure>
                {item.image ? (
                  <SafeImage
                    src={item.image.src}
                    alt={item.image.alt || item.title}
                    width={item.image.width}
                    height={item.image.height}
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="img-fluid w-100"
                  />
                ) : (
                  <span className="img_placeholder" role="img" aria-label={item.title} />
                )}
              </figure>
              <figcaption>
                <h4>{item.title}</h4>
                {item.date && <time dateTime={item.date}>{formatDate(item.date)}</time>}
              </figcaption>
              {linkable && (
                <Link href={item.href} className="news_pg_links" aria-label={item.title}>
                  links
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
