import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const ServicesSectionBento = () => {
  const orderedServices = services
    .map((service, originalIndex) => ({ service, originalIndex }))
    .sort((a, b) => {
      const getPriority = (slug: string) => {
        switch (slug) {
          case 'golf-club-hire':
            return 0;
          case 'golf-tours':
            return 1;
          case 'day-golf-excursions':
            return 2;
          case 'corporate-golf-days':
            return 3;
          default:
            return 99;
        }
      };

      const aPriority = getPriority(a.service.slug);
      const bPriority = getPriority(b.service.slug);
      if (aPriority !== bPriority) return aPriority - bPriority;
      return a.originalIndex - b.originalIndex;
    })
    .map(({ service }) => service);

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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {orderedServices.map((service) => (
            service.slug === 'day-golf-excursions' ||
            service.slug === 'golf-club-hire' ||
            service.slug === 'chauffeur-driver' ? (
              <Link
                key={service.id}
                to={`/service/${service.slug}`}
                className="rounded-xl border-2 border-corporate-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300 group cursor-pointer shadow-sm bg-white min-h-[120px] [perspective:900px]"
                aria-label={`${service.title} - Learn more`}
              >
                <div className="relative h-full w-full p-4 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
                    <div
                      className="absolute inset-0 bg-cover"
                      style={{
                        backgroundImage:
                          service.slug === 'day-golf-excursions'
                            ? "url('/images/jhbskyline.png')"
                            : service.slug === 'golf-club-hire'
                              ? "url('/images/golf-club-sets.webp')"
                              : "url('/images/chaffeur.jpg')",
                        backgroundPosition: 'center',
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
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
            ) : (
              <Link
                key={service.id}
                to={`/service/${service.slug}`}
                className="bg-white rounded-xl p-4 border-2 border-corporate-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300 group cursor-pointer shadow-sm"
              >
                <div className="mb-3 h-10 flex items-center justify-start">
                  {service.icon?.startsWith('http') || service.icon?.startsWith('/') ? (
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <div className="text-3xl">{service.icon}</div>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-corporate-900 mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-corporate-600 leading-relaxed hidden md:block">
                  {service.description}
                </p>
                <div className="mt-3 text-primary-600 font-medium text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionBento;

