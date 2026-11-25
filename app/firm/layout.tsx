import type { Metadata } from 'next';
import { OG_IMAGE, ORG_REF, PERSON_ID } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Jeremy Redgate, Industrial Operating Partner | LVRGWRKS' },
  description: 'Built by an operator, for operators. LVRGWRKS is an operating partner for industrial businesses, founded in Calgary by Jeremy Redgate and serving Canada.',
  alternates: { canonical: '/firm' },
  openGraph: {
    title: 'Built by an operator, for operators',
    description: 'An operating partner for industrial businesses, founded in Calgary by Jeremy Redgate after more than 20 years inside industrial operations.',
    url: '/firm',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

// Jeremy's node. Its @id (PERSON_ID) is the one every article's author and
// the business's founder use (STEP-REVIEW-9 7.6). The description is the first
// sentence of the homepage "Led by an operator" band.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Jeremy Redgate',
  jobTitle: 'Founder',
  description: 'Jeremy Redgate founded LVRGWRKS after more than 20 years in industrial operations and capital projects.',
  image: 'https://www.lvrgwrks.com/jeremy-redgate.jpg',
  url: 'https://www.lvrgwrks.com/firm',
  sameAs: ['https://www.linkedin.com/in/jeremyredgate'],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Haskayne School of Business, University of Calgary',
  },
  knowsAbout: ['Industrial operations', 'Capital projects', 'Operations management'],
  worksFor: ORG_REF,
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
