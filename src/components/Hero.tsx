const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: 'url(https://cdn.sanity.io/images/03mhssoh/production/631d48fcccdb3e93c90944ebe50fc9e061038891-1832x1222.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      role="banner"
      aria-label="Hero section showcasing South African golf courses"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/60" aria-hidden="true"></div>
      
      <div className="container-custom text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-900 mb-6 leading-tight">
          <span className="inline-block bounce-text" style={{ animationDelay: '0s' }}>Discover</span>
          {' '}
          <span className="inline-block bounce-text" style={{ animationDelay: '0.1s' }}>the</span>
          {' '}
          <span className="inline-block bounce-text" style={{ animationDelay: '0.2s' }}>Best</span>
          {' '}
          <span className="inline-block bounce-text" style={{ animationDelay: '0.3s' }}>Golf</span>
          {' '}
          <span className="inline-block bounce-text" style={{ animationDelay: '0.4s' }}>Courses</span>
          <span className="block text-primary-600 mt-2">
            <span className="inline-block bounce-text" style={{ animationDelay: '0.5s' }}>in</span>
            {' '}
            <span className="inline-block bounce-text" style={{ animationDelay: '0.6s' }}>South</span>
            {' '}
            <span className="inline-block bounce-text" style={{ animationDelay: '0.7s' }}>Africa</span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-corporate-600 mb-8 max-w-2xl mx-auto">
          Your preferred golfing partner away from home. Experience world-class courses,
          exceptional service, and unforgettable golfing experiences across South Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-3 w-full sm:w-44 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Our Services
          </button>
          <button
            onClick={() => scrollToSection('courses')}
            className="px-8 py-3 w-full sm:w-44 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Courses
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 w-full sm:w-44 bg-corporate-900 text-white font-semibold rounded-lg hover:bg-corporate-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

