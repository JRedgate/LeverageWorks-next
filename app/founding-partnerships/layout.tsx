import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/site';

// Addendum 5: unlisted. Reachable only by its link. Not in the sitemap, not in
// robots.txt, not linked from any page, the navbar, the footer, Related reading
// or JSON-LD. noindex, nofollow, and self-canonical so a forwarded link
// resolves to one address. The share image is the site default (OG_IMAGE).
export const metadata: Metadata = {
  title: { absolute: 'Founding Partnerships | LVRGWRKS' },
  description: 'Three founding partnerships. Sixty days of work on the decisions that still land on your desk, then you decide whether we carry on.',
  alternates: { canonical: '/founding-partnerships' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Founding Partnerships | LVRGWRKS',
    description: 'Three founding partnerships. Sixty days of work on the decisions that still land on your desk, then you decide whether we carry on.',
    url: '/founding-partnerships',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

export default function FoundingPartnershipsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
