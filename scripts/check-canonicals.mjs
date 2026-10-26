// Runs after `next build` (the postbuild script). For every URL in the
// generated sitemap, the prerendered HTML must carry exactly one
// <link rel="canonical"> pointing at that same URL, and no robots noindex.
//
// Why: the root layout sets alternates.canonical to '/'. A route that forgets
// its own alternates silently inherits the homepage as its canonical. This
// turns that into a failed Vercel build instead of a Search Console email.

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const APP_DIR = path.join(process.cwd(), '.next', 'server', 'app');
const SITEMAP = path.join(APP_DIR, 'sitemap.xml.body');

if (!existsSync(SITEMAP)) {
  console.error(`check-canonicals: FAIL no generated sitemap at ${SITEMAP}`);
  process.exit(1);
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

// Only the homepage's trailing slash is normalised: the sitemap lists
// https://www.lvrgwrks.com/ while Next emits https://www.lvrgwrks.com.
const normalise = (url) => {
  const u = new URL(url);
  return u.pathname === '/' ? `${u.origin}/` : u.href;
};

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'));
  return m ? decode(m[2] ?? m[3]) : null;
};

const urls = [...readFileSync(SITEMAP, 'utf8').matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => decode(m[1]));

if (urls.length === 0) {
  console.error('check-canonicals: FAIL the sitemap lists no URLs');
  process.exit(1);
}

let failures = 0;

for (const url of urls) {
  const pathname = new URL(url).pathname;
  const file = path.join(APP_DIR, pathname === '/' ? 'index.html' : `${pathname.replace(/^\/|\/$/g, '')}.html`);
  const problems = [];

  if (!existsSync(file)) {
    problems.push('no prerendered HTML');
  } else {
    const html = readFileSync(file, 'utf8');
    const linkTags = html.match(/<link\b[^>]*>/gi) ?? [];
    const canonicals = linkTags.filter((tag) => (attr(tag, 'rel') ?? '').toLowerCase().split(/\s+/).includes('canonical'));

    if (canonicals.length !== 1) {
      problems.push(`expected 1 canonical, found ${canonicals.length}`);
    }
    for (const tag of canonicals) {
      const href = attr(tag, 'href');
      if (!href) {
        problems.push('canonical has no href');
        continue;
      }
      let resolved;
      try {
        resolved = normalise(new URL(href, url).href);
      } catch {
        problems.push(`canonical href is not a URL: ${href}`);
        continue;
      }
      if (resolved !== normalise(url)) {
        problems.push(`canonical is ${href}`);
      }
    }

    const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
    for (const tag of metaTags) {
      const name = (attr(tag, 'name') ?? '').toLowerCase();
      if ((name === 'robots' || name === 'googlebot') && /noindex/i.test(attr(tag, 'content') ?? '')) {
        problems.push(`${name} meta says "${attr(tag, 'content')}"`);
      }
    }
  }

  if (problems.length) {
    failures += 1;
    console.log(`FAIL ${url}: ${problems.join('; ')}`);
  } else {
    console.log(`PASS ${url}`);
  }
}

console.log(`check-canonicals: ${urls.length - failures} of ${urls.length} sitemap URLs pass`);
if (failures) process.exit(1);
