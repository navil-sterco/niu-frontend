import type {
  ContactFormAction,
  ContactPageContent,
} from "@/types/contact-types";
import ContactHeading from "@/components/contact/contact-heading/contact-heading";
import ContactInfo from "@/components/contact/contact-info/contact-info";
import ContactForm from "@/components/contact/contact-form/contact-form";
import ContactReach from "@/components/contact/contact-reach/contact-reach";
import ContactMap from "@/components/contact/contact-map/contact-map";
import "@/components/contact/shared/contact-shared.css";
import "@/components/contact/contact-page/contact-page.css";

interface ContactPageProps {
  content: ContactPageContent;
  submitAction: ContactFormAction;
}

export default function ContactPage({
  content,
  submitAction,
}: ContactPageProps) {
  return (
    <div className="cu-page">
      <ContactHeading eyebrow={content.eyebrow} title={content.title} />

      <section className="contact-us">
        <div className="container max-container">
          <div className="contact_grid">
            <ContactInfo items={content.info} />
            <ContactForm content={content.form} action={submitAction} />
          </div>
        </div>
      </section>

      <ContactReach content={content.reach} />
      <ContactMap content={content.map} />
    </div>
  );
}
