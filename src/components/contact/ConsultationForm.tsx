"use client";

import { useState, useId } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================================
   ConsultationForm — /kontak
   Client Component: form state, validation, success.
   No backend — simulates submission only.
   ============================================ */

const PROJECT_TYPES = [
  "Jasa Kontraktor Bangunan",
  "Jasa Renovasi Bangunan",
  "Jasa Desain Arsitektur",
  "Jasa Desain Interior",
  "Other",
] as const;

interface FormValues {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const EMPTY: FormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  projectLocation: "",
  message: "",
};

function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter a valid email address.";
  } else if (!validateEmail(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.projectType) errors.projectType = "Please select a project type.";
  if (!values.message.trim()) errors.message = "Please tell us about your project.";
  return errors;
}

/* Shared input classes */
const inputBase =
  "w-full h-11 px-4 rounded-sm border bg-white text-sm text-foreground placeholder:text-neutral-400 " +
  "focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent " +
  "transition-colors duration-150";

const inputError = "border-brand-red bg-brand-red-light";
const inputNormal = "border-border hover:border-border-strong";

export default function ConsultationForm() {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus the first error field
      const firstKey = Object.keys(errs)[0];
      const el = document.getElementById(`${formId}-${firstKey}`);
      el?.focus();
      return;
    }

    setLoading(true);
    // Simulate async submission (no real API)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  const fieldId = (name: string) => `${formId}-${name}`;
  const errorId = (name: string) => `${formId}-${name}-error`;

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center text-center gap-5 py-16"
      >
        <CheckCircle
          size={48}
          strokeWidth={1.5}
          className="text-brand-red"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl font-bold text-foreground">
            Thank you for reaching out.
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            We&rsquo;ll get back to you as soon as possible.
          </p>
        </div>
        <button
          type="button"
          onClick={() => { setSubmitted(false); setValues(EMPTY); }}
          className="text-xs font-semibold text-brand-red hover:text-brand-red-hover transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
        >
          Send another inquiry →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Consultation inquiry form"
      className="flex flex-col gap-5"
    >
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={fieldId("name")}
            className="text-xs font-semibold tracking-wide text-foreground"
          >
            Name <span className="text-brand-red" aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={errors.name ? errorId("name") : undefined}
            aria-invalid={!!errors.name}
            value={values.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={cn(inputBase, errors.name ? inputError : inputNormal)}
          />
          {errors.name && (
            <p id={errorId("name")} role="alert" className="text-xs text-brand-red mt-0.5">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={fieldId("email")}
            className="text-xs font-semibold tracking-wide text-foreground"
          >
            Email <span className="text-brand-red" aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-describedby={errors.email ? errorId("email") : undefined}
            aria-invalid={!!errors.email}
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={cn(inputBase, errors.email ? inputError : inputNormal)}
          />
          {errors.email && (
            <p id={errorId("email")} role="alert" className="text-xs text-brand-red mt-0.5">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone + Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={fieldId("phone")}
            className="text-xs font-semibold tracking-wide text-foreground"
          >
            Phone{" "}
            <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="+62 812 0000 0000"
            className={cn(inputBase, inputNormal)}
          />
        </div>

        {/* Project Type */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={fieldId("projectType")}
            className="text-xs font-semibold tracking-wide text-foreground"
          >
            Project Type <span className="text-brand-red" aria-hidden="true">*</span>
          </label>
          <select
            id={fieldId("projectType")}
            name="projectType"
            required
            aria-required="true"
            aria-describedby={errors.projectType ? errorId("projectType") : undefined}
            aria-invalid={!!errors.projectType}
            value={values.projectType}
            onChange={handleChange}
            className={cn(
              inputBase,
              "cursor-pointer",
              errors.projectType ? inputError : inputNormal,
              !values.projectType && "text-neutral-400"
            )}
          >
            <option value="" disabled>
              Select a service...
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type} className="text-foreground">
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p id={errorId("projectType")} role="alert" className="text-xs text-brand-red mt-0.5">
              {errors.projectType}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Project Location */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={fieldId("projectLocation")}
          className="text-xs font-semibold tracking-wide text-foreground"
        >
          Project Location{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <input
          id={fieldId("projectLocation")}
          name="projectLocation"
          type="text"
          value={values.projectLocation}
          onChange={handleChange}
          placeholder="e.g. Malang, Jawa Timur"
          className={cn(inputBase, inputNormal)}
        />
      </div>

      {/* Row 4: Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={fieldId("message")}
          className="text-xs font-semibold tracking-wide text-foreground"
        >
          Message <span className="text-brand-red" aria-hidden="true">*</span>
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          required
          aria-required="true"
          aria-describedby={errors.message ? errorId("message") : undefined}
          aria-invalid={!!errors.message}
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us about your project, scope, timeline, or anything else we should know..."
          className={cn(
            "w-full px-4 py-3 rounded-sm border text-sm text-foreground placeholder:text-neutral-400 resize-none",
            "focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent",
            "transition-colors duration-150 bg-white",
            errors.message ? inputError : inputNormal
          )}
        />
        {errors.message && (
          <p id={errorId("message")} role="alert" className="text-xs text-brand-red mt-0.5">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-[0.6875rem] text-muted-foreground">
          <span className="text-brand-red">*</span> Required fields
        </p>
        <button
          type="submit"
          disabled={loading}
          aria-disabled={loading}
          className={cn(
            "inline-flex items-center justify-center gap-2 h-12 px-8 rounded",
            "text-sm font-bold tracking-widest uppercase text-white",
            "bg-brand-red hover:bg-brand-red-hover",
            "transition-colors duration-200",
            "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2",
            "disabled:opacity-60 disabled:cursor-not-allowed"
          )}
        >
          {loading ? (
            <>
              <Loader2 size={15} className="animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            "Send Inquiry"
          )}
        </button>
      </div>
    </form>
  );
}
