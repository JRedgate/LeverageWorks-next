'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { sendWhenReady } from '@/components/AnalyticsEvents';
import { BookCallButton } from '@/components/BookCallButton';
import { BOOKING_LABEL, BOOKING_URL } from '@/lib/booking';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvjrrod';
// The embeddable view of the same Google Calendar appointment schedule that
// BOOKING_URL opens.
const BOOKING_EMBED_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0rGF_hvzXqPgSzVwcMgSlONFZ6qQFEFvOP38w8DPFBVYWFmTOLTXFac4kwtTbvLj3LTiNCN3Yq?gv=true';

const steps = [
  { n: '01', title: 'You tell us what keeps coming back to you', body: 'The decisions, approvals and problems that still land on your desk, and what they are getting in the way of.' },
  { n: '02', title: 'We ask questions and listen', body: 'How the work and the decisions move today, where they stall, and who they wait on. No pitch and no generic presentation.' },
  { n: '03', title: 'You get a short written note', body: 'What we heard, and a straight answer on whether a diagnostic is worth doing. No obligation either way.' },
];

export default function CallPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const bookingViewSent = useRef(false);

  // audit_booking_view is the denominator for reading this page, so it waits
  // for gtag rather than dropping the event.
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
          _subject: '30-minute call: Send me times',
          source: 'Call page fallback form',
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
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Free. No obligation</span>
              </div>
              <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">Book a 30-minute call.</h1>
              <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">Tell us what keeps landing on your desk. Thirty minutes, with Jeremy.</p>
              <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-8">You get a short written note of what we heard and whether a diagnostic is worth doing. No obligation.</p>
              <div className="flex items-center gap-4 mb-10">
                <img
                  src="/jeremy-redgate-square.jpg"
                  alt="Jeremy Redgate"
                  width={480}
                  height={480}
                  loading="eager"
                  className="w-16 h-16 shrink-0 rounded-full"
                />
                <div>
                  <p className="text-brand-navy font-semibold">You&apos;ll be speaking with Jeremy Redgate</p>
                  <p className="text-brand-slate text-sm">Founder. More than 20 years in industrial operations and capital projects.</p>
                </div>
              </div>
              <BookCallButton variant="gold" />
            </div>
            <div id="book" className="scroll-mt-28">
              <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden">
                <iframe
                  src={BOOKING_EMBED_URL}
                  title={BOOKING_LABEL}
                  onLoad={handleEmbedLoad}
                  className="block w-full h-[620px] md:h-[700px] border-0"
                />
              </div>
              <p className="text-brand-slate text-sm mt-4">
                Calendar not showing?{' '}
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors"
                >
                  Open the booking page in a new tab
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28 bg-white">
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
                <h2 className="font-display font-bold text-2xl text-brand-navy mb-3">Prefer to write?</h2>
                <p className="text-brand-slate mb-8">Leave your details and we&apos;ll email you three times that work.</p>
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
                <p className="text-brand-slate text-xs mt-4">
                  We use these details only to reply to you. See our{' '}
                  <Link href="/privacy" className="underline decoration-brand-gold underline-offset-2 hover:text-brand-navy">privacy notice</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">What Happens</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">Thirty minutes, then a short written note</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.n} className="bg-white p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6"><span className="text-brand-gold font-display font-bold text-xl">{s.n}</span></div>
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-4">{s.title}</h3>
                  <p className="text-brand-slate leading-relaxed text-sm">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">If It Makes Sense</span>
            <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">What comes after the call</h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">
              <strong className="text-brand-navy">Run the diagnostic.</strong> A fixed-scope look at where decisions and handoffs stall and what that costs your business. The findings are yours whether or not you continue.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed">
              <strong className="text-brand-navy">Move it into the business.</strong> A monthly operating partnership that works the agreed priorities with your team and reports what changed each month.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">What keeps landing on your desk that shouldn&apos;t?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">Thirty minutes. You leave with a short written note and a straight answer on whether a diagnostic is worth doing. No obligation.</p>
          <BookCallButton variant="gold" />
          <p className="text-gray-500 text-sm mt-6">Or email directly: jredgate@lvrgwrks.com</p>
        </div>
      </section>
    </>
  );
}
