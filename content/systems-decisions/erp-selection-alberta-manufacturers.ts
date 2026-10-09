import type { SystemsDecisionContent } from './types';

/**
 * Transcribed verbatim from
 * C:\LVRGWRKS-marketing\site-copy-2026-10\erp-selection-alberta-manufacturers.md
 * status: APPROVED BY FOUNDER 8 Oct 2026.
 *
 * Do not edit the copy here. Edits go in the copy file and are transcribed back.
 * The copy file's closing "Internal links to add pointing at this page" and
 * "Notes for founder review" sections are not page copy and are not transcribed.
 */
export const content: SystemsDecisionContent = {
  slug: 'erp-selection-alberta-manufacturers',

  seoTitle: 'ERP Selection for Alberta Manufacturers | LVRGWRKS',
  metaDescription:
    'Before you sign an ERP contract, settle how a job moves from quote to invoice. Vendor-neutral help for owner-led Alberta manufacturers.',

  hero: {
    // Derived from this page's own frontmatter title, in the site's existing
    // pill format. Not new copy. Change the words here if you want different ones.
    eyebrow: 'ERP Selection - Alberta Manufacturers',
    h1: 'Choosing an ERP for an Alberta manufacturer',
    subhead: [
      'Most ERP decisions start with a vendor demo. The ones that work start with how a job actually moves through your shop, from the first quote to the final invoice. Settle that first and the software choice gets much easier, and much cheaper to get right.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  whoThisIsFor: {
    heading: 'Who this is for',
    items: [
      'Owners and general managers of Alberta manufacturers with roughly 20 to 250 people',
      'Quoting, scheduling and job costing running across spreadsheets, an older system and a few people who know where everything is',
      'Being pitched by ERP vendors and not sure which questions to ask',
      'Already partway through an implementation and wondering why it feels harder than the demo',
    ],
  },

  questionsEyebrow: 'Questions and answers',
  questions: [
    {
      question: 'Do we need a new ERP, or do we need to fix how work moves first?',
      answer: [
        {
          kind: 'p',
          text: 'Usually both, in that order. A new system records the way work moves through your business. If a job gets re-quoted because estimating and production use different numbers, or a change waits two days for someone to approve it, the new system will record that faithfully and at much higher cost.',
        },
        {
          kind: 'p',
          text: 'Map the work first. Walk one real job from the first call to the final invoice and write down every place it changes hands. Some of those handoffs need to exist. A surprising number exist only because two systems or two people do not share the same information. Remove those, and the list of things the ERP has to do gets shorter and clearer.',
        },
      ],
    },
    {
      question: 'Why do ERP projects go wrong in companies our size?',
      answer: [
        {
          kind: 'p',
          text: 'Rarely because the software was bad. The common causes sit on your side of the table:',
        },
        {
          kind: 'ul',
          items: [
            '**The system gets configured around the process you have today**, including the steps that should not exist. The implementation partner builds what they are told.',
            '**Nobody owns the process across departments.** Estimating owns the quote, production owns the schedule, accounting owns the invoice. The places where work passes between them are where margin leaks, and nobody is assigned to them.',
            '**The work does not stop for the project.** Your best people run the implementation on top of their day jobs, and the project gets their leftover hours.',
          ],
        },
        {
          kind: 'p',
          text: 'Two kinds of cost hide in that gap. One is waiting: work sits while someone chases an answer or an approval. The other is re-entry: the same information typed into a second system, or hunted down in an inbox, because the first system did not pass it along. A good ERP project removes both. A bad one moves them into new screens.',
        },
      ],
    },
    {
      question: 'What should we have settled before we talk to a vendor?',
      answer: [
        { kind: 'p', text: 'Five things, written down:' },
        {
          kind: 'ol',
          items: [
            '**How a job moves from quote to invoice**, step by step, with who touches it at each step',
            '**Which handoffs you are removing**, and which ones the system has to support',
            '**The numbers you actually run the business on**, weekly, and where each one comes from today',
            '**What data comes across and what gets left behind.** Years of old records are rarely worth migrating cleanly. Open jobs, current pricing and customer terms usually are.',
            '**What done looks like at go-live**, in terms your supervisors would recognise, not a feature list',
          ],
        },
        {
          kind: 'p',
          text: 'With those five in hand, every vendor demo becomes a test of your process instead of a tour of their features.',
        },
      ],
    },
    {
      question: 'Business Central, Acumatica, NetSuite, Epicor or something else?',
      answer: [
        {
          kind: 'p',
          text: 'All of them are credible systems for a mid-market manufacturer, and so are several others. The brand matters less than three practical questions:',
        },
        {
          kind: 'ul',
          items: [
            '**Fit with how you quote and cost jobs.** Make-to-order, engineer-to-order and repetitive production stress a system in different places. Test the system on your hardest job, not your easiest.',
            '**The local partner who will support you.** You will spend more time with the implementation partner than with the software company. Ask who will be on your project, how many manufacturers like you they have implemented, and who answers the phone after go-live.',
            '**The full cost over three years.** Licensing models differ. Some charge per named user and some do not. Implementation, data migration, training and support add up. Get the three-year number in writing before you compare.',
          ],
        },
      ],
    },
    {
      question: 'Sometimes the answer is not a new ERP at all',
      answer: [
        {
          kind: 'p',
          text: 'Before you replace a system, find out what the one you own can already do. In our experience owner-led companies often use a small part of the software they pay for, because it was set up once years ago and nobody went back. A configuration change, a connection between two existing systems, or a cleaned-up process can sometimes deliver most of what a replacement promised, at a fraction of the cost and disruption.',
        },
      ],
    },
    {
      question: 'Do we still need an implementation partner?',
      answer: [
        {
          kind: 'p',
          text: 'Yes. The partner configures and supports the software, and that is skilled work. What the partner cannot do is decide how your business should run. That decision belongs on your side of the table, with someone who owns the process across departments and keeps the project honest about what it is for.',
        },
        {
          kind: 'p',
          text: 'That is where we fit. We do not sell or resell software. We work alongside your implementation partner, not instead of them, so the system they configure reflects the business you want to run rather than the one you have today.',
        },
      ],
    },
    {
      question: 'Can government programs help pay for this?',
      answer: [
        {
          kind: 'p',
          text: 'Some can, and the rules are specific, so check before you plan around them.',
        },
        {
          kind: 'ul',
          items: [
            "**BDC's LIFT program** finances digital projects including ERP and CRM systems. Its digital track is open to Canadian businesses with at least $1 million in revenue, requires a BDC plan, and can cover installation, integration and implementation costs tied to the technology investment.",
            '**The CME Alberta Manufacturing Productivity Grant** covers part of eligible automation and equipment projects for Alberta manufacturers, and lists consulting fees as eligible. It specifically excludes ERP systems.',
          ],
        },
        {
          kind: 'p',
          text: 'Program terms change. Confirm current eligibility with the program directly before you rely on it.',
        },
      ],
    },
  ],

  firstStep: {
    heading: 'What the first step looks like',
    body: [
      'Start with the free 60-minute Leverage Audit. Bring the last report you sent to an owner, a client or your board, and one recent job from the moment it came in to the moment it was invoiced. We map how that job actually moved, show you where the same information was handled more than once, and rank what is worth fixing by what it returns. You keep a written summary either way.',
      'If an ERP decision is in front of you, the next step is the Leverage Diagnostic. It is a few days of work with your team, on site and on paper, and it turns the audit into an analysis of your highest-value targets, a one-year plan, and a clear picture of what the system has to do. You can hand that to any vendor. The Diagnostic is scoped and quoted in writing after the audit, before any work starts.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  sources: {
    heading: 'Sources',
    items: [
      {
        name: 'BDC, LIFT program page',
        url: 'https://www.bdc.ca/en/lift',
        urlLabel: 'bdc.ca/en/lift',
        accessed: '8 October 2026',
        accessedIso: '2026-10-08',
      },
      {
        name: 'Canadian Manufacturers and Exporters, Alberta Manufacturing Productivity Grant guidelines',
        url: 'https://cme-mec.ca/guidelines-ampg/',
        urlLabel: 'cme-mec.ca/guidelines-ampg',
        accessed: '8 October 2026',
        accessedIso: '2026-10-08',
      },
    ],
  },

  relatedReading: [
    {
      href: '/insights/cost-of-manual-data-entry',
      title: 'The real cost of manual data entry',
      blurb: 'Why the cost compounds well past the hours it consumes.',
    },
    {
      href: '/industries/manufacturing',
      title: 'Manufacturing',
      blurb: 'Where mid-market manufacturers lose capacity they cannot get back.',
    },
    {
      href: '/coordination-tax-calculator',
      title: 'Coordination Tax Calculator',
      blurb: 'Four inputs, sixty seconds, a first number on what coordination is costing you.',
    },
  ],
};
