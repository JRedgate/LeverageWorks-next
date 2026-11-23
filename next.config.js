/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect safety net: if any URL drifts, catch it here
  async redirects() {
    return [
      // /about was a 404. statusCode 301 rather than permanent: true, which
      // would send 308.
      { source: '/about', destination: '/firm', statusCode: 301 },
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
