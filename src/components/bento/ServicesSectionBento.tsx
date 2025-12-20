import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const ServicesSectionBento = () => {
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
          {services.map((service) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionBento;

