import type { Metadata } from 'next';

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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
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
