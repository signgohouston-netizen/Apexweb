import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  services?: string[];
  budget?: string;
  timeline?: string;
  message?: string;
  website?: string; // honeypot — must stay empty
  source?: string;
};

const MAX = { name: 120, email: 200, phone: 40, company: 160, message: 4000 };

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

const emailLooksValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Recipients for enquiry notifications. Supports a comma-separated list.
 *
 * Falls back to the address in site.ts whenever the environment variable is
 * missing OR blank — a variable defined with an empty value is easy to create
 * by accident on a hosting dashboard, and silently having no recipient means
 * every enquiry is dropped.
 */
function recipients() {
  const parse = (value: string | undefined) =>
    (value ?? "")
      .split(",")
      .map((address) => address.trim())
      .filter(Boolean);

  const configured = parse(process.env.ENQUIRY_TO_EMAIL);
  return configured.length > 0 ? configured : parse(site.contact.email);
}

type Enquiry = {
  name: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  source: string;
  message: string;
  receivedAt: string;
};

/**
 * Sends via FormSubmit (https://formsubmit.co) — a free forwarding service
 * that needs no account. The first submission to a given address triggers a
 * one-time confirmation email; once the link in it is clicked, every later
 * submission forwards straight to that inbox.
 *
 * Used automatically whenever RESEND_API_KEY is absent, so enquiries reach
 * you with zero configuration.
 *
 * `origin` is required: FormSubmit rejects requests with no Origin/Referer.
 */
async function deliverViaFormSubmit(
  enquiry: Enquiry,
  origin: string,
): Promise<boolean> {
  const [to] = recipients();
  if (!to) {
    console.error(
      "[enquiry] No recipient address configured — check ENQUIRY_TO_EMAIL. " +
        "The enquiry was NOT emailed.",
    );
    return false;
  }

  // Keys become the labels in the forwarded email, so they read as English.
  const payload = {
    _subject: `New enquiry — ${enquiry.name}${enquiry.company ? ` (${enquiry.company})` : ""}`,
    _replyto: enquiry.email,
    _template: "table",
    _captcha: "false",
    Name: enquiry.name,
    Email: enquiry.email,
    Phone: enquiry.phone || "—",
    Company: enquiry.company || "—",
    Services: enquiry.services.join(", ") || "—",
    Budget: enquiry.budget || "—",
    Timeline: enquiry.timeline || "—",
    "Came from": enquiry.source,
    Received: enquiry.receivedAt,
    Message: enquiry.message,
  };

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(to)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // FormSubmit rejects requests that carry no Origin/Referer, so we
            // present the site's own origin.
            Origin: origin,
            Referer: `${origin}/quote`,
          },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(12_000),
        },
      );

      const detail = await res.text();

      if (res.ok) {
        // FormSubmit answers 200 with success:"false" for a rejected send.
        if (/"success"\s*:\s*"?true"?/i.test(detail)) return true;
        if (/needs Activation/i.test(detail)) {
          console.error(
            `[enquiry] FormSubmit needs one-time activation. Check ${to} for an ` +
              "'Activate Form' email from FormSubmit and click the link. " +
              "Enquiries will forward automatically from then on.",
          );
          return false;
        }
        console.error("[enquiry] FormSubmit declined the message:", detail);
        return false;
      }

      if (res.status < 500) {
        console.error(
          `[enquiry] FormSubmit rejected the request (${res.status}):`,
          detail,
        );
        return false;
      }
      console.warn(
        `[enquiry] FormSubmit error ${res.status} on attempt ${attempt}:`,
        detail,
      );
    } catch (error) {
      console.warn(`[enquiry] FormSubmit attempt ${attempt} failed:`, error);
    }
  }

  return false;
}

/**
 * Sends the notification through Resend, retrying once on a transient
 * failure (network error or 5xx). Returns true only on a confirmed send.
 */
