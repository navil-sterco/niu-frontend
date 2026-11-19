import type { Metadata } from "next";
import ContactPage from "@/components/contact/contact-page/contact-page";
import { submitContactRequest } from "@/lib/contact/contact-actions";
import { getContactPageContent } from "@/lib/contact/contact-service";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Noida International University: campus address, phone, email, admissions enquiry form, directions and map.",
};

export default async function Page() {
  const content = await getContactPageContent();
  return <ContactPage content={content} submitAction={submitContactRequest} />;
}
