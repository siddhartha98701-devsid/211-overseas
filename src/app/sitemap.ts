import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.211overseas.com';

  const routes = [
    '',
    '/study',
    '/study/south-korea',
    '/study/germany',
    '/study/singapore',
    '/study/luxembourg',
    '/study/japan',
    '/study/taiwan',
    '/study/uae',
    '/study/europe',
    '/study/usa',
    '/study/canada',
    '/study/uk',
    '/study/australia',
    '/work',
    '/work/uae',
    '/work/germany',
    '/work/greece',
    '/work/openings',
    '/inbound',
    '/inbound/students',
    '/inbound/collaborations',
    '/about',
    '/resources',
    '/resources/scholarships',
    '/resources/cost-of-studying',
    '/resources/application-guide',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
    '/refund-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : route.startsWith('/work/openings') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/study') || route.startsWith('/work') ? 0.8 : 0.6,
  }));
}
