import type { ContactReachContent } from "@/types/contact-types";
import CmsHtml from "@/components/contact/shared/cms-html/cms-html";
import ContactReachPanels from "@/components/contact/contact-reach/contact-reach-panels";
import "@/components/contact/contact-reach/contact-reach.css";

interface ContactReachProps {
  content: ContactReachContent;
}

export default function ContactReach({ content }: ContactReachProps) {
  if (content.panels.length === 0) return null;

  const panels = content.panels.map((panel) => ({
    id: panel.id,
    title: panel.title,
    image: panel.image,
    content: <CmsHtml html={panel.descriptionHtml} />,
  }));

  return (
    <section className="reach_sec">
      <div className="container">
        <div className="top_ttl">
          <h3>{content.title}</h3>
        </div>
        <ContactReachPanels
          panels={panels}
          defaultActiveId={content.defaultActiveId}
        />
      </div>
    </section>
  );
}
