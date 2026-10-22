import { MetadataRoute } from 'next';
import { publishedSystemsDecisions } from '@/content/systems-decisions/registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lvrgwrks.com';
  // lastModified is set only where a real edit date exists (the insights
  // layouts' MODIFIED values). Until 22 Oct 2026 every URL carried the build
  // time, which told Google nothing. Keep these in step with the layouts.
  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    lastModified?: string;
  }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/leverage-audit', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/fractional-cto-calgary', priority: 0.9, changeFrequency: 'monthly' as const },
    // /ai-automation-consulting was listed here by hand until 13 Oct 2026.
    // Phase 4.2b moved it into the registry below, at the same priority and
    // change frequency, so it appears exactly once. Its footer link, unlike
    // its sitemap entry, is still the hand-written one.
    { path: '/digital-transformation-consulting', priority: 0.8, changeFrequency: 'monthly' as const },
    // /business-process-automation was listed here by hand until 13 Oct 2026.
    // Phase 4.2a moved it into the registry below, at the same priority and
    // change frequency, so it appears exactly once.
    { path: '/capabilities', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/firm', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/impact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/coordination-tax-calculator', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/insights', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/insights/coordination-tax-mid-market', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-04-20' },
    { path: '/insights/hidden-cost-of-estimating', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-05' },
    { path: '/insights/why-digital-transformations-fail', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: '2026-10-22' },
    { path: '/insights/what-does-a-fractional-cto-do', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: '2026-06-26' },
    { path: '/insights/cost-of-manual-data-entry', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: '2026-06-26' },
    { path: '/industries/manufacturing', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/industries/energy-services', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/industries/property-management', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/industries/construction', priority: 0.7, changeFrequency: 'monthly' as const },
    // Systems-decision pages appear here only once their registry entry is
    // published. See content/systems-decisions/registry.ts.
    ...publishedSystemsDecisions().map((entry) => ({
      path: `/${entry.slug}`,
      priority: entry.priority,
      changeFrequency: entry.changeFrequency,
    })),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    ...(route.lastModified ? { lastModified: route.lastModified } : {}),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
