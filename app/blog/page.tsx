import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { POSTS } from '@/lib/posts';
import { IMG } from '@/lib/site';

export const metadata = {
  title: 'Flight Training Blog — Tips, Guides & Stories',
  description:
    'Plain-English flight training writing — becoming a private pilot in Virginia, Discovery Flight tips, and why training outside the DC SFRA is smarter.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="The Red Cardinal Blog"
        title="Notes from the cockpit."
        subtitle="Stories, guides, and honest advice from working flight instructors — for anyone curious about learning to fly."
        image={IMG.hero.blog}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      {/* Featured magazine-style block (distinct from card grid below) */}
      <section className="bg-white py-20">
        <div className="container-x">
          <article className="grid lg:grid-cols-12 gap-10 items-center">
            <Link
              href={`/blog/${featured.slug}`}
              className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-card group"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(min-width:1024px) 60vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-brand">
                <BookOpen className="h-3.5 w-3.5" />
                Featured · {featured.category}
              </div>
            </Link>
            <div className="lg:col-span-5">
              <p className="eyebrow">Latest Post</p>
              <h2 className="mt-3">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="hover:text-brand transition-colors"
                >
                  {featured.title}
                </Link>
              </h2>
              <div className="mt-4 flex items-center gap-3 text-sm text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-brand" />
                  {new Date(featured.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-brand" />
                  {featured.readMinutes} min read
                </span>
              </div>
              <p className="mt-5 text-lg text-ink-muted">{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} className="btn-primary mt-8">
                Read the article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-brand-50/40 py-20">
        <div className="container-x">
          <div className="mb-12">
            <p className="eyebrow">More Reading</p>
            <h2 className="mt-3">Recent posts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {rest.map((p) => (
              <article
                key={p.slug}
                className="card overflow-hidden flex flex-col group"
              >
                <Link href={`/blog/${p.slug}`} className="relative aspect-[16/10] block">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand">
                    {p.category}
                  </span>
                </Link>
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-xs text-ink-muted flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-brand" />
                    {new Date(p.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    <span>·</span>
                    <Clock className="h-3.5 w-3.5 text-brand" />
                    {p.readMinutes} min read
                  </div>
                  <h3 className="mt-3 text-xl text-ink">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="hover:text-brand transition-colors"
                    >
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-ink-muted flex-1">{p.excerpt}</p>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-brand font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Learning by reading? Even better — go fly."
        subtitle="A Discovery Flight will teach you more in 60 minutes than any article we could write."
      />
    </>
  );
}
