const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-corporate-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="https://www.sagolfing.com/wp-content/uploads/2017/02/SAGolfing-Logo-2010.png" 
              alt="SAGolfing.com" 
              className="h-12 mb-4"
            />
            <p className="text-corporate-300">
              Your preferred golfing partner away from home!
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-corporate-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-corporate-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('courses')}
                  className="text-corporate-300 hover:text-white transition-colors duration-200"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-corporate-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <a
              href="mailto:tim@sagolfing.com"
              className="text-corporate-300 hover:text-white transition-colors duration-200"
            >
              tim@sagolfing.com
            </a>
          </div>
        </div>
        <div className="border-t border-corporate-700 pt-8 text-center text-corporate-300">
          <p>© {currentYear} SAGolfing.com - Your preferred golfing partner away from home! | Mail us: tim@sagolfing.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

