"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !/^[+\d\s()-]{7,20}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please provide a little more detail (at least 20 characters).";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass-panel futuristic-frame p-6 md:p-8"
    >
      <div className="mb-6 border border-bronze/30 bg-stone/40 px-4 py-3 text-sm leading-relaxed text-muted">
        This is a demonstration form only.{" "}
        <strong className="font-medium text-ink">
          Submissions are not delivered
        </strong>{" "}
        and no enquiry will reach Court Developments. For genuine enquiries,
        please use the{" "}
        <a
          href="https://www.courtdevelopments.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bronze-dark underline underline-offset-2"
        >
          official website
        </a>
        .
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <Field
          label="Subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          error={errors.subject}
          required
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-ink"
        >
          Message <span className="text-bronze">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full border border-border bg-background/80 px-3 py-3 text-sm text-ink outline-none transition focus:border-bronze focus:shadow-[0_0_0_3px_rgba(184,148,95,0.15)]"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="btn-primary inline-flex items-center justify-center bg-ink px-6 py-3 text-[12px] uppercase tracking-[0.14em] text-paper transition hover:bg-bronze-dark"
        >
          Send Demo Message
        </button>
        {submitted ? (
          <p className="text-sm text-muted" role="status">
            Demo received locally — nothing was sent. This form does not deliver
            submissions.
          </p>
        ) : null}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  error?: string;
  type?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required,
}: FieldProps) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-ink"
      >
        {label}
        {required ? <span className="text-bronze"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full border border-border bg-background/80 px-3 py-3 text-sm text-ink outline-none transition focus:border-bronze focus:shadow-[0_0_0_3px_rgba(184,148,95,0.15)]"
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
