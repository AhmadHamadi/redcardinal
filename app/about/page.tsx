import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Plane,
  MapPin,
  Compass,
  Heart,
  Shield,
  Target,
  Users,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import { ABOUT_FAQ } from '@/lib/faqs';
import { SITE, IMG } from '@/lib/site';

export const metadata = {
  title: 'About Our Northern Virginia Flight School',
  description:
    'Red Cardinal Aviation is a personal, professional flight school at Warrenton–Fauquier Airport (HWY) — outside the DC SFRA.',
  alternates: { canonical: '/about' },
};

const ABOUT_HERO = IMG.hero.about;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built by Pilots. For Pilots."
        subtitle="Red Cardinal Aviation is a Northern Virginia flight school dedicated to training the next generation of pilots — patiently, professionally, and one student at a time."
        image={ABOUT_HERO}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        height="lg"
      />

      {/* OUR STORY */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">
              <Compass className="h-3.5 w-3.5" /> Our Story
            </p>
            <h2 className="mt-4">A flight school the DMV actually needs.</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-ink-muted">
            <p>
              Red Cardinal Aviation was founded in 2024 with a simple goal: to deliver
              the kind of flight training the founders themselves wished they had
              received. We wanted a school where progress was measured by skill and
              confidence — not by how many hours could be billed.
            </p>
            <p>
              Today, we operate from Warrenton–Fauquier Airport (HWY) in Midland,
              Virginia — intentionally located <strong className="text-ink">outside
              the Washington D.C. Special Flight Rules Area</strong>. That single
              choice removes a major source of cost, complexity, and frustration that
              new pilots face at most DMV-area schools.
            </p>
            <p>
              We keep our fleet small, modern, and well-maintained, and we train you
              in glass-panel Cessna 150s that are honest, affordable, and forgiving.
              Whether you walked in this morning curious about flight or you are
              chasing an airline career, the training you receive at Red Cardinal
              will be deliberate, transparent, and personal.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="bg-gradient-to-b from-brand-50/30 to-white py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, vision, and the values we train by"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                body: 'To produce confident, capable, and safety-minded pilots through individual, judgement-based instruction.',
              },
              {
                icon: Heart,
                title: 'Our Vision',
                body: 'To be the most trusted name in personal flight training across Northern Virginia and the DMV.',
              },
              {
                icon: Shield,
                title: 'Our Promise',
                body: 'No fluff, no hidden fees, no rushed checkrides. Every hour of instruction is an investment in your skill.',
              },
            ].map((b) => (
              <div key={b.title} className="card p-8">
                <div className="inline-flex rounded-2xl bg-brand/10 p-3">
                  <b.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mt-5 text-ink">{b.title}</h3>
                <p className="mt-3 text-ink-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART (over background image with always-readable card) */}
      <section className="relative isolate py-24 overflow-hidden">
        <Image
          src={IMG.about.backdrop}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/60" />
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <p className="eyebrow text-brand-200">
              <Plane className="h-3.5 w-3.5" /> What Sets Us Apart
            </p>
            <h2 className="text-white mt-4">
              A training environment built for results, not volume.
            </h2>
            <p className="mt-5 text-white/85 text-lg">
              Most DMV-area flight schools fight crowded airspace, expensive ramp fees,
              and instructor turnover. Red Cardinal was built deliberately the other
              way — lower cost, more attention, more flying.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: MapPin,
                title: 'Strategic Location',
                body: 'Outside the SFRA. No repositioning, less wasted Hobbs time.',
              },
              {
                icon: Plane,
                title: 'Modern Fleet',
                body: 'Cessna 150s with dual-G5 glass and GPS — IFR-rated.',
              },
              {
                icon: Users,
                title: 'Low Student Load',
                body: 'We deliberately stay small so every student gets attention.',
              },
              {
                icon: Heart,
                title: 'Pilots First',
                body: 'Built and run by people who love teaching others to fly.',
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <div className="inline-flex rounded-xl bg-brand/10 p-2.5">
                  <b.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mt-4 text-lg text-ink">{b.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
            <Image
              src={IMG.about.airportAerial}
              alt="Aerial view of a small regional airport similar to Warrenton–Fauquier"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">
              <MapPin className="h-3.5 w-3.5" /> Find Us
            </p>
            <h2 className="mt-4">Warrenton–Fauquier Airport (HWY)</h2>
            <p className="mt-5 text-lg text-ink-muted">
              {SITE.address.formatted}. A quiet, uncongested general-aviation field
              about an hour west of Washington D.C. — ideal for low-stress training,
              cross-country planning, and pattern work.
            </p>
            <ul className="mt-6 space-y-3 text-ink">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand" /> {SITE.address.formatted}
              </li>
              <li className="flex items-center gap-3">
                <Plane className="h-5 w-5 text-brand" /> KHWY · Class G airspace
              </li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/discovery-flight" className="btn-ghost">
                Book a Discovery Flight
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={ABOUT_FAQ}
        eyebrow="Get to Know Us"
        title="About Red Cardinal — answered"
        variant="stacked"
      />

      <CTABanner
        title="Come fly with Red Cardinal."
        subtitle="The shortest path from curious to certified starts with one hour in our airplane."
      />
    </>
  );
}
