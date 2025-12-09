import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { label: 'Contact', id: 'contact' },
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
        <div className="flex items-center justify-between">
          <div
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="https://www.sagolfing.com/wp-content/uploads/2017/02/SAGolfing-Logo-2010.png" 
              alt="SAGolfing.com" 
              className="h-10 md:h-12 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-corporate-800 font-semibold text-sm lg:text-base tracking-normal transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-primary-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </button>
            ))}
          </div>

          {/* CTA Button for Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-7 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-sm rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-corporate-800 hover:bg-primary-50 rounded-lg transition-all duration-300 focus:outline-none"
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
              onClick={() => scrollToSection('contact')}
              className="w-full mt-3 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

