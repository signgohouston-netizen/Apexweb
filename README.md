# Apex Web Solutions UK — Website

A Next.js 16 marketing and sales site for **Apex Web Solutions UK Ltd**: website
packages, social media plans, managed hosting, domains, custom design services,
case studies and an enquiry pipeline.

Built with the App Router, TypeScript and Tailwind CSS v4.

---

## Running it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (also type-checks) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

---

## ⚠️ Before you go live

Three things need your real details. Everything else works as-is.

1. **Company registration details** — fill in `registration` in
   [`src/content/site.ts`](src/content/site.ts): registered address, company
   number and VAT number. Leave any of them as an empty string and the site
   quietly omits it — no placeholder is ever shown to a visitor. The footer and
   the privacy/terms pages both read from here, so it's a one-place edit.
2. **Portfolio and testimonials** — the six case studies and five quotes in
   [`src/content/work.ts`](src/content/work.ts) are placeholders. Swap in real
   clients, or cut the list down to the ones you have. Each case study
   automatically pulls in the matching testimonial by company name.
3. **Legal pages** — [`src/content/legal.ts`](src/content/legal.ts) is template
   text. Have it reviewed by a qualified adviser before relying on it.

---

## Where the content lives

You should almost never need to touch a page file. All copy, pricing and
structure sits in `src/content/`:

| File | Controls |
| --- | --- |
| `site.ts` | Company name, phone, email, WhatsApp, socials, navigation menus, headline stats |
| `services.ts` | The eight services — each entry generates a card **and** a full `/services/[slug]` page |
| `pricing.ts` | Website packages, social plans, hosting plans, care plans, domain prices, comparison table |
| `work.ts` | Case studies, testimonials, the five-step process, homepage FAQs |
| `legal.ts` | Privacy, terms and cookie pages |

**Adding a service** — append an object to the `services` array. The nav
dropdown, services page, detail page, sitemap and related-service links all pick
it up automatically.

**Adding a case study** — append to `projects` in `work.ts`. Set `featured: true`
to surface it on the homepage. Drop a screenshot in `public/work/` and set
`image: "/work/your-file.jpg"`; leave `image` unset and a generated brand-tinted
mockup is used instead (three layouts, chosen from the slug). Each case study
also pulls in the testimonial whose `company` matches its `client`.

### Replacing the site screenshots

The six images in `public/work/` are **sample site designs, not delivered client
work** — each is a full mockup with its own branding, built so the portfolio
reads as real websites rather than grey placeholder boxes. They appear in three
places: the work grid, each case study page, and the homepage hero.

To swap in a real project:

1. Screenshot the client's site at **1600×1000** (or any 16:10 crop).
2. Save it into `public/work/` as a JPEG, ideally under ~150KB.
3. Point that project's `image` field at it in `work.ts`.

The homepage hero uses `northgate-joinery.jpg` (desktop) and
`mobile-saffron.jpg` (the phone) — both referenced directly in
`src/components/home/hero.tsx` if you want different ones there.

**Changing prices** — edit the `price`, `setup` and `note` fields. Numeric
prices render with a `£` and thousands separator; string prices (e.g.
`"From £6,000"`) render as written.

---

## How the pricing is set

Every price in [`src/content/pricing.ts`](src/content/pricing.ts) is benchmarked
against the going UK rate for the same scope and set **12–14% below it**
(13.1% on average). The benchmark each price came from is recorded next to it in
a `benchmark` field, so the reasoning is visible rather than guessed.

| What | Typical UK | Apex | Saving |
| --- | --- | --- | --- |
| Five-page business website | £995 | £865 | −13.1% |
| Full 12-page business site | £1,995 | £1,725 | −13.5% |
| E-commerce store build | £3,150 | £2,745 | −12.9% |
| Social media management | £300/mo | £265/mo | −11.7% |
| Managed hosting | £14/mo | £12/mo | −14.3% |
| Website care plan | £45/mo | £39/mo | −13.3% |

Benchmarks are drawn from 2026 UK pricing guides: small business websites run
£1,200–£2,000 freelance and £2,500–£8,000 agency; social media management
£250–£500 light-touch and £600–£1,200 multi-platform; managed hosting £10–£40
a month; care plans £40–£120 a month; `.co.uk` renewals £12.99–£14.39.

This table is shown to visitors on `/websites` via the `MarketComparison`
section, driven by the `marketComparison` array in the same file — the "you
save" percentages are calculated, not typed, so they can't drift.

**Changing a price**: edit it in `pricing.ts` and update the matching
`marketComparison` row. The headline "from" prices used on the homepage, the
services pages and the comparison table all derive from `startingPrices` and the
plan data, so there is nothing else to keep in sync.

## Where enquiries go

Every contact and quote submission is emailed to **apexwebsolutionsuk@gmail.com**.
Replying to the notification goes straight back to the customer — their address
is set as the reply-to.

**This works out of the box, with no account and no configuration.**

