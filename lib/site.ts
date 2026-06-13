export const SITE = {
  name: 'Red Cardinal Aviation',
  legalName: 'Red Cardinal Aviation LLC',
  shortName: 'Red Cardinal',
  url: 'https://redcardinalaviation.com',
  description:
    'Flight school in Midland, VA offering Private Pilot Certification, Discovery Flights, Cessna 150 rental, and pilot services — outside the DC SFRA.',
  tagline: 'Take Flight With Confidence',
  logo: '/assets/brand/logo.png',
  address: {
    street: '5075 Airport Road',
    city: 'Midland',
    region: 'VA',
    postal: '22728',
    country: 'US',
    formatted: '5075 Airport Road, Midland, VA 22728',
    airport: 'Warrenton–Fauquier Airport (HWY / KHWY)',
  },
  phone: '571-746-5515',
  phoneE164: '+15717465515',
  email: 'info@redcardinalaviation.com',
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 7:00 PM' },
    { day: 'Saturday – Sunday', time: '7:00 AM – 8:00 PM' },
  ],
  hoursMachine: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '07:00', closes: '20:00' },
  ],
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61568686497440',
    instagram: 'https://www.instagram.com/redcardinalaviation',
  },
  booking:
    'https://app.squareup.com/appointments/buyer/widget/vp9spebwpgtjaa/L2XA81HNZ8KHH',
  geo: { lat: 38.5734, lng: -77.7106 },
};

/**
 * Centralized image paths. All images ship in /public/assets/ as full-resolution
 * source files (1600–4000 px wide). Next/Image auto-generates responsive WebP at
 * serve time, so the file size shipped to each browser is small.
 *
 * Naming rule: every key below points to a DIFFERENT file so no two pages /
 * sections render the same hero image.
 */
