export interface ContactImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type ContactInfoKind = "address" | "phone" | "email";

export interface ContactInfoItem {
  id: string;
  kind: ContactInfoKind;
  title: string;
  value: string;
  href?: string | null;
  icon: ContactImage;
}

export interface ContactCourseOption {
  value: string;
  label: string;
}

export interface ContactFormContent {
  title: string;
  banner: ContactImage;
  placeholders: {
    name: string;
    email: string;
    phone: string;
    course: string;
    message: string;
  };
  courseOptions: ContactCourseOption[];
  robotLabel: string;
  submitLabel: string;
  successMessage: string;
}

export interface ContactReachPanel {
  id: string;
  title: string;
  descriptionHtml?: string | null;
  image: ContactImage;
}

export interface ContactReachContent {
  title: string;
  defaultActiveId?: string | null;
  panels: ContactReachPanel[];
}

export interface ContactMapContent {
  title: string;
  embedUrl?: string | null;
  iframeTitle: string;
}

export interface ContactPageContent {
  eyebrow: string;
  title: string;
  info: ContactInfoItem[];
  form: ContactFormContent;
  reach: ContactReachContent;
  map: ContactMapContent;
}

export type ContactFieldName =
  | "name"
  | "email"
  | "phone"
  | "course"
  | "message"
  | "robot";

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  robot: boolean;
}

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactFieldName, string>>;
  values?: ContactFormValues;
}

export type ContactFormAction = (
  previous: ContactFormState,
  formData: FormData,
) => Promise<ContactFormState>;
