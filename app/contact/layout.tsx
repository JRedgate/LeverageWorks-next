import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Contact LVRGWRKS | Fractional CTO Calgary, Alberta' },
  description: 'Start the conversation. Request a free Leverage Audit for your owner-led mid-market company in Calgary, Alberta, or Western Canada.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
