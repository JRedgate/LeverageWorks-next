import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'AI and Automation for Alberta Property Management Companies | LVRGWRKS' },
  description: 'LVRGWRKS helps Alberta property management companies connect billing, maintenance, tenant, and owner reporting systems into one automated operating layer.',
  alternates: { canonical: '/industries/property-management' },
};

export default function PropertyManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
