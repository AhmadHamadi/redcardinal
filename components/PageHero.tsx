import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SITE } from '@/lib/site';

type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  eyebrow,
  subtitle,
  image,
  crumbs,
  align = 'center',
  height = 'md',
}: {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image: string;
  crumbs?: Crumb[];
  align?: 'center' | 'left';
  height?: 'sm' | 'md' | 'lg';
}) {
  const heights = {
    sm: 'min-h-[42vh] py-24',
    md: 'min-h-[55vh] py-28',
    lg: 'min-h-[70vh] py-32',
  };

  // Emit BreadcrumbList JSON-LD when crumbs are provided
  const breadcrumbLd = crumbs && crumbs.length > 1 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE.url}${c.href === '/' ? '' : c.href}` } : {}),
    })),
  } : null;

  return (
    <section
      className={[
        'relative isolate flex items-center overflow-hidden',
        heights[height],
        align === 'center' ? 'text-center' : 'text-left',
      ].join(' ')}
    >
      {breadcrumbLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      )}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/85" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(176,37,43,0.18),_transparent_55%)]" />

      <div
        className={[
          'container-x relative text-white',
          align === 'center' ? 'mx-auto max-w-3xl' : '',
        ].join(' ')}
      >
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={[
              'mb-5 flex flex-wrap items-center gap-1.5 text-xs text-white/75',
              align === 'center' ? 'justify-center' : '',
            ].join(' ')}
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-white underline-offset-4 hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="eyebrow text-brand-200 mb-4">{eyebrow}</p>
        )}
        <h1 className="text-white drop-shadow">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
