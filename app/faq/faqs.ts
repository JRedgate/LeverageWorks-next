// One source for the FAQ page and its FAQPage JSON-LD, so the two cannot
// drift apart. Each answer is a list of paragraphs. The first renders larger.

export interface Faq {
  q: string;
  a: string[];
}

export const FAQS: Faq[] = [
  {
    q: 'What does LVRGWRKS do?',
    a: ['We work with owners and leadership teams of industrial businesses to move decisions and handoffs off the top desk and into the business, so it makes more margin and needs less of its leaders’ time.'],
  },
  {
    q: 'What is the coordination tax?',
    a: [
      'It is the margin and time lost when work and decisions wait on a few people and move badly between departments.',
      'As a business grows, more decisions, approvals and problems find their way back to the top. Each one that waits on you or a senior leader slows the work. It rarely appears on a report, and it tends to grow with the business.',
    ],
  },
  {
    q: 'How is this different from consulting?',
    a: ['We don’t hand over a report and leave. After the diagnostic, we work the agreed priorities with your team and report what changed each month.'],
  },
  {
    q: 'Do you replace my management team?',
    a: ['No. You and your people run the business and make the decisions. We help the organization take on more of them.'],
  },
  {
    q: 'Do we need AI or new software?',
    a: ['No. We fix how work and decisions move first. Technology comes in only where it earns its place.'],
  },
  {
    q: 'What does it cost?',
    a: ['The diagnostic is a fixed fee agreed before we start. The monthly partnership is priced on the scope you need. We’ll give you real numbers once we understand what you need, usually after the first call.'],
  },
  {
    q: 'What’s the commitment?',
    a: ['Terms are agreed in writing before any work starts. The diagnostic stands on its own, and you keep the findings whether or not you continue.'],
  },
  {
    q: 'Do you guarantee savings?',
    a: ['No. We agree a baseline up front and report what changed against it.'],
  },
  {
    q: 'Who owns what’s built?',
    a: ['Everything we build for your operation belongs to you from day one, and your data is yours without condition. Where an engagement uses a LVRGWRKS product module, you hold a permanent licence to keep running it. No vendor lock-in. No dependency on us. The engagement can end at any time and the operation keeps running.'],
  },
  {
    q: 'Do you work outside Calgary?',
    a: ['Yes. We’re based in Calgary and work with industrial businesses across Canada, remotely and with site visits where they’re needed.'],
  },
  {
    q: 'What happens to our team when the work moves into the business?',
    a: [
      'They stop doing the parts of their job that nobody would miss.',
      'The goal is getting more out of the team you already have, not fewer of them. The change itself is real and we do not pretend otherwise. People have opinions about how their work is done and they should. We involve the people doing the work early, because a workflow designed without them fails on contact with reality.',
    ],
  },
  {
    q: 'How much of our team’s time will this take?',
    a: [
      'Less than you think most weeks, more than you think when a change goes live.',
      'Most of the work needs short working sessions rather than sustained involvement, usually a couple of hours a week from the people closest to the work. The demand rises when a change goes live and in the month after, because that is when it meets real conditions. That time is the single largest driver of whether a change holds, so we would rather ask for it plainly than discover later that nobody had it.',
    ],
  },
  {
    q: 'What access do you need to our systems, and how is that controlled?',
    a: [
      'Read access first, scoped narrowly, and nothing beyond what the specific work requires.',
      'Where the work touches your systems, we ask for access to those specific systems only, granted per system rather than as blanket administrative rights. We work with your IT contact on scoping. Where your own customers impose security requirements, those get disclosed up front and the work gets designed around them.',
    ],
  },
  {
    q: 'Does our company data have to stay in Canada if we use AI tools?',
    a: [
      'Usually not, and this is a commonly misunderstood point.',
      'No Canadian federal law requires private-sector commercial data to be stored in Canada. PIPEDA and Alberta’s PIPA are accountability-based rather than location-based. You stay responsible for the data wherever it is processed, and you have to provide comparable protection and be transparent about cross-border transfers. Real residency obligations, when they exist, come from somewhere else. Sector rules such as Alberta’s Health Information Act, a contract with your own customer, or a commitment in your own published privacy policy. Those are worth checking before anyone tells you the law says something it does not.',
    ],
  },
  {
    q: 'Is there still a government grant that helps pay for this?',
    a: [
      'For most industrial businesses, no. Be careful of advice that says otherwise.',
      'The Canada Digital Adoption Program, which is the grant most people are thinking of, stopped accepting new applicants in February 2024. A lot of content still online treats it as live. Federal AI funding that does exist is aimed largely at companies building AI products rather than adopting them. SR&ED is worth a conversation only in narrow cases. If a firm leads with grant money as the reason to proceed, ask them to name the program and its current intake status.',
    ],
  },
];
