import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'The 60-Day Test | LVRGWRKS' },
  description: 'Could your business run for 60 days without you? Five questions, two minutes, no email needed.',
  alternates: { canonical: '/60-day-test' },
  openGraph: {
    title: 'Could your business run for 60 days without you?',
    description: 'Five questions, two minutes, no email needed.',
    url: '/60-day-test',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

export default function SixtyDayTestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
