import Link from 'next/link';
import { HelpCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import PageHero from '@/components/PageHero';
import {
  HOME_FAQ,
  PPL_FAQ,
  DISCOVERY_FAQ,
  RENTAL_FAQ,
  SERVICES_FAQ,
  ABOUT_FAQ,
  CONTACT_FAQ,
} from '@/lib/faqs';
import { SITE, IMG } from '@/lib/site';
import { Plane, GraduationCap, Sparkles, Building2, MessageCircle, Wrench } from 'lucide-react';

export const metadata = {
  title: 'FAQ — Flight Training Questions Answered',
  description:
    'Answers about Private Pilot training, Discovery Flights, Cessna 150 rental, location, hours, and getting started at Red Cardinal Aviation.',
  alternates: { canonical: '/faq' },
};

const groups = [
  { id: 'getting-started', title: 'Getting Started', icon: Sparkles, items: HOME_FAQ },
  { id: 'discovery-flight', title: 'Discovery Flight', icon: Plane, items: DISCOVERY_FAQ },
  { id: 'private-pilot', title: 'Private Pilot Certification', icon: GraduationCap, items: PPL_FAQ },
  { id: 'rental', title: 'Airplane Rental', icon: Plane, items: RENTAL_FAQ },
  { id: 'services', title: 'Additional Services', icon: Wrench, items: SERVICES_FAQ },
  { id: 'about', title: 'About Our School', icon: Building2, items: ABOUT_FAQ },
  { id: 'contact', title: 'Contact & Hours', icon: MessageCircle, items: CONTACT_FAQ },
];

const allItems = groups.flatMap((g) => g.items);
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        subtitle="Everything you might want to know before you fly with Red Cardinal — organized by topic. Use the table of contents on the left."
        image={IMG.hero.faq}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-x grid lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              <p className="eyebrow"><HelpCircle className="h-3.5 w-3.5" /> Topics</p>
              <nav aria-label="FAQ topics" className="mt-5 flex flex-col gap-1">
                {groups.map((g) => (
                  <a
                    key={g.id}
                    href={`#${g.id}`}
                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-ink hover:bg-brand-50 hover:text-brand transition-colors"
                  >
                    <g.icon className="h-4 w-4 text-brand" />
                    {g.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 rounded-2xl bg-brand text-white p-6">
                <p className="text-sm uppercase tracking-wider text-white/70">Still stuck?</p>
                <p className="mt-1 text-lg font-semibold">We answer fast.</p>
                <div className="mt-4 space-y-2 text-sm">
                  <a href={`tel:${SITE.phoneE164}`} className="flex items-center gap-2 hover:text-white">
                    <Phone className="h-4 w-4" />
                    {SITE.phone}
                  </a>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white break-all">
                    <Mail className="h-4 w-4" />
                    {SITE.email}
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-white font-semibold text-sm hover:gap-2 transition-all"
                >
                  Ask a question <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-14">
            {groups.map((g) => (
              <section key={g.id} id={g.id} className="scroll-mt-28">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-brand/10 p-2.5">
                    <g.icon className="h-5 w-5 text-brand" />
                  </div>
                  <h2 className="text-2xl md:text-3xl">{g.title}</h2>
                </div>
                <div className="mt-6 space-y-3">
                  {g.items.map((f) => (
                    <details
                      key={f.q}
                      className="group rounded-2xl border border-ink/10 p-6 open:border-brand/40 open:shadow-card [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink">
                        {f.q}
                        <span className="rounded-full bg-brand/10 p-1.5 text-brand group-open:rotate-45 transition-transform shrink-0">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-ink-muted">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
