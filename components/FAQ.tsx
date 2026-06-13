import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';

export type FAQItem = { q: string; a: string };

export default function FAQ({
  items,
  eyebrow = 'Frequently Asked',
  title = 'Questions before you fly with us',
  subtitle,
  variant = 'split',
}: {
  items: FAQItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  variant?: 'split' | 'stacked' | 'compact';
}) {
  // NOTE: FAQPage JSON-LD is intentionally NOT emitted here. It lives on /faq only,
  // to avoid duplicate FAQPage schema across the site.

  if (variant === 'stacked') {
    return (
      <section className="bg-white py-20 md:py-24 border-t border-ink/5">
        <div className="container-x max-w-3xl">
          <div className="text-center">
            <p className="eyebrow"><HelpCircle className="h-3.5 w-3.5" /> {eyebrow}</p>
            <h2 className="mt-4">{title}</h2>
            {subtitle && <p className="mt-4 text-ink-muted text-lg">{subtitle}</p>}
          </div>
          <div className="mt-12 space-y-3">
            {items.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-brand-50/40 border border-ink/5 p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink">
                  {f.q}
                  <PlusIcon />
                </summary>
                <p className="mt-3 text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/faq" className="btn-ghost">
              See full FAQ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'compact') {
    return (
      <section className="bg-gradient-to-b from-white to-brand-50/30 py-20 border-t border-ink/5">
        <div className="container-x grid md:grid-cols-2 gap-4">
          {items.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-white shadow-card p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink">
                {f.q}
                <PlusIcon />
              </summary>
              <p className="mt-3 text-ink-muted text-sm">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="container-x mt-10 text-center">
          <Link href="/faq" className="btn-ghost">
            See full FAQ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand-50/40 py-20 md:py-24 border-t border-ink/5">
      <div className="container-x grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <p className="eyebrow"><HelpCircle className="h-3.5 w-3.5" /> {eyebrow}</p>
          <h2 className="mt-4">{title}</h2>
          {subtitle && <p className="mt-4 text-ink-muted">{subtitle}</p>}
          <Link href="/faq" className="btn-ghost mt-6 inline-flex">
            See full FAQ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-2 space-y-3">
          {items.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-white shadow-card p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink">
                {f.q}
                <PlusIcon />
              </summary>
              <p className="mt-3 text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <span className="rounded-full bg-brand/10 p-1.5 text-brand group-open:rotate-45 transition-transform shrink-0">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
    </span>
  );
}
