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

/**
 * Handles quote and contact submissions.
 *
 * Email delivery is sent through Resend when RESEND_API_KEY is present.
 * Without it the submission is logged server-side and the response reports
 * `delivered: false`, so the UI can show the direct contact details instead.
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

  const services = Array.isArray(body.services)
    ? body.services
        .slice(0, 12)
        .map((s) => clean(s, 60))
        .filter(Boolean)
    : [];

  const enquiry = {
    name,
    email,
    phone: clean(body.phone, MAX.phone),
    company: clean(body.company, MAX.company),
    services,
    budget: clean(body.budget, 60),
    timeline: clean(body.timeline, 60),
    source: clean(body.source, 60) || "website",
    message,
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL ?? site.contact.email;
  const from =
    process.env.ENQUIRY_FROM_EMAIL ?? "Apex Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn(
      "[enquiry] RESEND_API_KEY is not set — logging submission instead of emailing it.",
      enquiry,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const rows = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone || "—"],
    ["Company", enquiry.company || "—"],
    ["Services", services.join(", ") || "—"],
    ["Budget", enquiry.budget || "—"],
    ["Timeline", enquiry.timeline || "—"],
    ["Source", enquiry.source],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:640px">
      <h2 style="color:#0B3B2D;margin:0 0 4px">New enquiry from the website</h2>
      <p style="color:#5C7168;margin:0 0 20px;font-size:14px">${enquiry.receivedAt}</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;background:#F8F6F0;border:1px solid #e6e2d8;font-weight:600;width:130px">${k}</td><td style="padding:8px 12px;border:1px solid #e6e2d8">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="color:#0B3B2D;margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6;font-size:14px">${escapeHtml(enquiry.message)}</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: enquiry.email,
        subject: `New enquiry — ${enquiry.name}${enquiry.company ? ` (${enquiry.company})` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error(
        "[enquiry] Resend rejected the message:",
        res.status,
        await res.text(),
      );
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[enquiry] Failed to send:", error);
    return NextResponse.json({ ok: true, delivered: false });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
