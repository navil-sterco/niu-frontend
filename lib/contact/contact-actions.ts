"use server";

import type { ContactFormState } from "@/types/contact-types";
import {
  readContactValues,
  validateContactValues,
} from "@/lib/contact/contact-validation";

export async function submitContactRequest(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (
    typeof formData.get("website") === "string" &&
    formData.get("website") !== ""
  ) {
    return { status: "success", message: "Thank you!" };
  }

  const values = readContactValues(formData);
  const errors = validateContactValues(values);
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      errors,
      values,
    };
  }

  const endpoint = process.env.CONTACT_API_URL;

  if (!endpoint) {
    if (process.env.NODE_ENV === "development") {
      console.info(
        "[contact] CONTACT_API_URL is not set. Request NOT sent:",
        values,
      );
      return {
        status: "success",
        message:
          "Development mode: validated OK, but not sent (CONTACT_API_URL is not set).",
      };
    }
    return {
      status: "error",
      message:
        "The contact form is not available right now. Please call or email us instead.",
      values,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.phone,
        course: values.course,
        message: values.message,
      }),
      cache: "no-store",
    });
    if (!response.ok)
      throw new Error(`Contact API responded ${response.status}`);
    return { status: "success" };
  } catch (error) {
    console.error("[contact] submit failed", error);
    return {
      status: "error",
      message: "We could not send your request. Please try again in a moment.",
      values,
    };
  }
}
