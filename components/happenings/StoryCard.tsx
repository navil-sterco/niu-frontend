import Link from "next/link";
import SafeImage from "@/components/common/SafeImage";
import { formatDate } from "@/lib/format";
import type { HappeningItem } from "@/types/happenings";

export type CardVariant = "overlay" | "list" | "list-arrow";

interface Props {
  item: HappeningItem;
  variant: CardVariant;
  linkable: boolean;
}
export default function StoryCard({ item, variant, linkable }: Props) {
  const date = item.date ? <time dateTime={item.date}>{formatDate(item.date)}</time> : null;
  const link = linkable ? (
    <Link href={item.href} className="news_pg_links" aria-label={item.title}>
      links
    </Link>
  ) : null;

  if (!item.image) {
    return (
      <div className="yellow_bg">
        <figcaption>
          <h4>{item.title}</h4>
          <div className="listing_date">{date}</div>
        </figcaption>
        {link}
      </div>
    );
  }

  const photo = (
    <figure>
      <SafeImage
        src={item.image.src}
        alt={item.image.alt || item.title}
        width={item.image.width}
        height={item.image.height}
        sizes="(max-width: 767px) 100vw, 33vw"
        className="img-fluid w-100"
      />
    </figure>
  );

  if (variant === "overlay") {
    return (
      <div className="over_cont_list">
        {photo}
        <figcaption>
          {date}
          <h4>{item.title}</h4>
        </figcaption>
        {link}
      </div>
    );
  }

  return (
    <div className="news_sec_list">
      {photo}
      <figcaption>
        <h4>{item.title}</h4>
        <div className="listing_date">
          {date}
          {variant === "list-arrow" && (
            <figure>
              <SafeImage src="/images/date_arrow.svg" alt="" width={20} height={20} className="img-fluid" />
            </figure>
          )}
        </div>
      </figcaption>
      {link}
    </div>
  );
}
