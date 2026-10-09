import { comparisonTable, type SystemsDecisionContent } from './types';

/**
 * Transcribed verbatim from
 * C:\LVRGWRKS-marketing\site-copy-2026-10\business-central-acumatica-netsuite.md
 * status: APPROVED BY FOUNDER 9 Oct 2026, ready to publish. Founder correction
 * recorded in that file: company size is 50 to 250 people throughout, to match
 * the ICP. That supersedes the "50 to 150 person" wording in the brief's
 * planning table.
 *
 * This is the page the comparison table was deferred for. Section 4 of the
 * template was built with this copy, from the copy file's own "Comparison
 * table" section and its build notes.
 *
 * Three things in here come from the copy file's build notes rather than from
 * its prose, and all three are instructions, not new words:
 *   - the table caption is its "Table caption:" line
 *   - "Our ERP selection page" links to /erp-selection-alberta-manufacturers
 *   - the template's order stays question and answer first, table after,
 *     because an answer above refers to "the table further down this page"
 *
 * Do not edit the copy here. Edits go in the copy file and are transcribed back.
 * The copy file's closing "Internal links to add pointing at this page",
 * "Build notes for Claude Code" and "Notes for founder review" sections are not
 * page copy and are not transcribed.
 */
export const content: SystemsDecisionContent = {
  slug: 'business-central-acumatica-netsuite',

  seoTitle: 'Business Central vs Acumatica vs NetSuite in Alberta | LVRGWRKS',
  metaDescription:
    'An honest comparison for 50 to 250 person Alberta companies. How each system is priced, sold and supported, and the questions that decide it.',

  hero: {
    // Derived from this page's own frontmatter title, in the site's existing
    // pill format. Not new copy. Change the words here if you want different ones.
    eyebrow: 'Business Central vs Acumatica vs NetSuite - Alberta',
    h1Lines: [
      'Business Central, Acumatica or NetSuite',
      'for a 50 to 250 person Alberta company',
    ],
    subhead: [
      'All three are credible cloud ERP systems for a mid-sized Alberta company. The demos will all look good, and every partner will tell you why theirs fits.',
      'The differences that matter are how each one is priced, how it is sold and supported, and how it handles your hardest job. That is what this page compares. We do not sell or resell any of them.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  whoThisIsFor: {
    heading: 'Who this is for',
    items: [
      'Owners, general managers and controllers of Alberta companies with roughly 50 to 250 people',
      'Outgrowing QuickBooks, Sage 50 or an older system that only one person really understands',
      'Down to a shortlist of two or three of these systems, or being pitched by partners for each',
      'Wanting a comparison from someone with nothing to sell you',
    ],
  },

  questionsEyebrow: 'Questions and answers',
  questions: [
    {
      question: 'Which one is best?',
      answer: [
        {
          kind: 'p',
          text: 'None of them, in general. Each is used by thousands of mid-sized companies, and each has customers who love it and customers who regret it. The difference is rarely the software. It is whether the system fits how your company makes money, and whether the partner who sets it up understands that.',
        },
        {
          kind: 'p',
          text: 'So the useful question is not which is best. It is which one handles your hardest job, at a cost you can see three years out, with a partner you trust to answer the phone after go-live.',
        },
      ],
    },
    {
      question: 'How is each one priced?',
      answer: [
        {
          kind: 'p',
          text: 'This is the biggest structural difference between the three, and it matters more than any headline number.',
        },
        {
          kind: 'ul',
          items: [
            '**Business Central is priced per named user.** Microsoft publishes Canadian prices on its own site. Full users are on Essentials or Premium, and people who mostly look things up and approve can be on a cheaper Team Members licence.',
            '**Acumatica is not priced by user seat.** Acumatica says its price is based mainly on the applications you license, plus your expected transaction volume and resource needs. It does not publish a price.',
            '**NetSuite is an annual licence with three parts:** a core platform, the optional modules you add, and the number of users. NetSuite also lists a one-time implementation fee. It does not publish a price.',
          ],
        },
        {
          kind: 'p',
          text: 'The table further down this page sets the three side by side, with the source for each line.',
        },
      ],
    },
    {
      question: 'What does the licence actually cost?',
      answer: [
        {
          kind: 'p',
          text: 'Only Microsoft publishes a number, so here is a worked example using its published Canadian prices. Premium includes manufacturing and costs CAD $149.20 per user per month, paid yearly. Team Members costs CAD $10.90.',
        },
        {
          kind: 'p',
          text: 'A manufacturer with 20 people who work in the system all day and 40 who only look things up or approve:',
        },
        {
          kind: 'ul',
          items: [
            '20 Premium users at $149.20 is $2,984 a month',
            '40 Team Members at $10.90 is $436 a month',
            'Total $3,420 a month, or $41,040 a year, before tax',
          ],
        },
        {
          kind: 'p',
          text: 'Put all 60 on Premium and it is $8,952 a month, or $107,424 a year. Same company, same software, a $66,384 difference, decided entirely by who needs which licence.',
        },
        {
          kind: 'p',
          text: 'That is licence only. Implementation, data migration, training, add-ons and support come on top, for all three systems. For Acumatica and NetSuite, get the same three-year number in writing from the partner before you compare anything.',
        },
      ],
    },
    {
      question: 'Which pricing model suits a company like ours?',
      answer: [
        {
          kind: 'p',
          text: 'Count your people by how they actually use the system, not by headcount.',
        },
        {
          kind: 'ol',
          items: [
            '**Daily users.** Estimating, purchasing, scheduling, accounting. They need full access under any model.',
            '**Occasional users.** Supervisors who approve, managers who check a report, sales who look up an order.',
            '**Field and shop floor.** People who might record time, receipts or progress if it took them under a minute.',
          ],
        },
        {
          kind: 'p',
          text: 'If most of your people are in the first group, the per-user models are straightforward to price. If you have a large second and third group, the pricing model starts to matter a lot. Under Business Central, check exactly what Team Members can and cannot do before you count anyone in it. Under Acumatica, you do not pay per seat, but Acumatica says resource levels scale as users and transactions grow, so ask exactly how that is measured and priced. Under NetSuite, ask how each type of user is licensed.',
        },
      ],
    },
    {
      question: 'What about manufacturing and construction?',
      answer: [
        {
          kind: 'ul',
          items: [
            '**Manufacturing.** Business Central includes manufacturing in its Premium plan, not in Essentials. Acumatica has a Manufacturing edition. NetSuite offers manufacturing through modules, so what you get depends on which ones you license.',
            '**Construction.** Acumatica has a Construction and Professional Services edition. Business Central has project accounting built in, but no construction plan from Microsoft. Construction functions such as progress billing and retainage usually come from apps built by partners. For NetSuite, ask the partner which construction functions are standard and which are added.',
          ],
        },
        {
          kind: 'p',
          text: 'In all three cases, test the system on your hardest job, not your easiest. Make-to-order, engineer-to-order and progress-billed contract work stress a system in different places, and a demo built on a simple example will not show you where.',
        },
      ],
    },
    {
      question: 'Who will actually support us?',
      answer: [
        {
          kind: 'p',
          text: 'The partner, more than the software company. You buy Business Central through a Microsoft partner and Acumatica through an Acumatica partner. NetSuite sells directly and through partners. Either way, the people who configure the system and answer the phone afterward decide most of how this goes.',
        },
        {
          kind: 'p',
          text: 'Ask every partner the same four things:',
        },
        {
          kind: 'ol',
          items: [
            'Who exactly will be on our project, and will they stay on it?',
            'How many companies like ours, in our industry and at our size, have you implemented?',
            'Who answers the phone after go-live, and how quickly?',
            'Can we speak to two of those customers without you on the call?',
          ],
        },
      ],
    },
    {
      question: 'What should we ask every vendor before we sign?',
      answer: [
        {
          kind: 'ul',
          items: [
            '**Where will our data be stored**, and does it stay in Canada?',
            '**How is Canadian payroll handled?** In the product, or through a separate application, and what does that cost?',
            '**How are GST and, if you sell outside Alberta, provincial sales taxes handled?**',
            '**What is in the implementation quote and what is not?** Data migration, integrations, training and reports are the usual gaps.',
            '**Which of the tools we keep will it connect to?** Estimating, field, payroll, banking. Ask how, and who maintains the connection.',
            '**How much can the price go up at renewal?** Get the answer in the contract.',
            '**How do we get our data out** if we ever leave?',
          ],
        },
      ],
    },
    {
      question: 'Can we skip all this and just pick the one our accountant uses?',
      answer: [
        {
          kind: 'p',
          // The copy file's build note: "Our ERP selection page" in this answer
          // links to /erp-selection-alberta-manufacturers. The words are the
          // copy file's, only the link is added.
          text: 'You can, and it might work. But the system your accountant knows best is built around the accounting, and in a company your size most of the cost of a bad fit shows up in operations: quoting, scheduling, purchasing, the job itself. Settle how a job moves from quote to invoice first, then let that decide. [Our ERP selection page](/erp-selection-alberta-manufacturers) walks through what to settle.',
        },
      ],
    },
  ],

  // Section 4. The copy file's "Comparison table" section, built to its build
  // note: caption above the table, the first column as row headings, three
  // product columns. comparisonTable() counts every row against the three
  // column headings at compile time.
  comparison: comparisonTable({
    heading: 'Comparison table',
    caption:
      "How the three are priced, sold and packaged, from each vendor's own website, accessed 9 October 2026. Prices change. Confirm with the vendor or partner before you rely on any line.",
    columns: ['Business Central', 'Acumatica', 'NetSuite'],
    rows: [
      {
        label: 'Made by',
        cells: ['Microsoft', 'Acumatica', 'Oracle'],
      },
      {
        label: 'How the licence is priced',
        cells: [
          'Per named user per month, paid yearly',
          'By the applications you license, plus transaction volume and resources. Not by user seat',
          'Annual licence made up of core platform, optional modules and number of users, plus a one-time implementation fee',
        ],
      },
      {
        label: 'Published price',
        cells: [
          'Yes. Essentials CAD $108.50, Premium CAD $149.20, Team Members CAD $10.90, per user per month, paid yearly, plus tax',
          'No',
          'No',
        ],
      },
      {
        label: 'Manufacturing',
        cells: ['Included in Premium, not in Essentials', 'Manufacturing edition', 'Through modules'],
      },
      {
        label: 'Construction',
        cells: [
          'Project accounting built in. No Microsoft construction plan, construction functions come from partner-built apps',
          'Construction and Professional Services edition',
          'Ask the partner what is standard',
        ],
      },
      {
        label: 'How you buy it',
        cells: [
          'Through a Microsoft partner',
          'Through an Acumatica partner',
          'From NetSuite or through a partner',
        ],
      },
      {
        label: 'Hosting choices',
        cells: [
          'Ask the partner',
          'Acumatica-hosted subscription in a public cloud, or a private cloud subscription with a host you choose',
          'Ask NetSuite or the partner',
        ],
      },
    ],
  }),

  firstStep: {
    heading: 'What the first step looks like',
    body: [
      'Start with the free 60-minute Leverage Audit. Bring your shortlist if you have one, the last report you sent to an owner, a client or your board, and one recent job from the moment it came in to the moment it was invoiced. We map how that job actually moved, show you where the same information was handled more than once, and rank what is worth fixing by what it returns. You keep a written summary either way.',
      'If an ERP decision is in front of you, the next step is the Leverage Diagnostic. It is a few days of work with your team, on site and on paper, and it turns the audit into an analysis of your highest-value targets, a one-year plan, and a clear picture of what the system has to do. You can hand that to all three vendors and compare their answers on the same terms. The Diagnostic is scoped and quoted in writing after the audit, before any work starts.',
    ],
    ctaLabel: 'Request Free Leverage Audit',
  },

  sources: {
    heading: 'Sources',
    items: [
      {
        name: 'Microsoft, Dynamics 365 Business Central pricing (Canada)',
        url: 'https://www.microsoft.com/en-ca/dynamics-365/products/business-central/pricing',
        urlLabel: 'microsoft.com/en-ca/dynamics-365/products/business-central/pricing',
        accessed: '9 October 2026',
        accessedIso: '2026-10-09',
      },
      {
        name: 'Acumatica, Pricing',
        url: 'https://www.acumatica.com/pricing',
        urlLabel: 'acumatica.com/pricing',
        accessed: '9 October 2026',
        accessedIso: '2026-10-09',
      },
      {
        name: 'Acumatica, Product Editions',
        url: 'https://www.acumatica.com/cloud-erp-software/product-editions',
        urlLabel: 'acumatica.com/cloud-erp-software/product-editions',
        accessed: '9 October 2026',
        accessedIso: '2026-10-09',
      },
      {
        name: 'Oracle NetSuite, NetSuite ERP',
        url: 'https://www.netsuite.com/portal/products/erp.shtml',
        urlLabel: 'netsuite.com/portal/products/erp.shtml',
        accessed: '9 October 2026',
        accessedIso: '2026-10-09',
      },
    ],
  },

  relatedReading: [
    {
      href: '/erp-selection-alberta-manufacturers',
      title: 'Choosing an ERP for an Alberta manufacturer',
      blurb: 'What to settle before you sit through a vendor demo.',
    },
    {
      href: '/system-went-live-nothing-got-faster',
      title: 'The system went live and nothing got faster',
      blurb: 'How to find out why, and fix it without starting over.',
    },
    {
      href: '/job-costing-change-orders-contractors',
      title: 'Job costing and change orders',
      blurb: 'Why extra work goes unbilled and job cost runs a month behind.',
    },
  ],
};
