const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-corporate-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-900 mb-4">
              Plan Your Golf Experience
            </h2>
            <p className="text-lg text-corporate-700 mb-2 font-medium">
              Tell us where and when – we'll build your perfect golf itinerary
            </p>
            <p className="text-base text-corporate-600">
              Ready to experience world-class golf across South Africa? Get in touch today.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-primary-100">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-corporate-600 mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:tim@sagolfing.com"
                      className="text-primary-600 hover:text-primary-700 font-bold text-xl transition-colors duration-200"
                    >
                      tim@sagolfing.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t-2 border-corporate-100">
                <p className="text-corporate-700 font-medium text-center leading-relaxed">
                  Your preferred golfing partner away from home!
                </p>
                <p className="text-corporate-600 text-sm text-center mt-2">
                  We respond to all enquiries within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

