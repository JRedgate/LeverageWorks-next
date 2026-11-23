import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Privacy | LVRGWRKS' },
  description: 'What LVRGWRKS collects through this site, why, who sees it, how long we keep it and how to ask for access, correction or deletion.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy at LVRGWRKS',
    description: 'What we collect through this site, why, who sees it and how long we keep it.',
    url: '/privacy',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
