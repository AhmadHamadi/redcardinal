import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import { CONTACT_FAQ } from '@/lib/faqs';
import { SITE, IMG } from '@/lib/site';

export const metadata = {
  title: 'Contact Red Cardinal Aviation — Midland, VA',
  description:
    'Call 571-746-5515 or email info@redcardinalaviation.com. We are at Warrenton–Fauquier Airport (HWY), 5075 Airport Road, Midland VA.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const cards = [
    {
      icon: MapPin,
      title: 'Visit',
      body: SITE.address.formatted,
      sub: SITE.address.airport,
      href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address.formatted)}`,
      action: 'Open in Maps',
    },
    {
      icon: Phone,
      title: 'Call',
      body: SITE.phone,
      sub: 'Mon–Fri 8a–7p · Weekends 7a–8p',
      href: `tel:${SITE.phoneE164}`,
      action: 'Call now',
    },
    {
      icon: Mail,
      title: 'Email',
      body: SITE.email,
      sub: 'We respond within one business day',
      href: `mailto:${SITE.email}`,
      action: 'Send email',
    },
    {
      icon: Clock,
      title: 'Hours',
      body: 'Open 7 days a week',
      sub: 'Mon–Fri 8a–7p · Sat–Sun 7a–8p',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s get you in the air."
        subtitle="Questions about training, rental, or a custom service? Reach out — a real pilot will get back to you."
        image={IMG.hero.contact}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => {
            const inner = (
              <>
                <div className="inline-flex rounded-2xl bg-brand/10 p-3">
                  <c.icon className="h-6 w-6 text-brand" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  {c.title}
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">{c.body}</p>
                <p className="mt-1 text-sm text-ink-muted">{c.sub}</p>
                {c.action && (
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    {c.action} →
                  </p>
                )}
              </>
            );
            return c.href ? (
              <a key={c.title} href={c.href} className="card p-6 hover:-translate-y-1 transition-transform block">
                {inner}
              </a>
            ) : (
              <div key={c.title} className="card p-6">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-b from-brand-50/30 to-white py-20">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <p className="eyebrow">
              <Send className="h-3.5 w-3.5" /> Send a Message
            </p>
            <h2 className="mt-4">Tell us about your goals.</h2>
            <p className="mt-5 text-lg text-ink-muted">
              Whether you’re ready to start your Private Pilot training, need to rent an
              aircraft, or are looking for an IPC or flight review — drop us a line and
              we’ll respond promptly.
            </p>

            <ul className="mt-8 space-y-4 text-ink">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand mt-0.5" />
                <span>
                  {SITE.address.formatted}
                  <br />
                  <span className="text-ink-muted text-sm">{SITE.address.airport}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand mt-0.5" />
                <a href={`tel:${SITE.phoneE164}`} className="hover:text-brand">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand mt-0.5" />
                <a href={`mailto:${SITE.email}`} className="hover:text-brand">{SITE.email}</a>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-ink/10 p-2.5 hover:bg-brand hover:border-brand hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-ink/10 p-2.5 hover:bg-brand hover:border-brand hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-label="Map of Red Cardinal Aviation" className="bg-white">
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[55vh] md:h-[60vh] border-y border-ink/10">
          <iframe
            title="Red Cardinal Aviation location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              SITE.address.formatted
            )}&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <FAQ
        items={CONTACT_FAQ}
        eyebrow="Contact FAQ"
        title="Before you call or write"
        variant="compact"
      />
    </>
  );
}

