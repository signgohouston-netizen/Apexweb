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
 * that needs no account. The first submission from a given DOMAIN triggers a
 * one-time confirmation email; once the link in it is clicked, every later
 * submission from that domain forwards straight to the inbox. Activation is
 * per origin, so a live site needs activating separately from localhost.
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
            `[enquiry] FormSubmit needs activation for ${origin}. Check ${to} for ` +
              "an 'Activate Form' email and click the link. Note that FormSubmit " +
              "activates per domain, so each origin needs this once.",
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
  // Blank env vars are as likely as missing ones, so treat them the same.
  // onboarding@resend.dev works with no DNS setup, but Resend will only
  // deliver from it to the address that owns the Resend account.
  const from =
    process.env.ENQUIRY_FROM_EMAIL?.trim() ||
    "Apex Website <onboarding@resend.dev>";

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
        if (res.status === 401 || res.status === 403) {
          if (/domain is not verified|not verified/i.test(detail)) {
            console.error(
              `[enquiry] Resend will not send from "${from}" — that domain is ` +
                "not verified. Either verify it under Domains in Resend, or set " +
                'ENQUIRY_FROM_EMAIL to "Apex Website <onboarding@resend.dev>".',
            );
          } else if (
            /only send testing emails|own email address/i.test(detail)
          ) {
            console.error(
              `[enquiry] Resend's shared sender can only deliver to the address ` +
                `that owns the account. Either sign up with ${to[0]}, or verify ` +
                "your own domain and set ENQUIRY_FROM_EMAIL to an address on it.",
            );
          } else {
            console.error("[enquiry] Resend rejected the API key:", detail);
          }
        } else {
          console.error(
            `[enquiry] Resend rejected the message (${res.status}):`,
            detail,
          );
        }
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
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from =
    process.env.ENQUIRY_FROM_EMAIL?.trim() ||
    "Apex Website <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({
      emailDeliveryConfigured: Boolean(to),
      transport: "formsubmit",
      deliveringTo: to,
      note:
        "Sending through FormSubmit. Activation is per DOMAIN: the first enquiry " +
        "from each domain (localhost, preview URLs and your live site are all " +
        "separate) triggers an 'Activate Form' email — click the link once per domain.",
    });
  }

  // Ask Resend whether the key works and which domains are usable, so a
  // misconfiguration shows up here instead of as a silently lost enquiry.
  let keyValid: boolean | "unknown" = "unknown";
  let verifiedDomains: string[] = [];
  try {
    const res = await fetch("https://api.resend.com/domains", {
      headers: { Authorization: `Bearer ${apiKey}` },
      signal: AbortSignal.timeout(8_000),
    });
    keyValid = res.ok;
    if (res.ok) {
      const body = (await res.json()) as {
        data?: { name?: string; status?: string }[];
      };
      verifiedDomains = (body.data ?? [])
        .filter((d) => d.status === "verified")
        .map((d) => d.name ?? "")
        .filter(Boolean);
    }
  } catch {
    keyValid = "unknown";
  }

  const senderDomain = from.match(/@([^>\s]+)/)?.[1] ?? "";
  const usingSharedSender = senderDomain === "resend.dev";
  const senderReady =
    usingSharedSender || verifiedDomains.includes(senderDomain);

  return NextResponse.json({
    emailDeliveryConfigured: Boolean(to) && keyValid === true && senderReady,
    transport: "resend",
    deliveringTo: to,
    sendingFrom: from,
    apiKeyValid: keyValid,
    verifiedDomains,
    senderReady,
    note: !keyValid
      ? "The Resend API key was rejected. Check RESEND_API_KEY."
      : usingSharedSender
        ? `Using Resend's shared sender, which can only deliver to the address that owns the Resend account. Make sure that account was created with ${to}. Verify your own domain to remove this limit.`
        : senderReady
          ? "Ready. Enquiries will send from your own verified domain."
          : `"${senderDomain}" is not verified in Resend, so sending will fail. Verify it under Domains, or set ENQUIRY_FROM_EMAIL to "Apex Website <onboarding@resend.dev>".`,
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
  // If Resend is configured but fails, fall back rather than lose the lead.
  const apiKey = process.env.RESEND_API_KEY?.trim();
  let transport: "resend" | "formsubmit" | null = null;

  if (apiKey && (await deliver(enquiry, apiKey))) {
    transport = "resend";
  } else {
    if (apiKey) {
      console.warn("[enquiry] Resend failed — falling back to FormSubmit.");
    }
    if (await deliverViaFormSubmit(enquiry, origin)) transport = "formsubmit";
  }

  const delivered = transport !== null;

  if (!delivered) {
    // Never drop a lead silently — put the whole thing in the log.
    console.error("[enquiry] DELIVERY FAILED — enquiry follows:", enquiry);
  }

  return NextResponse.json({ ok: true, delivered, transport });
}
