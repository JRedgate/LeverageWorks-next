import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';
import { FAQS } from './faqs';

export const metadata: Metadata = {
  title: { absolute: 'Industrial Operations Consulting FAQs | LVRGWRKS' },
  description: 'The questions owners actually ask about working with LVRGWRKS: what we do, the 30-minute call, the diagnostic, cost, commitment and ownership.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'The questions owners actually ask',
    description: 'Straight answers on what LVRGWRKS does, how cost and commitment work, who owns what is built, and what happens to your team.',
    url: '/faq',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a.join(' ') },
  })),
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
