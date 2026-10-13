import type { SystemsDecisionContent } from './types';

/**
 * Transcribed verbatim from
 * C:\LVRGWRKS-marketing\site-copy-2026-10\business-process-automation.md
 * status: rebuild of the live page at the same URL, approved by the founder
 * 13 Oct 2026 to build and ship, recorded in that file's status line.
 *
 * Phase 4.2a. This is a REBUILD, not a new page. The route, the title and the
 * meta description are the live strings, copied into this file unchanged from
 * the old app/business-process-automation/layout.tsx and confirmed against
 * production before the merge. Only the h1 and the body change.
 *
 * Carried over from the old hand-written page rather than taken from the copy
 * file, because both are existing live strings and the copy file supplies no
 * replacement:
 *   - hero.eyebrow, the pill above the h1
 *   - ogTitle and ogDescription, which the copy file's frontmatter does not
 *     cover. ogTitle is the old h1 sentence, which is still page copy: it is
 *     now the first sentence of the hero subhead.
 *
 * Three things come from the copy file's build notes rather than its prose,
 * and all three are instructions, not new words:
 *   - "Our AI automation page" carries a link to /ai-automation-consulting, in
 *     the answer to "What do you actually build?". That link is where the AI
 *     page is reached from now, replacing the secondary "AI Automation" hero
 *     button the old page carried
 *   - "Our page on process improvement and change" carries a link to
 *     /operations-process-improvement-alberta, in the cutting-jobs answer
 *   - the footer label stays "Business Process Automation" under Expertise,
 *     which is where the old hand-written footer link sat
 *
 * No sources block. The copy file's "## Sources" section reads "None", so the
 * optional field is omitted rather than set to an empty list, as on page 3.
 *
 * Do not edit the copy here. Edits go in the copy file and are transcribed back.
 * The copy file's closing "Internal links to add pointing at this page",
 * "Build notes for Claude Code" and "Notes for founder review" sections are not
 * page copy and are not transcribed.
 */
