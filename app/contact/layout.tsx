import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Contact LVRGWRKS | Fractional CTO Calgary, Alberta' },
  description: 'Start the conversation. Request a free Leverage Audit for your owner-led mid-market company in Calgary, Alberta, or Western Canada.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Start the conversation',
    description: 'Request a free Leverage Audit for your owner-led mid-market company in Calgary, Alberta, or Western Canada.',
    url: '/contact',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-card-v2.jpg', width: 2400, height: 1260 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
