'use client';

import React from 'react';
import Link from 'next/link';
import { RelatedReading } from '@/components/RelatedReading';

import { BookCallButton } from '@/components/BookCallButton';
export default function ManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Industry - Manufacturing</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Your production data exists.<br />
              <span className="text-brand-slate italic">Your systems just do not share it with each other.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">
              Manufacturing companies generate more operational data than almost any other industry. Production output, quality results, equipment status, labour hours, material consumption, and supplier lead times, all being captured somewhere. The problem is that somewhere is usually a collection of disconnected systems, manual logs, and spreadsheets that require human effort to reconcile.
            </p>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">
              When your production team is spending time on reporting instead of production, and your leadership is making decisions on last week's numbers, the operational drag compounds. LVRGWRKS is an operating partner for industrial businesses. We help owners and leadership teams move decisions and handoffs off the top desk and into the business, and bring in technology only where it earns its place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <BookCallButton variant="custom" className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg group" arrow={true} />
              <Link href="/capabilities" className="border-2 border-brand-navy text-brand-navy px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-navy hover:text-white transition-all">
                View Capabilities
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Problem</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Where manufacturing companies lose capacity they cannot get back</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">
                The most common pattern we see in mid-market manufacturing is this: the production floor is running, the quality system is capturing data, the ERP is tracking inventory and orders, and none of them are talking to each other in real time. The integration layer between systems is a person. Usually several people.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">
                When you add headcount to growing operations but the processes stay manual, you scale complexity rather than capacity. Revenue grows. Headcount grows faster. Margin compresses. The answer is not more people to manage the coordination. It is systems that eliminate the coordination overhead entirely.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Production data that arrives too late to act on</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  When production output, downtime events, and quality results have to be manually entered into the ERP, the data arrives hours after the events occurred. Supervisors make shift decisions on yesterday's numbers. Planners schedule tomorrow's production on incomplete information. The lag between what is happening on the floor and what the system knows about it has real operational costs.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Quality and production systems that do not connect</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Quality results live in the quality management system. Production data lives in the MES or ERP. When these systems do not share data automatically, correlating quality issues with production conditions requires manual analysis that takes time and expertise. By the time the root cause is understood, the condition has repeated itself.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Reporting that consumes production management time</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Shift reports, daily production summaries, quality scorecards, and KPI dashboards are assembled manually from multiple data sources. The people doing the assembling, supervisors, production managers, quality leads, are the same people whose job is to run the operation. Every hour spent on reporting is an hour not spent managing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">What We Build</span>
            <h2 className="font-display font-bold text-4xl mb-6 leading-tight">
              Systems that connect your production floor to your business systems, without manual entry.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              Technology work is one of the tools we use. Where it earns its place, we build automation and integration for manufacturing companies across Canada. We connect your existing tools, your ERP, your MES or production management system, your quality system, your maintenance management platform, into a unified operating layer. No rip-and-replace. We build around what you have and eliminate the manual work between systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Production-to-ERP integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Production output, material consumption, labour hours, and downtime events flow automatically from the production floor into your ERP and planning systems. No manual entry at shift end. Your inventory, costing, and scheduling data reflects what is actually happening in real time, not what someone recorded this morning.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Quality and production data integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Quality results automatically correlated with production conditions: shift, line, operator, material lot, equipment settings. When a quality issue emerges, the relevant production context is already attached. Root cause analysis that used to take days takes hours. Corrections happen before the condition repeats.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Automated production reporting</h3>
                <p className="text-gray-300 leading-relaxed">
                  Shift reports, daily production summaries, OEE calculations, and KPI dashboards generated automatically from data already flowing through your systems. No manual assembly. No waiting for someone to compile numbers. Leadership and supervisors see current operational performance without anyone building a report.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">AI at production constraint points</h3>
                <p className="text-gray-300 leading-relaxed">
                  We identify the specific points in your production system where AI can materially improve throughput, scheduling optimization, predictive quality, demand-driven material replenishment, maintenance prediction, and build targeted AI systems at those specific constraints. Not AI for the sake of it. AI where it changes the economics of your operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alberta Context */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Built for Alberta</span>
                <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Alberta manufacturing faces pressures that demand operational precision</h2>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  Labour availability, input cost volatility, and the demands of customers in resource-intensive industries mean Alberta manufacturers operate with tighter margins and less tolerance for operational waste than manufacturers in other markets. Getting more out of your current capacity is not a nice-to-have. It is a competitive requirement.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  LVRGWRKS was founded in Calgary and works with manufacturing companies across Canada. We understand the operational constraints of this market, the labour pressure, the input cost exposure, the customer requirements.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed">
                  We work with discrete manufacturers, process manufacturers, and industrial fabricators. If your team is running hard but the operation is not performing at the level the business needs, that gap is where we work.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Discrete Manufacturing</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Job shop and batch production with complex routing, multi-level BOM management, and job cost tracking integrated to ERP.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Process Manufacturing</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Continuous production monitoring, recipe management, quality integration, and yield tracking for process and chemical manufacturing operations.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Industrial Fabrication</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Project-based fabrication with shop floor tracking, material traceability, inspection documentation, and client reporting automation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Common Questions</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-12 leading-tight">Manufacturing Operations Questions, Answered</h2>
            <div className="space-y-8">
              <div className="border-b border-gray-100 pb-8">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Why does our ERP not do what we bought it for?</h3>
                <p className="text-brand-slate leading-relaxed">Because an ERP records what happened. It rarely reaches the place the data starts. Production output, quality results, equipment status and labour hours are captured on the floor across terminals, paper logs and spreadsheets, then re-entered by someone into the system of record. The gap between the floor and the ERP is where the manual work lives, and it is usually invisible in the business case because nobody counted it. Adding modules to the ERP does not close that gap. Connecting the systems on either side of it does.</p>
              </div>
              <div className="border-b border-gray-100 pb-8">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Should we replace our ERP or integrate what we already have?</h3>
                <p className="text-brand-slate leading-relaxed">Integrate first, and prove the constraint before you spend. The question is usually framed as replace or upgrade, which quietly assumes the ERP is the problem. Often it is not. Whether you run Business Central, SYSPRO, Epicor or something older and heavily customised, the real question is whether information moving between that system and the plant floor still requires a person. A replacement that does not close that gap moves the same problem into a newer system, on a longer timeline and a larger budget.</p>
              </div>
              <div className="border-b border-gray-100 pb-8">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">What does it cost to connect our ERP to the plant floor?</h3>
                <p className="text-brand-slate leading-relaxed">The diagnostic is a fixed fee agreed before we start. The monthly partnership is priced on the scope you need. We&apos;ll give you real numbers once we understand what you need, usually after the first call.</p>
              </div>
              <div className="border-b border-gray-100 pb-8">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">How do we know the work actually paid off?</h3>
                <p className="text-brand-slate leading-relaxed">We agree a baseline up front and report what changed against it each month. Measuring from the start means the change is either there or it is not, and you see it either way.</p>
              </div>
            </div>
            <p className="text-brand-slate leading-relaxed mt-10">
              More questions answered on the <Link href="/faq" className="text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors">LVRGWRKS FAQ</Link>, including what it costs, who owns what we build, and what happens to your team.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">How much capacity is your manual reporting overhead consuming?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
            Tell us what keeps landing on your desk. You get a short written note of what we heard and whether a diagnostic is worth doing.
          </p>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Thirty minutes. No obligation.
          </p>
          <BookCallButton variant="custom" className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group" arrow={true} />
          <p className="text-gray-500 text-sm mt-6">Or email directly: jredgate@lvrgwrks.com</p>
        </div>
      </section>

      <RelatedReading
        items={[
          { href: '/erp-selection-alberta-manufacturers', title: 'Choosing an ERP for an Alberta manufacturer', blurb: 'What to settle before you sit through a vendor demo.' },
          { href: '/business-central-acumatica-netsuite', title: 'Business Central, Acumatica or NetSuite', blurb: 'How each one is priced, sold and supported, side by side.' },
        ]}
      />
    </>
  );
}