export const content: SystemsDecisionContent = {
  slug: 'business-process-automation',

  seoTitle: 'Business Process Automation Calgary & Alberta | LVRGWRKS',
  metaDescription:
    'Business process automation for mid-market companies in Alberta. Your team should not be the integration layer between your own systems.',

  // Both unchanged from the live page. See the note above.
  ogTitle: 'Your team should not be the integration layer between your own systems',
  ogDescription:
    'Business process automation for mid-market companies in Alberta. We remove the handoffs that should not exist, then automate what is left.',

  hero: {
    // The live page's existing pill, kept word for word. Not new copy.
    eyebrow: 'Business Process Automation - Alberta',
    h1Lines: ['Business process automation', 'for Alberta operators'],
    subhead: [
      'Your team should not be the integration layer between your own systems. Every time someone copies data from one system to another, builds a report by hand, or chases a status update by email and phone, that is money leaving your business through the least visible exit on your P&L.',
      'We find that work, remove the steps that should not exist, and automate what is left, around the systems you already run.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  whoThisIsFor: {
    heading: 'Who this is for',
    items: [
      'Owners, general managers and controllers of Alberta companies with roughly 20 to 250 people, in manufacturing, construction, energy services and property management',
      'Someone on your team spends hours a week moving information between systems or building reports by hand',
      'Approvals, updates and follow-ups run on email, phone calls and memory',
      'You bought software that was supposed to fix this, and the manual work is still there',
      'You want it fixed without adopting a new platform',
    ],
  },

  questionsEyebrow: 'Questions and answers',
  questions: [
    {
      question: 'What is business process automation, in a company our size?',
      answer: [
        {
          kind: 'p',
          text: 'Removing the manual work that happens between your systems and between your people. It comes in two kinds, and most companies only notice the first.',
        },
        {
          kind: 'ul',
          items: [
            "**Waiting and chasing.** An approval sits in someone's inbox. A crew waits on an answer from the office. A job stalls until someone notices it has stalled. Nobody is idle, so it never looks like waste.",
            '**Re-entry and searching.** The same job details get typed into a quote, then a schedule, then a purchase order, then an invoice. Someone builds the Monday report from three exports. Someone hunts for the current version of a drawing or a price list. It is one person, alone at a screen, doing work the business already did once.',
          ],
        },
        {
          kind: 'p',
          text: 'Together they are what we call the coordination tax: the labour your team burns every day moving work and information between systems and people that do not line up. It is real labour cost that never appears as a line on your financial statements.',
        },
      ],
    },
    {
      question: 'Where does the manual work usually hide?',
      answer: [
        {
          kind: 'p',
          text: 'In plain sight, because it is spread across several people and has become "just how things work." The usual places:',
        },
        {
          kind: 'ul',
          items: [
            'Reports compiled by hand from systems that do not share data',
            'Data entry that repeats information already captured somewhere else',
            'Status updates and follow-ups that should arrive on their own',
            'Scheduling and dispatch run over phone and email',
            'Invoices and billing reconciled by hand between platforms',
            'Compliance documentation assembled manually every period',
            'Inventory and materials tracked in spreadsheets',
            'Project status pulled together by hand from several sources',
          ],
        },
        {
          kind: 'p',
          text: 'The cost is more than the hours. Every manual entry has an error rate, and a wrong invoice or a missed order costs more to fix than it took to make. The largest cost is usually the hardest to see: every hour your best people spend on coordination is an hour they are not managing, deciding or doing the work the business needs from them.',
        },
      ],
    },
    {
      question: 'What should we automate first?',
      answer: [
        {
          kind: 'p',
          text: 'The process costing you the most, which is rarely the one that feels worst. But before anything is automated, remove the steps that should not exist. Automating a process the way it runs today makes every step faster, including the ones that should be gone.',
        },
        {
          kind: 'p',
          text: 'Good candidates have four things in common:',
        },
        {
          kind: 'ol',
          items: [
            '**They happen often.** Daily or weekly, not a few times a year.',
            '**They follow the same rules every time**, or close to it.',
            '**The information already exists digitally** somewhere in your business.',
            '**Mistakes are expensive**, in money, time or customer trust.',
          ],
        },
      ],
    },
    {
      question: 'What should we not automate?',
      answer: [
        {
          kind: 'p',
          text: 'This question matters as much as the last one.',
        },
        {
          kind: 'ul',
          items: [
            '**A process your people do not agree on.** Automating a disagreement only makes it faster. Settle how the work should run first.',
            '**A step that should not exist.** Remove it instead.',
            '**Decisions that need judgment** about a customer, a crew or a price. Give the person making them better information, and leave the decision with them.',
            '**Work that happens a few times a year.** A good checklist is cheaper and easier to change.',
          ],
        },
      ],
    },
    {
      question: 'Do we need new software?',
      answer: [
        {
          kind: 'p',
          text: 'Usually not. We build around the systems you already run, whether that is your ERP, accounting, CRM, project management, field or scheduling software, and connect them so information moves on its own instead of being retyped.',
        },
        {
          kind: 'p',
          text: 'Before we build anything, we check what those systems can already do. Many have approval workflows, notifications and connections built in that were never switched on. Using what you already pay for is the cheapest automation there is.',
        },
      ],
    },
    {
      question: 'What do you actually build?',
      answer: [
        {
          kind: 'p',
          text: 'Four kinds of things, chosen by what the audit shows:',
        },
        {
          kind: 'ul',
          items: [
            '**Connections between systems**, so information entered once flows to everywhere it is needed, without export, import or re-entry.',
            '**Reports and dashboards** that assemble themselves from data already in your systems, so nobody spends Monday morning building them.',
            '**Approvals, notifications and escalations** built around how your business actually runs, with a record of every action, so purchase approvals, maintenance requests and sign-offs stop living in inboxes.',
            // The link is the copy file's build note. The words are its own.
            "**AI for work that is too variable for simple rules** but still does not need a person's judgment, such as reading incoming documents, flagging exceptions or sorting requests. [Our AI automation page](/ai-automation-consulting) covers where that fits and where it does not.",
          ],
        },
      ],
    },
    {
      question: 'How do we know it paid off?',
      answer: [
        {
          kind: 'p',
          text: 'Before we build, we measure what the manual work costs today, in labour hours and dollars. That baseline is what every build is measured against. Your first build is live within 60 days of the engagement starting, and every 30 days you get a Value Creation Report showing the labour hours recovered, how the automation is performing and the rolling return against what you pay us. You see the numbers, not a claim that it is working.',
        },
      ],
    },
    {
      question: 'What does it cost?',
      answer: [
        {
          kind: 'p',
          text: 'The 60-minute Leverage Audit is free. If it shows a problem worth solving, the Leverage Diagnostic is scoped and quoted in writing after the audit, before any work starts.',
        },
        {
          kind: 'p',
          text: 'Ongoing work runs on a monthly retainer priced against the value it creates, not the hours it takes. Engagements run $4,500 to $8,500 a month, with no upfront fee and no hardware cost, and the minimum term is three months from go-live. If the value we find does not support roughly a three to one return, we say so in writing rather than proceed.',
        },
      ],
    },
    {
      question: 'Does automation mean cutting jobs?',
      answer: [
        {
          kind: 'p',
          // The link is the copy file's build note. The words are its own.
          text: 'It does not have to, and that is not what we aim it at. The target is the hours lost to retyping and chasing, so the people you have can spend them on work that needs them. What you do with the time it frees up is your decision, and your team deserves to hear that decision from you early, not to guess at it. [Our page on process improvement and change](/operations-process-improvement-alberta) covers how to bring people with you.',
        },
      ],
    },
    {
      question: 'What happens if we stop working with you?',
      answer: [
        {
          kind: 'p',
          text: 'It keeps running. Everything we build for your operation belongs to you from day one, and your data is yours without condition. Where an engagement uses a LVRGWRKS product module, you hold a permanent licence to keep running it. The engagement can end at any time and the operation keeps running.',
        },
      ],
    },
  ],

  firstStep: {
    heading: 'What the first step looks like',
    body: [
      'Start with the free 60-minute Leverage Audit. Bring the report someone on your team builds by hand every week, and one recent job from the moment it came in to the moment it was invoiced. We map how the work actually moved, show you where it waited and where the same information was handled more than once, and rank what is worth fixing by what it returns. You keep a written summary either way.',
      'If the audit shows a bigger problem worth solving, the next step is the Leverage Diagnostic. It is a few days of work with your team, on site and on paper, and it turns the audit into an analysis of your highest-value targets and a one-year plan. The Diagnostic is scoped and quoted in writing after the audit, before any work starts.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  relatedReading: [
    {
      href: '/operations-process-improvement-alberta',
      title: 'Process improvement and change',
      blurb: "How to improve how the work runs when it lives in people's heads, without losing the people.",
    },
    {
      href: '/insights/cost-of-manual-data-entry',
      title: 'The real cost of manual data entry',
      blurb: 'Why the cost compounds well past the hours it consumes.',
    },
    {
      href: '/erp-selection-alberta-manufacturers',
      title: 'Choosing an ERP for an Alberta manufacturer',
      blurb: 'What to settle before you sit through a vendor demo.',
    },
    {
      href: '/coordination-tax-calculator',
      title: 'Coordination Tax Calculator',
      blurb: 'Four inputs, sixty seconds, a first number on what coordination is costing you.',
    },
  ],
};
