'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AircraftSlider({
  images,
  alt,
  topBadge,
  priceBadge,
  aspectClass = 'aspect-[4/3]',
  rounded = false,
}: {
  images: string[];
  alt: string;
  topBadge?: React.ReactNode;
  priceBadge?: React.ReactNode;
  aspectClass?: string;
  rounded?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % count),
    [count]
  );

  return (
    <div
      className={[
        'relative overflow-hidden bg-ink/5 group',
        aspectClass,
        rounded ? 'rounded-3xl' : '',
      ].join(' ')}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — photo ${i + 1} of ${count}`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          priority={i === 0}
          className={[
            'object-cover transition-opacity duration-500',
            i === index ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />
      ))}

      {topBadge && <div className="absolute top-3 left-3 z-10">{topBadge}</div>}
      {priceBadge && <div className="absolute top-3 right-3 z-10">{priceBadge}</div>}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink shadow-card opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink shadow-card opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur px-2.5 py-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}`}
                className={[
                  'h-1.5 rounded-full transition-all',
                  i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80',
                ].join(' ')}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
