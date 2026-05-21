import { useState, useEffect } from 'react';
import EnquiryModal from './EnquiryModal';
import BookingModal from './BookingModal';
import GolfClubHireModal from './GolfClubHireModal';

const headerOutlineBtn =
  'inline-flex items-center justify-center px-3 py-2.5 lg:px-4 text-xs lg:text-sm font-bold leading-none rounded-xl border-2 border-primary-600 text-primary-700 bg-white hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap';

const headerPrimaryBtn =
  'inline-flex items-center justify-center px-4 py-2.5 lg:px-7 text-xs lg:text-sm font-bold leading-none rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isGolfClubHireModalOpen, setIsGolfClubHireModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Courses', id: 'courses' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg py-2 md:py-3'
          : 'bg-white/95 backdrop-blur-sm py-4 md:py-5'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-4 min-h-[50px] md:min-h-[60px]">
          <div
            className="shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="https://www.sagolfing.com/wp-content/uploads/2017/02/SAGolfing-Logo-2010.png" 
              alt="SAGolfing.com" 
              className="h-[50px] md:h-[60px] transition-all duration-300"
            />
          </div>

          {/* Desktop nav — lives in the middle grid column only */}
          <div className="hidden md:flex min-w-0 items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-x-0.5 lg:gap-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3 py-2 text-corporate-800 font-semibold text-sm lg:px-4 lg:text-base tracking-normal transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-primary-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                  <span className="absolute bottom-1 left-3 right-3 lg:left-4 lg:right-4 h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA group — right column; booking buttons from lg to avoid crowding nav */}
          <div className="hidden md:flex shrink-0 items-center justify-end flex-nowrap gap-2 lg:gap-3">
            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className={`${headerOutlineBtn} hidden lg:inline-flex`}
            >
              <span className="xl:hidden">Book Tee Time</span>
              <span className="hidden xl:inline">Book Your Tee Off Time</span>
            </button>
            <button
              type="button"
              onClick={() => setIsGolfClubHireModalOpen(true)}
              className={`${headerOutlineBtn} hidden lg:inline-flex`}
            >
              <span className="xl:hidden">Book Golf Clubs</span>
              <span className="hidden xl:inline">Book your Golf Clubs</span>
            </button>
            <button
              type="button"
              onClick={() => setIsEnquiryModalOpen(true)}
              className={headerPrimaryBtn}
            >
              Enquire Now
            </button>
            <img
              src="/images/CPG-Logo2.png"
              alt="CPG Logo"
              className="h-10 md:h-12 shrink-0 transition-all duration-300"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="shrink-0 p-2 text-corporate-800 hover:bg-primary-50 rounded-lg transition-all duration-300 focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 space-y-2 border-t border-corporate-100 pt-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-corporate-800 hover:bg-primary-50 hover:text-primary-700 font-semibold rounded-lg transition-all duration-300 transform hover:translate-x-2"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsBookingModalOpen(true);
                setIsMenuOpen(false);
              }}
              className={`w-full mt-3 ${headerOutlineBtn}`}
            >
              Book Your Tee Off Time
            </button>
            <button
              type="button"
              onClick={() => {
                setIsGolfClubHireModalOpen(true);
                setIsMenuOpen(false);
              }}
              className={`w-full ${headerOutlineBtn}`}
            >
              Book your Golf Clubs
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEnquiryModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enquire Now
            </button>
            <div className="mt-3 flex justify-center">
              <img 
                src="/images/CPG-Logo2.png" 
                alt="CPG Logo" 
                className="h-10 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </nav>
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <GolfClubHireModal isOpen={isGolfClubHireModalOpen} onClose={() => setIsGolfClubHireModalOpen(false)} />
    </header>
  );
};

export default Header;

