import type { ContactMapContent } from "@/types/contact-types";
import { isGoogleMapsEmbed } from "@/lib/contact/contact-utils";
import "@/components/contact/contact-map/contact-map.css";

interface ContactMapProps {
  content: ContactMapContent;
}

export default function ContactMap({ content }: ContactMapProps) {
  if (!isGoogleMapsEmbed(content.embedUrl)) return null;

  return (
    <section className="map_sec">
      <div className="container">
        <div className="top_ttl">
          <h3>{content.title}</h3>
        </div>
        <div className="maps">
          <iframe
            src={content.embedUrl}
            title={content.iframeTitle}
            width="100%"
            height="600"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
