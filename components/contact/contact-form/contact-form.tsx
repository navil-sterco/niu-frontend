"use client";

import Image from "next/image";
import { useActionState } from "react";
import type {
  ContactFormAction,
  ContactFormContent,
  ContactFormState,
} from "@/types/contact-types";
import "@/components/contact/contact-form/contact-form.css";

interface ContactFormProps {
  content: ContactFormContent;
  action: ContactFormAction;
}

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm({ content, action }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(action, initialState);
  const errors = state.errors ?? {};
  const values = state.values;
  const { placeholders } = content;

  const message =
    state.status === "success"
      ? (state.message ?? content.successMessage)
      : state.message;

  return (
    <div className="contact_form">
      <figure>
        <Image
          src={content.banner.src}
          alt={content.banner.alt}
          width={content.banner.width}
          height={content.banner.height}
          className="img-fluid w-100"
          sizes="(max-width: 991px) 100vw, 60vw"
          priority
        />
        <div className="contact-form">
          <h3>{content.title}</h3>

          <form action={formAction} noValidate>
            <div className="contact_hp" aria-hidden="true">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <div className="contact_forms">
              <label htmlFor="contact-name" className="sr_only">
                {placeholders.name}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="form-control"
                placeholder={placeholders.name}
                autoComplete="name"
                required
                maxLength={100}
                defaultValue={values?.name ?? ""}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
              />
              {errors.name && (
                <p
                  id="contact-name-error"
                  className="contact_error"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div className="contact_forms">
              <label htmlFor="contact-email" className="sr_only">
                {placeholders.email}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="form-control"
                placeholder={placeholders.email}
                autoComplete="email"
                required
                maxLength={150}
                defaultValue={values?.email ?? ""}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  className="contact_error"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div className="contact_forms">
              <label htmlFor="contact-phone" className="sr_only">
                {placeholders.phone}
              </label>
              <input
                id="contact-phone"
                type="tel"
                inputMode="tel"
                name="phone"
                className="form-control"
                placeholder={placeholders.phone}
                autoComplete="tel"
                required
                maxLength={20}
                defaultValue={values?.phone ?? ""}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={
                  errors.phone ? "contact-phone-error" : undefined
                }
              />
              {errors.phone && (
                <p
                  id="contact-phone-error"
                  className="contact_error"
                  role="alert"
                >
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="contact_forms">
              <div className="form_group contact_dropdown">
                <label htmlFor="contact-course" className="sr_only">
                  {placeholders.course}
                </label>
                <select
                  id="contact-course"
                  name="course"
                  className="form-select custm_select"
                  required
                  defaultValue={values?.course ?? ""}
                  aria-invalid={Boolean(errors.course)}
                  aria-describedby={
                    errors.course ? "contact-course-error" : undefined
                  }
                >
                  <option value="" disabled hidden>
                    {placeholders.course}
                  </option>
                  {content.courseOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.course && (
                <p
                  id="contact-course-error"
                  className="contact_error"
                  role="alert"
                >
                  {errors.course}
                </p>
              )}
            </div>

            <div className="contact_forms">
              <label htmlFor="contact-message" className="sr_only">
                {placeholders.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-control"
                rows={3}
                placeholder={placeholders.message}
                maxLength={1000}
                defaultValue={values?.message ?? ""}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
              />
              {errors.message && (
                <p
                  id="contact-message-error"
                  className="contact_error"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <div className="contact_forms">
              <label className="contact_robot">
                <input
                  type="checkbox"
                  name="robot"
                  required
                  defaultChecked={values?.robot ?? false}
                  aria-invalid={Boolean(errors.robot)}
                />
                <span className="contact_robot_box" aria-hidden="true" />
                <span>{content.robotLabel}</span>
              </label>
              {errors.robot && (
                <p className="contact_error" role="alert">
                  {errors.robot}
                </p>
              )}
            </div>

            <div className="contact_forms">
              <button type="submit" className="cus-btn" disabled={isPending}>
                {isPending ? "Sending…" : content.submitLabel}
              </button>
            </div>

            <div aria-live="polite">
              {message && (
                <p className={`contact_status contact_status--${state.status}`}>
                  {message}
                </p>
              )}
            </div>
          </form>
        </div>
      </figure>
    </div>
  );
}
