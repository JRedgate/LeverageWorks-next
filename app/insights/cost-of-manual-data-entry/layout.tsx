import type { Metadata } from 'next';

const TITLE = 'The Real Cost of Manual Data Entry in Your Business';
const DESCRIPTION = 'Manual data entry costs more than the hours it consumes. Where the cost compounds in a growing Alberta business, and how to size it.';
const SEO_TITLE = 'The Real Cost of Manual Data Entry | LVRGWRKS';
const SLUG = '/insights/cost-of-manual-data-entry';
const PUBLISHED = '2026-04-16';
const MODIFIED  = '2026-06-26';

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
    images: [{ url: '/og-card-v2.jpg', width: 2400, height: 1260 }],
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
