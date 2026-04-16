import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Fractional CTO Calgary | LVRGWRKS - AI Operations Partner for Mid-Market Alberta Companies' },
  description: 'LVRGWRKS embeds as your fractional CTO and AI operations partner in Calgary and across Alberta. We identify coordination drag, build the systems to fix it, and prove ROI every 30 days.',
  alternates: { canonical: '/fractional-cto-calgary' },
};

export default function FractionalCTOCalgaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
