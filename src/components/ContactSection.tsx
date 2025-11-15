const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-corporate-600 mb-8">
            Ready to plan your perfect golfing experience? Contact us today.
          </p>

          <div className="bg-corporate-50 rounded-xl p-8 md:p-12 border border-corporate-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-corporate-900 mb-2">
                  Email Us
                </h3>
                <a
                  href="mailto:tim@sagolfing.com"
                  className="text-primary-600 hover:text-primary-700 font-medium text-lg transition-colors duration-200"
                >
                  tim@sagolfing.com
                </a>
              </div>
              <div className="pt-6 border-t border-corporate-200">
                <p className="text-corporate-600">
                  Your preferred golfing partner away from home!
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

