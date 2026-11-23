import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'The Firm | Operating Partner for Industrial Businesses | LVRGWRKS' },
  description: 'Built by operators, for operators. LVRGWRKS is an operating partner for industrial businesses, led by founder Jeremy Redgate and based in Calgary.',
  alternates: { canonical: '/firm' },
  openGraph: {
    title: 'Built by operators, for operators',
    description: 'An operating partner for industrial businesses, based in Calgary and serving Canada. You are adding a partner who already speaks the language.',
    url: '/firm',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.lvrgwrks.com/firm#jeremy-redgate',
  name: 'Jeremy Redgate',
  jobTitle: 'Founder',
  image: 'https://www.lvrgwrks.com/jeremy-redgate.jpg',
  url: 'https://www.lvrgwrks.com/firm',
  sameAs: ['https://www.linkedin.com/in/jeremyredgate'],
  worksFor: { '@type': 'Organization', name: 'LVRGWRKS Inc.', url: 'https://www.lvrgwrks.com' },
};

export default function FirmLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {children}
    </>
  );
}
