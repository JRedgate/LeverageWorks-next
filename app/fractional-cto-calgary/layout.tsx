import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Fractional CTO Calgary | Mid-Market Alberta | LVRGWRKS' },
  description: 'Fractional CTO and operating partner for owner-led mid-market companies in Calgary and Alberta. Senior technology leadership without a full-time hire.',
  alternates: { canonical: '/fractional-cto-calgary' },
};

export default function FractionalCTOCalgaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
