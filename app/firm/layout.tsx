import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'The Firm | LVRGWRKS (LeverageWorks) - Fractional CTO Calgary' },
  description: 'LVRGWRKS is a fractional CTO and AI operations partner founded in Calgary. 20 years of operational experience across manufacturing, industrial services, and capital programs. Architected during the Haskayne EMBA to fix the gap between leadership intent and execution.',
  alternates: { canonical: '/firm' },
};

export default function FirmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
