import type { SystemsDecisionContent } from './types';

/**
 * Transcribed verbatim from
 * C:\LVRGWRKS-marketing\site-copy-2026-10\ai-automation-consulting.md
 * status: DRAFT FOR FOUNDER REVIEW 13 Oct 2026, APPROVED in its own status line.
 *
 * Phase 4.2b, the second rebuild of a live page at the same URL, built the same
 * way as Phase 4.2a. The route, the title and the meta description are the live
 * strings, copied into this file unchanged from the old
 * app/ai-automation-consulting/layout.tsx and confirmed against production
 * before the merge. Only the h1 and the body change.
 *
 * Carried over from the old hand-written page rather than taken from the copy
 * file, because all three are existing live strings and the copy file supplies
 * no replacement: hero.eyebrow, ogTitle and ogDescription.
 *
 * From the copy file's build notes rather than its prose, all instructions
 * rather than new words:
 *   - "Our business process automation page" links to
 *     /business-process-automation, in the answer about where AI helps
 *   - "Our FAQ" links to /faq, in the ChatGPT and Copilot answer
 *   - the question "How much does AI automation consulting cost?" keeps that
 *     exact wording, because it already ranks near the top of results. Do not
 *     tidy it
 *   - the footer label stays "AI Automation Consulting" under Expertise, which
 *     is where the old hand-written footer link sits. See registry.ts: that
 *     link is the one footer link the ledger deliberately does not render
 *
 * One source, Statistics Canada, confirmed to resolve 13 Oct 2026. The two
 * percentages in the answer about AI not sticking, and the one in the sentence
 * after it, all come from it.
 *
 * Do not edit the copy here. Edits go in the copy file and are transcribed back.
 * The copy file's closing "Internal links to add pointing at this page",
 * "Build notes for Claude Code" and "Notes for founder review" sections are not
 * page copy and are not transcribed.
 */
