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

## Build status, 13 October 2026

`registry.ts` is the authority. This table is a convenience and can go stale.

**This directory is no longer only systems-decision pages.** Phase 4.1 publishes
`operations-process-improvement-alberta` through the same template and the same
ledger, and it is a core service page, not a systems decision. The
`SYSTEMS_DECISION_` names are historical and were deliberately left alone:
renaming seven identifiers across five files does not belong in a deploy that
ships one page. Rename them when something else brings you into these files.

**Phase 4.2a is the first entry for a page that was already live.** It is a
rebuild of `/business-process-automation` at the same URL, with the same title
and meta description, so publishing it changes nothing about its indexability.
What the registry entry does change is where its footer link and its sitemap
entry come from: both were hand-written, in `components/Footer.tsx` and
`app/sitemap.ts`, and **both hand-written entries were removed in the same
commit** so the page keeps exactly one of each. Its slug is declared before
Phase 4.1 in `SYSTEMS_DECISION_SLUGS` for one reason: the Expertise column then
renders in the order it already had, Business Process Automation before Process
Improvement.

The rebuild kept two strings the copy file does not cover, both already live:
the hero eyebrow pill, and `ogTitle` plus `ogDescription`. They are set
explicitly in the content file rather than left to the template defaults, which
would have taken og:title from the new h1 and og:description from the meta
description. Its copy file says only the h1 and the body change.

It is also the first page here whose hero carries a secondary CTA its copy file
did not ask for. That file's build note reads "The template hero has one CTA",
which is not so: the template has always rendered a fixed **View Capabilities**
button beside the audit CTA, as all six sibling pages do. The note's
instruction, to drop the old **AI Automation** button and link the AI page from
the body instead, was followed. Giving this one page a single-button hero would
mean changing the shared template, which does not belong in a deploy that ships
one page. One founder call away either direction.

**Phase 4.2b is the second already-live rebuild**, and it is where `FooterGroup`
gained a third value. 4.2a's hand-written footer link was the last of the four
in the Expertise column, so moving it into the ledger reproduced the column
exactly. `/ai-automation-consulting` is the **second** of the four, between two
pages that are not in this ledger at all, and the ledger renders its links
after the hand-written block. There is no declaration order that puts it back
in row two. Its copy file says footer placement is unchanged, so the link stays
hand-written and its registry entry carries `footerGroup: 'hand-written'`,
which renders nothing. Its **sitemap** entry does come from the ledger, and the
hand-written one was removed in the same commit, so each of the two still
appears exactly once. `footerLabel` is still required and still records the
hand-written link text, so the two cannot drift apart unnoticed.

Its hero needed no decision. Its copy file carries the same "the template hero
has one CTA" note as 4.2a, but the button it asks to drop **is** the template's
fixed View Capabilities button, so the rebuilt hero carries the same two buttons
the live page already had.

It is also the first page here to ship with a **ride-along**: `/capabilities`
had its related-reading block moved below its closing CTA in the same commit,
per the SETTLED 13 Oct note, with no wording change. That move was going to
travel with page 6, which is dropped. Verified as a pure reorder: the same 114
lines of visible text, and the metadata and JSON-LD unchanged.

| # | Slug | Copy file | Page built | Published |
|---|---|---|---|---|
| 1 | `erp-selection-alberta-manufacturers` | approved 8 Oct | yes | **live 9 Oct** |
| 2 | `job-costing-change-orders-contractors` | approved 8 Oct | yes | **live 9 Oct** |
| 3 | `system-went-live-nothing-got-faster` | approved 9 Oct | yes | **live 9 Oct** |
| 4 | `business-central-acumatica-netsuite` | approved 9 Oct | yes | **live 9 Oct** |
| 5 | `property-management-systems-alberta` | approved 13 Oct | yes | **live 13 Oct** |
| 6 | `funding-systems-automation-alberta-2026` | not written | no | no |
| 4.1 | `operations-process-improvement-alberta` | approved 13 Oct | yes | **live 13 Oct** |
| 4.2a | `business-process-automation` | approved 13 Oct | yes | **rebuilt 13 Oct**, live since before this ledger |
| 4.2b | `ai-automation-consulting` | approved 13 Oct | yes | **rebuilt 13 Oct**, live since before this ledger |

Pages 1 to 5 each shipped on their own deploy, per the brief's
one-page-per-deploy rule, so each page's effect can be read in Search Console
without the others confounding it. All five were submitted for indexing on
13 October 2026.

Page 3 carries no sources block. Its copy file's `## Sources` section reads
"None", so the optional `sources` field is omitted rather than set to an empty
list.

Page 4 is the page the comparison table was deferred for. It is built, and the
table is section 4 of the template. See "The comparison table" at the foot of
this file.

Page 5 is the only one whose editorial link needed a **new** `<RelatedReading>`
rather than one item appended, because `/industries/property-management` had
none. It went last, after the closing CTA.

**That is a deliberate departure from the literal wording of its copy file**,
which asked for the block before the CTA. The same sentence names
`/business-process-automation` as the model to copy, and that page puts its
block after the CTA, as do all three sibling industry pages and every other
page on the site carrying both a related-reading block and a closing CTA.
Taking the words literally would have made this the one page that differs and
would not have matched the model the instruction itself names. Moving it is a
one-line change if the founder prefers the literal placement.

Page 6 has no copy file yet.

Phase 4.1 is the first page here that is not a systems decision, the first to
use the blockquote block, and the first listed under Expertise in the footer.

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
| a quoted sentence a build note marks as a blockquote | one `{ kind: 'quote' }` answer block |
| `## Related reading` pipe lines, `href \| title \| blurb` | `relatedReading[]` |
| `## Internal links to add pointing at this page` | **Not page copy.** Phase 3 instructions, applied to other pages |
| `## Build notes for Claude Code` | **Not page copy.** Build instructions, for example which words carry a link |
| `## Notes for founder review` | **Not page copy.** Never transcribed |

### Answer blocks

An answer is an array of blocks, in copy-file order:

```ts
{ kind: 'p',     text: 'A paragraph.' }
{ kind: 'ul',    items: ['First bullet.', 'Second bullet.'] }
{ kind: 'ol',    items: ['First step.', 'Second step.'] }
{ kind: 'quote', text: '"A verbatim quotation."' }
```

`quote` renders a `<blockquote>`. Use it only where a copy file's build note
asks for one. **Transcribe the quotation exactly**, quotation marks and all,
including punctuation that would be wrong in our own prose. It is someone
else's sentence, and tidying it makes it a paraphrase. Where a quotation
carries both a double quote and an apostrophe, hold it in a backtick template
literal rather than escaping either, as `operations-process-improvement-alberta.ts`
does: a verbatim quotation is the worst place to hide a backslash.

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

### Which footer column

`footerGroup` is required on every published entry, not defaulted, because the
column is a positioning decision per page rather than a property of this
template:

- `'systems-decisions'` lists the page under the **Systems decisions** heading,
  which the footer renders only when at least one page is in it
- `'expertise'` appends the page to the existing hand-written **Expertise**
  column, after Business Process Automation

Phase 4.1 is the first `'expertise'` page. Take the column from the copy file's
build notes, the same way you take the label from the brief.

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
