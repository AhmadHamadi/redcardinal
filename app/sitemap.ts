import type { MetadataRoute } from 'next';
import { SITE, SERVICES } from '@/lib/site';
import { POSTS } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticRoutes = [
    '',
    '/about',
    '/private-pilot-certification',
    '/discovery-flight',
    '/airplane-rental',
    '/services',
    '/blog',
    '/faq',
    '/contact',
  ];

  const today = new Date('2026-05-31');

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((p) => ({
    url: `${base}${p}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: p === '' ? 1.0 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...postEntries];
}
