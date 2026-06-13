import Image from 'next/image';
import {
  Plane,
  Clock,
  ClipboardCheck,
  Send,
  ArrowRight,
  Check,
  HeartHandshake,
  Camera,
  MapPin,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FAQ from '@/components/FAQ';
import DiscoveryForm from '@/components/DiscoveryForm';
import { DISCOVERY_FAQ } from '@/lib/faqs';
import { SITE, IMG } from '@/lib/site';

export const metadata = {
  title: 'Discovery Flight in Northern Virginia — Book Yours',
  description:
    '60-minute Discovery Flight in a Cessna 150 with a real FAA instructor at Warrenton–Fauquier Airport (HWY). Beginners welcome.',
  alternates: { canonical: '/discovery-flight' },
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Introductory Flight Lesson',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Red Cardinal Aviation',
    telephone: '+15717465515',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5075 Airport Road',
      addressLocality: 'Midland',
      addressRegion: 'VA',
      postalCode: '22728',
      addressCountry: 'US',
    },
  },
  areaServed: ['Northern Virginia', 'Washington DC', 'Maryland'],
  name: 'Discovery Flight',
  description:
    '60-minute introductory flight experience: 15-minute ground briefing, 30 minutes hands-on flight time at the controls of a Cessna 150, and a 15-minute post-flight debrief.',
};

const breakdown = [
  {
    icon: ClipboardCheck,
    time: '15 min',
    title: 'Pre-flight Briefing',
    body: 'Meet your instructor, tour the airplane, and walk through controls, safety, and what you’ll do up there.',
  },
  {
    icon: Plane,
    time: '30 min',
    title: 'Hands-on Flying',
    body: 'You’ll actually fly. Take the yoke during cruise and explore turns, climbs, and descents at your pace.',
  },
  {
    icon: ClipboardCheck,
    time: '15 min',
    title: 'Post-flight Debrief',
    body: 'Review what you did, ask anything, and learn how it would scale into a full Private Pilot syllabus.',
  },
];

export default function DiscoveryFlightPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      <PageHero
        eyebrow="Discovery Flight"
        title="Discovery Flight in Northern Virginia"
        subtitle="A 60-minute introduction to flying for true beginners — no experience needed, no pressure, no commitment beyond a great morning at the airport."
        image={IMG.hero.discovery}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Discovery Flight' }]}
        height="lg"
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">
              <HeartHandshake className="h-3.5 w-3.5" /> What It Is
            </p>
            <h2 className="mt-4">A real flight lesson — designed for first-timers.</h2>
            <p className="mt-5 text-lg text-ink-muted">
              A Discovery Flight is the lowest-stakes way to find out if flying is for
              you. You’ll meet your instructor on the ramp, do a real pre-flight, get
              into the airplane, and take the controls during cruise. If you’re nervous,
              that’s normal — and your instructor flies the takeoff and landing.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Real Cessna 150 — same airplane our students train in',
                'Real FAA flight instructor — not a sightseeing pilot',
                'Counts toward your Private Pilot Certificate if you continue',
                'Logbook entry recording your first flight time',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink">
                  <Check className="h-5 w-5 text-brand mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
            <Image
              src={IMG.homepage.discoverySide}
              alt="Red Cardinal Aviation Cessna 150 on the ramp at Warrenton–Fauquier Airport"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-brand-50/30 to-white py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Your 60 Minutes"
            title="How a Discovery Flight is structured"
            subtitle="Three short, focused phases — so you get the most out of every minute."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {breakdown.map((b) => (
              <div key={b.title} className="card p-6">
                <div className="inline-flex rounded-2xl bg-brand/10 p-3">
                  <b.icon className="h-6 w-6 text-brand" />
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                  <Clock className="h-3.5 w-3.5" />
                  {b.time}
                </div>
                <h3 className="mt-1 text-lg text-ink">{b.title}</h3>
                <p className="mt-2 text-ink-muted text-sm">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: 'Where', body: `${SITE.address.formatted} — ${SITE.address.airport}.` },
            { icon: Clock, title: 'How long', body: 'Plan for 90 minutes door-to-door including paperwork and parking.' },
            { icon: Camera, title: 'Bring', body: 'Comfortable clothes, sunglasses, your phone for photos, and a valid ID.' },
          ].map((t) => (
            <div key={t.title} className="rounded-2xl border border-ink/10 p-6">
              <div className="inline-flex rounded-xl bg-brand/10 p-2.5">
                <t.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="mt-4 text-lg text-ink">{t.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="book" className="bg-ink py-20">
        <div className="container-x grid lg:grid-cols-5 gap-10 text-white">
          <div className="lg:col-span-2">
            <p className="eyebrow text-brand-200">
              <Send className="h-3.5 w-3.5" /> Book Your Flight
            </p>
            <h2 className="mt-4 text-white">Request a Discovery Flight</h2>
            <p className="mt-5 text-white/80 text-lg">
              Send us the form and we’ll confirm your date and time within one business
              day. Prefer to book instantly online?
            </p>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-6"
            >
              Book via Square Appointments
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-10 space-y-3 text-white/75 text-sm">
              <p>Or call us directly: <a href={`tel:${SITE.phoneE164}`} className="text-white font-semibold hover:text-brand-200">{SITE.phone}</a></p>
              <p>Email: <a href={`mailto:${SITE.email}`} className="text-white font-semibold hover:text-brand-200">{SITE.email}</a></p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <DiscoveryForm />
          </div>
        </div>
      </section>

      <FAQ
        items={DISCOVERY_FAQ}
        eyebrow="Discovery Flight FAQ"
        title="Common questions before your first flight"
        subtitle="From motion sickness to dress code — here is what most first-timers ask."
        variant="split"
      />
    </>
  );
}

