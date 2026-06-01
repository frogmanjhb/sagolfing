import { Helmet } from 'react-helmet-async';
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from '../config/seo';

interface SEOHelmetProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
  noIndex?: boolean;
}

const SEOHelmet = ({
  title,
  description,
  canonical = SITE_URL,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  keywords = DEFAULT_KEYWORDS,
  noIndex = false,
}: SEOHelmetProps) => {
  const fullTitle = title.includes('SA Golfing') ? title : `${title} | SA Golfing`;
  const resolvedCanonical = canonical.startsWith('http') ? canonical : absoluteUrl(canonical);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={resolvedCanonical} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={resolvedCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="language" content="English" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />
    </Helmet>
  );
};

export default SEOHelmet;
