import type { Metadata } from 'next';
import Script from 'next/script';
import { AnalyticsEvents } from '@/components/AnalyticsEvents';
import { ClientLayout } from '@/components/ClientLayout';
import { Footer } from '@/components/Footer';
import './globals.css';
import { OG_IMAGE, SITE_URL } from '@/lib/site';

const GA_MEASUREMENT_ID = 'G-E0H5REX2XK';

export const metadata: Metadata = {
  title: {
    default: 'Operating Partner for Industrial Businesses | Calgary | LVRGWRKS',
    template: '%s | LVRGWRKS',
  },
  description: 'Too many decisions still land on your desk? LVRGWRKS helps industrial owners and leadership teams move them into the business. Based in Calgary.',
  keywords: ['Operating Partner', 'LeverageWorks', 'LVRGWRKS'],
  metadataBase: new URL('https://www.lvrgwrks.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Too many decisions still land on your desk.',
    description: 'LVRGWRKS is an operating partner for industrial businesses, based in Calgary and serving Canada. We help owners and leadership teams move decisions and handoffs into the business.',
    siteName: 'LVRGWRKS',
    locale: 'en_CA',
    type: 'website',
    url: 'https://www.lvrgwrks.com',
    images: [OG_IMAGE],
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
  description: 'Operating partner for industrial businesses, based in Calgary and serving Canada.',
  image: `${SITE_URL}${OG_IMAGE.url}`,
  '@id': 'https://www.lvrgwrks.com',
  url: 'https://www.lvrgwrks.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  areaServed: { '@type': 'Country', name: 'Canada' },
  serviceType: [
    'Operating Partner',
    'Operations Consulting',
    'Manufacturing Operations Consulting',
    'Construction Operations Consulting',
    'Energy Services Operations Consulting',
    'Distribution Operations Consulting',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: ['https://www.linkedin.com/company/lvrgwrks/'],
  founder: { '@id': 'https://www.lvrgwrks.com/firm#jeremy-redgate', '@type': 'Person', name: 'Jeremy Redgate' },
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
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
        <AnalyticsEvents />
        {/* GA4 loads only on the production hostname, so Vercel previews, the
            *.vercel.app alias and localhost send nothing. Off production
            window.gtag never exists and every event call is a no-op. */}
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            (function () {
              var host = window.location.hostname;
              if (host !== 'www.lvrgwrks.com' && host !== 'lvrgwrks.com') return;
              window.dataLayer = window.dataLayer || [];
              window.gtag = function () { window.dataLayer.push(arguments); };
              window.gtag('js', new Date());
              window.gtag('config', '${GA_MEASUREMENT_ID}');
              var s = document.createElement('script');
              s.async = true;
              s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}';
              document.head.appendChild(s);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}


