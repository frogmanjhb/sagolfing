import { Helmet } from 'react-helmet-async';
import {
  CONTACT_EMAIL,
  CONTACT_NAME,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  courseUrl,
} from '../config/seo';

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

export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  description: 'Your preferred golfing partner away from home. Discover the best golf courses in South Africa.',
  url: SITE_URL,
  logo: absoluteUrl('/images/SAGolfing-Logo-2010%20(1).png'),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    name: CONTACT_NAME,
    telephone: CONTACT_PHONE_TEL,
    email: CONTACT_EMAIL,
    areaServed: 'ZA',
    availableLanguage: ['English'],
  },
  sameAs: [
    SITE_URL,
    'https://www.facebook.com/SAGolfing/',
  ],
});

export const createLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: SITE_NAME,
  description: 'Premier golf course booking and tour service in South Africa',
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_TEL,
  founder: {
    '@type': 'Person',
    name: CONTACT_NAME,
  },
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
  url: courseUrl(course.id),
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

export const createServiceSchema = (service: {
  slug: string;
  title: string;
  description: string;
  detailedDescription?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.detailedDescription || service.description,
  url: absoluteUrl(`/service/${service.slug}`),
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
});

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
