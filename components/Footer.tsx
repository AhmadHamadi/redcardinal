import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Plane } from 'lucide-react';
import { SITE, NAV_LINKS, SERVICES } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label={SITE.name} className="inline-block bg-white rounded-lg p-3">
            <Image
              src={SITE.logo}
              alt={`${SITE.name} logo`}
              width={200}
              height={44}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            Personal, professional flight training in Northern Virginia — Private Pilot
            Certification, Discovery Flights, aircraft rental, and additional pilot services.
            Outside the DC SFRA.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/20 p-2.5 hover:bg-brand hover:border-brand transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/20 p-2.5 hover:bg-brand hover:border-brand transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-brand-200">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/discovery-flight" className="text-white/70 hover:text-brand-200">
                Book a Discovery Flight
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href="/private-pilot-certification"
                className="text-white/70 hover:text-brand-200"
              >
                Private Pilot Certification
              </Link>
            </li>
            <li>
              <Link href="/airplane-rental" className="text-white/70 hover:text-brand-200">
                Airplane Rental
              </Link>
            </li>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/70 hover:text-brand-200"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-brand-200 shrink-0" />
              <span>
                {SITE.address.formatted}
                <br />
                <span className="text-white/50">{SITE.address.airport}</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-0.5 text-brand-200 shrink-0" />
              <a href={`tel:${SITE.phoneE164}`} className="hover:text-brand-200">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 mt-0.5 text-brand-200 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-brand-200">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-0.5 text-brand-200 shrink-0" />
              <div>
                {SITE.hours.map((h) => (
                  <div key={h.day}>
                    <span className="text-white">{h.day}</span> · {h.time}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <Plane className="h-3.5 w-3.5" /> Made for pilots who love flying.
          </p>
        </div>
      </div>
    </footer>
  );
}
