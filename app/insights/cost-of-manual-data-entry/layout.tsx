import type { Metadata } from 'next';

const TITLE = 'The Real Cost of Manual Data Entry in Your Business';
const DESCRIPTION = 'Manual data entry does not appear on your P&L. But it is one of the largest controllable costs in most Alberta mid-market companies. Here is how to find it and what to do about it.';
const SLUG = '/insights/cost-of-manual-data-entry';
const PUBLISHED = '2026-04-16';
const MODIFIED  = '2026-06-26';

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | LVRGWRKS` },
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Jeremy Redgate',
    jobTitle: 'Founder',
    worksFor: { '@type': 'Organization', name: 'LVRGWRKS Inc.' },
    url: 'https://www.lvrgwrks.com/firm',
  },
  publisher: {
    '@type': 'Organization',
    name: 'LVRGWRKS Inc.',
    url: 'https://www.lvrgwrks.com',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.lvrgwrks.com${SLUG}` },
};

export default function CostOfManualDataEntryLayout({ children }: { children: React.ReactNode }) {
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
