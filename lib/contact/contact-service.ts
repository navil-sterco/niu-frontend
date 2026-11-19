import { cache } from "react";
import { contactPageContent } from "@/data/contact/contact-data";
import type { ContactPageContent } from "@/types/contact-types";

export const getContactPageContent = cache(
  async (): Promise<ContactPageContent> => contactPageContent,
);
