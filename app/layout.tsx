import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Flight School in Northern Virginia`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'flight school Virginia',
    'private pilot certification',
    'discovery flight Virginia',
    'Cessna 150 rental',
    'flight training Northern Virginia',
    'Warrenton Fauquier Airport',
    'CFI Virginia',
    'aviation training DMV',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.legalName,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Flight School in Northern Virginia`,
    description: SITE.description,
    images: [{ url: SITE.logo, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
    images: [SITE.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#B0252B',
  width: 'device-width',
  initialScale: 1,
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'EducationalOrganization'],
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: SITE.logo },
      image: SITE.logo,
      telephone: SITE.phoneE164,
      email: SITE.email,
      description: SITE.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postal,
        addressCountry: SITE.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lng,
      },
      openingHoursSpecification: SITE.hoursMachine,
      sameAs: [SITE.social.facebook, SITE.social.instagram],
      areaServed: ['Virginia', 'Washington DC', 'Maryland', 'DMV'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': `${SITE.url}/#organization` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
