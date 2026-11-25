import type { Metadata } from 'next';

import { LOGO_URL, OG_IMAGE, ORG_REF, PERSON_REF, SITE_URL } from '@/lib/site';
const TITLE = 'The Coordination Tax: Why Mid-Market Companies Grow Revenue Without Growing Margin';
const DESCRIPTION = 'Mid-market companies add revenue and headcount without adding margin. Here is where the money actually goes, and what it costs an Alberta operation.';
const SEO_TITLE = 'Why Revenue Grows But Margin Does Not | LVRGWRKS';
const SLUG = '/insights/coordination-tax-mid-market';
const PUBLISHED = '2026-04-17';
const MODIFIED  = '2026-04-20';

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SLUG,
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'article',
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [OG_IMAGE],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  // One @id each for Jeremy and the business (STEP-REVIEW-9 7.6).
  author: { ...PERSON_REF, url: 'https://www.lvrgwrks.com/firm' },
  publisher: { ...ORG_REF, url: SITE_URL, logo: { '@type': 'ImageObject', url: LOGO_URL } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.lvrgwrks.com${SLUG}` },
};

export default function CoordinationTaxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}
