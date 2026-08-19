import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { AnalyticsEvents } from '@/components/AnalyticsEvents';
import { BriefingProvider } from '@/components/BriefingProvider';
import { ClientLayout } from '@/components/ClientLayout';
import { Footer } from '@/components/Footer';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-E0H5REX2XK';

export const metadata: Metadata = {
  title: {
    default: 'Fractional CTO & Operating Partner Calgary | LVRGWRKS',
    template: '%s | LVRGWRKS',
  },
  description: 'The fractional CTO and operating partner for owner-led mid-market companies in Alberta. We recover the margin coordination is quietly costing you.',
  keywords: ['Fractional CTO Calgary', 'Operating Partner', 'Operating Model Architecture', 'LeverageWorks', 'Property Management Automation', 'Construction Tech', 'Manufacturing AI'],
  metadataBase: new URL('https://www.lvrgwrks.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'You added the revenue. The margin did not follow.',
    description: 'The fractional CTO and operating partner for owner-led mid-market companies in Alberta and Western Canada. We recover the margin coordination is quietly costing you.',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    url: 'https://www.lvrgwrks.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  other: {
    'geo.region': 'CA-AB',
    'geo.placename': 'Calgary',
    'geo.position': '51.0447;-114.0719',
    'ICBM': '51.0447, -114.0719',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'LVRGWRKS (LeverageWorks)',
  alternateName: 'LeverageWorks',
  description: 'Fractional CTO and operating partner for owner-led mid-market companies in Alberta and Western Canada. We recover the margin lost to the coordination tax by rebuilding how the work flows.',
  image: 'https://www.lvrgwrks.com/og-image.jpg',
  '@id': 'https://www.lvrgwrks.com',
  url: 'https://www.lvrgwrks.com',
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'State', name: 'Alberta' },
    { '@type': 'Place', name: 'Western Canada' },
  ],
  serviceType: [
    'Fractional CTO Services',
    'Operating Partner',
    'Operating Model Architecture',
    'Workflow Automation',
    'Property Management Consulting',
    'Construction Technology Consulting',
    'Manufacturing Operations Consulting',
    'Energy Services Consulting',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: ['https://www.linkedin.com/company/lvrgwrks/'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-navy font-sans antialiased selection:bg-brand-gold selection:text-white">
        <BriefingProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
          <Footer />
        </BriefingProvider>
        <Analytics />
        <AnalyticsEvents />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}


