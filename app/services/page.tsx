import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Camera,
  Truck,
  FileCheck,
  ClipboardCheck,
  BadgeCheck,
  Check,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import { SERVICES_FAQ } from '@/lib/faqs';
import { SERVICES, IMG } from '@/lib/site';

export const metadata = {
  title: 'Pilot Services in Virginia — Ferry, IPC, Reviews',
  description:
    'Aircraft ferry, aerial photography, IPC, FAR 61.56 flight reviews, and pilot endorsements from Red Cardinal Aviation.',
  alternates: { canonical: '/services' },
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'aircraft-ferry': Truck,
  'aerial-photography': Camera,
  'instrument-proficiency-check': FileCheck,
  'flight-reviews': ClipboardCheck,
  'endorsements': BadgeCheck,
};

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Additional Services"
        title="Beyond training — services for current pilots."
        subtitle="From cross-country aircraft ferry to flight reviews, instrument proficiency, and endorsements — we support pilots at every stage."
        image={IMG.hero.services}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Additional Services' }]}
      />

      {/* Alternating service rows (distinct from card-grid layout used elsewhere) */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x space-y-20 md:space-y-28">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.slug];
            const reversed = i % 2 === 1;
            return (
              <article
                key={s.slug}
                className={[
                  'grid lg:grid-cols-12 gap-10 lg:gap-16 items-center',
                ].join(' ')}
              >
                <div
                  className={[
                    'relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card lg:col-span-6',
                    reversed ? 'lg:order-2' : '',
                  ].join(' ')}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-brand shadow-card">
                    <Icon className="h-4 w-4" />
                    Service {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <p className="eyebrow">{s.title}</p>
                  <h2 className="mt-3">{s.short}</h2>
                  <p className="mt-5 text-lg text-ink-muted">{s.description}</p>
                  <ul className="mt-6 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-ink">
                        <Check className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={`/services/${s.slug}`} className="btn-primary">
                      Service details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/contact" className="btn-ghost">
                      Request a quote
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <FAQ
        items={SERVICES_FAQ}
        eyebrow="Services FAQ"
        title="What pilots ask about our services"
        variant="split"
      />

      <CTABanner
        title="Need something not listed here?"
        subtitle="If it involves flying, there is a good chance we can help. Reach out and we will see what we can do."
        primary={{ href: '/contact', label: 'Talk to Us' }}
        secondary={{ href: '/airplane-rental', label: 'View Fleet' }}
      />
    </>
  );
}
