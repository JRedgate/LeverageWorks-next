import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lvrgwrks.com';
  const now = new Date();

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/leverage-audit', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/fractional-cto-calgary', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/ai-automation-consulting', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/digital-transformation-consulting', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/business-process-automation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/capabilities', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/firm', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/impact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/coordination-tax-calculator', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/insights', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/insights/why-digital-transformations-fail', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/insights/what-does-a-fractional-cto-do', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/insights/cost-of-manual-data-entry', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/industries/manufacturing', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/industries/energy-services', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/industries/property-management', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/industries/construction', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
