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
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      role="banner"
      aria-label="Hero section showcasing South African golf courses"
    >
      {/* Animated background with Ken Burns effect */}
      <div 
        className="absolute inset-0 ken-burns-bg"
        style={{
          backgroundImage: 'url(https://cdn.sanity.io/images/03mhssoh/production/631d48fcccdb3e93c90944ebe50fc9e061038891-1832x1222.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      ></div>
      
      {/* Improved overlay with subtle dark gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-white/50 to-white/60" aria-hidden="true"></div>
      
      <div className="container-custom text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-900 mb-6 leading-tight drop-shadow-sm">
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
        <p className="text-lg md:text-xl text-corporate-800 font-medium mb-4 max-w-2xl mx-auto drop-shadow-sm">
          Your preferred golfing partner away from home. Experience world-class courses,
          exceptional service, and unforgettable golfing experiences across South Africa.
        </p>
        <p className="text-sm md:text-base text-corporate-700 mb-8 max-w-xl mx-auto">
          Tell us where and when – we'll build your perfect golf itinerary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA - dominant green button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 w-full sm:w-auto bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Enquire Now
          </button>
          {/* Secondary CTA - outlined button */}
          <button
            onClick={() => scrollToSection('courses')}
            className="px-8 py-4 w-full sm:w-auto bg-white/95 text-primary-700 font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View Courses
          </button>
          {/* Tertiary CTA - ghost/subtle button */}
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 w-full sm:w-auto bg-corporate-100/80 text-corporate-800 font-semibold rounded-xl hover:bg-corporate-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

