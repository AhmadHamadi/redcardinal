import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Plane,
  Phone,
  Share2,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { POSTS, getPost } from '@/lib/posts';
import { SITE } from '@/lib/site';

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Red Cardinal Aviation Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: SITE.logo },
    },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.category },
        ]}
        height="lg"
      />

      <article className="bg-white py-16 md:py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          {/* Sidebar TOC */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-28">
              <p className="eyebrow"><Plane className="h-3.5 w-3.5" /> In this article</p>
              <nav aria-label="Table of contents" className="mt-4 flex flex-col gap-1 border-l border-ink/10 pl-4">
                {post.toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className="-ml-px border-l-2 border-transparent pl-4 py-1.5 text-sm text-ink-muted hover:border-brand hover:text-brand transition-colors"
                  >
                    {t.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 flex items-center gap-3 text-sm text-ink-muted">
                <Calendar className="h-4 w-4 text-brand" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-ink-muted">
                <Clock className="h-4 w-4 text-brand" />
                {post.readMinutes} min read
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-ink-muted">
                <Share2 className="h-4 w-4 text-brand" />
                By {post.author}
              </div>
            </div>
          </aside>

          {/* Article body */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            <div className="prose-blog">{post.content()}</div>

            <div className="mt-12 rounded-2xl border border-brand/20 bg-brand-50/40 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                Take the next step
              </p>
              <h3 className="mt-2 text-xl text-ink">
                Book a Discovery Flight at Red Cardinal Aviation
              </h3>
              <p className="mt-3 text-ink-muted">
                The fastest way to know if flying is for you is to fly. 60 minutes,
                hands-on, with a real CFI.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link href="/discovery-flight" className="btn-primary">
                  <Plane className="h-4 w-4" /> Book a Discovery Flight
                </Link>
                <a href={`tel:${SITE.phoneE164}`} className="btn-ghost">
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-ink/10 pt-6">
              <Link href="/blog" className="btn-ghost">
                <ArrowLeft className="h-4 w-4" /> All articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-brand-50/40 py-20">
        <div className="container-x">
          <p className="eyebrow">Keep Reading</p>
          <h2 className="mt-3">More from the Red Cardinal blog</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card overflow-hidden flex flex-col md:flex-row group"
              >
                <div className="relative md:w-2/5 aspect-[16/10] md:aspect-auto">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width:768px) 40vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-lg text-ink group-hover:text-brand transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{p.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-brand font-semibold text-sm">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
