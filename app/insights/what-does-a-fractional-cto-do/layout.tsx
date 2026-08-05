import type { Metadata } from 'next';

const TITLE = 'What Does a Fractional CTO Actually Do Inside Your Business?';
const DESCRIPTION = 'Most mid-market companies in Alberta are feeling the pain of not having a CTO without being ready to hire one full-time. Here is what a fractional CTO actually does inside your business.';
const SLUG = '/insights/what-does-a-fractional-cto-do';
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

export default function WhatFractionalCTODoesLayout({ children }: { children: React.ReactNode }) {
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
