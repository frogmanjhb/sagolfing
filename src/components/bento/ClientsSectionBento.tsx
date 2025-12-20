const ClientsSectionBento = () => {
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
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-corporate-900 mb-2">
            Trusted by Leading Organisations
          </h2>
          <p className="text-sm text-corporate-600">
            Providing world-class golf experiences to international airlines and corporate clients
          </p>
        </div>

        {/* Compact Grid of Client Logos */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="bg-corporate-50 rounded-xl p-4 border-2 border-corporate-200 hover:border-primary-300 transition-all duration-300 flex items-center justify-center h-24"
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
    </section>
  );
};

export default ClientsSectionBento;

