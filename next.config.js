/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect safety net: if any URL drifts, catch it here
  async redirects() {
    return [
      // /about was a 404. statusCode 301 rather than permanent: true, which
      // would send 308.
      { source: '/about', destination: '/firm', statusCode: 301 },
      // Retired before launch (STEP-REVIEW-9 7.1 and 7.2). permanent: true
      // sends 308. /impact described modelled work as client results, and the
      // calculator was replaced by the 60-Day Test.
      { source: '/impact', destination: '/capabilities', permanent: true },
      { source: '/coordination-tax-calculator', destination: '/60-day-test', permanent: true },
    ];
  },
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
      {
        // The vercel.app alias and preview deployments serve the same pages
        // as www.lvrgwrks.com. Keep them out of search indexes.
        source: '/(.*)',
        has: [{ type: 'host', value: '.*\\.vercel\\.app' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
};

module.exports = nextConfig;
