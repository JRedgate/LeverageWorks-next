import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { OG_IMAGE, serviceGraph } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'How We Work: Diagnostic and Operating Partnership | LVRGWRKS' },
  description: 'How we work: find which decisions and handoffs still run through the top, agree which ones move, report what changed. Based in Calgary, serving Canada.',
  alternates: { canonical: '/capabilities' },
  openGraph: {
    title: 'How the decisions get off your desk',
    description: 'Too many decisions still land on your desk. This is how LVRGWRKS moves them into the business, with your people.',
    url: '/capabilities',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [OG_IMAGE],
  },
};

// Service and BreadcrumbList (STEP-REVIEW-9 7.6). The service name is
// descriptive, not an offer name, until the December decisions.
const schema = serviceGraph({
  path: '/capabilities',
  serviceName: 'Operations diagnostic and operating partnership for industrial businesses',
  description: 'We find which decisions and handoffs still run through the top, agree which ones move, work the change with your people, and report what changed each month.',
  areaServed: { '@type': 'Country', name: 'Canada' },
  crumbs: [{ name: 'How we work', path: '/capabilities' }],
});

export default function CapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
