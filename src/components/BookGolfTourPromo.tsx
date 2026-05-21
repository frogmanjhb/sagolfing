import { golfCourses } from '../data/courses';
import type { Region } from '../types';

const HERO_IMAGE =
  'https://cdn.sanity.io/images/03mhssoh/production/631d48fcccdb3e93c90944ebe50fc9e061038891-1832x1222.jpg';
const LOGO_URL =
  'https://www.sagolfing.com/wp-content/uploads/2017/02/SAGolfing-Logo-2010.png';

const REGION_FEATURED_COURSE: Partial<Record<Region, string>> = {
  'Garden Route': 'pezula',
  'Cape Town': 'hermanus',
  Durban: 'zimbali',
  Johannesburg: 'blair-atholl',
};

const getRegionImage = (regionName: Region): string => {
  const region = golfCourses.find((r) => r.name === regionName);
  const featuredId = REGION_FEATURED_COURSE[regionName];
  const course =
    region?.courses.find((c) => c.id === featuredId) ?? region?.courses[0];
  return (
    course?.image ??
    'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&h=400&fit=crop'
  );
};

const TOUR_REGIONS: { region: Region; label: string }[] = [
  { region: 'Garden Route', label: 'Garden Route' },
  { region: 'Cape Town', label: 'Cape Town' },
  { region: 'Durban', label: 'Durban' },
  { region: 'Johannesburg', label: 'Johannesburg' },
];

const FEATURES = [
  { icon: 'location' as const, lines: ['All over', 'South Africa'] },
  { icon: 'flag' as const, lines: ['Safari, coastal route,', '5 star courses'] },
  { icon: 'calendar' as const, lines: ['All booking &', 'accommodation processing'] },
  { icon: 'chauffeur' as const, lines: ['24 hour', 'chauffeur driven'] },
];

/** Scales with the hero text column so headlines stay large but fit on one line */
const TOUR_HEADLINE_LINE =
  'block font-extrabold uppercase leading-[0.92] tracking-tight text-[clamp(2rem,11cqi,3.15rem)]';

const selectRegionAndScroll = (region: Region) => {
  window.dispatchEvent(new CustomEvent<Region>('sagolfing:select-region', { detail: region }));
  document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function FeatureIcon({ type }: { type: (typeof FEATURES)[number]['icon'] }) {
  const stroke = 'currentColor';
  const common = {
    fill: 'none',
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full border-2 border-tour-navy/25 bg-white text-tour-navy shadow-sm ring-4 ring-tour-green/10 sm:h-20 sm:w-20">
      <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden>
        {type === 'location' && (
          <path {...common} d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z M12 11.5a2 2 0 100-4 2 2 0 000 4z" />
        )}
        {type === 'flag' && (
          <>
            <path {...common} d="M5 21V5 M5 5c3-2 6 0 9 0s6-2 9 0v11c-3-2-6 0-9 0s-6-2-9 0" />
            <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
          </>
        )}
        {type === 'calendar' && (
          <>
            <rect {...common} x="4" y="5" width="16" height="15" rx="2" />
            <path {...common} d="M8 3v4 M16 3v4 M4 10h16 M9 14l2 2 4-4" />
          </>
        )}
        {type === 'chauffeur' && (
          <>
            <path {...common} d="M5 11l1.5-4h11L19 11" />
            <path {...common} d="M5 11h14v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-5z" />
            <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none" />
            <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none" />
            <path {...common} d="M7 11V9a2 2 0 012-2h6a2 2 0 012 2v2" />
          </>
        )}
      </svg>
    </div>
  );
}

function PinIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </svg>
  );
}

