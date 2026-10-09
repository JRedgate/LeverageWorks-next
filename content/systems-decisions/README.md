# Systems-decision pages: content format

Built for Phase 2 of `C:\LVRGWRKS-marketing\CLAUDE-CODE-BRIEF-SEARCH-2026-10-08.md`, 8 October 2026.

Six pages answer the questions an Alberta owner types when a system decision is in front of them. They all render through one template. **Copy drops in here. Layout code is not touched.**

## The format is a typed TS object, not MDX

Chosen over MDX because the repo has no markdown files, no MDX dependencies and no `pageExtensions` config, so MDX would mean new dependencies and a build-config change. A typed object needs none, and `strict` TypeScript turns a missing or misnamed section into a build error, which is what enforces the brief's "never publish a template with placeholder text".

| File | Purpose |
|---|---|
| `types.ts` | `SystemsDecisionContent` and its parts |
| `registry.ts` | The six slugs and the publish ledger |
| `seo.ts` | `buildSystemsDecisionMetadata(content)` |
| `schema.ts` | `buildSystemsDecisionGraph(content)`, the `Service` and `BreadcrumbList` nodes |
| `<slug>.ts` | One file per page, transcribed from its copy file |

Rendered by `components/SystemsDecisionPage.tsx`, with `components/RichText.tsx` and `components/JsonLd.tsx`.

## Build status, 9 October 2026

`registry.ts` is the authority. This table is a convenience and can go stale.

| # | Slug | Copy file | Page built | Published |
|---|---|---|---|---|
| 1 | `erp-selection-alberta-manufacturers` | approved 8 Oct | yes | **live 9 Oct** |
| 2 | `job-costing-change-orders-contractors` | approved 8 Oct | yes | **live 9 Oct** |
| 3 | `system-went-live-nothing-got-faster` | approved 9 Oct | yes | **live 9 Oct** |
| 4 | `business-central-acumatica-netsuite` | approved 9 Oct | yes | **live 9 Oct** |
| 5 | `property-management-systems-alberta` | not written | no | no |
| 6 | `funding-systems-automation-alberta-2026` | not written | no | no |

Pages 1, 2 and 3 each shipped on their own deploy, per the brief's
one-page-per-deploy rule, so each page's effect can be read in Search Console
without the others confounding it.

Page 3 carries no sources block. Its copy file's `## Sources` section reads
"None", so the optional `sources` field is omitted rather than set to an empty
list.

Page 4 is the page the comparison table was deferred for. It is built, and the
table is section 4 of the template. See "The comparison table" at the foot of
this file.

## Copy file to TS mapping

Copy files live in `C:\LVRGWRKS-marketing\site-copy-2026-10\`, one per page.

| Copy file | TS field |
|---|---|
| frontmatter `slug` | `slug` |
| frontmatter `title` | `seoTitle`, used verbatim as the absolute page title |
| frontmatter `meta_description` | `metaDescription` |
| frontmatter `h1_line_1`, `h1_line_2` | `hero.h1Lines`. Line 1 navy, line 2 in a `text-brand-slate italic` span under a break, with a space kept before the break so the heading reads as one sentence |
| `## Hero subhead` paragraphs | `hero.subhead`, an array. The site's hero convention is two paragraphs |
| `Primary CTA label: ...` line | `hero.ctaLabel`. The href is fixed in the component, not here |
| `## Who this is for` heading and bullets | `whoThisIsFor.heading` and `.items` |
| `## Questions and answers` heading | `questionsEyebrow` |
| each `### Question` | one `questions[]` entry: `question` plus `answer` blocks |
| `## What the first step looks like` | `firstStep.heading`, `.body` paragraphs, `.ctaLabel` |
| `## Comparison table` section | `comparison`, declared with `comparisonTable()`. Its `Table caption:` line is `caption`, its header row is `columns` (the empty corner cell is dropped), and each body row is one `rows[]` entry |
| `## Sources` items | `sources.items`, one `SourceItem` each |
| `## Related reading` pipe lines, `href \| title \| blurb` | `relatedReading[]` |
| `## Internal links to add pointing at this page` | **Not page copy.** Phase 3 instructions, applied to other pages |
| `## Build notes for Claude Code` | **Not page copy.** Build instructions, for example which words carry a link |
| `## Notes for founder review` | **Not page copy.** Never transcribed |

### Answer blocks

An answer is an array of blocks, in copy-file order:

```ts
{ kind: 'p',  text: 'A paragraph.' }
{ kind: 'ul', items: ['First bullet.', 'Second bullet.'] }
{ kind: 'ol', items: ['First step.', 'Second step.'] }
```

A copy file's `###` question renders as an **`<h2>`** on the page, per the brief. The "Questions and answers" heading renders as the gold eyebrow rather than an `<h2>`, because an `<h2>` section title sitting directly above sibling `<h2>` questions is a broken heading outline.

