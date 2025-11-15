const ClientsSection = () => {
  const clients = [
    { name: 'British Airways', logo: 'https://www.sagolfing.com/images/stories/airlines/British-Airways-Logo.jpg' },
    { name: 'Emirates', logo: 'https://www.sagolfing.com/images/stories/airlines/emirates.jpg' },
    { name: 'Qantas', logo: 'https://www.sagolfing.com/images/stories/airlines/quats.jpg' },
    { name: 'Delta', logo: 'https://www.sagolfing.com/images/stories/airlines/Delta.jpg' },
    { name: 'Air France', logo: 'https://www.sagolfing.com/images/stories/airlines/Air-France.jpg' },
    { name: 'Lufthansa', logo: 'https://www.sagolfing.com/images/stories/airlines/Lufthansa.jpg' },
    { name: 'KLM', logo: 'https://www.sagolfing.com/images/stories/airlines/KLM.jpg' },
    { name: 'Iberia', logo: 'https://www.sagolfing.com/images/stories/airlines/Iberia.jpg' },
    { name: 'Cathay Pacific', logo: 'https://www.sagolfing.com/images/stories/airlines/cathay-pacific.jpg' },
    { name: 'Toyota', logo: 'https://www.sagolfing.com/images/logo_toyota.jpg' },
    { name: 'IBM', logo: 'https://www.sagolfing.com/images/logo_ibm.jpg' },
    { name: 'LG', logo: 'https://www.sagolfing.com/images/logo_lg.jpg' },
    { name: 'NEC', logo: 'https://www.sagolfing.com/images/logo_nec.jpg' },
    { name: 'Nedbank', logo: 'https://www.sagolfing.com/images/logo_nedbank.jpg' },
    { name: 'Samsung', logo: 'https://www.sagolfing.com/images/logo_samsung.jpg' },
    { name: 'Toshiba', logo: 'https://www.sagolfing.com/images/logo_toshiba.jpg' },
  ];

  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-corporate-50 overflow-hidden">
      <div className="container-custom mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-corporate-600 max-w-2xl mx-auto">
            Providing world-class golf experiences to international airlines and corporate clients
          </p>
        </div>
      </div>

      {/* Scrolling Logo Banner */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-corporate-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-corporate-50 to-transparent z-10"></div>

        <div className="flex animate-scroll">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: '180px', height: '100px' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;