const BookGolfTourPromo = () => {
  const handleRegionClick = (region: Region) => {
    selectRegionAndScroll(region);
  };

  return (
    <section
      id="golf-tour"
      className="section-padding bg-gradient-to-b from-corporate-50 via-white to-white"
      aria-labelledby="golf-tour-heading"
    >
      <div className="container-custom">
        <article className="overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-12px_rgba(26,53,87,0.18)] ring-1 ring-corporate-200/80">
          {/* Hero: headline + course image */}
          <div className="grid lg:grid-cols-[1.18fr_0.88fr] lg:min-h-[360px]">
            <div className="@container/hero flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:py-12">
              <header className="mb-6 sm:mb-8">
                <img
                  src={LOGO_URL}
                  alt="SA Golfing.com"
                  className="h-12 w-auto sm:h-14"
                />
                <p className="mt-1.5 font-serif text-sm italic tracking-wide text-tour-navy/80">
                  Golf Info and Booking Line CC
                </p>
              </header>

              <h2
                id="golf-tour-heading"
                className="m-0 max-w-full space-y-0.5 p-0 font-sans sm:space-y-1"
              >
                <span className={`${TOUR_HEADLINE_LINE} text-tour-navy`}>
                  Book Your
                </span>
                <span
                  className={`${TOUR_HEADLINE_LINE} whitespace-nowrap text-tour-green [letter-spacing:-0.02em]`}
                >
                  Annual Golf Tour
                </span>
              </h2>
            </div>

            <div className="relative min-h-[220px] lg:min-h-full">
              <div className="tour-hero-curve h-full w-full overflow-hidden bg-tour-green lg:absolute lg:inset-0">
                <img
                  src={HERO_IMAGE}
                  alt="Aerial view of a championship golf course in South Africa"
                  className="h-full min-h-[220px] w-full object-cover lg:min-h-full"
                />
              </div>
            </div>
          </div>

          {/* Features — full-width band */}
          <div className="border-y border-tour-green/15 bg-gradient-to-r from-tour-navy/[0.03] via-white to-tour-green/[0.06] px-4 py-8 sm:px-8 sm:py-10">
            <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 lg:grid-cols-4 lg:gap-y-0">
              {FEATURES.map(({ icon, lines }) => (
                <li
                  key={lines.join('-')}
                  className="flex flex-col items-center text-center sm:px-2"
                >
                  <FeatureIcon type={icon} />
                  <div className="mt-4 space-y-0.5">
                    {lines.map((line) => (
                      <p
                        key={line}
                        className="text-[0.7rem] font-bold uppercase leading-snug tracking-wide text-tour-navy sm:text-xs"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:gap-4 sm:p-6">
            {TOUR_REGIONS.map(({ region, label }) => (
              <button
                key={region}
                type="button"
                onClick={() => handleRegionClick(region)}
                className="group overflow-hidden rounded-xl text-left shadow-md ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tour-lime focus-visible:ring-offset-2"
              >
                <div className="aspect-[4/3] overflow-hidden bg-corporate-200">
                  <img
                    src={getRegionImage(region)}
                    alt={`${label} golf courses`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-2 bg-tour-green px-3 py-2.5">
                  <PinIcon className="h-4 w-4 shrink-0 text-white" />
                  <span className="text-xs font-bold uppercase tracking-wide text-white">
                    {label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <footer className="flex flex-col gap-4 bg-tour-navy px-5 py-5 text-white sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-5 lg:gap-6 lg:px-8">
            <a
              href="mailto:tim@sagolfing.com"
              className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tour-lime text-tour-navy shadow-md">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-sm">
                Email: <span className="font-semibold text-tour-lime">tim@sagolfing.com</span>
              </span>
            </a>

            <p className="m-0 text-center text-sm leading-normal sm:shrink-0 sm:whitespace-nowrap sm:px-1">
              <span className="hidden text-white/30 sm:inline" aria-hidden>
                |
              </span>
              <span className="sm:mx-2 lg:mx-3">
                We take care of everything, so you can{' '}
                <span className="font-semibold text-tour-lime">enjoy the game.</span>
              </span>
              <span className="hidden text-white/30 sm:inline" aria-hidden>
                |
              </span>
            </p>

            <a
              href="https://www.sagolfing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90 sm:justify-end"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tour-lime text-tour-navy shadow-md">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </span>
              <span className="text-sm font-semibold">www.sagolfing.com</span>
            </a>
          </footer>
        </article>

        <p className="mt-5 text-center text-sm text-corporate-600">
          Tap a region to explore courses below
        </p>
      </div>
    </section>
  );
};

export default BookGolfTourPromo;