Delivery runs through [FormSubmit](https://formsubmit.co), a free forwarding
service that needs no signup. The first enquiry sent triggers a one-time
*"Activate Form"* email; click the link in it and every later submission
forwards automatically.

> **FormSubmit activates per domain, not per email address.** `localhost`, each
> Vercel preview URL, and your live domain are separate forms to them, so each
> one needs its own activation click the first time it sends. If enquiries work
> locally but not in production, this is almost always why.

Check delivery status any time by opening `/api/contact` in a browser:

```json
{ "transport": "formsubmit", "deliveringTo": "apexwebsolutionsuk@gmail.com" }
```

### Switching to Resend (send from your own domain)

Sending from `enquiries@apexwebsolutionsuk.com` looks professional, keeps
customer data out of a third-party forwarder, and removes FormSubmit's
per-domain activation step.

**Step 1 — get it sending (2 minutes, no DNS needed)**

1. Sign up at [resend.com](https://resend.com) **using apexwebsolutionsuk@gmail.com**.
   Until a domain is verified, Resend's shared sender delivers only to the
   address that owns the account, so this must match.
2. Create an API key under *API Keys*.
3. In Vercel → *Settings → Environment Variables*, add:

   | Name | Value |
   | --- | --- |
   | `RESEND_API_KEY` | the key you just created |
   | `ENQUIRY_TO_EMAIL` | `apexwebsolutionsuk@gmail.com` |

   Leave `ENQUIRY_FROM_EMAIL` unset for now. **Make sure no variable is saved
   with an empty value** — a blank `ENQUIRY_TO_EMAIL` is what silently broke
   delivery once already.
4. Redeploy, then open `/api/contact` and check `"emailDeliveryConfigured": true`.

**Step 2 — send from your own domain (when you have 10 minutes)**

1. In Resend, *Domains → Add Domain* → `apexwebsolutionsuk.com`.
2. Add the DNS records it shows you (an MX and two TXT records) at whoever
   runs your DNS. Verification usually completes within the hour.
3. Set `ENQUIRY_FROM_EMAIL` in Vercel to
   `Apex Website <enquiries@apexwebsolutionsuk.com>` and redeploy.
4. `/api/contact` will list the domain under `verifiedDomains` and report
   `"senderReady": true`.

### Checking the setup

`GET /api/contact` is a live diagnostic. With Resend configured it validates the
key against the Resend API and reports which domains are actually verified:

```json
{
  "transport": "resend",
  "deliveringTo": "apexwebsolutionsuk@gmail.com",
  "sendingFrom": "Apex Website <enquiries@apexwebsolutionsuk.com>",
  "apiKeyValid": true,
  "verifiedDomains": ["apexwebsolutionsuk.com"],
  "senderReady": true
}
```

If something is wrong, `note` says exactly what to change.

### If delivery ever fails

Nothing is lost. If Resend is configured but fails for any reason — bad key,
unverified sender, an outage — the enquiry is automatically re-sent through
FormSubmit instead, and the response reports which transport actually delivered
it. Keep FormSubmit activated on your live domain so that safety net works.

If both fail, the full submission is written to the server log, the visitor
still sees a success message with your phone number and email, and the response
reports `delivered: false`. Transient network and 5xx errors are retried once;
a 4xx is logged with the specific fix rather than retried.

Want enquiries in a CRM instead? Both transports live in one file:
[`src/app/api/contact/route.ts`](src/app/api/contact/route.ts).

---

## Design system

Brand colours are the existing Apex palette: deep forest green `#0B3B2D` and
antique gold `#B08540`. Tokens are defined once in `@theme` at the top of
[`src/app/globals.css`](src/app/globals.css) — change them there and the whole
site follows.

- **Display type**: Playfair Display · **Body type**: Manrope (both self-hosted
  via `next/font`, no external requests)
- **Custom utilities**: `container-x`, `text-gold-gradient`, `rule-gold`,
  `glass-dark`, `bg-emerald-mesh`
- **Motion**: the `<Reveal>` component fades sections in on scroll and respects
  `prefers-reduced-motion`

---

## SEO and sharing

Handled automatically, no plugin required:

- Per-page titles, descriptions and canonical URLs
- `sitemap.xml` and `robots.txt` generated from the content files
- JSON-LD: `ProfessionalService` site-wide, `Service` on each service page
- A branded Open Graph image generated at `/opengraph-image`
- Brand favicon and Apple touch icon (`src/app/icon.svg`, `apple-icon.svg`)

Set your live domain in `site.url` (`src/content/site.ts`) — everything above
derives from it.

---

## Deploying

The site is fully static apart from the enquiry endpoint, so it runs anywhere
that supports Node.

**Vercel** (simplest): push to GitHub, import the repo, add the environment
variables from `.env.example`, deploy.

**Anywhere else**: `npm run build` then `npm start` behind your reverse proxy.

Point your domain at the deployment and keep the old URLs alive with redirects
if you're replacing the current WordPress site.

---

## Structure

```
src/
├── app/
│   ├── page.tsx                 Homepage
│   ├── websites/                Packages, comparison table, care plans
│   ├── social-media/            Plans, platforms, bundles
│   ├── hosting/  domains/       Hosting tiers, domain pricing
│   ├── services/[slug]/         One page per service
│   ├── work/[slug]/             Case studies
│   ├── about/ contact/ quote/   Company, contact, enquiry form
│   ├── legal/[doc]/             Privacy, terms, cookies
│   └── api/contact/             Enquiry handler
├── components/                  Header, footer, cards, form, sections
├── content/                     ← all copy and pricing lives here
└── lib/
```
