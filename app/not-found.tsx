import Link from 'next/link';
import { ArrowRight, Plane } from 'lucide-react';

export const metadata = {
  title: 'Page not found — Red Cardinal Aviation',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center bg-gradient-to-b from-white to-brand-50/40">
      <div className="container-x text-center max-w-2xl">
        <div className="inline-flex rounded-2xl bg-brand/10 p-3">
          <Plane className="h-7 w-7 text-brand" />
        </div>
        <h1 className="mt-6">Off course.</h1>
        <p className="mt-4 text-ink-muted text-lg">
          We couldn’t find that page. Let’s get you back on the flight plan.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/discovery-flight" className="btn-ghost">
            Book a Discovery Flight
          </Link>
        </div>
      </div>
    </section>
  );
}
