import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Contact LVRGWRKS | Calgary, Alberta' },
  description: 'Send LVRGWRKS a note or book a 30-minute call. Jeremy replies within one business day. Based in Calgary, serving industrial businesses across Canada.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Send us a note',
    description: 'Send us a note or book a 30-minute call. Jeremy replies within one business day.',
    url: '/contact',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
