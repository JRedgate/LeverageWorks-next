import { ImageResponse } from 'next/og';

// The site-wide social card, served at /og-card.png. It runs on the edge
// runtime because the Node build of @vercel/og cannot prerender on Windows.
// Fonts are committed under assets/fonts (SIL Open Font License) and bundled
// with the route, so rendering needs no third-party request.
export const runtime = 'edge';

const NAVY = '#0F172A';
const SLATE = '#94A3B8';
const GOLD = '#CA8A04';

export async function GET() {
  const [lexendBold, sourceSans] = await Promise.all([
    fetch(new URL('../../assets/fonts/Lexend-Bold.ttf', import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL('../../assets/fonts/SourceSans3-Regular.ttf', import.meta.url)).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: NAVY,
          borderLeft: `12px solid ${GOLD}`,
          padding: '64px 72px',
          fontFamily: 'Source Sans 3',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
            <path d="M20 15V85H65" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
            <path d="M45 55L75 55L75 65L45 55Z" fill={GOLD} />
            <circle cx="75" cy="45" r="7" fill={SLATE} />
          </svg>
          <div style={{ fontFamily: 'Lexend', fontSize: 34, color: '#FFFFFF', letterSpacing: 2 }}>LVRGWRKS</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 24, color: GOLD, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 24 }}>
            Operating partner for industrial businesses
          </div>
          <div style={{ fontFamily: 'Lexend', fontSize: 64, lineHeight: 1.1, color: '#FFFFFF', maxWidth: 940 }}>
            Too many decisions still land on your desk.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 24, color: SLATE }}>
          <div>Based in Calgary. Serving industrial businesses across Canada.</div>
          <div style={{ color: GOLD }}>lvrgwrks.com</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=31536000, immutable' },
      fonts: [
        { name: 'Lexend', data: lexendBold, weight: 700, style: 'normal' },
        { name: 'Source Sans 3', data: sourceSans, weight: 400, style: 'normal' },
      ],
    },
  );
}
