'use client';

import React, { useRef, useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvjrrod';
const BOOKING_EMBED_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0rGF_hvzXqPgSzVwcMgSlONFZ6qQFEFvOP38w8DPFBVYWFmTOLTXFac4kwtTbvLj3LTiNCN3Yq?gv=true';
const BOOKING_SHORT_URL = 'https://calendar.app.google/A4H4KiH9CHsWfSM36';

// GA4 loads afterInteractive, so window.gtag can still be undefined when the
// calendar iframe finishes loading. audit_booking_view is the denominator for
// reading this page, so wait for gtag rather than dropping the event.
function sendWhenReady(event: string, params: Record<string, unknown>) {
  let tries = 0;
  const attempt = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, params);
      return;
    }
    tries += 1;
    if (tries < 20) window.setTimeout(attempt, 300);
  };
  attempt();
}

export default function LeverageAuditPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const bookingViewSent = useRef(false);

  const handleEmbedLoad = () => {
    if (bookingViewSent.current) return;
    bookingViewSent.current = true;
    sendWhenReady('audit_booking_view', { page_path: '/leverage-audit' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Leverage Audit: Send me times',
          source: 'Leverage Audit booking page fallback',
          ...formData,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '' });
        sendWhenReady('audit_fallback_submit', { page_path: '/leverage-audit' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <header className="relative pt-40 pb-20 md:pt-44 md:pb-20 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm px-4 py-1.5 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Free. No Commitment</span>
              </div>
              <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">The Leverage Audit.</h1>
              <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">A free 60-minute working session where we map your highest-friction workflows, put a real dollar figure on the labour cost, and outline where the fix sits before the call ends.</p>
              <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">You leave with a written summary of where your operations are bleeding capacity and what it is costing you. No pitch. No generic presentation. No commitment required.</p>
              <a href="#book" className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group">
                Request Free Leverage Audit
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <div id="book" className="scroll-mt-28">
              <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden">
                <iframe
                  src={BOOKING_EMBED_URL}
                  title="Book a 60-Minute Leverage Audit"
                  onLoad={handleEmbedLoad}
                  className="block w-full h-[620px] md:h-[700px] border-0"
                />
              </div>
              <p className="text-brand-slate text-sm mt-4">
                Calendar not showing?{' '}
                <a
                  href={BOOKING_SHORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors"
                >
                  Book on Google Calendar instead
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-2xl mx-auto">
            {status === 'success' ? (
              <div className="bg-brand-surface p-8 md:p-12 rounded-xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Times are on the way</h3>
                <p className="text-brand-slate leading-relaxed">
                  We&apos;ll email you three times that work within one business day. If none of them suit, reply and we&apos;ll find one that does.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-surface p-8 md:p-12 rounded-xl border border-gray-100">
                <h2 className="font-display font-bold text-2xl text-brand-navy mb-8">Can&apos;t find a time that works?</h2>
                <div className="mb-6">
                  <label htmlFor="fallback-name" className="block text-xs font-bold uppercase tracking-widest text-brand-slate mb-2">Name</label>
                  <input id="fallback-name" type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <div className="mb-6">
                  <label htmlFor="fallback-email" className="block text-xs font-bold uppercase tracking-widest text-brand-slate mb-2">Work email</label>
                  <input id="fallback-email" type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <div className="mb-8">
                  <label htmlFor="fallback-company" className="block text-xs font-bold uppercase tracking-widest text-brand-slate mb-2">Company</label>
                  <input id="fallback-company" type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
                <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-navy text-white py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'submitting' ? 'Sending...' : 'Send me times'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">What Happens</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">Three things you walk away with</h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">The Leverage Audit is a working session, not a sales call. Every minute is focused on your operation specifically.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6"><span className="text-brand-gold font-display font-bold text-xl">01</span></div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Workflow map</h3>
                <p className="text-brand-slate leading-relaxed text-sm">We work through your current workflows together, where data moves manually, where your systems are not connected, and where your team is filling the gaps. This is specific to your business, not a generic template. The map becomes the foundation for everything that follows.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6"><span className="text-brand-gold font-display font-bold text-xl">02</span></div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Labour cost quantification</h3>
                <p className="text-brand-slate leading-relaxed text-sm">We translate every manual workflow into an annual dollar cost using your actual headcount and fully loaded labour rates. For most mid-market companies this number is larger than expected, and it becomes the baseline against which any automation investment gets measured. You leave knowing what the current state is actually costing you.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6"><span className="text-brand-gold font-display font-bold text-xl">03</span></div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Automation architecture outline</h3>
                <p className="text-brand-slate leading-relaxed text-sm">Before the call ends, we outline what an automation architecture would look like for your highest-cost workflows, which integrations to build, which processes to automate first, and what the ROI case looks like before any work begins. You leave with a conceptual blueprint, not a promise to send a proposal.</p>
              </div>
            </div>
            <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white text-center">
              <h3 className="font-display font-bold text-2xl mb-4">You own the output whether or not you engage us</h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">The workflow map, cost quantification, and automation architecture outline are yours to keep. If the numbers make sense and you want to move forward, we talk about what an engagement looks like. If not, you leave with a clear operational picture you did not have before. Either way, the session pays for itself.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Who This Is For</span>
                <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Founders, owners, and COOs who know something is costing them but cannot see exactly where</h2>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">The Leverage Audit is designed for operators running mid-market companies in Alberta who are feeling the specific pain of coordination drag, headcount pressure, or margin leaking out, and want a clear picture of what is actually driving it before committing to anything.</p>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">You do not need to know anything about AI or automation before the session. You need to know your business and be willing to walk through how work actually gets done day to day. We handle the diagnostic framework.</p>
                <p className="text-brand-slate text-lg leading-relaxed">LVRGWRKS works with companies in construction, energy services, manufacturing, and property management across Calgary, Alberta, and Western Canada. Typically 20 to 250 employees, $5M to $150M in revenue.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Good fit for the Audit if:</h3>
                  <div className="space-y-3">
                    {['Your team is spending meaningful time on manual reporting, data entry, or status tracking','Your platforms do not connect to each other and your people bridge the gap','You have grown the business but headcount has grown faster than revenue','You are ready to use AI seriously but are not sure where to start','You have tried automation before and it did not stick, and you want to understand why'].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-brand-slate text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Probably not the right fit if:</h3>
                  <div className="space-y-3">
                    {['Your primary need is software development capacity rather than operational strategy','Your organization has fewer than 15 employees and the operational complexity is not yet creating meaningful drag'].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        <span className="text-brand-slate text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">What Comes Next</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">If you decide to move forward</h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">The Audit is the starting point for every LVRGWRKS engagement. If the numbers make sense, here is what the path looks like.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">First bottleneck solved in 60 days</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Every LVRGWRKS engagement starts with a defined first deliverable. Your highest-value automation opportunity is designed and deployed within 60 days of engagement start. You see a working system before the first monthly Value Creation Report is due.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Monthly Value Creation Reports</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Every 30 days you receive a Value Creation Report showing exactly what was recovered: labour hours, automation performance, and rolling ROI against the engagement cost. We do not estimate whether the system is working. We document it, every month.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">It keeps running without us</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Everything we build for your operation is client-owned from day one, and your data is yours without condition. Where an engagement uses a LVRGWRKS product module, you hold a permanent licence to keep running it. No lock-in. No dependency on LVRGWRKS to keep the systems running. The engagement can end at any time and the systems continue operating on your infrastructure.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Embedded, not advisory</h3>
                <p className="text-brand-slate text-sm leading-relaxed">LVRGWRKS operates as your fractional CTO and operating partner, not a consulting firm that delivers a report. We attend leadership meetings, sit inside operational decisions, and stay accountable to outcomes, not just reports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Book your Leverage Audit.</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-4 text-lg leading-relaxed">60 minutes. No cost. No commitment. You leave with a clear picture of where your operations are costing you more than they should.</p>
          <p className="text-gray-500 max-w-xl mx-auto mb-12 text-base leading-relaxed">Sessions available for founders, owners, and COOs of mid-market companies in Calgary, Alberta, and Western Canada.</p>
          <a href="#book" className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group">
            Request Free Leverage Audit
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <p className="text-gray-500 text-sm mt-6">Or email directly: jredgate@lvrgwrks.com</p>
        </div>
      </section>
    </>
  );
}


