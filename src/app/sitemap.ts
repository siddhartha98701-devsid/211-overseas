import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://211overseas.com';

  const routes = [
    '',
    '/study-in-south-korea',
    '/work-in-germany',
    '/work-in-uae',
    '/other-destinations',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
    '/refund-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/study') || route.startsWith('/work') ? 0.8 : 0.6,
  }));
}
