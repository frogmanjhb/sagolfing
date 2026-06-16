import { Link } from 'react-router-dom';
import { services } from '../data/services';

const IMAGE_MAP: Record<string, string> = {
  'day-golf-excursions': "url('/images/jhbskyline.png')",
  'holidays':            "url('/images/capetowngolf.png')",
  'golf-club-hire':      "url('/images/golf-club-sets.webp')",
  'golf-tours':          "url('/images/golftour.jpg')",
  'chauffeur-driver':    "url('/images/chaffeur.png')",
  'corporate-golf-days': "url('/images/kambaku.jpg')",
};

const BULLET_MAP: Record<string, string[]> = {
  'day-golf-excursions': ['Return transport from your hotel/B&B', 'Confirmed tee-off times', 'Optional club hire'],
  'holidays':            ['World-class Cape Town courses', 'Flexible day trips', 'Transport included'],
  'golf-club-hire':      ['Premium 5-star club sets', "Men's & ladies options", 'Left & right-handed available'],
  'golf-tours':          ['Customized tours across South Africa', 'Tee-time bookings at premier courses', 'Safari & sightseeing add-ons'],
  'chauffeur-driver':    ['Dedicated vehicle & chauffeur', '24/7 on-call service', 'Air-conditioned transport'],
  'corporate-golf-days': ['Complete turnkey solution', 'Up to 144 golfers', 'Branded merchandise & prizes'],
};

const ORDER: Record<string, number> = {
  'day-golf-excursions': 0,
  'golf-club-hire':      1,
  'holidays':            2,
  'golf-tours':          3,
  'chauffeur-driver':    4,
  'corporate-golf-days': 5,
};

const ServicesSection = () => {
  const orderedServices = [...services].sort(
    (a, b) => (ORDER[a.slug] ?? 99) - (ORDER[b.slug] ?? 99)
  );

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-900 mb-4">
            Premium Golf Experiences & Services
          </h2>
          <p className="text-lg text-corporate-700 max-w-3xl mx-auto leading-relaxed">
            From corporate golf days to complete holiday packages – we deliver exceptional golf experiences across South Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [grid-auto-rows:minmax(280px,auto)] md:[grid-auto-rows:320px]">
          {orderedServices.map((service, index) => (
            <Link
              key={service.id}
              to={`/service/${service.slug}`}
              className={`flex min-h-[280px] md:min-h-0 h-full flex-col rounded-xl border-2 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105 bg-white [perspective:1000px] ${
                index === 0 ? 'border-primary-300 shadow-lg' : 'border-corporate-200 shadow-md'
              }`}
              aria-label={`${service.title} - Learn more`}
            >
              <div className="relative h-full flex-1 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
                  <div
                    className="absolute inset-0 bg-cover"
                    style={{
                      backgroundImage: IMAGE_MAP[service.slug] ?? IMAGE_MAP['day-golf-excursions'],
                      backgroundPosition: 'center',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
                  <div className="relative h-full w-full p-8 flex items-center justify-center text-center">
                    <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 p-8 flex flex-col rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed">{service.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-white/90">
                      {(BULLET_MAP[service.slug] ?? []).map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-white font-semibold">Learn more</span>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 ring-1 ring-white/30 transition-transform duration-300 ease-out hover:translate-x-4 hover:scale-110">
                      <span className="text-white text-lg leading-none">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
