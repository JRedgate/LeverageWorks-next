/**
 * The publish ledger for the systems-decision pages.
 *
 * One boolean per page drives all three publish actions at once: the noindex
 * meta tag (content/systems-decisions/seo.ts), the footer link group
 * (components/Footer.tsx) and the sitemap entry (app/sitemap.ts). Phase 3 of
 * CLAUDE-CODE-BRIEF-SEARCH-2026-10-08.md asks for those as three separate
 * edits per page. Three edits in three files drift, so they are collapsed to
 * one here and the discriminated union below makes a half-applied publish a
 * compile error rather than a silently half-live page.
 */

export const SYSTEMS_DECISION_SLUGS = [
  'erp-selection-alberta-manufacturers',
  'job-costing-change-orders-contractors',
  'system-went-live-nothing-got-faster',
  'business-central-acumatica-netsuite',
  'property-management-systems-alberta',
  'funding-systems-automation-alberta-2026',
] as const;

export type SystemsDecisionSlug = (typeof SYSTEMS_DECISION_SLUGS)[number];

export type SitemapFrequency = 'weekly' | 'monthly' | 'yearly';

/**
 * Setting published: true requires the footer label, the sitemap values and
 * the path of the approved copy file. TypeScript will not let you publish a
 * page without them, which is the brief's "never publish a template with
 * placeholder text" enforced by the compiler instead of by review.
 */
export type RegistryEntry =
  | { published: false }
  | {
      published: true;
      /** Footer link text under the "Systems decisions" heading. */
      footerLabel: string;
      priority: number;
      changeFrequency: SitemapFrequency;
      /** Absolute path of the approved copy file this page was built from. */
      copySource: string;
    };

export type PublishedSystemsDecision = Extract<RegistryEntry, { published: true }> & {
  slug: SystemsDecisionSlug;
};

export const SYSTEMS_DECISION_REGISTRY: Record<SystemsDecisionSlug, RegistryEntry> = {
  'erp-selection-alberta-manufacturers': {
    published: true,
    footerLabel: 'ERP for Manufacturers',
    priority: 0.8,
    changeFrequency: 'monthly',
    copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/erp-selection-alberta-manufacturers.md',
  },
  'job-costing-change-orders-contractors': {
    published: true,
    footerLabel: 'Contractor Job Costing',
    priority: 0.8,
    changeFrequency: 'monthly',
    copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/job-costing-change-orders-contractors.md',
  },
  'system-went-live-nothing-got-faster': {
    published: true,
    footerLabel: 'ERP Implementation Rescue',
    priority: 0.8,
    changeFrequency: 'monthly',
    copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/system-went-live-nothing-got-faster.md',
  },
  'business-central-acumatica-netsuite': { published: false },
  'property-management-systems-alberta': { published: false },
  'funding-systems-automation-alberta-2026': { published: false },
};

export function isPublished(slug: SystemsDecisionSlug): boolean {
  return SYSTEMS_DECISION_REGISTRY[slug].published;
}

/** Published pages only, in declaration order. Consumed by Footer and sitemap. */
export function publishedSystemsDecisions(): PublishedSystemsDecision[] {
  const out: PublishedSystemsDecision[] = [];
  for (let i = 0; i < SYSTEMS_DECISION_SLUGS.length; i += 1) {
    const slug = SYSTEMS_DECISION_SLUGS[i];
    const entry = SYSTEMS_DECISION_REGISTRY[slug];
    if (entry.published) out.push({ slug, ...entry });
  }
  return out;
}
