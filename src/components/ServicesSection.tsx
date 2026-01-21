import { Link } from 'react-router-dom';
import { services } from '../data/services';

const ServicesSection = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orderedServices.map((service, index) => (
            service.slug === 'day-golf-excursions' ||
            service.slug === 'golf-club-hire' ||
            service.slug === 'chauffeur-driver' ? (
              <Link
                key={service.id}
                to={`/service/${service.slug}`}
                className={`rounded-xl border-2 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105 bg-white min-h-[180px] [perspective:1000px] ${
                  index === 0 ? 'border-primary-300 shadow-lg' : 'border-corporate-200 shadow-md'
                }`}
                aria-label={`${service.title} - Learn more`}
              >
                <div className="relative h-full w-full p-8 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
                      <p className="text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                      {service.slug === 'day-golf-excursions' ? (
                        <ul className="mt-4 space-y-2 text-sm text-white/90">
                          <li>• Return transport from your hotel/B&amp;B</li>
                          <li>• Confirmed tee-off times</li>
                          <li>• Optional golf club hire</li>
                        </ul>
                      ) : service.slug === 'golf-club-hire' ? (
                        <ul className="mt-4 space-y-2 text-sm text-white/90">
                          <li>• Premium 5-star golf club sets</li>
                          <li>• Men’s &amp; ladies options</li>
                          <li>• Left &amp; right-handed available</li>
                        </ul>
                      ) : (
                        <ul className="mt-4 space-y-2 text-sm text-white/90">
                          <li>• Dedicated vehicle and chauffeur</li>
                          <li>• 24/7 on-call service</li>
                          <li>• Comfortable air-conditioned transport</li>
                        </ul>
                      )}
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
            ) : (
              <Link
                key={service.id}
                to={`/service/${service.slug}`}
                className={`bg-white p-8 rounded-xl border-2 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full min-h-[180px] cursor-pointer transform hover:scale-105 ${
                  index === 0 ? 'border-primary-300 shadow-lg' : 'border-corporate-200 shadow-md'
                }`}
              >
                <div className="mb-4 h-16 flex items-center justify-start">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon?.startsWith('http') || service.icon?.startsWith('/') ? (
                      <img 
                        src={service.icon} 
                        alt={service.title}
                        className="w-16 h-16 object-contain"
                      />
                    ) : (
                      <div className="text-4xl">{service.icon}</div>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-corporate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-corporate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-4 text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
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

export default ServicesSection;