export const IMG = {
  hero: {
    home: '/assets/fleet/full-IMG_9396-1.jpg',      // 4032×3024 real Red Cardinal Cessna
    about: '/assets/fleet/full-058-airframe.jpg',   // 3872×2592 real Cessna
    ppl: '/assets/heroes/ppl-hero.jpg',             // 2000×1335 cockpit
    discovery: '/assets/heroes/discovery-v2.jpg',   // 2000×1333 plane sunset
    rental: '/assets/heroes/rental-hero.jpg',       // 2000×1293 Cessna sky
    services: '/assets/heroes/services-hero.jpg',   // 2000×1500 ferry plane
    contact: '/assets/heroes/contact-hero.jpg',     // 2000×1279 desk + map
    blog: '/assets/heroes/blog-hero.jpg',           // 2000×1329 sky
    faq: '/assets/heroes/faq-hero.jpg',             // 2000×1334 unique
  },
  brand: { logo: '/assets/brand/logo.png' },        // 745×335 transparent PNG
  ctaBanner: '/assets/heroes/cta-banner.jpg',       // 1800×1288 dramatic
  about: {
    backdrop: '/assets/heroes/about-hero-v2.jpg',   // 2000×1328 different shot
    airportAerial: '/assets/heroes/airport-aerial.jpg', // 1400×933 small airport
  },
  ppl: { feature: '/assets/fleet/full-1784Q.jpg' }, // 1600×1200 real aircraft
  homepage: {
    pplFeature: '/assets/fleet/full-058-panel-scaled.jpg', // 1714×2560 portrait — fits 4:5
    discoveryCallout: '/assets/heroes/sky-clouds.jpg',     // 2000×3239 unique
    discoverySide: '/assets/fleet/full-1784Q3.jpg',        // 1600×1200 real aircraft
  },
  blogPosts: {
    becomePPL: '/assets/fleet/full-IMG_9396-1.jpg', // 4032×3024 real photo
    discovery: '/assets/heroes/ppl-hero.jpg',
    sfra: '/assets/heroes/rental-hero.jpg',
  },
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/private-pilot-certification', label: 'Private Pilot' },
  { href: '/airplane-rental', label: 'Rental' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES = [
  {
    slug: 'aircraft-ferry',
    title: 'Aircraft Ferry',
    short:
      'Safe, reliable cross-country aircraft transport across the U.S. — single- and multi-engine piston.',
    description:
      'Years of experience moving piston aircraft on long cross-country trips. We handle weather routing, fuel planning, and delivery logistics so your airplane arrives ready to fly.',
    image: '/assets/services/aircraft-ferry.jpg',
    bullets: [
      'Single-engine piston — day rate plus expenses',
      'Multi-engine piston — day rate plus expenses',
      'Full pre-ferry inspection coordination',
      'Real-time updates throughout the trip',
    ],
  },
  {
    slug: 'aerial-photography',
    title: 'Aerial Photography',
    short:
      'High-wing Cessna 150 platform for unobstructed real-estate, event, and project documentation imagery.',
    description:
      'Our high-wing Cessna 150 produces clean, unobstructed photography for landscapes, real estate listings, events, and construction documentation. Smooth, slow, stable flights tailored to the shot list.',
    image: '/assets/services/aerial-1.jpg',
    gallery: [
      '/assets/services/aerial-1.jpg',
      '/assets/services/aerial-2.jpg',
      '/assets/services/aerial-3.jpg',
      '/assets/services/aerial-4.jpg',
    ],
    bullets: [
      'Based in the DMV / Northern Virginia',
      'High-wing platform = no strut interference',
      'Flexible routing and altitudes',
      'Coordinate with your photographer or videographer',
    ],
  },
  {
    slug: 'instrument-proficiency-check',
    title: 'Instrument Proficiency Check (IPC)',
    short:
      'FAR 61.57(d) IPC for pilots who have lost instrument currency, conducted by a CFII.',
    description:
      'If you have not logged six approaches, holding, and course interception and tracking within the preceding six months (plus grace period), an IPC restores your ability to operate under IFR. Conducted by a CFII.',
    image: '/assets/fleet/n45058-panel.jpg',
    bullets: [
      'Holding patterns',
      'Navigation course interception and tracking',
      'Instrument approaches (precision and non-precision)',
      'Unusual attitude recovery and en-route navigation',
    ],
  },
  {
    slug: 'flight-reviews',
    title: 'Flight Reviews (BFR)',
    short:
      'FAR 61.56 flight review — 1 hour ground + 1 hour flight, with a qualified instructor.',
    description:
      'A flight review is required every 24 calendar months. We tailor the session to the certificates and ratings you hold, refresh current regulations, and exercise the maneuvers most relevant to the flying you do. Not a pass / fail test — but you must demonstrate proficiency before the instructor endorses your logbook.',
    image: '/assets/services/flight-review.jpg',
    bullets: [
      'Minimum 1 hour flight training',
      'Minimum 1 hour ground instruction',
      'Tailored to your certificate and recent flying',
      'Logbook endorsement on completion',
    ],
  },
  {
    slug: 'endorsements',
    title: 'Additional Endorsements',
    short:
      'High Performance, Technically Advanced Aircraft (TAA), and Complex endorsements.',
    description:
      'Move into more capable aircraft with structured ground and flight training. We cover the systems knowledge, handling characteristics, and risk management each endorsement requires.',
    image: '/assets/fleet/n45058-panel.jpg',
    bullets: [
      'High Performance — engines over 200 HP',
      'Technically Advanced Aircraft (TAA) — glass panel + autopilot',
      'Complex — retractable gear, variable-pitch prop, controllable flaps',
    ],
  },
];

export const FLEET = [
  {
    tail: 'N1784Q',
    model: '1972 Cessna 150L',
    rate: 165,
    seats: 2,
    panel: 'Basic analog VFR panel + Garmin GNC 355 GPS',
    use: 'Primary trainer — perfect for Private Pilot students learning stick-and-rudder fundamentals.',
    images: [
      '/assets/fleet/full-1784Q.jpg',
      '/assets/fleet/full-1784Q.jpg1_.jpg',
      '/assets/fleet/full-1784Q3.jpg',
      '/assets/fleet/n1784q-4.jpeg',
      '/assets/fleet/n1784q-5.jpeg',
    ],
  },
  {
    tail: 'N45058',
    model: '1975 Cessna 150M',
    rate: 165,
    seats: 2,
    panel: 'Dual Garmin G5 displays (digital attitude + HSI)',
    use: 'Glass-cockpit trainer and excellent platform for instrument training.',
    images: [
      '/assets/fleet/full-058-airframe.jpg',
      '/assets/fleet/n45058-panel.jpg',
      '/assets/fleet/n45058-3.jpg',
      '/assets/fleet/full-homepage_photo-1.jpg',
    ],
  },
  {
    tail: 'N17258',
    model: '1973 Cessna 150L',
    rate: 150,
    seats: 2,
    panel: 'Analog VFR / IFR panel + Garmin GNS 430 WAAS GPS',
    use: 'Classic VFR flying and IFR practice in one aircraft.',
    images: [
      '/assets/fleet/n1784q-3.jpg',
      '/assets/fleet/homepage-photo.jpg',
      '/assets/fleet/n45058-3.jpg',
    ],
  },
];

export const BLOG_POSTS = [
  {
    slug: 'become-private-pilot-virginia',
    title: 'How to Become a Private Pilot in Virginia: The Complete 2026 Guide',
    excerpt:
      'Everything you need to know — from your first Discovery Flight to your checkride — including FAA requirements, realistic timelines, and what training in Northern Virginia actually costs.',
    date: '2026-05-12',
    readMinutes: 9,
    image: '/assets/fleet/n1784q-5.jpeg',
    category: 'Getting Started',
  },
  {
    slug: 'discovery-flight-what-to-expect',
    title: 'Discovery Flight: What to Expect on Your First Lesson',
    excerpt:
      'A walk-through of the full 60-minute experience — pre-flight briefing, taking the controls, and what most first-time students wish they had known.',
    date: '2026-04-22',
    readMinutes: 6,
    image: '/assets/heroes/ppl-hero.jpg',
    category: 'Discovery Flight',
  },
  {
    slug: 'why-train-outside-dc-sfra',
    title: 'Why Train Outside the DC SFRA: Time, Money, and Better Flying',
    excerpt:
      'The Washington D.C. Special Flight Rules Area adds real cost and complexity to flight training. Here is why training just outside it is a smarter choice for new pilots.',
    date: '2026-03-30',
    readMinutes: 7,
    image: '/assets/heroes/rental-hero.jpg',
    category: 'Training Tips',
  },
];
