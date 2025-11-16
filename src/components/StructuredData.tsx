import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: object;
}

const StructuredData = ({ data }: StructuredDataProps) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

// Helper to create Organization schema
export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SA Golfing',
  description: 'Your preferred golfing partner away from home. Discover the best golf courses in South Africa.',
  url: 'https://sagolfing-production.up.railway.app',
  logo: 'https://sagolfing-production.up.railway.app/vite.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    areaServed: 'ZA',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.sagolfing.com',
    'https://www.facebook.com/SAGolfing/',
  ],
});

// Helper to create LocalBusiness schema
export const createLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'SA Golfing',
  description: 'Premier golf course booking and tour service in South Africa',
  url: 'https://sagolfing-production.up.railway.app',
  telephone: '+27-XXX-XXX-XXXX',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
    addressRegion: 'South Africa',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -26.2041,
    longitude: 28.0473,
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  priceRange: '$$',
});

// Helper to create Golf Course schema
export const createGolfCourseSchema = (course: {
  id: string;
  name: string;
  description?: string;
  image?: string;
  location?: string;
  region: string;
  designer?: string;
  par?: number;
  length?: string;
  nationalRanking?: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'GolfCourse',
  name: course.name,
  description: course.description || `${course.name} is a premier golf course in ${course.region}, South Africa.`,
  image: course.image || 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&h=600&fit=crop',
  url: `https://sagolfing-production.up.railway.app/course/${course.id}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: course.location || course.region,
    addressRegion: course.region,
    addressCountry: 'ZA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    addressCountry: 'ZA',
  },
  ...(course.designer && {
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Designer',
        value: course.designer,
      },
      ...(course.par ? [{
        '@type': 'PropertyValue',
        name: 'Par',
        value: course.par.toString(),
      }] : []),
      ...(course.length ? [{
        '@type': 'PropertyValue',
        name: 'Length',
        value: course.length,
      }] : []),
      ...(course.nationalRanking ? [{
        '@type': 'PropertyValue',
        name: 'National Ranking',
        value: `#${course.nationalRanking}`,
      }] : []),
    ],
  }),
});

// Helper to create BreadcrumbList schema
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export default StructuredData;

