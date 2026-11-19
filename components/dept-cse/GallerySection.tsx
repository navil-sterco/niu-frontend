"use client";

import type { GalleryItem } from "@/types/department";
import { useFancybox } from "@/hooks/useFancybox";
import SafeImage from "@/components/dept-cse/SafeImage";

export default function GallerySection({ items }: { items: GalleryItem[] }) {
  useFancybox("dept-gallery");

  return (
    <section className="dept_galry">
      <div className="glry_grid">
        {items.map((item, i) => (
          <figure key={item.id} className={i === 0 ? "mt0" : undefined}>
            <SafeImage
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              sizes="(max-width: 575px) 50vw, (max-width: 1199px) 33vw, 25vw"
              className="img-fluid w-100"
            />
            <a
              data-fancybox="dept-gallery"
              className="link_stretched"
              href={item.fullSrc ?? item.image.src}
              aria-label={`Open ${item.image.alt || "gallery image"}`}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
