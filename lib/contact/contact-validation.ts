import type {
  ContactFieldName,
  ContactFormValues,
} from "@/types/contact-types";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function readContactValues(formData: FormData): ContactFormValues {
  const text = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
  };
  return {
    name: text("name"),
    email: text("email"),
    phone: text("phone"),
    course: text("course"),
    message: text("message"),
    robot: formData.get("robot") === "on",
  };
}

export function validateContactValues(
  values: ContactFormValues,
): Partial<Record<ContactFieldName, string>> {
  const errors: Partial<Record<ContactFieldName, string>> = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  else if (values.name.length > 100) errors.name = "Name is too long.";

  if (!EMAIL.test(values.email) || values.email.length > 150) {
    errors.email = "Please enter a valid email address.";
  }

  const digits = values.phone.replace(/[\s\-().+]/g, "");
  if (!/^\d{7,15}$/.test(digits)) {
    errors.phone = "Please enter a valid telephone number.";
  }

  if (!values.course) errors.course = "Please choose a course.";

  if (values.message.length > 1000) {
    errors.message = "Message must be 1000 characters or fewer.";
  }

  if (!values.robot) errors.robot = "Please confirm you are not a robot.";

  return errors;
}