### Inline markup inside any text field

Exactly two constructs are parsed, so a line transcribes verbatim from the `.md` file:

- `**bold**` renders `<strong>`
- `[label](/path)` renders a `next/link`, `[label](https://host)` renders an external anchor

Everything else is literal text. An unbalanced `**` renders as literal asterisks rather than failing, so check the rendered page.

## Hard rules

**Never use HTML entities.** React escapes the ampersand, so `&apos;` renders on the page as the five visible characters `&apos;`. Write a plain apostrophe. **This is the opposite of the convention in the repo's hand-written JSX pages**, and it is the easiest way to ship a visible defect here. For a TS string containing an apostrophe, use double quotes: `"BDC's LIFT program"`.

**No em dashes, no semicolons, no exclamation points** in any shipped text. `VOICE.md`.

**Never edit copy in these files.** Edits go into the copy file and are transcribed back. The copy file is the source of truth and the provenance record.

**No Tailwind class strings in content files.** `content/` is deliberately outside the `content` globs in `tailwind.config.ts` (`./app/**`, `./components/**`), so any class named here silently will not be generated. The types expose typed enums instead.

**Never add a client directive to these pages.** The template is a server component. A client directive would ship the whole copy object to the browser, and the question-and-answer body has to be real crawlable HTML. The four older service pages carry one as a `migrate-pages.mjs` artifact. The five `app/insights` pages are the right precedent.

## Publishing a page (Phase 3)

One edit, in `registry.ts`. Flip the slug's entry from `{ published: false }` to:

```ts
'erp-selection-alberta-manufacturers': {
  published: true,
  footerLabel: 'ERP for Manufacturers',
  priority: 0.8,
  changeFrequency: 'monthly',
  copySource: 'C:/LVRGWRKS-marketing/site-copy-2026-10/erp-selection-alberta-manufacturers.md',
},
```

**The footer label is not a free choice.** All six are set in the Phase 3 table of `CLAUDE-CODE-BRIEF-SEARCH-2026-10-08.md` (set 9 Oct 2026): title case, two to four words, matching the existing Expertise and Industries columns. Take the label from there, not from the page's h1. Labels for the unwritten pages stand unless their copy file says otherwise.

That single change drops the `noindex` meta tag, adds the footer link under "Systems decisions", and adds the sitemap entry. The discriminated union means TypeScript refuses `published: true` without a footer label and the approved copy file's path, so a publish cannot half-apply.

Still manual per the brief, after flipping the registry: the editorial internal links from existing pages that the copy file lists, using the anchor text given.

## The comparison table

Section 4 of the brief. **Built 9 October 2026** with the copy for
`business-central-acumatica-netsuite`, which is the only one of the six copy
files that carries a table. It had been deferred since 8 October on founder
instruction, because building it against no copy meant either inventing a
comparison or shipping placeholder text, both of which the brief forbids.

Declare one with `comparisonTable()` from `types.ts` rather than annotating the
field by hand:

```ts
comparison: comparisonTable({
  heading: 'Comparison table',
  caption: 'How the three are priced, sold and packaged, ...',
  columns: ['Business Central', 'Acumatica', 'NetSuite'],
  rows: [
    { label: 'Made by', cells: ['Microsoft', 'Acumatica', 'Oracle'] },
  ],
}),
```

`comparisonTable()` infers the column tuple, so **every row is counted against
the column headings at compile time.** A row transcribed with a cell missing is
a type error naming that row, not a table whose cells have silently shifted one
column left. That is the one place in this format where a hand-transcription
slip would otherwise compile and still be wrong, which is why the count is the
compiler's job. Annotating the field as `ComparisonTable` by hand widens the
tuple to `string[]` and loses the check, so do not.

How it renders, per the build note in page 4's copy file:

- The caption sits **outside** the table's scroll container, so it stays
  readable at a phone width instead of needing a sideways scroll to finish a
  sentence. Do not move it into a `<caption>` element for that reason.
- The first column renders as `<th scope="row">` and the product columns as
  `<th scope="col">`. The copy file's empty corner cell stays an empty `<td>`.
- The table keeps `min-w-[44rem]` and scrolls inside its own `overflow-x-auto`
  container. **The container scrolls sideways, never the page.** Keep the
  minimum width on the table itself, never on an ancestor, or the page starts
  scrolling with it.
- The container is a focusable region labelled by the section heading and
  described by the caption, so a keyboard user can reach and scroll it. It
  borrows those two for its accessible name rather than carrying any invented
  words, which the brief does not supply.

**Do not build a table from page 2.** `job-costing-change-orders-contractors.md`
names Procore, Jonas, Sage 300 CRE, Viewpoint Vista and Business Central, but
its own founder note says they are "named neutrally, with no claims about what
any one of them does". Turning that into a feature matrix would manufacture
product claims nobody approved.
