import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'The Firm | Fractional CTO Calgary | LVRGWRKS' },
  description: 'Built by operators, for operators. The fractional CTO and operating partner for owner-led mid-market companies in Alberta and Western Canada.',
  alternates: { canonical: '/firm' },
  openGraph: {
    title: 'Built by operators, for operators',
    description: 'The fractional CTO and operating partner for owner-led mid-market companies in Alberta and Western Canada. You are adding a partner who already speaks the language.',
    url: '/firm',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-card-v2.jpg', width: 2400, height: 1260 }],
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
