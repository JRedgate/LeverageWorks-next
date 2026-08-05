import type { Metadata } from 'next';

const TITLE = 'The Coordination Tax: Why Mid-Market Companies Grow Revenue Without Growing Margin';
const DESCRIPTION = 'Most mid-market operators scale revenue faster than margin. The reason is coordination tax, the hidden overhead that compounds as companies grow. Here is what it is, what it costs, and how to fix it.';
const SLUG = '/insights/coordination-tax-mid-market';
const PUBLISHED = '2026-04-17';
const MODIFIED  = '2026-04-20';

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
