# Red Cardinal Aviation

Marketing site for Red Cardinal Aviation — flight school in Midland, VA (Warrenton–Fauquier Airport, HWY) offering Private Pilot Certification, Discovery Flights, aircraft rental, and additional services.

## Stack
- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS
- lucide-react icons
- Deployed on Vercel

## Local development
```bash
cp .env.example .env.local      # then fill in SMTP_* values
npm install
npm run dev
```
Then open http://localhost:3000

## Deploy to Vercel
1. Push this repo to GitHub
2. Import the project at https://vercel.com/new
3. Framework preset: Next.js (auto-detected)
4. Add the environment variables from `.env.example` to
   **Project Settings → Environment Variables** (Production + Preview):
   `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_TO`, `EMAIL_FROM`
5. Click Deploy

## Forms
- `/contact` and `/discovery-flight` use Server Actions (`app/actions/*`)
  that call `lib/email.ts` → Nodemailer → SMTP.
- All form submissions are emailed to `EMAIL_TO` (defaults to
  `info@redcardinalaviation.com`) with the visitor's address set as `Reply-To`,
  so hitting Reply lands directly in their inbox.
- A hidden `company` honeypot field deflects most spam bots; basic length
  + email-format validation runs server-side.

## Site map
- `/` — Homepage
- `/about` — About Us
- `/private-pilot-certification` — PPL program detail
- `/discovery-flight` — Discovery Flight booking
- `/airplane-rental` — 3-aircraft rental grid
- `/services` — Additional services hub
- `/services/aircraft-ferry`
- `/services/aerial-photography`
- `/services/instrument-proficiency-check`
- `/services/flight-reviews`
- `/services/endorsements`
- `/blog` — Blog hub
- `/blog/become-private-pilot-virginia`
- `/blog/discovery-flight-what-to-expect`
- `/blog/why-train-outside-dc-sfra`
- `/contact` — Contact form

## SEO / AEO
- Per-page metadata + Open Graph
- JSON-LD: Organization, LocalBusiness, Service, Article, FAQPage, BreadcrumbList
- `app/sitemap.ts` and `app/robots.ts`
