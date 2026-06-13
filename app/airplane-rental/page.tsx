import Link from 'next/link';
import { Plane, Users, Gauge, MapPin, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import AircraftSlider from '@/components/AircraftSlider';
import { RENTAL_FAQ } from '@/lib/faqs';
import { FLEET, SITE, IMG } from '@/lib/site';

export const metadata = {
  title: 'Cessna 150 Airplane Rental in Northern Virginia',
  description:
    'Rent a Cessna 150 from $150/hr wet at Warrenton–Fauquier Airport (HWY). Analog VFR, dual-G5 glass, and IFR-capable trainers.',
  alternates: { canonical: '/airplane-rental' },
};

const requirements = [
  'Valid FAA Pilot Certificate (Student, Private, or higher)',
  'Current FAA Medical Certificate or BasicMed',
  'Current Flight Review (FAR 61.56)',
  'Aircraft checkout with a Red Cardinal instructor',
  'Minimum 3 hours total time in make & model recommended',
];

export default function AirplaneRentalPage() {
  return (
    <>
      <PageHero
        eyebrow="Airplane Rental"
        title="Cessna 150 Rental in Northern Virginia"
        subtitle="Three well-maintained aircraft. Honest hourly rates. Available to qualified renters and active students of Red Cardinal Aviation."
        image={IMG.hero.rental}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Airplane Rental' }]}
      />

      <section className="bg-white py-16">
        <div className="container-x">
          <div className="rounded-2xl bg-brand-50/60 border border-brand/10 p-5 md:p-6 flex items-start gap-4">
            <MapPin className="h-5 w-5 text-brand mt-0.5 shrink-0" />
            <p className="text-sm md:text-base text-ink">
              All aircraft are based at <strong>{SITE.address.airport}</strong> —{' '}
              {SITE.address.formatted}. Rentals are picked up and returned at this
              location and cannot be transferred between airports.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Three Cessna 150s — one mission, three avionics setups"
            subtitle="From basic-panel stick-and-rudder flying to dual-G5 glass for instrument practice."
            align="left"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {FLEET.map((p) => (
              <article
                key={p.tail}
                className="card overflow-hidden flex flex-col"
              >
                <AircraftSlider
                  images={p.images}
                  alt={`${p.model} ${p.tail}`}
                  topBadge={
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-card">
                      <MapPin className="h-3.5 w-3.5 text-brand" />
                      Midland, VA
                    </span>
                  }
                  priceBadge={
                    <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white shadow-card">
                      ${p.rate}/hr wet
                    </span>
                  }
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    <Plane className="h-3.5 w-3.5 text-brand" />
                    Tail · {p.tail}
                  </div>
                  <h3 className="mt-2 text-xl text-ink">{p.model}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-brand" />
                      {p.seats} seats
                    </li>
                    <li className="flex items-start gap-2">
                      <Gauge className="h-4 w-4 text-brand mt-0.5" />
                      <span>{p.panel}</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-ink-muted flex-1">{p.use}</p>
                  <Link
                    href={`/contact?aircraft=${p.tail}`}
                    className="btn-primary mt-6 w-full"
                  >
                    Reserve {p.tail}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50/40 py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" /> Rental Requirements
            </p>
            <h2 className="mt-4">What we need to put you in our airplanes.</h2>
            <p className="mt-5 text-ink-muted text-lg">
              Our requirements are designed to keep our airplanes — and our renters —
              safe and current. We are happy to handle your checkout in-house.
            </p>
            <ul className="mt-8 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-ink">
                  <Check className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">
              <Plane className="h-3.5 w-3.5" /> How Rentals Work
            </p>
            <h2 className="mt-4">Simple, transparent rental.</h2>
            <ol className="mt-8 space-y-5">
              {[
                {
                  title: 'Reach out',
                  body: 'Send us your certificate, medical, and recent flight times.',
                },
                {
                  title: 'Aircraft checkout',
                  body: 'Schedule a checkout flight with one of our CFIs in the airplane you intend to fly.',
                },
                {
                  title: 'Book online',
                  body: 'Once checked out, reserve the airplane through our scheduling system.',
                },
                {
                  title: 'Fly',
                  body: 'Pre-flight, fuel up, log Hobbs, and go. Wet rates — no separate fuel bill.',
                },
              ].map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{s.title}</p>
                    <p className="text-sm text-ink-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/contact" className="btn-primary mt-10 inline-flex">
              Start Your Checkout
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FAQ
        items={RENTAL_FAQ}
        eyebrow="Rental FAQ"
        title="What renters ask us most"
        variant="stacked"
      />

      <CTABanner
        title="Need to build hours or just go fly?"
        subtitle="Our Cessna 150s are clean, affordable, and ready when you are."
        primary={{ href: '/contact', label: 'Reserve an Aircraft' }}
        secondary={{ href: '/discovery-flight', label: 'New to Flying? Start Here' }}
      />
    </>
  );
}
