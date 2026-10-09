import type { SystemsDecisionContent } from './types';

/**
 * Transcribed verbatim from
 * C:\LVRGWRKS-marketing\site-copy-2026-10\system-went-live-nothing-got-faster.md
 * status: APPROVED BY FOUNDER 9 Oct 2026 as drafted, ready to publish. Founder
 * calls recorded in that file: the judgment line kept, the Diagnostic clause
 * kept, ERP kept in the title.
 *
 * Do not edit the copy here. Edits go in the copy file and are transcribed back.
 * The copy file's closing "Internal links to add pointing at this page" and
 * "Notes for founder review" sections are not page copy and are not transcribed.
 *
 * No sources block. The copy file's "## Sources" section reads "None. This page
 * cites no third-party facts", so the optional field is omitted rather than
 * carrying an empty list.
 */
export const content: SystemsDecisionContent = {
  slug: 'system-went-live-nothing-got-faster',

  seoTitle: 'ERP Implementation Rescue for Alberta Companies | LVRGWRKS',
  metaDescription:
    'Your new system went live and the work did not get faster. How Alberta companies find out why and fix it without starting over.',

  hero: {
    // Derived from this page's own frontmatter title, in the site's existing
    // pill format. Not new copy. Change the words here if you want different ones.
    eyebrow: 'ERP Implementation Rescue - Alberta Companies',
    h1Lines: [
      'The system went live',
      'and nothing got faster',
    ],
    subhead: [
      'The go-live date came and went and the partner signed off. Months later your people still keep a spreadsheet open beside the new screen, and month-end takes as long as it did before.',
      'That is rarely a software problem, so new software rarely fixes it. The cause is usually in how the work was set up to move, and that can be found and fixed without starting over.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  whoThisIsFor: {
    heading: 'Who this is for',
    items: [
      'Owners, general managers and controllers of Alberta companies with roughly 20 to 250 people',
      'An ERP, job costing, field service or property management system that went live in the last few years',
      'Spreadsheets, side lists and double entry that were supposed to go away and did not',
      'Deciding whether to push the implementation partner harder, buy add-ons, or replace the system',
    ],
  },

  questionsEyebrow: 'Questions and answers',
  questions: [
    {
      question: 'How do we know the implementation did not work?',
      answer: [
        {
          kind: 'p',
          text: 'Go-live is a date, not a result. Ask what was supposed to get faster or cheaper, then check. If nobody wrote that down before the project started, these signs will tell you most of what you need:',
        },
        {
          kind: 'ul',
          items: [
            '**People keep a spreadsheet beside the system**, and when the two disagree they trust the spreadsheet',
            '**The same number gets entered twice**, once in the system and once somewhere else',
            '**Reports get exported and fixed by hand** before anyone reads them',
            '**Month-end or job cost reporting takes as long as it did before go-live**, or longer',
            '**One or two people are the only ones who know how to get certain things done**, and work waits when they are away',
            '**Your supervisors talk about the system as something they feed**, not something they use',
          ],
        },
        {
          kind: 'p',
          text: 'One of these on its own can be a training gap. Several together usually mean the system was set up around the wrong process.',
        },
      ],
    },
    {
      question: 'Why does a system go live and change nothing?',
      answer: [
        {
          kind: 'p',
          text: 'Because it was configured to do what the business did before, including the parts that should have stopped. The implementation partner built what they were told. If nobody decided how work should move after go-live, the system got the old path with new screens.',
        },
        {
          kind: 'p',
          text: 'That shows up as the same two costs you had before the project. The first is waiting. A purchase order can still sit for days, because the approval moved into the system but the habit of who approves it and when did not. The second is re-entry. Information still gets typed a second time, or hunted down in an inbox, because the step that should have passed it along was never built, or was built and nobody trusts it.',
        },
        {
          kind: 'p',
          text: 'Data plays a part too. If records came across in a state nobody trusts, people check the new system against the old source, and now you are running both.',
        },
      ],
    },
    {
      question: 'Is it the software or the way it was set up?',
      answer: [
        {
          kind: 'p',
          text: 'Find out before you spend anything. Take one real transaction, a job, an order or a month-end, and walk it through the system from start to finish with the people who do the work. Every time it leaves the system for a spreadsheet, an email or a phone call, write down why.',
        },
        {
          kind: 'p',
          text: 'Then sort each one into four piles:',
        },
        {
          kind: 'ol',
          items: [
            '**Training.** The system does it and people do not know how',
            '**Configuration.** The system can do it and was not set up to',
            '**Process.** The step should not exist, or belongs to someone else',
            '**A real gap.** The software cannot do it',
          ],
        },
        {
          kind: 'p',
          text: 'In our experience the first three piles hold most of the list, and all three can be fixed without replacing anything. Only the fourth is a question about the software.',
        },
      ],
    },
    {
      question: 'Should we replace it?',
      answer: [
        {
          kind: 'p',
          text: 'Not first. A replacement means new licences, a second implementation, and a second disruption for the same people who are still tired from the first. If the cause was how the work moves, the new system inherits it and you pay twice for the same result.',
        },
        {
          kind: 'p',
          text: 'Replacement makes sense when the fourth pile is long and covers how you actually make money, when the vendor has stopped developing the product, or when nobody local can support it. Even then, fix the process first, so the second implementation does not repeat the first.',
        },
      ],
    },
    {
      question: "Is this our implementation partner's fault?",
      answer: [
        {
          kind: 'p',
          text: "Sometimes, but rarely only theirs. A partner configures to a scope and a budget, from what the client tells them. If nobody on your side could say how work should move between estimating, operations and accounting, the partner filled the gap with the software's defaults or with the old process.",
        },
        {
          kind: 'p',
          text: 'Go back to them with evidence, not a complaint: the walk-through, the list of workarounds, and which ones are configuration. Some of the fixes will be theirs to make. A good partner will welcome a client who can say clearly what they need.',
        },
      ],
    },
    {
      question: 'Why do our people keep working around the system?',
      answer: [
        {
          kind: 'p',
          text: 'Because the workaround is faster for them, or the system asks them for something nobody downstream uses. A spreadsheet that takes two clicks will beat a screen that takes twelve. A field that matters to accounting but not to the person typing it gets left blank, and the report built on it is wrong.',
        },
        {
          kind: 'p',
          text: 'Treat every workaround as a finding before you treat it as a discipline problem. Resistance is information about the design. Some workarounds point to training. Many point to a step that should be set up differently, or should not exist at all.',
        },
      ],
    },
    {
      question: 'What does fixing it look like?',
      answer: [
        {
          kind: 'p',
          text: 'Smaller and less dramatic than the original project. In order:',
        },
        {
          kind: 'ol',
          items: [
            '**Walk one real transaction end to end** and list every workaround and every place information gets typed twice',
            '**Sort the list** into training, configuration, process and real gaps',
            '**Decide who owns each step** across departments, so every field gets filled by someone whose job it is',
            '**Fix the cheapest piles first.** Training, configuration and process changes usually cost less than add-ons or a replacement, and they show you whether the real gaps are as big as they looked',
            '**Pick two or three numbers that should move**, such as days to close month-end, days from job completion to invoice, or hours a week spent re-entering information, and check them every week until they do',
          ],
        },
      ],
    },
    {
      question: 'What if we are still partway through the implementation?',
      answer: [
        {
          kind: 'p',
          text: 'Then this is the cheapest moment to catch it. Before go-live, ask the partner to walk one real transaction through the configured system with the people who will use it every day. Workarounds that show up in that test do not go away at go-live. Fix the process now, while the changes are still configuration and not rework.',
        },
      ],
    },
  ],

  firstStep: {
    heading: 'What the first step looks like',
    body: [
      'Start with the free 60-minute Leverage Audit. Bring the last report you sent to an owner, a client or your board, and one recent job, order or month-end that went through the new system, from start to finish. We follow it through your operation, mark every place it left the system and came back, show you where it waited and where it was retyped, and rank what is worth fixing by what it returns. You keep a written summary either way.',
      'If the audit shows a bigger problem worth solving, the next step is the Leverage Diagnostic. It is a few days of work with your team, on site and on paper, and it turns the audit into an analysis of your highest-value targets and a one-year plan, including which fixes belong to your team, which belong to your implementation partner, and whether the system you have can do the job. The Diagnostic is scoped and quoted in writing after the audit, before any work starts.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  relatedReading: [
    {
      href: '/insights/why-digital-transformations-fail',
      title: 'Why digital transformations fail',
      blurb: 'They fail on process and ownership, not technology. What to do instead.',
    },
    {
      href: '/erp-selection-alberta-manufacturers',
      title: 'Choosing an ERP for an Alberta manufacturer',
      blurb: 'What to settle before you sit through a vendor demo.',
    },
    {
      href: '/insights/cost-of-manual-data-entry',
      title: 'The real cost of manual data entry',
      blurb: 'Why the cost compounds well past the hours it consumes.',
    },
  ],
};
