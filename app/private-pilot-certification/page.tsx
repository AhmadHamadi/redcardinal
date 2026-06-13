import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  Plane,
  ClipboardCheck,
  GraduationCap,
  Compass,
  BookOpen,
  Cloud,
  CalendarRange,
  Award,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import { PPL_FAQ } from '@/lib/faqs';
import { IMG } from '@/lib/site';

export const metadata = {
  title: 'Private Pilot Certification (PPL) in Virginia',
  description:
    'Earn your FAA Private Pilot Certificate in Midland, VA. Cessna 150 trainers, glass-cockpit options, CFI on staff, structured FAA Part 61 program.',
  alternates: { canonical: '/private-pilot-certification' },
};

const ppLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'FAA Private Pilot Certificate',
  description:
    'Part 61 Private Pilot training program covering all FAA requirements: 40-hour minimum flight time, ground instruction, solo, cross-country, night, and checkride preparation.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Red Cardinal Aviation',
    sameAs: 'https://redcardinalaviation.com',
  },
};

const stages = [
  {
    icon: Plane,
    title: 'Stage 1 — Pre-Solo',
    body: 'Fundamentals of aircraft control, traffic pattern, normal and crosswind landings, slow flight and stalls, emergency procedures.',
  },
  {
    icon: Compass,
    title: 'Stage 2 — Solo & Cross-Country',
    body: 'First solo, solo practice, dual and solo cross-country flights, navigation by pilotage, dead-reckoning, and GPS.',
  },
  {
    icon: Cloud,
    title: 'Stage 3 — Night & Instrument Intro',
    body: 'Required 3 hours instrument and 3 hours night, including a night cross-country, plus airspace and weather decision-making.',
  },
  {
    icon: Award,
    title: 'Stage 4 — Checkride Prep',
    body: 'Mock oral and practical exam with a senior instructor, ACS sign-off, and the FAA practical test (checkride).',
  },
];

const requirements = [
  '17 years old (16 to solo)',
  'Able to read, speak, and understand English',
  'FAA Third-Class Medical Certificate (or BasicMed)',
  'FAA Student Pilot Certificate (free, online via IACRA)',
  'Pass the FAA Private Pilot Knowledge Test',
  'Minimum 40 hours flight time (typical 60–75)',
  '20 hours dual instruction · 10 hours solo',
  'Pass the FAA Private Pilot Practical Test (checkride)',
];

export default function PPLPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ppLd) }} />

      <PageHero
        eyebrow="Flagship Program"
        title="Private Pilot Certification in Virginia"
        subtitle="The license that opens every door in general aviation — earned in modern Cessna 150s with instructors who genuinely teach."
        image={IMG.hero.ppl}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Private Pilot Certification' }]}
        height="lg"
      />

      {/* TL;DR answer block for AI/AEO citation */}
      <section className="bg-white border-b border-ink/5">
        <div className="container-x py-10">
          <div className="max-w-3xl mx-auto rounded-2xl border border-brand/20 bg-brand-50/40 p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              At a glance
            </p>
            <p className="mt-2 text-ink text-base md:text-lg leading-relaxed">
              The FAA Private Pilot Certificate (PPL) lets you act as pilot-in-command
              of a single-engine airplane and carry passengers under visual flight rules.
              At Red Cardinal Aviation in Midland, VA, most students finish in{' '}
              <strong>6–12 months</strong> and <strong>60–75 hours</strong> of flight time,
              flying a Cessna 150 at <strong>$150–$165/hr wet</strong>. Requires age 17,
              a Third-Class Medical (or BasicMed), passing the FAA knowledge test, and
              the practical checkride.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
            <Image
              src={IMG.ppl.feature}
              alt="Red Cardinal Aviation Cessna 150 trainer N1784Q"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">
              <GraduationCap className="h-3.5 w-3.5" /> What You Earn
            </p>
            <h2 className="mt-4">An FAA Private Pilot Certificate — your gateway to general aviation.</h2>
            <p className="mt-5 text-lg text-ink-muted">
              The Private Pilot Certificate (PPL) lets you legally act as pilot-in-command
              of a single-engine airplane, carry passengers, and travel under visual flight
              rules across the United States. It is the launchpad for instrument, commercial,
              and ATP ratings — and the most rewarding license to hold for personal flying.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                'Fly as pilot-in-command',
                'Carry friends and family',
                'Travel under day & night VFR',
                'Foundation for instrument training',
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-ink">
                  <Check className="h-5 w-5 text-brand mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/discovery-flight" className="btn-primary mt-10">
              <Plane className="h-4 w-4" /> Start With a Discovery Flight
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-brand-50/30 to-white py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Training Timeline"
            title="A four-stage path to your checkride"
            subtitle="Structured, transparent, and built around your individual progress."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((s, i) => (
              <div key={s.title} className="card p-6 relative">
                <span className="absolute -top-3 -left-3 grid h-9 w-9 place-items-center rounded-full bg-brand text-white text-sm font-bold shadow-card">
                  {i + 1}
                </span>
                <div className="inline-flex rounded-2xl bg-brand/10 p-3">
                  <s.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mt-4 text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow">
              <ClipboardCheck className="h-3.5 w-3.5" /> FAA Requirements
            </p>
            <h2 className="mt-4">What you need to qualify.</h2>
            <p className="mt-5 text-ink-muted text-lg">
              The FAA sets clear minimums for the Private Pilot Certificate. We help you
              meet every one — from your medical to your checkride.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-ink">
                  <Check className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">
              <BookOpen className="h-3.5 w-3.5" /> What’s Included
            </p>
            <h2 className="mt-4">A complete training package.</h2>
            <ul className="mt-8 space-y-4">
              {[
                'Personalized ground instruction',
                'Pre- and post-flight briefings for every lesson',
                'Online ground school resources & syllabus access',
                'Mock oral and practical exam before your checkride',
                'Logbook endorsements as you progress',
                'Continued mentorship after your checkride',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="rounded-full bg-brand/10 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-brand" />
                  </div>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl border border-ink/10 p-6 bg-brand-50/40">
              <p className="text-sm text-ink-muted">
                <CalendarRange className="inline h-4 w-4 text-brand mr-1" />
                Pricing depends on total hours flown. Reach out for a current quote
                tailored to your goals and availability.
              </p>
              <Link href="/contact" className="btn-primary mt-4">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={PPL_FAQ}
        eyebrow="Private Pilot FAQ"
        title="Everything you’re wondering about earning your PPL"
        variant="compact"
      />

      <CTABanner
        title="Your first lesson is one click away."
        subtitle="Book a Discovery Flight to experience our instructor style and our airplanes before you commit."
        primary={{ href: '/discovery-flight', label: 'Book a Discovery Flight' }}
        secondary={{ href: '/airplane-rental', label: 'See Our Fleet' }}
      />
    </>
  );
}
