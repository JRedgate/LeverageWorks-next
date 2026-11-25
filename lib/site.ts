// Site-wide constants shared by metadata, JSON-LD and page copy.

export const SITE_URL = 'https://www.lvrgwrks.com';

export const OG_IMAGE = { url: '/og-card.png', width: 1200, height: 630 };

export const POSITIONING = 'Operating partner for industrial businesses';

export const ONE_LINER =
  'LVRGWRKS is an operating partner for industrial businesses, based in Calgary and serving Canada.';

// Structured data identities (STEP-REVIEW-9 7.6). One @id for the business and
// one for Jeremy. Every node that names either one uses these, so search
// engines merge them into a single entity each. The business @id is the value
// the answer pages already used, so it does not change.
export const ORG_ID = SITE_URL;
export const ORG_NAME = 'LVRGWRKS (LeverageWorks)';
export const PERSON_ID = `${SITE_URL}/firm#jeremy-redgate`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/logo.png`;
export const CONTACT_EMAIL = 'jredgate@lvrgwrks.com';

/** A reference to the business node, for author, publisher, provider and worksFor. */
export const ORG_REF = { '@type': 'ProfessionalService', '@id': ORG_ID, name: ORG_NAME } as const;

/** A reference to Jeremy's Person node on /firm. */
export const PERSON_REF = { '@type': 'Person', '@id': PERSON_ID, name: 'Jeremy Redgate' } as const;

/**
 * Service and BreadcrumbList for a page one level below home (/capabilities)
 * or two (/industries/<key>). The same shape as the answer pages' graph in
 * content/systems-decisions/schema.ts. No ratings, prices or offers.
 */
export function serviceGraph(opts: {
  path: string;
  serviceName: string;
  description: string;
  areaServed: { '@type': 'Country' | 'State'; name: string };
  crumbs: { name: string; path: string }[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: opts.serviceName,
        description: opts.description,
        url,
        areaServed: opts.areaServed,
        provider: ORG_REF,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          ...opts.crumbs.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: c.name,
            item: `${SITE_URL}${c.path}`,
          })),
        ],
      },
    ],
  };
}
