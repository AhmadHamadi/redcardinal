import Link from 'next/link';
import Image from 'next/image';
import {
  Plane,
  ArrowRight,
  MapPin,
  Gauge,
  GraduationCap,
  ShieldCheck,
  Star,
  Calendar,
  Check,
  Camera,
  Truck,
  FileCheck,
  BadgeCheck,
  ClipboardCheck,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import HeroLeadForm from '@/components/HeroLeadForm';
import { HOME_FAQ } from '@/lib/faqs';
import { FLEET, BLOG_POSTS, IMG } from '@/lib/site';

export const metadata = {
  title: 'Flight School in Northern Virginia | Red Cardinal Aviation',
  description:
    'Private Pilot Certification, Discovery Flights and Cessna 150 rental in Midland, VA — outside the DC SFRA. Call 571-746-5515.',
  alternates: { canonical: '/' },
};

const HERO_IMAGE = IMG.hero.home;

const serviceIcons = {
  ferry: Truck,
  aerial: Camera,
  ipc: FileCheck,
  review: ClipboardCheck,
  endorsement: BadgeCheck,
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex items-center min-h-[88vh] overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Cessna single-engine training aircraft against a bright sky"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        {/* Stronger overlay so left-side white text stays readable */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/55" />

        <div className="container-x relative py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 text-white">
            <p className="eyebrow text-brand-200">
              <Plane className="h-3.5 w-3.5" />
              Flight Training in Northern Virginia
            </p>
            <h1 className="mt-4 text-white">
              Flight School in <span className="text-brand-200">Northern Virginia.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              Take flight with confidence — personal, professional flight training from
              the heart of the DMV, outside the DC SFRA. Earn your Private Pilot
              License, rent a Cessna 150, or book a Discovery Flight today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/discovery-flight" className="btn-primary">
                <Plane className="h-4 w-4" />
                Book a Discovery Flight
              </Link>
              <Link href="/private-pilot-certification" className="btn-outline">
                Private Pilot Certification
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-200" /> Outside the DC SFRA
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-200" /> Glass-cockpit Cessna 150s
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-200" /> CFI & CFII on staff
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <HeroLeadForm />
          </div>
        </div>
      </section>

      {/* FEATURED: PRIVATE PILOT CERTIFICATION (main thing under hero) */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
            <Image
              src={IMG.homepage.pplFeature}
              alt="Glass-cockpit panel of a Red Cardinal Aviation Cessna 150 trainer"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl p-5 flex items-center gap-4">
              <div className="rounded-full bg-brand/10 p-3">
                <GraduationCap className="h-6 w-6 text-brand" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Our Flagship Program
                </p>
                <p className="text-ink font-semibold">Private Pilot Certificate</p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">
              <BadgeCheck className="h-3.5 w-3.5" />
              Featured Program
            </p>
            <h2 className="mt-4">Earn Your Private Pilot Certificate</h2>
            <p className="mt-5 text-lg text-ink-muted">
              The Private Pilot Certificate (PPL) is the foundation of every flying journey
              — and our flagship program. We train you from your first Discovery Flight
              through your FAA checkride in modern, well-maintained Cessna 150s with
              instructors who actually care about your progress.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'FAA Part 61 training — minimum 40 hours flight time',
                'Structured ground school + one-on-one instructor sessions',
                'Solo, cross-country, night, and instrument training included',
                'Cessna 150 fleet — including a dual-G5 glass cockpit trainer',
                'Personalized pace — finish in 6–12 months on average',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="rounded-full bg-brand/10 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-brand" />
                  </div>
                  <span className="text-ink">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="/private-pilot-certification" className="btn-primary">
                Explore the PPL Program
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/discovery-flight" className="btn-ghost">
                Start With a Discovery Flight
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY RED CARDINAL */}
      <section className="bg-gradient-to-b from-white to-brand-50/40 py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Red Cardinal"
            title="A smarter way to train in the DMV"
            subtitle="Three things that make our students faster, safer, and more confident in the air."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: MapPin,
                title: 'Outside the SFRA',
                body: 'Our home base sits beyond the DC Special Flight Rules Area, so you skip the costly repositioning flights and complex airspace required at most DMV-area schools.',
              },
              {
                icon: Gauge,
                title: 'Affordable Glass-Panel Aircraft',
                body: 'Cessna 150s equipped with dual Garmin G5 displays and touchscreen GPS — modern avionics, IFR-rated, at a rental rate that respects your budget.',
              },
              {
                icon: GraduationCap,
                title: 'Personalized, Quality Instruction',
                body: 'No cookie-cutter syllabus. Instructors focus on your individual progress with the experience and passion to take you from first lesson to checkride.',
              },
            ].map((b) => (
              <div key={b.title} className="card p-8 group">
                <div className="inline-flex rounded-2xl bg-brand/10 p-3 group-hover:bg-brand group-hover:text-white transition-colors">
                  <b.icon className="h-6 w-6 text-brand group-hover:text-white" />
                </div>
                <h3 className="mt-5 text-ink">{b.title}</h3>
                <p className="mt-3 text-ink-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVERY FLIGHT CALLOUT */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-ink text-white">
            <Image
              src={IMG.homepage.discoveryCallout}
              alt="View from cockpit of a Cessna 150 during a Discovery Flight"
              fill
              sizes="100vw"
              className="absolute inset-0 -z-20 object-cover opacity-40"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/30" />
            <div className="relative grid lg:grid-cols-2 gap-10 p-10 md:p-14 lg:p-16">
              <div>
                <p className="eyebrow text-brand-200">
                  <Star className="h-3.5 w-3.5" />
                  The First Step
                </p>
                <h2 className="text-white mt-4">Try a 60-minute Discovery Flight</h2>
                <p className="mt-5 text-white/90 text-lg">
                  Never flown before? Perfect. A Discovery Flight is a low-pressure
                  introduction to flying — 15 minutes of ground briefing, 30 minutes
                  hands-on at the controls, and 15 minutes debrief with a real instructor.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/discovery-flight" className="btn-primary">
                    <Calendar className="h-4 w-4" />
                    Book Your Discovery Flight
                  </Link>
                  <Link href="/blog/discovery-flight-what-to-expect" className="btn-outline">
                    What to Expect
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                {[
                  { label: 'Total time', value: '60 minutes' },
                  { label: 'Ground briefing', value: '15 min' },
                  { label: 'Hands-on flying', value: '30 min' },
                  { label: 'Post-flight debrief', value: '15 min' },
                ].map((stat) => (
                  <li
                    key={stat.label}
                    className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-5"
                  >
                    <p className="text-xs uppercase tracking-wider text-white/60">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-display font-semibold text-white">
                      {stat.value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="bg-brand-50/40 py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              eyebrow="Our Fleet"
              title="Three Cessna 150 trainers — one classic, one glass, one IFR"
              subtitle="Reliable, fuel-efficient, fully maintained, and priced to keep your training affordable."
              align="left"
            />
            <Link href="/airplane-rental" className="btn-ghost shrink-0">
              View Airplane Rental
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {FLEET.map((p) => (
              <article key={p.tail} className="card overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.images[0]}
                    alt={`${p.model} (${p.tail})`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink">
                    <Plane className="h-3.5 w-3.5 text-brand" />
                    {p.tail}
                  </div>
                  <div className="absolute top-3 right-3 inline-flex items-center rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                    ${p.rate}/hr wet
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <h3 className="text-ink text-xl">{p.model}</h3>
                  <p className="text-sm text-ink-muted">{p.panel}</p>
                  <p className="text-sm text-ink-muted mt-2 flex-1">{p.use}</p>
                  <Link
                    href="/airplane-rental"
                    className="mt-4 inline-flex items-center gap-1 text-brand font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Rental details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Additional Services"
            title="Beyond training — services for current pilots"
            subtitle="From cross-country aircraft ferry to flight reviews and endorsements, we support pilots at every stage."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: '/services/aircraft-ferry',
                Icon: serviceIcons.ferry,
                title: 'Aircraft Ferry',
                body: 'Cross-country transport for single- and multi-engine piston aircraft.',
              },
              {
                href: '/services/aerial-photography',
                Icon: serviceIcons.aerial,
                title: 'Aerial Photography',
                body: 'High-wing Cessna 150 for unobstructed real-estate and event imagery.',
              },
              {
                href: '/services/instrument-proficiency-check',
                Icon: serviceIcons.ipc,
                title: 'Instrument Proficiency Check',
                body: 'FAR 61.57(d) IPC to restore your IFR currency, with a CFII.',
              },
              {
                href: '/services/flight-reviews',
                Icon: serviceIcons.review,
                title: 'Flight Reviews',
                body: 'FAR 61.56 BFR — 1 hour ground + 1 hour flight, tailored to you.',
              },
              {
                href: '/services/endorsements',
                Icon: serviceIcons.endorsement,
                title: 'Endorsements',
                body: 'High Performance, TAA, and Complex aircraft endorsements.',
              },
              {
                href: '/airplane-rental',
                Icon: Plane,
                title: 'Airplane Rental',
                body: 'Three Cessna 150s — analog VFR, dual-G5 glass, and IFR-capable.',
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card p-6 flex gap-4 hover:-translate-y-1 transition-transform group"
              >
                <div className="rounded-xl bg-brand-50 p-3 h-fit group-hover:bg-brand group-hover:text-white transition-colors">
                  <s.Icon className="h-5 w-5 text-brand group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-ink group-hover:text-brand transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">{s.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST QUOTE */}
      <section className="bg-ink text-white py-20">
        <div className="container-x max-w-3xl text-center">
          <ShieldCheck className="mx-auto h-10 w-10 text-brand-200" />
          <blockquote className="mt-5 text-2xl md:text-3xl font-display leading-relaxed">
            “We treat training the way we wish our own training had been treated —
            individual, patient, and honest. Your progress is the only metric that
            matters.”
          </blockquote>
          <p className="mt-5 text-white/60 text-sm uppercase tracking-wider">
            — The Red Cardinal Aviation Team
          </p>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              eyebrow="From the Blog"
              title="Stories, guides, and tips for new pilots"
              subtitle="Plain-English writing on training, gear, and what to expect at every stage."
              align="left"
            />
            <Link href="/blog" className="btn-ghost shrink-0">
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((p) => (
              <article key={p.slug} className="card overflow-hidden flex flex-col group">
                <Link href={`/blog/${p.slug}`} className="relative aspect-[16/10] block">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand">
                    {p.category}
                  </span>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs text-ink-muted flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(p.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    <span>·</span>
                    <span>{p.readMinutes} min read</span>
                  </div>
                  <h3 className="mt-3 text-xl text-ink">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="hover:text-brand transition-colors"
                    >
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-ink-muted text-sm flex-1">{p.excerpt}</p>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-brand font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={HOME_FAQ}
        eyebrow="Common Questions"
        title="Answers for first-time flyers"
        subtitle="Still wondering? Reach out — we love talking flying."
        variant="split"
      />

      <CTABanner />
    </>
  );
}
