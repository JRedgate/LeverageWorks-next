// Industry page copy. Addendum 2 Section 3 (manufacturing, construction,
// energy services) and addendum 4 Section 3 (distribution). Layout follows
// addendum 3 Section 4, rendered by components/IndustryPage.
//
// "Who we work with" lines, eyebrows, meta descriptions and the shared cost
// question were drafted in step 4 and approved in STEP-REVIEW-4.

import type { RelatedLink } from '@/components/RelatedReading';

export type IndustryKey = 'manufacturing' | 'construction' | 'energy-services' | 'distribution';

export interface Industry {
  key: IndustryKey;
  name: string;
  pill: string;
  headline: [string, string];
  intro: string;
  description: string;
  moments: { title: string; body: string }[];
  who: { title: string; body: string }[];
  handoffs: string;
  related: RelatedLink[];
}

const IDENTITY = 'LVRGWRKS is an operating partner for industrial businesses. We work with owners and leadership teams to move those decisions and handoffs into the business.';

// The shared block (addendum 2 Section 3). "The handoffs" names each
// industry's own handoffs (STEP-REVIEW-4 fix 1). /capabilities keeps the
// general line.
export const GENERAL_HANDOFFS = 'Sales to operations, field to office, operations to finance.';

export const sharedWork = (handoffs: string = GENERAL_HANDOFFS) => [
  { title: 'Who decides what.', body: 'We map which decisions come to the top and why. Then we agree with you which ones move, to whom, and with what limits.' },
  { title: 'The handoffs.', body: `${handoffs} We fix the points where work waits or gets done twice.` },
  { title: 'The weekly rhythm.', body: 'A short, fixed set of meetings and reports that your managers run, so problems surface without you chasing them.' },
  { title: 'The numbers.', body: 'Your leaders see the few figures they need each week to make the call themselves.' },
];

export const QUESTIONS_HEADING = 'What owners ask first.';

export const SHARED_WORK_CLOSE = 'Operations first, tools second. We don’t sell software. Technology comes in only where it earns its place.';

export const SHARED_QUESTIONS = [
  {
    q: 'What does it cost?',
    a: 'The diagnostic is a fixed fee agreed before we start. The monthly partnership is priced on the scope you need. We’ll give you real numbers once we understand what you need, usually after the first call.',
  },
  {
    q: 'How do we know the work actually paid off?',
    a: 'We agree a baseline up front and report what changed against it each month. Measuring from the start means the change is either there or it is not, and you see it either way.',
  },
];

