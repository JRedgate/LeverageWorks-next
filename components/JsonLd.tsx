import React from 'react';

/**
 * Renders a JSON-LD script, matching the pattern already used in
 * app/layout.tsx and app/insights/<slug>/layout.tsx.
 *
 * JSON.stringify does not escape "<", so a description containing "</script"
 * would break out of the script element. Copy-file prose flows into these
 * nodes, so escape it. \u003c is valid inside a JSON string and parsers read
 * it back as "<".
 */
export function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/</g, '\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
