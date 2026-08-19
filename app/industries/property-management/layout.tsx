import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Property Management Automation Alberta | LVRGWRKS' },
  description: 'Your portfolio is growing and administrative overhead is growing faster. Operations and automation help for Alberta property management firms.',
  alternates: { canonical: '/industries/property-management' },
};

export default function PropertyManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