export const INDUSTRIES: Record<IndustryKey, Industry> = {
  manufacturing: {
    key: 'manufacturing',
    name: 'Manufacturing',
    pill: 'Industry - Manufacturing',
    headline: ['Your plant can make it.', 'The decision still waits on you.'],
    intro: `In a growing manufacturer, the quote, the schedule change, the rush order and the quality call tend to find their way to the same two or three people. The floor keeps moving, and the answers it needs queue at the top. ${IDENTITY}`,
    description: 'Your plant can make it. The decision still waits on you. LVRGWRKS works with manufacturing owners and leadership teams to move decisions and handoffs into the business.',
    moments: [
      { title: 'The rush order.', body: 'Sales says yes, the schedule says no, and both wait for you to settle it.' },
      { title: 'The quote that needs your eye.', body: 'Estimating has the number. It goes out when you have looked at it.' },
      { title: 'The quality hold.', body: 'A lot is on hold, and nobody on shift has the authority to release it or scrap it.' },
      { title: 'The numbers that arrive late.', body: 'Last month’s margin by job shows up after this month’s decisions are made.' },
    ],
    who: [
      { title: 'Discrete manufacturers.', body: 'Job shops and batch producers where every order brings its own routing and its own questions.' },
      { title: 'Process manufacturers.', body: 'Plants where a yield or quality call can’t wait for the next meeting.' },
      { title: 'Industrial fabricators.', body: 'Project-based shops where each job is quoted, built and inspected to the client’s spec.' },
    ],
    handoffs: 'Sales to scheduling, the floor to quality, operations to finance.',
    related: [
      { href: '/erp-selection-alberta-manufacturers', title: 'Choosing an ERP for an Alberta manufacturer', blurb: 'What to settle before you sit through a vendor demo.' },
      { href: '/business-central-acumatica-netsuite', title: 'Business Central, Acumatica or NetSuite', blurb: 'How each one is priced, sold and supported, side by side.' },
    ],
  },
  construction: {
    key: 'construction',
    name: 'Construction',
    pill: 'Industry - Construction',
    headline: ['Your crews build the job.', 'Too much of it still runs through you.'],
    intro: `In a growing contractor, the estimate, the change order, the sub who is behind and the client who is unhappy tend to land on the same desk. Your project managers run the work, and the calls that protect the margin wait at the top. ${IDENTITY}`,
    description: 'Your crews build the job. Too much of it still runs through you. LVRGWRKS works with construction owners and leadership teams to move decisions and handoffs into the business.',
    moments: [
      { title: 'The change order nobody priced.', body: 'The extra work is done. It gets billed when someone at the top gets to it.' },
      { title: 'The estimate that waits for sign-off.', body: 'The bid is ready. The deadline is tomorrow. It is on your desk.' },
      { title: 'The sub who calls you directly.', body: 'There is a project manager on the job, and the phone still rings in your pocket.' },
      { title: 'The job cost you see at month-end.', body: 'By the time the overrun shows, the job is nearly done.' },
    ],
    who: [
      { title: 'General contractors.', body: 'Firms running several jobs at once, with project managers between you and the site.' },
      { title: 'Specialty contractors.', body: 'Electrical, mechanical and other trades carrying their own crews and their own margin.' },
      { title: 'Civil and infrastructure contractors.', body: 'Heavy and civil work where crews, equipment and change orders move fast.' },
    ],
    handoffs: 'Estimating to the job, the field to the office, operations to finance.',
    related: [
      { href: '/insights/hidden-cost-of-estimating', title: 'The hidden cost of estimating', blurb: 'What three project files revealed about where estimating time actually goes.' },
      { href: '/job-costing-change-orders-contractors', title: 'Job costing and change orders', blurb: 'Why extra work goes unbilled and job cost runs a month behind.' },
    ],
  },
  'energy-services': {
    key: 'energy-services',
    name: 'Energy Services',
    pill: 'Industry - Energy Services',
    headline: ['Your crews are in the field.', 'The decisions are still on your desk.'],
    intro: `In a growing service company, the re-dispatch, the rate on extra work, the ticket dispute and the client complaint tend to come back to the same few people. The field keeps working, and the calls that decide the margin wait at the top. ${IDENTITY}`,
    description: 'Your crews are in the field. The decisions are still on your desk. LVRGWRKS works with energy services owners and leadership teams to move decisions and handoffs into the business.',
    moments: [
      { title: 'The re-dispatch.', body: 'Equipment goes down or the client changes the plan, and the call comes to you.' },
      { title: 'The ticket that isn’t billed.', body: 'Signed in the field, sitting in a truck, a week away from an invoice.' },
      { title: 'The rate question.', body: 'A client wants a price on extra work, and one person can give it.' },
      { title: 'The certificate that lapsed.', body: 'Nobody owned the renewal until the client asked for it.' },
    ],
    who: [
      { title: 'Oilfield services.', body: 'Crews and equipment working on client sites, billed by the field ticket.' },
      { title: 'Industrial maintenance.', body: 'Planned and emergency work for plants and facilities, often on short notice.' },
      { title: 'Environmental and pipeline services.', body: 'Regulated work where the paperwork matters as much as the job.' },
    ],
    handoffs: 'Dispatch to the field, the field to the office, operations to finance.',
    related: [
      { href: '/insights/cost-of-manual-data-entry', title: 'The real cost of manual data entry', blurb: 'Why the cost compounds well past the hours it consumes.' },
    ],
  },
  distribution: {
    key: 'distribution',
    name: 'Distribution',
    pill: 'Industry - Distribution',
    headline: ['Your team can quote it and ship it.', 'The exception still waits on you.'],
    intro: `In a growing distributor, the price exception, the stock decision, the supplier call and the credit question tend to find their way to the same two or three people. Orders keep coming, and the answers they need queue at the top. ${IDENTITY}`,
    description: 'Your team can quote it and ship it. The exception still waits on you. LVRGWRKS works with distribution owners and leadership teams to move decisions and handoffs into the business.',
    moments: [
      { title: 'The price exception.', body: 'A good customer asks for a better number, and the order waits for your yes.' },
      { title: 'The price list one person keeps.', body: 'Supplier prices change, and one person knows how they reach your quotes.' },
      { title: 'The stock call.', body: 'What to carry and how deep gets decided at the top, one purchase order at a time.' },
      { title: 'The supplier who deals only with you.', body: 'The relationship that sets your cost has one name on it.' },
    ],
    who: [
      { title: 'Industrial distributors.', body: 'Stocking and selling to industrial customers, with margin set one quote at a time.' },
      { title: 'Technical sales and service businesses.', body: 'Equipment that takes expertise to quote, and support that carries on after the sale.' },
      { title: 'Parts and supply businesses.', body: 'High order volume, thousands of items, and customers who expect it today.' },
    ],
    handoffs: 'Sales to purchasing, the warehouse to the counter, operations to finance.',
    related: [],
  },
};

export const industryTitle = (i: Industry) => `${i.name} | Operating Partner for Industrial Businesses | LVRGWRKS`;
