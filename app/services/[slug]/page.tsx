import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Phone, Mail, ArrowLeft, Images } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import AircraftSlider from '@/components/AircraftSlider';
import { SERVICES_FAQ } from '@/lib/faqs';
import { SERVICES, SITE } from '@/lib/site';

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} — Red Cardinal Aviation`,
    description: s.short,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const gallery = (service as { gallery?: string[] }).gallery;

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      telephone: SITE.phoneE164,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postal,
        addressCountry: SITE.address.country,
      },
    },
    areaServed: ['Virginia', 'Washington DC', 'Maryland', 'United States'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.short}
        image={service.image}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="eyebrow">Overview</p>
            <h2 className="mt-3">What this service covers</h2>
            <p className="mt-5 text-lg text-ink-muted">{service.description}</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink">
                  <Check className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl border border-ink/10 p-6 bg-brand-50/40">
              <p className="text-sm text-ink-muted">
                <strong className="text-ink">Pricing.</strong> We quote each engagement
                individually. Reach out with your needs and we will return an itemized
                estimate within one business day.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a href={`tel:${SITE.phoneE164}`} className="btn-primary">
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} className="btn-ghost">
                  <Mail className="h-4 w-4" /> Email Us
                </a>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                Quick Facts
              </p>
              <h3 className="mt-2 text-lg text-ink">{service.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-brand mt-1" /> Based at Warrenton–Fauquier (HWY)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-brand mt-1" /> Conducted by FAA-certified instructors
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-brand mt-1" /> Flexible scheduling — weekdays & weekends
                </li>
              </ul>
              <Link href="/contact" className="btn-primary mt-6 w-full">
                Request Service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-card">
              {gallery && gallery.length > 1 ? (
                <AircraftSlider
                  images={gallery}
                  alt={service.title}
                  aspectClass="aspect-[4/5]"
                  topBadge={
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-card">
                      <Images className="h-3.5 w-3.5" />
                      Gallery · {gallery.length}
                    </span>
                  }
                />
              ) : (
                <div className="relative aspect-[4/5]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width:1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {gallery && gallery.length > 1 && (
        <section className="bg-white pb-20">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="eyebrow">
                  <Images className="h-3.5 w-3.5" /> Gallery
                </p>
                <h2 className="mt-3">Recent {service.title.toLowerCase()} work</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gallery.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card group"
                >
                  <Image
                    src={src}
                    alt={`${service.title} sample ${i + 1}`}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-brand-50/40 py-20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <p className="eyebrow">More Services</p>
              <h2 className="mt-3">Other ways we can help</h2>
            </div>
            <Link href="/services" className="btn-ghost">
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="card p-6 group hover:-translate-y-1 transition-transform"
              >
                <h3 className="text-lg text-ink group-hover:text-brand transition-colors">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{o.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-brand font-semibold text-sm">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={SERVICES_FAQ}
        eyebrow="Service FAQ"
        title="Common questions about this service"
        variant="stacked"
      />

      <CTABanner
        title={`Ready to book ${service.title.toLowerCase()}?`}
        subtitle="Send us a few details and we will return a quote within one business day."
        primary={{ href: '/contact', label: 'Request a Quote' }}
        secondary={{ href: '/services', label: 'See All Services' }}
      />
    </>
  );
}
