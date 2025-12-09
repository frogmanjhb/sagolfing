import { Link } from 'react-router-dom';
import { services } from '../data/services';

const ServicesSection = () => {
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
          {services.map((service, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

