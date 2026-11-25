import { MetadataRoute } from 'next';
import { publishedSystemsDecisions } from '@/content/systems-decisions/registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lvrgwrks.com';
  // lastModified is the date of the last material copy change, and only where
  // one is known (STEP-REVIEW-9 7.5). It is not the build or deploy date.
  // Rebrand pages carry the date of their last copy change on
  // rebrand-release-0. Pages the rebrand touched only in boilerplate (the
  // identity sentence, the call to action) keep no date. The insights dates
  // match the layouts' MODIFIED values. No priority or changefreq: Google
  // ignores both.
  const routes: { path: string; lastModified?: string }[] = [
    { path: '/', lastModified: '2026-11-24' },
    { path: '/leverage-audit', lastModified: '2026-11-24' },
    { path: '/fractional-cto-calgary', lastModified: '2026-11-25' },
    // /ai-automation-consulting and /business-process-automation come from
    // the registry below, so each appears exactly once.
    { path: '/digital-transformation-consulting', lastModified: '2026-11-24' },
    { path: '/capabilities', lastModified: '2026-11-25' },
    { path: '/firm', lastModified: '2026-11-24' },
    // /impact and /coordination-tax-calculator were removed from the build
    // and 308 to /capabilities and /60-day-test (next.config.js).
    { path: '/contact', lastModified: '2026-11-24' },
    { path: '/privacy', lastModified: '2026-11-24' },
    { path: '/60-day-test', lastModified: '2026-11-24' },
    { path: '/faq', lastModified: '2026-11-25' },
    { path: '/insights', lastModified: '2026-11-24' },
    { path: '/insights/coordination-tax-mid-market', lastModified: '2026-04-20' },
    { path: '/insights/hidden-cost-of-estimating', lastModified: '2026-08-05' },
    { path: '/insights/why-digital-transformations-fail', lastModified: '2026-10-22' },
    { path: '/insights/what-does-a-fractional-cto-do', lastModified: '2026-06-26' },
    { path: '/insights/cost-of-manual-data-entry', lastModified: '2026-06-26' },
    { path: '/industries/manufacturing', lastModified: '2026-11-24' },
    { path: '/industries/energy-services', lastModified: '2026-11-24' },
    { path: '/industries/property-management', lastModified: '2026-11-25' },
    { path: '/industries/construction', lastModified: '2026-11-24' },
    { path: '/industries/distribution', lastModified: '2026-11-24' },
    // Systems-decision pages appear here only once their registry entry is
    // published. See content/systems-decisions/registry.ts.
    ...publishedSystemsDecisions().map((entry) => ({
      path: `/${entry.slug}`,
      lastModified: entry.lastModified,
    })),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    ...(route.lastModified ? { lastModified: route.lastModified } : {}),
  }));
}
