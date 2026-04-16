import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { BriefingProvider } from '@/components/BriefingProvider';
import { ClientLayout } from '@/components/ClientLayout';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'LVRGWRKS (LeverageWorks) | Fractional CTO & AI Operations Partner | Calgary, AB',
    template: '%s | LVRGWRKS',
  },
  description: 'LVRGWRKS (LeverageWorks) is a fractional CTO and AI operations partner serving mid-market companies (20-250 employees) in Alberta and Western Canada. First bottleneck solved in 60 days.',
  keywords: ['Fractional CTO Calgary', 'AI Operations Partner', 'Operating Model Architecture', 'AI Consulting Calgary', 'LeverageWorks', 'Property Management Automation', 'Construction Tech', 'Manufacturing AI'],
  metadataBase: new URL('https://www.lvrgwrks.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LVRGWRKS (LeverageWorks) | Fractional CTO & AI Operations Partner | Calgary, AB',
    description: 'Your fractional CTO and AI operations partner. Serving mid-market companies in Alberta and Western Canada. First bottleneck solved in 60 days.',
    type: 'website',
    url: 'https://www.lvrgwrks.com',
    images: [{ url: '/og-image.jpg' }],
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
  description: 'Enterprise AI strategy and operating model architecture consultancy. Fractional CTO and AI operations partner for mid-market companies.',
  image: 'https://www.lvrgwrks.com/og-image.jpg',
  '@id': 'https://www.lvrgwrks.com',
  url: 'https://www.lvrgwrks.com',
  telephone: '',
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Haskayne School of Business',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    postalCode: 'T2N 1N4',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.0772,
    longitude: -114.1311,
  },
  areaServed: [
    { '@type': 'State', name: 'Alberta' },
    { '@type': 'Place', name: 'Western Canada' },
  ],
  serviceType: [
    'Fractional CTO Services',
    'AI Operations Partner',
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
      </body>
    </html>
  );
}
