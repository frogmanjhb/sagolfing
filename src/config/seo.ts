import { golfCourses } from '../data/courses';
import { services } from '../data/services';

export const SITE_URL =
  (import.meta.env?.VITE_SITE_URL as string | undefined) ?? 'https://www.sagolfing.com';

export const SITE_NAME = 'SA Golfing';

export const DEFAULT_OG_IMAGE =
  'https://cdn.sanity.io/images/03mhssoh/production/631d48fcccdb3e93c90944ebe50fc9e061038891-1832x1222.jpg';

export const DEFAULT_KEYWORDS =
  'golf south africa, golf courses, johannesburg golf, cape town golf, garden route golf, durban golf, golf booking, golf tours';

export const CONTACT_EMAIL = 'info@sagolfing.com';
export const CONTACT_NAME = 'Tim Steenhoff';
export const CONTACT_PHONE = '+27 82 770 1733';
export const CONTACT_PHONE_TEL = '+27827701733';

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function courseUrl(courseId: string): string {
  return absoluteUrl(`/course/${courseId}`);
}

export function serviceUrl(serviceSlug: string): string {
  return absoluteUrl(`/service/${serviceSlug}`);
}

export function getAllCourseIds(): string[] {
  return golfCourses.flatMap((region) => region.courses.map((course) => course.id));
}

export function getPrerenderRoutes(): string[] {
  const courseRoutes = getAllCourseIds().map((id) => `/course/${id}`);
  const serviceRoutes = services.map((service) => `/service/${service.slug}`);
  return ['/', ...courseRoutes, ...serviceRoutes];
}

export function generateSitemapXml(): string {
  const lastmod = new Date().toISOString().split('T')[0];
  const urls: { loc: string; priority: string; changefreq: string }[] = [
    { loc: absoluteUrl('/'), priority: '1.0', changefreq: 'weekly' },
    ...getAllCourseIds().map((id) => ({
      loc: courseUrl(id),
      priority: '0.8',
      changefreq: 'monthly',
    })),
    ...services.map((service) => ({
      loc: serviceUrl(service.slug),
      priority: '0.7',
      changefreq: 'monthly',
    })),
  ];

  const urlEntries = urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}
