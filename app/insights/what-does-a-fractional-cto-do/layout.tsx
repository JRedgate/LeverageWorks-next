import type { Metadata } from 'next';

const TITLE = 'What Does a Fractional CTO Actually Do Inside Your Business?';
const DESCRIPTION = 'A plain explanation of what a fractional CTO does inside a mid-market business week to week, and when hiring one makes sense in Alberta.';
const SEO_TITLE = 'What Does a Fractional CTO Actually Do? | LVRGWRKS';
const SLUG = '/insights/what-does-a-fractional-cto-do';
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
