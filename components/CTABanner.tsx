import Link from 'next/link';
import Image from 'next/image';
import { Plane, ArrowRight } from 'lucide-react';
import { IMG } from '@/lib/site';

export default function CTABanner({
  title = 'Ready to take the controls?',
  subtitle = 'A Discovery Flight is the easiest way to find out if flying is for you. 60 minutes, hands-on, with a real flight instructor.',
  primary = { href: '/discovery-flight', label: 'Book a Discovery Flight' },
  secondary = { href: '/contact', label: 'Talk to an Instructor' },
}: {
  title?: string;
  subtitle?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 md:py-24">
      <Image
        src={IMG.ctaBanner}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/95 to-ink/80" />
      <div className="container-x text-center text-white">
        <h2 className="text-white">{title}</h2>
        <p className="mt-4 mx-auto max-w-2xl text-white/85 text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={primary.href} className="btn-primary">
            <Plane className="h-4 w-4" />
            {primary.label}
          </Link>
          <Link href={secondary.href} className="btn-outline">
            {secondary.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