async function deliver(enquiry: Enquiry, apiKey: string): Promise<boolean> {
  const to = recipients();
  const from =
    process.env.ENQUIRY_FROM_EMAIL ?? "Apex Website <onboarding@resend.dev>";

  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone || "—"],
    ["Company", enquiry.company || "—"],
    ["Services", enquiry.services.join(", ") || "—"],
    ["Budget", enquiry.budget || "—"],
    ["Timeline", enquiry.timeline || "—"],
    ["Came from", enquiry.source],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:640px;color:#10221B">
      <div style="background:#0B3B2D;padding:20px 24px;border-radius:10px 10px 0 0">
        <h2 style="margin:0;color:#F8F6F0;font-size:19px">New enquiry from your website</h2>
        <p style="margin:6px 0 0;color:#A7DFCE;font-size:13px">${escapeHtml(enquiry.receivedAt)}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:9px 12px;background:#F8F6F0;border:1px solid #E6E2D8;font-weight:600;width:130px">${k}</td><td style="padding:9px 12px;border:1px solid #E6E2D8">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="color:#0B3B2D;margin:24px 0 8px;font-size:15px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6;font-size:14px;margin:0">${escapeHtml(enquiry.message)}</p>
      <p style="margin:24px 0 0;font-size:13px;color:#5C7168">
        Reply to this email and it goes straight back to ${escapeHtml(enquiry.name)}.
      </p>
    </div>`;

  const text = [
    "New enquiry from your website",
    enquiry.receivedAt,
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    enquiry.message,
    "",
    `Reply to this email to respond to ${enquiry.name} directly.`,
  ].join("\n");

  const body = JSON.stringify({
    from,
    to,
    reply_to: enquiry.email,
    subject: `New enquiry — ${enquiry.name}${enquiry.company ? ` (${enquiry.company})` : ""}`,
    html,
    text,
  });

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body,
        signal: AbortSignal.timeout(10_000),
      });

      if (res.ok) return true;

      const detail = await res.text();
      // 4xx means the request itself is wrong — retrying will not help.
      if (res.status < 500) {
        console.error(
          `[enquiry] Resend rejected the message (${res.status}):`,
          detail,
        );
        return false;
      }
      console.warn(
        `[enquiry] Resend error ${res.status} on attempt ${attempt}:`,
        detail,
      );
    } catch (error) {
      console.warn(`[enquiry] Send attempt ${attempt} failed:`, error);
    }
  }

  return false;
}

/** Lets you confirm delivery is configured without exposing any secret. */
export async function GET() {
  const to = recipients()[0];
  return NextResponse.json({
    emailDeliveryConfigured: Boolean(to),
    transport: process.env.RESEND_API_KEY ? "resend" : "formsubmit",
    deliveringTo: to,
    recipientCount: recipients().length,
    note: process.env.RESEND_API_KEY
      ? "Sending through Resend."
      : "Sending through FormSubmit. The first enquiry to a new address triggers a one-time confirmation email — click the link in it to activate forwarding.",
  });
}

/**
 * Handles quote and contact submissions.
 *
 * Every valid enquiry is emailed to ENQUIRY_TO_EMAIL (defaulting to the
 * address in src/content/site.ts). If RESEND_API_KEY is missing or the
 * send fails, the full enquiry is written to the server log so it is
 * never lost, and the response reports `delivered: false` so the UI can
 * show the direct phone and email instead.
 *
 * See README → "Wiring up the enquiry form".
 */
export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: bots fill hidden fields, humans never see them.
  if (clean(body.website, 100)) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const message = clean(body.message, MAX.message);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!emailLooksValid(email))
    errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please add a little more detail.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const enquiry: Enquiry = {
    name,
    email,
    phone: clean(body.phone, MAX.phone),
    company: clean(body.company, MAX.company),
    services: Array.isArray(body.services)
      ? body.services
          .slice(0, 12)
          .map((s) => clean(s, 60))
          .filter(Boolean)
      : [],
    budget: clean(body.budget, 60),
    timeline: clean(body.timeline, 60),
    source: clean(body.source, 60) || "website",
    message,
    receivedAt: new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
      dateStyle: "full",
      timeStyle: "short",
    }),
  };

  const origin = new URL(request.url).origin || site.url;

  // Resend when a key is configured, otherwise the no-setup FormSubmit path.
  const apiKey = process.env.RESEND_API_KEY;
  const delivered = apiKey
    ? await deliver(enquiry, apiKey)
    : await deliverViaFormSubmit(enquiry, origin);

  if (!delivered) {
    // Never drop a lead silently — put the whole thing in the log.
    console.error("[enquiry] DELIVERY FAILED — enquiry follows:", enquiry);
  }

  return NextResponse.json({ ok: true, delivered });
}
