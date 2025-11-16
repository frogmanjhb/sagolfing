import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

const SEOHelmet = ({
  title,
  description,
  canonical = 'https://sagolfing-production.up.railway.app',
  image = 'https://cdn.sanity.io/images/03mhssoh/production/631d48fcccdb3e93c90944ebe50fc9e061038891-1832x1222.jpg',
  type = 'website',
  keywords = 'golf south africa, golf courses, johannesburg golf, cape town golf, garden route golf, durban golf, golf booking, golf tours',
}: SEOHelmetProps) => {
  const fullTitle = title.includes('SA Golfing') ? title : `${title} | SA Golfing`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="SA Golfing" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
    </Helmet>
  );
};

export default SEOHelmet;

