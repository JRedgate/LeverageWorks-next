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
    q: 'Who owns the work?',
    a: ['You do. Your data, the findings and the documents we produce for you are yours. Where we put a tool in place, the agreement sets out who owns and licenses it. If the engagement ends, the business keeps running.'],
  },
  {
    q: 'Do you work outside Calgary?',
    a: ['Yes. We’re based in Calgary and work with industrial businesses across Canada, remotely and with site visits where they’re needed.'],
  },
  {
    q: 'What happens to our team when the work moves into the business?',
    a: ['They take on more of the decisions, with clear limits. The goal is getting more out of the team you already have, not fewer of them. We involve the people doing the work early, because a way of working designed without them does not hold.'],
  },
  {
    q: 'How much of our team’s time will this take?',
    a: ['Usually a couple of hours a week from the people closest to the work. It rises for a few weeks when a decision or handoff moves to them, because that is when it meets real conditions. We ask for that time up front.'],
  },
  {
    q: 'Do you need access to our systems?',
    a: ['Only where the work calls for it. We start with read access to the specific system, agreed with whoever looks after it for you.'],
  },
];
