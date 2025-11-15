import { services } from '../data/services';

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-corporate-600 max-w-2xl mx-auto">
            Comprehensive golfing solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-corporate-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-corporate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-corporate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