export const content: SystemsDecisionContent = {
  slug: 'ai-automation-consulting',

  seoTitle: 'AI Automation Consulting Alberta | LVRGWRKS',
  metaDescription:
    'AI automation consulting for mid-market companies in Alberta and Western Canada. Stop paying people to move data between systems that should talk.',

  // Both unchanged from the live page. See the note above.
  ogTitle: 'Stop paying people to move data between systems that should talk',
  ogDescription:
    'AI automation for mid-market companies in Alberta and Western Canada. Operations first, tools second. Automation is used where the diagnosis calls for it, never as the default.',

  hero: {
    // The live page's existing pill, kept word for word. Not new copy.
    eyebrow: 'AI Automation Consulting - Alberta and Western Canada',
    h1Lines: ['AI automation', 'for Alberta operators'],
    subhead: [
      'Your team is the glue between systems that should talk to each other. Spreadsheets are used as databases, data is moved by hand between platforms every day, and decisions get made on incomplete information because no single tool sees the whole picture.',
      'AI can take some of that work off your people. We use it where the diagnosis shows it will pay, after the work around it has been fixed, and we tell you plainly when a simpler fix will do the job better.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  whoThisIsFor: {
    heading: 'Who this is for',
    items: [
      'Owners, general managers and controllers of Alberta companies with roughly 20 to 250 people, in manufacturing, construction, energy services and property management',
      'Wondering where AI would actually help your operation, rather than where a vendor says it will',
      'Tried an AI tool or two and nothing much changed',
      'Concerned about what happens when AI gets something wrong, or where your data goes',
      'Wanting a straight answer on cost before you commit to anything',
    ],
  },

  questionsEyebrow: 'Questions and answers',
  questions: [
    {
      question: 'Where does AI actually help a company our size?',
      answer: [
        {
          kind: 'p',
          text: "In the work that is too variable for fixed rules but still does not need a person's judgment. In owner-led operations that usually means:",
        },
        {
          kind: 'ul',
          items: [
            '**Reading and sorting what comes in.** Purchase orders, invoices, field tickets, change requests and work orders arriving by email, pulled into the right system instead of retyped.',
            // The link is from the 26 Oct 2026 indexing brief. The words are the bullet's own.
            '**Drafting a first version a person checks.** [A quote or estimate built from your own past jobs](/insights/hidden-cost-of-estimating), a weekly report written from the numbers already in your systems.',
            '**Flagging what needs attention.** A job running over budget, a work order nobody has picked up, an invoice that does not match the purchase order.',
            '**Answering routine questions from your own documents**, so your most experienced people stop being the search engine for everyone else.',
          ],
        },
        {
          kind: 'p',
          // The link is the copy file's build note. The words are its own.
          text: 'Where the rules are fixed and the inputs are clean, ordinary automation is usually the better choice. It is cheaper, more predictable and easier to maintain. [Our business process automation page](/business-process-automation) covers that side.',
        },
      ],
    },
    {
      question: 'Where does AI not help?',
      answer: [
        {
          kind: 'ul',
          items: [
            '**On a broken process.** AI on top of a broken process gives you the same problem, faster. The steps that should not exist have to go first.',
            '**When the information is scattered or inconsistent.** If the same customer is spelled four ways across three systems, AI will not fix that. Cleaning it up comes first.',
            '**Where a decision needs judgment and accountability.** Pricing a risky job, handling an upset customer, deciding who goes where. AI can bring the right information to the person deciding. The decision stays with them.',
            '**Where nobody will check the output.** If no one owns the result, an error can run for weeks before anyone notices.',
          ],
        },
      ],
    },
    {
      question: 'We already tried AI and it did not stick. Why?',
      answer: [
        {
          kind: 'p',
          text: 'Usually because the tool was laid over the workflow as it was, and the workflow did not change. Canadian businesses that have adopted AI describe the same thing. When Statistics Canada asked businesses using AI what they changed to make it work, the most common answer was developing new workflows, at 40.1 percent, followed by training staff, at 38.9 percent. The work is in how the job flows and in the people doing it, not in the subscription.',
        },
        {
          kind: 'p',
          text: 'If you have not started, you are not behind. In the same survey, 12.2 percent of Canadian businesses reported using AI to produce goods or deliver services.',
        },
      ],
    },
    {
      question: 'What happens when the AI gets something wrong?',
      answer: [
        {
          kind: 'p',
          text: 'It will, sometimes, so we design for it. Anything that goes to a customer, commits money or changes a price is checked by a person before it goes out. Numbers that have to be right, such as your rates and prices, come from your own records, not from the AI. And every output can be traced back to what it was based on, so a mistake can be found and fixed rather than argued about.',
        },
      ],
    },
    {
      question: 'Should our people just use ChatGPT or Copilot?',
      answer: [
        {
          kind: 'p',
          // The link is the copy file's build note. The words are its own.
          text: 'For individual tasks, such as drafting an email or summarizing a long document, general tools help and cost little. Set clear rules about which company information can go into them. [Our FAQ](/faq) covers whether your data has to stay in Canada.',
        },
        {
          kind: 'p',
          text: 'That is a different problem from the one on this page. A general tool helps one person do one task faster. It does not connect your systems, stop work waiting between people, or remove the retyping between your quote, your schedule and your invoice. Those need the work itself to change.',
        },
      ],
    },
    {
      question: 'How do we know it is working?',
      answer: [
        {
          kind: 'p',
          text: 'A feeling that things are faster is not a measurement. Before we build, we measure what the work costs today, in labour hours and dollars, and that baseline is what everything is measured against. Your first build is live within 60 days of the engagement starting, and every 30 days you get a Value Creation Report showing labour hours recovered, how the automation is performing and the rolling return against what you pay us.',
        },
      ],
    },
    {
      question: 'What does this look like in our industry?',
      answer: [
        {
          kind: 'ul',
          items: [
            '**Construction and general contracting.** Field-to-office information, change orders, RFIs and submittals, and cost tracking against the estimate.',
            '**Manufacturing.** Order intake, production scheduling, quality reporting and supplier coordination.',
            '**Energy services.** Field tickets, dispatch, compliance documentation and equipment maintenance across crews in different places.',
            '**Property management.** Maintenance requests, leasing enquiries, owner reporting and tenant communication.',
          ],
        },
      ],
    },
    {
      // This exact wording is a build note. It already ranks near the top of
      // results, so it is not ours to tidy.
      question: 'How much does AI automation consulting cost?',
      answer: [
        {
          kind: 'p',
          text: 'LVRGWRKS prices against the value created, not the hours worked. Engagements run $4,500 to $8,500 per month with no upfront fee and no hardware cost, and the minimum term is three months from go-live. If the identified value does not support roughly a three to one return, we say so in writing rather than proceed.',
        },
        {
          kind: 'p',
          text: 'The 60-minute Leverage Audit that comes first is free, and the Leverage Diagnostic after it is scoped and quoted in writing before any work starts.',
        },
      ],
    },
    {
      question: 'Do we have to replace our existing software?',
      answer: [
        {
          kind: 'p',
          text: 'No. We build around the systems you already run and make them work together. No rip and replace, and no new platform your team has to learn.',
        },
      ],
    },
    {
      question: 'What happens if we stop working with you?',
      answer: [
        {
          kind: 'p',
          text: 'It keeps running. Everything we build for your operation belongs to you from day one, and your data is yours without condition. Where an engagement uses a LVRGWRKS product module, you hold a permanent licence to keep running it.',
        },
      ],
    },
    {
      question: 'Do you work outside Calgary?',
      answer: [
        {
          kind: 'p',
          text: 'Yes. We are based in Calgary and work across Alberta and Western Canada, Edmonton included. Most of an engagement runs remotely, with time on site where it matters.',
        },
      ],
    },
  ],

  firstStep: {
    heading: 'What the first step looks like',
    body: [
      'Start with the free 60-minute Leverage Audit. Bring the report someone builds by hand every week, and one recent job from the moment it came in to the moment it was invoiced. We map how the work actually moved, show you where AI would help, where simpler automation would do better, and where neither is the answer, and rank what is worth fixing by what it returns. You keep a written summary either way.',
      'If the audit shows a bigger problem worth solving, the next step is the Leverage Diagnostic. It is a few days of work with your team, on site and on paper, and it turns the audit into an analysis of your highest-value targets and a one-year plan. The Diagnostic is scoped and quoted in writing after the audit, before any work starts.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  sources: {
    heading: 'Sources',
    items: [
      {
        name: 'Statistics Canada, Analysis on artificial intelligence use by businesses in Canada, second quarter of 2025',
        url: 'https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025008-eng.htm',
        urlLabel: 'www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025008-eng.htm',
        accessed: '13 October 2026',
        accessedIso: '2026-10-13',
      },
    ],
  },

  relatedReading: [
    {
      href: '/business-process-automation',
      title: 'Business process automation',
      blurb: 'What to automate first, what not to automate, and how it pays off.',
    },
    {
      href: '/operations-process-improvement-alberta',
      title: 'Process improvement and change',
      blurb: "How to improve how the work runs when it lives in people's heads, without losing the people.",
    },
    {
      href: '/faq',
      title: 'Common questions',
      blurb: 'Data residency, system access, and what happens to your team.',
    },
    {
      href: '/coordination-tax-calculator',
      title: 'Coordination Tax Calculator',
      blurb: 'Four inputs, sixty seconds, a first number on what coordination is costing you.',
    },
  ],
};
