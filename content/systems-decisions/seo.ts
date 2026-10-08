import type { Metadata } from 'next';
import type { SystemsDecisionContent } from './types';
import { isPublished } from './registry';

/**
 * Builds the page metadata from the content object, matching the convention in
 * app/ai-automation-consulting/layout.tsx: an absolute title, a relative
 * canonical and a relative openGraph url, both resolved against the
 * metadataBase set in app/layout.tsx.
 *
 * It also carries the repo's first noindex convention. An unpublished page is
 * noindex, nofollow, driven by the one boolean in registry.ts.
 */
export function buildSystemsDecisionMetadata(content: SystemsDecisionContent): Metadata {
  const path = `/${content.slug}`;

  const metadata: Metadata = {
    title: { absolute: content.seoTitle },
    description: content.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: content.ogTitle ?? content.hero.h1,
      description: content.ogDescription ?? content.metaDescription,
      url: path,
      siteName: 'LVRGWRKS',
      locale: 'en_CA',
      type: 'website',
      images: [{ url: '/og-card-v2.jpg', width: 2400, height: 1260 }],
    },
  };

  if (!isPublished(content.slug)) {
    metadata.robots = { index: false, follow: false };
  }

  return metadata;
}
