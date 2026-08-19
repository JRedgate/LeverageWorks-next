import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Business Process Automation Calgary & Alberta | LVRGWRKS' },
  description: 'Business process automation for mid-market companies in Alberta. Your team should not be the integration layer between your own systems.',
  alternates: { canonical: '/business-process-automation' },
  openGraph: {
    title: 'Your team should not be the integration layer between your own systems',
    description: 'Business process automation for mid-market companies in Alberta. We remove the handoffs that should not exist, then automate what is left.',
    url: '/business-process-automation',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function BusinessProcessAutomationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
