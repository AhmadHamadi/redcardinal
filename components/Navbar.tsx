'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Plane, Phone } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="bg-ink text-white text-xs">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-2 opacity-90">
            <Plane className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">
              Flight school outside the DC SFRA — Warrenton–Fauquier Airport (HWY)
            </span>
            <span className="sm:hidden">Warrenton–Fauquier Airport (HWY)</span>
          </div>
          <a
            href={`tel:${SITE.phoneE164}`}
            className="flex items-center gap-1.5 hover:text-brand-200"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </div>

      <header
        className={[
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur shadow-card border-b border-ink/5'
            : 'bg-white border-b border-transparent',
        ].join(' ')}
      >
        <div className="container-x flex h-24 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={SITE.name}>
            <Image
              src={SITE.logo}
              alt={`${SITE.name} logo`}
              width={320}
              height={144}
              priority
              className="h-14 w-auto md:h-16 lg:h-[72px]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    active
                      ? 'text-brand'
                      : 'text-ink hover:text-brand',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex">
            <Link href="/discovery-flight" className="btn-primary">
              <Plane className="h-4 w-4" aria-hidden="true" />
              Book a Discovery Flight
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-ink/5"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-ink/5 bg-white">
            <nav className="container-x py-4 flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== '/' && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'rounded-md px-3 py-3 text-base font-medium',
                      active ? 'bg-brand-50 text-brand' : 'text-ink hover:bg-ink/5',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/discovery-flight" className="btn-primary mt-3 w-full">
                <Plane className="h-4 w-4" aria-hidden="true" />
                Book a Discovery Flight
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
