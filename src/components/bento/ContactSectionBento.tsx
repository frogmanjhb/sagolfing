const ContactSectionBento = () => {
  return (
    <section id="contact" className="py-8 bg-gradient-to-br from-corporate-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-100">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-corporate-900 mb-2">
                Plan Your Golf Experience
              </h2>
              <p className="text-sm text-corporate-600">
                Tell us where and when – we'll build your perfect golf itinerary
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t-2 border-corporate-100">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-corporate-600 mb-1">
                  Email Us
                </h3>
                <a
                  href="mailto:tim@sagolfing.com"
                  className="text-primary-600 hover:text-primary-700 font-bold text-lg transition-colors duration-200"
                >
                  tim@sagolfing.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary-200">✓</span>
                <span>100+ premium golf courses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-200">✓</span>
                <span>Expert itinerary planning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-200">✓</span>
                <span>24-hour response time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-200">✓</span>
                <span>Trusted by leading organisations</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-xs opacity-90">
                Your preferred golfing partner away from home!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionBento;

