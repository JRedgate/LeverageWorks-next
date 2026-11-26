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
  // Phase 4.1. Not a systems-decision page, but it renders through the same
  // template and publishes through the same ledger, so it lives here. The
  // SYSTEMS_DECISION_ names are historical. See README.md.
  //
  // Phase 4.2a is the first entry here for a page that was ALREADY LIVE. Its
  // footer link and sitemap entry were hand-written in Footer.tsx and
  // sitemap.ts, and both were removed when it moved into this ledger, so the
  // page keeps exactly one of each. It is declared before Phase 4.1 so the
  // Expertise column renders in its existing order: Business Process
  // Automation, then Process Improvement.
  'business-process-automation',
  // Phase 4.2b, the second already-live rebuild. Its footer link stays
  // hand-written, so unlike 4.2a its position in this list has no effect on
  // the footer. See FooterGroup below.
  'ai-automation-consulting',
  'operations-process-improvement-alberta',
] as const;

export type SystemsDecisionSlug = (typeof SYSTEMS_DECISION_SLUGS)[number];

/**
 * Which footer column a published page is listed under.
 *
 * Required rather than defaulted, because the column is a positioning decision
 * per page, not a property of this template. Phase 4.1 is the first page to
 * sit under Expertise: it is a core service, not a systems decision, and its
 * copy file says so.
 */
/**
 * 'hand-written' is the third case, added 13 Oct 2026 for Phase 4.2b: the
 * ledger renders no footer link for the page, because the footer already
 * carries one that predates the ledger and sits in a position the ledger
 * cannot reproduce. `/ai-automation-consulting` is the second item in the
 * hand-written Expertise list in components/Footer.tsx, between two pages that
 * are not in this ledger at all, and its copy file says footer placement is
 * unchanged. Phase 4.2a's link was the last of the hand-written ones, so it
 * could simply move here. This one cannot.
 *
 * `footerLabel` is still required for it, and still records the text of that
 * hand-written link, so the two cannot drift apart unnoticed. Do not reach for
 * this value for a new page: a page the ledger publishes should be a page the
 * ledger links.
 */
export type FooterGroup = 'expertise' | 'systems-decisions' | 'hand-written';

/**
 * Setting published: true requires the footer label and
 * the path of the approved copy file. TypeScript will not let you publish a
 * page without them, which is the brief's "never publish a template with
 * placeholder text" enforced by the compiler instead of by review.
 */
export type RegistryEntry =
  | { published: false }
  | {
      published: true;
      /** Footer link text. */
      footerLabel: string;
      /** Which footer column the link sits in. */
      footerGroup: FooterGroup;
      /**
       * Sitemap lastmod (YYYY-MM-DD): the date of the last material copy
       * change. Leave it out when no real date is known. The sitemap carries
       * no priority or changefreq (STEP-REVIEW-9 7.5).
       */
      lastModified?: string;
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
    footerGroup: 'systems-decisions',
    copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/erp-selection-alberta-manufacturers.md',
  },
  'job-costing-change-orders-contractors': {
    published: true,
    footerLabel: 'Contractor Job Costing',
    footerGroup: 'systems-decisions',
    copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/job-costing-change-orders-contractors.md',
  },
  'system-went-live-nothing-got-faster': {
    published: true,
    footerLabel: 'ERP Implementation Rescue',
    footerGroup: 'systems-decisions',
    copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/system-went-live-nothing-got-faster.md',
  },
  'business-central-acumatica-netsuite': {
    published: true,
    footerLabel: 'Comparing ERP Systems',
    footerGroup: 'systems-decisions',
    copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/business-central-acumatica-netsuite.md',
  },
  // Retired Nov 26, 2026 on Jeremy's word: the route is removed from the
  // build and 308s to / (next.config.js). Unpublished here so the sitemap
  // drops it. The content file is kept for the record.
  'property-management-systems-alberta': { published: false },
  'funding-systems-automation-alberta-2026': { published: false },
  // Already live before it entered this ledger, so publishing it changes
  // nothing about its indexability. Moved from Expertise to Systems decisions
  // in Release 0, when the Expertise column became How we work.
  'business-process-automation': {
    published: true,
    footerLabel: 'Business Process Automation',
    footerGroup: 'systems-decisions',
    lastModified: '2026-11-25',
    copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/business-process-automation.md',
  },
  // Already live before it entered this ledger, like 4.2a, so publishing it
  // changes nothing about its indexability. Release 0 removed its footer
  // link, and 'hand-written' keeps the registry from rendering one. Its
  // sitemap entry still comes from here, so the page stays live and indexed.
  'ai-automation-consulting': {
    published: true,
    footerLabel: 'AI Automation Consulting',
    footerGroup: 'hand-written',
    lastModified: '2026-11-25',
    copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/ai-automation-consulting.md',
  },
  'operations-process-improvement-alberta': {
    published: true,
    footerLabel: 'Process Improvement',
    footerGroup: 'systems-decisions',
    copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/operations-process-improvement-alberta.md',
  },
};

export function isPublished(slug: SystemsDecisionSlug): boolean {
  return SYSTEMS_DECISION_REGISTRY[slug].published;
}

/** Published pages in one footer column, in declaration order. Consumed by Footer. */
export function publishedInFooterGroup(group: FooterGroup): PublishedSystemsDecision[] {
  const out: PublishedSystemsDecision[] = [];
  const all = publishedSystemsDecisions();
  for (let i = 0; i < all.length; i += 1) {
    if (all[i].footerGroup === group) out.push(all[i]);
  }
  return out;
}

/** Published pages only, in declaration order. Consumed by the sitemap. */
export function publishedSystemsDecisions(): PublishedSystemsDecision[] {
  const out: PublishedSystemsDecision[] = [];
  for (let i = 0; i < SYSTEMS_DECISION_SLUGS.length; i += 1) {
    const slug = SYSTEMS_DECISION_SLUGS[i];
    const entry = SYSTEMS_DECISION_REGISTRY[slug];
    if (entry.published) out.push({ slug, ...entry });
  }
  return out;
}
