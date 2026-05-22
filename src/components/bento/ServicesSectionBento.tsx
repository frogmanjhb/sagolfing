import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const IMAGE_MAP: Record<string, string> = {
  'day-golf-excursions': "url('/images/jhbskyline.png')",
  'holidays':            "url('/images/capetowngolf.png')",
  'golf-club-hire':      "url('/images/golf-club-sets.webp')",
  'golf-tours':          "url('/images/golftour.jpg')",
  'chauffeur-driver':    "url('/images/chaffeur.png')",
  'corporate-golf-days': "url('/images/kambaku.jpg')",
};

const ORDER: Record<string, number> = {
  'day-golf-excursions': 0,
  'golf-club-hire':      1,
  'holidays':            2,
  'golf-tours':          3,
  'chauffeur-driver':    4,
  'corporate-golf-days': 5,
};

const ServicesSectionBento = () => {
  const orderedServices = [...services].sort(
    (a, b) => (ORDER[a.slug] ?? 99) - (ORDER[b.slug] ?? 99)
  );

  return (
    <section id="services" className="py-8 bg-white">
      <div className="container-custom">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-corporate-900 mb-2">
            Premium Golf Experiences
          </h2>
          <p className="text-sm text-corporate-600">
            From corporate golf days to complete holiday packages
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 [grid-auto-rows:120px]">
          {orderedServices.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.slug}`}
              className="flex h-full flex-col rounded-xl border-2 border-corporate-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300 group cursor-pointer shadow-sm bg-white [perspective:900px]"
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
                  <div className="relative h-full w-full p-4 flex items-center justify-center text-center">
                    <h3 className="text-sm font-bold text-white leading-tight drop-shadow">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 p-4 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-[11px] leading-snug text-white/90 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold">Learn more</span>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 ring-1 ring-white/30 transition-transform duration-300 ease-out hover:translate-x-4 hover:scale-110">
                      <span className="text-white text-base leading-none">→</span>
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

export default ServicesSectionBento;
