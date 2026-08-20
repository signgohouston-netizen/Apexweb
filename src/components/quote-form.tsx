"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import { Icons } from "@/components/icons";
import { site } from "@/content/site";

const SERVICE_OPTIONS = [
  "New website",
  "Website redesign",
  "E-commerce store",
  "Social media management",
  "SEO & content",
  "Graphic design & print",
  "App development",
  "Hosting & maintenance",
];

const BUDGETS = [
  "Under £1,000",
  "£1,000 – £2,500",
  "£2,500 – £5,000",
  "£5,000 – £10,000",
  "£10,000+",
  "Not sure yet",
];
const TIMELINES = [
  "As soon as possible",
  "Within a month",
  "1–3 months",
  "Just exploring",
];

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-2xl border border-forest-800/12 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-all duration-300 placeholder:text-muted/50 focus:border-gold-400 focus:ring-4 focus:ring-gold-400/12";

// Native selects lose their arrow with appearance-none, so we draw one back in.
const selectClass =
  "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235C7168%22 stroke-width=%221.8%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6.5 9.5 5.5 5.5 5.5-5.5%22/></svg>')] bg-[length:18px_18px] bg-[right_1rem_center] bg-no-repeat pr-11";

const labelClass = "mb-2 block text-[13px] font-semibold text-forest-900";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const params = useSearchParams();
  const preselected = params.get("package") ?? params.get("service") ?? "";

  const [services, setServices] = useState<string[]>(() => {
    const map: Record<string, string> = {
      starter: "New website",
      business: "New website",
      ecommerce: "E-commerce store",
      bespoke: "New website",
      "social-spark": "Social media management",
      "social-growth": "Social media management",
      "social-dominate": "Social media management",
      "host-starter": "Hosting & maintenance",
      "host-business": "Hosting & maintenance",
      "host-enterprise": "Hosting & maintenance",
      "care-basic": "Hosting & maintenance",
      "care-plus": "Hosting & maintenance",
      "web-design": "New website",
      "seo-content": "SEO & content",
      "graphic-design": "Graphic design & print",
      "app-development": "App development",
      "social-media": "Social media management",
      hosting: "Hosting & maintenance",
    };
    const match = map[preselected];
    return match ? [match] : [];
  });

  const [status, setStatus] = useState<Status>("idle");
  const [delivered, setDelivered] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggle = (value: string) =>
    setServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value],
    );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrors({});

    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      company: data.get("company"),
      budget: data.get("budget"),
      timeline: data.get("timeline"),
      message: data.get("message"),
      website: data.get("website"),
      source: preselected || "quote-form",
      services,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        setErrors(
          json.errors ?? {
            form: json.error ?? "Something went wrong. Please try again.",
          },
        );
        setStatus("error");
        return;
      }
      setDelivered(Boolean(json.delivered));
      setStatus("sent");
    } catch {
      setErrors({
        form: "We couldn't reach the server. Please email or call us instead.",
      });
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-gold-400/40 bg-white p-10 text-center shadow-[0_28px_60px_-30px_rgba(11,59,45,.35)]">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-forest-800 text-gold-300">
          <Icons.check className="size-7 stroke-[2.5]" />
        </span>
        <h3 className="mt-6 text-[26px] text-forest-900">
          Thank you — that&apos;s with us
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15.5px] leading-relaxed text-muted">
          {delivered
            ? site.contact.responseTime
            : "Your message has been recorded. If you don't hear back within one working day, please reach us directly using the details below."}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-forest-800/15 px-5 py-2.5 text-sm font-semibold text-forest-800 transition-colors hover:bg-forest-800/5"
          >
            <Icons.phoneCall className="size-4 text-gold-500" />
            {site.contact.phone}
          </a>
          <a
            href={site.contact.emailHref}
            className="inline-flex items-center gap-2 rounded-full border border-forest-800/15 px-5 py-2.5 text-sm font-semibold text-forest-800 transition-colors hover:bg-forest-800/5"
          >
            <Icons.mail className="size-4 text-gold-500" />
            {site.contact.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-forest-800/10 bg-white p-6 shadow-[0_28px_60px_-34px_rgba(11,59,45,.35)] sm:p-9"
    >
      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Your name <span className="text-gold-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Whitfield"
            className={cn(
              inputClass,
              errors.name && "border-red-400 ring-4 ring-red-100",
            )}
          />
          {errors.name && (
            <p className="mt-1.5 text-[12.5px] text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email address <span className="text-gold-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@yourcompany.co.uk"
            className={cn(
              inputClass,
              errors.email && "border-red-400 ring-4 ring-red-100",
            )}
          />
          {errors.email && (
            <p className="mt-1.5 text-[12.5px] text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07700 900123"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="company">
            Business name{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Whitfield & Co."
            className={inputClass}
          />
        </div>
      </div>

      <fieldset className="mt-7">
        <legend className={labelClass}>
          What do you need? Choose as many as apply.
        </legend>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((option) => {
            const active = services.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggle(option)}
                aria-pressed={active}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13.5px] font-medium transition-all duration-300",
                  active
                    ? "border-gold-400 bg-gold-400/15 text-forest-900"
                    : "border-forest-800/12 text-muted hover:border-forest-800/30 hover:text-forest-800",
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      {!compact && (
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="budget">
              Rough budget
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className={cn(inputClass, selectClass)}
            >
              <option value="">Select a range</option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="timeline">
              When do you want to start?
            </label>
            <select
              id="timeline"
              name="timeline"
              defaultValue=""
              className={cn(inputClass, selectClass)}
            >
              <option value="">Select a timeline</option>
              {TIMELINES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="mt-7">
        <label className={labelClass} htmlFor="message">
          Tell us about the project <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What does your business do, who are your customers, and what would make this project a success?"
          className={cn(
            inputClass,
            "resize-y",
            errors.message && "border-red-400 ring-4 ring-red-100",
          )}
        />
        {errors.message && (
          <p className="mt-1.5 text-[12.5px] text-red-600">{errors.message}</p>
        )}
      </div>

      {errors.form && (
        <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
          {errors.form}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 px-8 py-4 text-base font-semibold text-forest-950 shadow-[0_8px_28px_-8px_rgba(176,133,64,.75)] transition-all duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-8px_rgba(176,133,64,.95)] active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send my enquiry"}
        {status !== "sending" && (
          <Icons.arrow className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>

      <p className="mt-4 text-center text-[12.5px] leading-relaxed text-muted">
        No obligation and no sales calls. We use your details only to reply to
        this enquiry — see our{" "}
        <Link
          href="/legal/privacy"
          className="text-forest-700 underline underline-offset-2"
        >
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
