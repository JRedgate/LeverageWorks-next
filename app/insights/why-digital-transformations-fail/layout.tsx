import type { Metadata } from 'next';

const TITLE = 'Why Most Digital Transformations Fail (And What Mid-Market Companies Do Instead)';
const DESCRIPTION = 'Most digital transformations in mid-market companies fail for the same reason. It is not the technology. Here is what actually goes wrong and how Alberta operators are solving it differently.';
const SLUG = '/insights/why-digital-transformations-fail';
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

export default function WhyTransformationsFailLayout({ children }: { children: React.ReactNode }) {
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
