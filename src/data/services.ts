import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    slug: 'corporate-golf-days',
    title: 'Corporate Golf Days',
    description: 'Organise memorable corporate golf events tailored to your business needs.',
    icon: '🏢',
    detailedDescription: 'SA Golfing offers a complete packaged day to suit the needs of your company and to ensure your guests enjoy a well organized and fun filled day. We handle everything from course booking to prize giving, ensuring a seamless experience for up to 144 golfers.',
    features: [
      'Golf course booking and coordination',
      'Invitation design and participant contacting (max 144 golfers)',
      'Company golf pack/gift',
      'Branded golf shirts and caps',
      '4 Ball photos',
      'Sponsored holes and signage',
      'Guest speakers',
      'Prizes for closest to pin and longest drive',
      'Prize giving followed by dinner/snacks',
      'Auction of sport memorabilia'
    ],
    benefits: [
      'Complete turnkey solution',
      'Professional event management',
      'Strengthen client relationships',
      'Memorable brand experiences',
      'Flexible group sizes up to 144 players',
      'Multiple customization options'
    ],
    pricing: 'Custom quotes based on group size and requirements. Optional extras include company embroidered hampers, on-course refreshments, and drinking holes.',
    testimonial: {
      quote: 'SA Golfing made our annual corporate day effortless. The attention to detail was exceptional, and our clients loved the experience at Blair Atholl.',
      author: 'Michael Chen',
      role: 'CEO, TechCorp SA'
    },
    callToAction: 'Plan Your Corporate Event'
  },
  {
    id: '2',
    slug: 'golf-tours',
    title: 'Golf Tours',
    description: 'Discover South Africa\'s premier golf courses with our expertly curated tours.',
    icon: '🏌️',
    detailedDescription: 'SA Golfing organizes golf tours all over South Africa, tailored to your tour group\'s exact requirements. We\'ll help you put together an unforgettable tour of a lifetime. We are spoilt for choice in South Africa as far as golf courses are concerned - experience as many of our world-class courses as possible during your stay!',
    features: [
      'Customized tours across South Africa',
      'Access to world-class golf courses',
      'Tours in Johannesburg, Garden Route, Cape Town, Durban & Kruger',
      'Flexible itinerary planning',
      'Accommodation arrangements',
      'All transportation coordination',
      'Tee-time bookings at premium courses',
      'Local expertise and course knowledge'
    ],
    benefits: [
      'Tailored to your exact requirements',
      'Experience South Africa\'s best courses',
      'Hassle-free travel arrangements',
      'Expert local knowledge',
      'Combine golf with sightseeing',
      'Unforgettable tour experiences'
    ],
    pricing: 'Custom packages based on tour length, courses selected, and group size',
    testimonial: {
      quote: 'The Garden Route golf tour exceeded all expectations. Every course was spectacular, and the organization was flawless.',
      author: 'James Patterson',
      role: 'Golf Enthusiast, UK'
    },
    callToAction: 'Explore Tour Packages'
  },
  {
    id: '3',
    slug: 'day-golf-excursions',
    title: 'Day Golf Excursions',
    description: 'Experience world-class golf courses on convenient day trips.',
    icon: '⛳',
    detailedDescription: 'One phone call is all that is needed! SA Golfing offers a complete packaged day out to South Africa\'s top golf courses. The package includes return transport from your hotel/B&B to the golf course, confirmed tee-off times, and golf club hire if required.',
    features: [
      'Return transport from hotel/B&B to golf course',
      'Confirmed tee-off times',
      'Golf club hire available (see Golf Club Hire)',
      'Access to SA\'s top golf courses',
      'Complete packaged day experience',
      'Simple booking - just one phone call needed'
    ],
    benefits: [
      'No driving stress or navigation',
      'Play premium courses hassle-free',
      'Perfect for visitors and tourists',
      'Complete door-to-door service',
      'Professional coordination',
      'Same-day return to accommodation'
    ],
    pricing: 'Contact us for pricing based on course selection and group size',
    testimonial: {
      quote: 'Being picked up from my hotel and playing at Glendower was incredible. The convenience made my business trip so much better.',
      author: 'Sarah Williams',
      role: 'Business Traveler, Australia'
    },
    callToAction: 'Book Day Excursion'
  },
  {
    id: '4',
    slug: 'golf-club-hire',
    title: 'Golf Club Hire',
    description: 'Premium golf club rentals for your perfect game.',
    icon: '/images/clubs.png',
    detailedDescription: 'SA Golfing has 50 sets of 5-star golf clubs available to our clients. We provide clubs that best suit your game and handicap, with a wide selection of premium brands to choose from.',
    features: [
      '50 sets of 5-star golf clubs',
      'Premium brands: Cobras, Pings, Adams, King Cobras',
      'Also available: Titleists, TaylorMades, Wilsons',
      'Right-handed men\'s clubs',
      'Left-handed men\'s clubs',
      'Right-handed ladies clubs',
      'Clubs matched to your game and handicap',
      'Well-maintained equipment'
    ],
    benefits: [
      'Avoid airline baggage fees',
      'Play with premium 5-star equipment',
      'Clubs suited to your specific game',
      'Multiple brand options',
      'Options for all golfers (men\'s, ladies, left/right)',
      'Extensive inventory available'
    ],
    pricing: 'Contact us for daily and weekly rental rates',
    testimonial: {
      quote: 'The clubs were in perfect condition and perfectly suited to my game. Made traveling to South Africa so much easier.',
      author: 'Tom Anderson',
      role: 'International Golfer, USA'
    },
    callToAction: 'Reserve Your Clubs'
  },
  {
    id: '5',
    slug: 'chauffeur-driver',
    title: 'Chauffeur Driver',
    description: 'Luxury transportation to and from golf courses across South Africa.',
    icon: '/images/driver.png',
    detailedDescription: 'SA Golfing provides you and your business with an exclusive, dedicated vehicle and chauffeur to cater for your precise wants and needs. Your chauffeur will be on call 24 hours a day, 7 days a week.',
    features: [
      'Exclusive dedicated vehicle and chauffeur',
      '24/7 on-call service',
      '4-seater vehicles available',
      '6-seater vehicles available',
      '10-seater vehicles available',
      '14-seater vehicles available',
      'All vehicles air-conditioned',
      'Professional drivers with local knowledge'
    ],
    benefits: [
      'Stress-free travel experience',
      'Available 24 hours a day, 7 days a week',
      'Flexible vehicle sizes for any group',
      'Comfortable air-conditioned transport',
      'No parking or navigation concerns',
      'Arrive refreshed and ready to play',
      'Dedicated service for your business'
    ],
    pricing: 'Contact us for custom quotes based on vehicle size and requirements',
    testimonial: {
      quote: 'Our driver was punctual, professional, and knew all the best routes. We could focus on our game instead of navigation.',
      author: 'David Roberts',
      role: 'Golf Group Organizer'
    },
    callToAction: 'Book Your Transfer'
  },
  {
    id: '6',
    slug: 'holidays',
    title: 'Holidays',
    description: 'Complete golf holiday packages in South Africa\'s most beautiful destinations.',
    icon: '/images/holiday.png',
    detailedDescription: 'Immerse yourself in the ultimate golf holiday experience. SA Golfing creates comprehensive packages combining world-class golf courses with South Africa\'s incredible attractions, accommodations, and experiences.',
    features: [
      'Customized holiday itineraries',
      'Accommodation bookings',
      'Multiple championship course access',
      'Golf tours across all regions',
      'Wine tours and safari experiences',
      'Cultural and sightseeing excursions',
      'Transportation coordination',
      'All-inclusive package options'
    ],
    benefits: [
      'Complete holiday planning service',
      'Golf and leisure perfectly combined',
      'Expert destination knowledge',
      'Accommodation variety to suit any budget',
      'Memorable experiences across South Africa',
      'Stress-free vacation planning',
      'Access to exclusive courses and experiences'
    ],
    pricing: 'Custom holiday packages tailored to your budget and preferences',
    testimonial: {
      quote: 'The perfect combination of golf and adventure. We played amazing courses and went on safari. Best holiday ever!',
      author: 'Emma Thompson',
      role: 'Golf Traveler, Canada'
    },
    callToAction: 'Plan Your Golf Holiday'
  }
];

