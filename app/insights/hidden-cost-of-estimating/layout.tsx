import type { Metadata } from 'next';

const TITLE = 'The Hidden Cost of Estimating: What We Found Inside Three Project Files';
const DESCRIPTION = 'We opened three completed estimate files from a mid-market engineering contractor and compared them line by line. Almost nothing was reused between jobs. Here is what that costs, and why speed is not the prize most firms think it is.';
const SLUG = '/insights/hidden-cost-of-estimating';
const PUBLISHED = '2026-08-05';
const MODIFIED  = '2026-08-05';

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

export default function HiddenCostOfEstimatingLayout({ children }: { children: React.ReactNode }) {
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
