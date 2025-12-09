import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { services } from '../data/services';
import SEOHelmet from '../components/SEOHelmet';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();
  
  const service = services.find(s => s.slug === serviceSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-corporate-900 mb-4">Service Not Found</h1>
          <Link to="/#services" className="text-primary-600 hover:text-primary-700">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <SEOHelmet
        title={`${service.title} - SA Golfing`}
        description={service.detailedDescription || service.description}
        canonical={`https://sagolfing-production.up.railway.app/service/${service.slug}`}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-corporate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
          <div className="container-custom">
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Services
            </button>
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                {service.icon?.startsWith('http') || service.icon?.startsWith('/') ? (
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-20 h-20 object-contain bg-white/10 rounded-xl p-3"
                  />
                ) : (
                  <div className="text-6xl bg-white/10 rounded-xl p-4">
                    {service.icon}
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  {service.detailedDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            
            {/* Features Card - Large */}
            <div className="lg:col-span-2 lg:row-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-corporate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-corporate-900">
                  What's Included
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features?.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-corporate-50 hover:bg-corporate-100 transition-colors"
                  >
                    <span className="text-primary-600 font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-corporate-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-corporate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-corporate-900">Key Benefits</h2>
              </div>
              <ul className="space-y-3">
                {service.benefits?.map((benefit, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-corporate-700"
                  >
                    <span className="text-green-600 font-bold flex-shrink-0">→</span>
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Card - Wide */}
            {service.testimonial && (
              <div className="lg:col-span-2 bg-gradient-to-br from-corporate-900 to-corporate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h2 className="text-2xl font-bold">Client Testimonial</h2>
                </div>
                <blockquote className="mb-6">
                  <p className="text-xl text-white/90 italic leading-relaxed mb-4">
                    "{service.testimonial.quote}"
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">
                      {service.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {service.testimonial.author}
                      </div>
                      <div className="text-white/70 text-sm">
                        {service.testimonial.role}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            )}

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h2 className="text-2xl font-bold">Ready to Start?</h2>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {service.callToAction || 'Contact us today to learn more about this service'}
                </p>
              </div>
              <button 
                onClick={scrollToContact}
                className="w-full bg-white text-green-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Enquire Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;

