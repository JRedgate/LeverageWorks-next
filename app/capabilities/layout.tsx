import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Capabilities | Operating Partner for Industrial Businesses | LVRGWRKS' },
  description: 'What LVRGWRKS does inside industrial businesses. Systems that let your operation grow without headcount and overhead growing at the same rate.',
  alternates: { canonical: '/capabilities' },
  openGraph: {
    title: 'What we build, and what changes when it runs',
    description: 'Systems that let your operation grow without headcount and overhead growing at the same rate. Built with your people, for industrial businesses across Canada.',
    url: '/capabilities',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

export default function CapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
