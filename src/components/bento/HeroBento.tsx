import { useState } from 'react';
import BookingModal from '../BookingModal';

const HeroBento = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-8 overflow-hidden"
      role="banner"
      aria-label="Hero section showcasing South African golf courses"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Hero Card - Large */}
          <div className="md:col-span-8 relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer" onClick={() => scrollToSection('contact')}>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: 'url(https://cdn.sanity.io/images/03mhssoh/production/631d48fcccdb3e93c90944ebe50fc9e061038891-1832x1222.jpg)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                Discover South Africa's Best Golf Courses
              </h1>
              <p className="text-sm md:text-base opacity-90 mb-4">
                Your preferred golfing partner away from home
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="self-start px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
              >
                Book Your Tee Off Time
              </button>
            </div>
          </div>

          {/* Quick Stats Card */}
          <div className="md:col-span-4 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 flex flex-col justify-center text-white">
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm opacity-90">Premium Courses</div>
              </div>
              <div className="h-px bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm opacity-90">Regions</div>
              </div>
            </div>
          </div>

          {/* Quick Action Cards */}
          <div className="md:col-span-4 bg-white rounded-2xl p-6 border-2 border-corporate-200 hover:border-primary-400 transition-all duration-300 cursor-pointer group" onClick={() => scrollToSection('courses')}>
            <div className="text-4xl mb-3">⛳</div>
            <h3 className="text-lg font-bold text-corporate-900 mb-2">View Courses</h3>
            <p className="text-sm text-corporate-600">Explore our premium golf courses</p>
          </div>

          <div className="md:col-span-4 bg-white rounded-2xl p-6 border-2 border-corporate-200 hover:border-primary-400 transition-all duration-300 cursor-pointer group" onClick={() => scrollToSection('services')}>
            <div className="text-4xl mb-3">🏌️</div>
            <h3 className="text-lg font-bold text-corporate-900 mb-2">Our Services</h3>
            <p className="text-sm text-corporate-600">Golf tours & experiences</p>
          </div>

          <div className="md:col-span-4 bg-corporate-50 rounded-2xl p-6 border-2 border-corporate-200 hover:border-primary-400 transition-all duration-300 cursor-pointer group" onClick={() => scrollToSection('contact')}>
            <div className="text-4xl mb-3">📧</div>
            <h3 className="text-lg font-bold text-corporate-900 mb-2">Get in Touch</h3>
            <p className="text-sm text-corporate-600">Plan your perfect golf itinerary</p>
          </div>
        </div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </section>
  );
};

export default HeroBento;

