import Link from 'next/link';
import type { BlogPost } from '../posts';

export const POST_DISCOVERY: BlogPost = {
  slug: 'discovery-flight-what-to-expect',
  title: 'Discovery Flight: What to Expect on Your First Lesson',
  excerpt:
    'A walk-through of the full 60-minute experience — pre-flight briefing, taking the controls, and what most first-time students wish they had known.',
  date: '2026-04-22',
  readMinutes: 6,
  image: '/assets/heroes/ppl-hero.jpg',
  category: 'Discovery Flight',
  author: 'Red Cardinal Aviation',
  toc: [
    { id: 'what-is-it', label: 'What a Discovery Flight actually is' },
    { id: 'before-you-arrive', label: 'Before you arrive at the airport' },
    { id: 'ground-briefing', label: 'The pre-flight briefing (15 min)' },
    { id: 'in-the-airplane', label: 'In the airplane (30 min)' },
    { id: 'debrief', label: 'Post-flight debrief (15 min)' },
    { id: 'common-questions', label: 'Common first-flight questions' },
  ],
  content: () => (
    <>
      <p>
        If you have never flown a small airplane, the idea of taking the controls can be
        exciting — and a little intimidating. A <strong>Discovery Flight</strong> is
        designed exactly for that moment. It is short, structured, and pressure-free —
        and at the end you will know whether learning to fly is something you want to
        pursue.
      </p>
      <p>
        Here is exactly what to expect on your first lesson at Red Cardinal Aviation.
      </p>

      <h2 id="what-is-it">What a Discovery Flight actually is</h2>
      <p>
        A Discovery Flight is a 60-minute introductory lesson with a real FAA Certified
        Flight Instructor in a real training airplane — a Cessna 150. You will spend{' '}
        <strong>15 minutes</strong> on the ground learning the basics, <strong>30
        minutes</strong> in the airplane (and at least some of it actually flying), then{' '}
        <strong>15 minutes</strong> debriefing what you did and how a full Private Pilot
        program would look.
      </p>
      <p>
        Crucially: this is not a sightseeing tour. You will sit in the left seat — the
        pilot’s seat — and your instructor will let you fly during cruise. If you decide
        to pursue training, the time counts in your logbook.
      </p>

      <h2 id="before-you-arrive">Before you arrive at the airport</h2>
      <ul>
        <li>
          Eat a light meal. Greasy food and an empty stomach are both bad ideas.
        </li>
        <li>
          Dress in layers — small aircraft cabins are warm on the ground and cool aloft.
        </li>
        <li>Wear closed-toe shoes.</li>
        <li>Bring sunglasses (non-polarized is best for glass panels).</li>
        <li>Bring a valid government-issued ID.</li>
        <li>Hydrate, but skip the second cup of coffee.</li>
      </ul>
      <p>
        Arrive about 10 minutes early. Parking is easy, and we’ll greet you in front of
        the office.
      </p>

      <h2 id="ground-briefing">The pre-flight briefing (15 min)</h2>
      <p>
        Your instructor will introduce you to the airplane — the wings, the propeller,
        the controls — and explain what makes it fly. We cover the four forces (lift,
        weight, thrust, drag), how the yoke and rudder pedals work, and what the
        instruments tell you. You will also do a quick walk-around inspection to see how
        pilots actually verify an airplane is ready to fly.
      </p>
      <p>
        We answer any questions before you climb in. There is no such thing as a dumb
        question on a first flight.
      </p>

      <h2 id="in-the-airplane">In the airplane (30 min)</h2>
      <p>
        Your instructor handles the takeoff and the climb out. Once we level off — at a
        comfortable altitude away from any traffic patterns — they’ll say{' '}
        <em>“you have the airplane”</em> and let you take the controls. Most students
        try gentle turns, climbs, and descents. If you enjoy it, we do more. If you
        prefer to observe, we do less.
      </p>
      <p>
        Things to expect:
      </p>
      <ul>
        <li>
          <strong>It’s loud.</strong> Headsets handle most of it, but small piston
          aircraft are mechanical machines.
        </li>
        <li>
          <strong>It feels more stable than you’d guess.</strong> The Cessna 150 is one
          of the most forgiving trainers ever built.
        </li>
        <li>
          <strong>Turbulence is normal.</strong> Light bumps are part of flying low over
          terrain in warm weather. Your instructor will pick the smoothest air available.
        </li>
        <li>
          <strong>The view is incredible.</strong> Northern Virginia from 2,500 feet is
          worth the price of admission on its own.
        </li>
      </ul>

      <h2 id="debrief">Post-flight debrief (15 min)</h2>
      <p>
        After landing, we sit down and talk about what you did, what you noticed, and
        what surprised you. If you’re interested in pursuing the{' '}
        <Link href="/private-pilot-certification">Private Pilot Certificate</Link>, your
        instructor will walk you through what a full program looks like — schedule,
        materials, medical, and what the typical timeline is.
      </p>
      <p>
        No pressure. We will not push a contract on you at the end of your first flight.
      </p>

      <h2 id="common-questions">Common first-flight questions</h2>
      <p>
        <strong>What if I get motion sick?</strong> Let your instructor know in the
        briefing. We can keep the flight smooth and short, and bring an airsick bag just
        in case. Most students who worried about it end up fine.
      </p>
      <p>
        <strong>Can my partner or friend come watch?</strong> Yes — they can wait at the
        airport and watch you taxi out. The Cessna 150 has two seats, so only you and
        the instructor are in the airplane.
      </p>
      <p>
        <strong>Will I really fly the airplane?</strong> Yes. That is the whole point.
      </p>
      <p>
        Ready?{' '}
        <Link href="/discovery-flight">
          Book your Discovery Flight here
        </Link>{' '}
        — we usually have availability within the week.
      </p>
    </>
  ),
};
