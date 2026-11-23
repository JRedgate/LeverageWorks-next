'use client';

import React from 'react';
import Link from 'next/link';

import { BookCallButton } from '@/components/BookCallButton';
export default function FirmPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Firm</span>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              Built by operators, <span className="text-brand-slate italic">for operators.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl">
              LVRGWRKS is an operating partner for industrial businesses, founded in Calgary by Jeremy Redgate, who spent more than 20 years watching smart, growing businesses get strangled by the same problem. Revenue grows, headcount grows faster, and the coordination tax quietly eats the margin that growth was supposed to deliver. We built LVRGWRKS to fix it.
            </p>
          </div>
        </div>
      </header>

      {/* Origin Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div>
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Origin</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-6 leading-tight">
                  Twenty years inside the operations that actually run Alberta.
                </h2>
                <p className="text-brand-slate leading-relaxed mb-6">
                  LVRGWRKS was founded on more than 20 years of hands-on operational experience across manufacturing, industrial services, and capital programs. Not a software startup. Not a management consultancy. Real operations, in real industries, with real margin pressure and real consequences when the math stops working.
                </p>
                <p className="text-brand-slate leading-relaxed mb-6">
                  That experience taught us one thing above everything else: most technology transformations fail not because the technology is wrong, but because the operating model around the technology is wrong. You can buy the best software on the market and still end up with your team manually moving data between systems at 9pm on a Tuesday. The tools exist. The talent exists. What's missing is the layer that connects what leadership wants to what the operation can actually execute.
                </p>
                <p className="text-brand-slate leading-relaxed">
                  That missing layer is what LVRGWRKS builds.
                </p>
              </div>
              <div>
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Haskayne Thesis</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-6 leading-tight">
                  Architected during an EMBA. Sharpened in the field.
                </h2>
                <p className="text-brand-slate leading-relaxed mb-6">
                  LVRGWRKS was architected during the Haskayne School of Business EMBA at the University of Calgary, grounded in the executive and financial frameworks the program is known for. EBITDA discipline, capital efficiency, structural thinking about how businesses actually create value.
                </p>
                <p className="text-brand-slate leading-relaxed mb-6">
                  The Haskayne training matters because it's where the operational experience and the financial rigor come together. The diagnostic isn't a process-improvement exercise. It's a structural diagnosis of where your business is losing capacity and what that capacity is worth in P&L terms. Every recommendation we make ties back to one question: does this move the numbers, or doesn't it?
                </p>
                <p className="text-brand-slate leading-relaxed">
                  If it doesn't move the numbers, we don't build it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who You Work With */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">
              <div className="md:col-span-2">
                <img
                  src="/jeremy-redgate.jpg"
                  alt="Jeremy Redgate, founder of LVRGWRKS"
                  width={1024}
                  height={1004}
                  className="w-full max-w-[320px] md:max-w-none h-auto rounded-xl"
                />
              </div>
              <div className="md:col-span-3">
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Who You Work With</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-6 leading-tight">
                  Meet Jeremy Redgate, founder and operating partner
                </h2>
                <p className="text-brand-slate leading-relaxed mb-6">
                  Jeremy has sat on both sides of the table. For nine years he owned an electrical contracting business serving Alberta&apos;s oil and gas industry. He carried the payroll, priced the work and ran projects with crews of up to 125. Before that, he was a Red Seal journeyman electrician on the tools.
                </p>
                <p className="text-brand-slate leading-relaxed mb-6">
                  He has also led a project management office responsible for a $100M+ capital portfolio, and has spent more than 20 years in industrial operations and capital projects across energy, construction and manufacturing.
                </p>
                <p className="text-brand-slate leading-relaxed mb-6">
                  He holds an Executive MBA in finance from the Haskayne School of Business, where he was inducted into Beta Gamma Sigma.
                </p>
                <p className="text-brand-slate leading-relaxed mb-6">
                  What he learned running his own business is the reason LVRGWRKS exists. The answer to a business that has outgrown its owner is rarely more people or more software. It&apos;s a better way to operate, built with the people already there.
                </p>
                <p className="text-brand-slate leading-relaxed mb-8">
                  Jeremy leads every LVRGWRKS engagement personally.
                </p>
                <a
                  href="https://www.linkedin.com/in/jeremyredgate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-navy text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">What We Believe</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              Three principles that shape every engagement.
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              These aren't marketing lines. They're the rules we actually follow when we're inside a client's operation deciding what to build, what to leave alone, and what to walk away from.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">01</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Structure before speed</h3>
              <p className="text-brand-slate leading-relaxed">
                Most consultants make your existing system faster. We ask a different question first: is the structure itself economically viable under growth? If it's not, speeding it up just gets you to the cliff faster. We fix the structure, then we make it fast.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">02</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Operations first, tools second</h3>
              <p className="text-brand-slate leading-relaxed">
                We don't sell software and we don't start with AI. We fix how work and decisions move, and bring in technology only where it earns its place. Your leadership team stays accountable for the decisions that matter.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">03</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">If it doesn't move the P&L, it doesn't ship</h3>
              <p className="text-brand-slate leading-relaxed">
                We don't measure success in demos, dashboards, or pilot programs. We agree a baseline up front and report what changed against it, every month. No guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Why It Matters</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-8 leading-tight">
              Industrial businesses operate differently. <span className="text-brand-slate italic">We built LVRGWRKS for that.</span>
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">
              Most AI and automation firms were built inside the tech ecosystem. They know software, they know dashboards, and they know how to sell enterprise tools. They don't know what it feels like to run a 40-truck energy services company at 6am, or coordinate six subcontractors across a multi-site construction project. They don't know the operations. They know the tools.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">
              LVRGWRKS is built the other way around. Operations first, tools second. We work with owners and leadership teams of industrial businesses in manufacturing, construction, energy services and distribution across Canada. When you engage LVRGWRKS, you're not hiring a vendor who's going to learn your industry on your dime. You're adding a partner who already speaks the language.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed">
              What we build for your operation belongs to you from day one, and your data and your process are yours without condition. Where we deploy a LVRGWRKS product module, you hold a permanent licence to keep running it. No vendor lock-in. No dependency on us. The engagement can end at any time and your operation keeps running. That's not a risk reversal tactic. It's the only honest way to build what we build.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 leading-tight">
            Ready to close the gap<br />
            <span className="text-gray-400 italic">between intent and execution?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Start with a 30-minute call. You leave with a short written note and a straight answer on whether a diagnostic is worth doing. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <BookCallButton variant="custom" className="bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl" arrow={false} />
            <Link
              href="/capabilities"
              className="text-white text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


