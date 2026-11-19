import Image from "next/image";
import type { ContactInfoItem } from "@/types/contact-types";
import { hasText } from "@/lib/contact/contact-utils";
import "@/components/contact/contact-info/contact-info.css";

interface ContactInfoProps {
  items: ContactInfoItem[];
}

export default function ContactInfo({ items }: ContactInfoProps) {
  if (items.length === 0) return null;

  return (
    <div className="contact_list">
      {items.map((item) => (
        <div className="contact_grp" key={item.id}>
          <h4>{item.title}</h4>
          <div
            className={
              item.kind === "address"
                ? "contact_cont"
                : "contact_cont contact_img"
            }
          >
            <figure>
              <Image
                src={item.icon.src}
                alt={item.icon.alt}
                width={item.icon.width}
                height={item.icon.height}
                className="img-fluid"
              />
            </figure>
            {hasText(item.href) ? (
              <a href={item.href} className="contact_links">
                {item.value}
              </a>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
