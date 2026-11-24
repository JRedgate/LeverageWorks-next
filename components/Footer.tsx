import React from 'react';
import Link from 'next/link';
import { LwSymbol } from './Logo';
import { BookCallButton } from './BookCallButton';
import { ONE_LINER } from '@/lib/site';
import { CALL_PAGE } from '@/lib/booking';

const linkClass = 'hover:text-white transition-colors hover:translate-x-1 inline-block';
const headingClass = 'text-[10px] tracking-[0.3em] uppercase mb-6 text-brand-gold font-bold';

export const Footer: React.FC = () => (
  <footer className="bg-brand-navy text-white pt-20 pb-10">
    <div className="container mx-auto px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-3">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <LwSymbol color="#FFFFFF" dotColor="#94A3B8" className="w-8 h-8" />
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-brand-gold transition-colors">LVRGWRKS</span>
          </Link>
          <p className="text-gray-400 max-w-sm leading-relaxed text-sm mb-4">{ONE_LINER}</p>
          <a href="mailto:jredgate@lvrgwrks.com" className="text-brand-gold hover:text-white transition-colors text-sm font-medium">jredgate@lvrgwrks.com</a>
        </div>
        <div className="md:col-span-3">
          <h4 className={headingClass}>How we work</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href={CALL_PAGE} className={linkClass}>The 30-minute call</Link></li>
            <li><Link href="/60-day-test" className={linkClass}>The 60-Day Test</Link></li>
            <li><Link href="/capabilities" className={linkClass}>How we work</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className={headingClass}>Industries</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/industries/manufacturing" className={linkClass}>Manufacturing</Link></li>
            <li><Link href="/industries/construction" className={linkClass}>Construction</Link></li>
            <li><Link href="/industries/energy-services" className={linkClass}>Energy Services</Link></li>
            <li><Link href="/industries/distribution" className={linkClass}>Distribution</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className={headingClass}>Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/firm" className={linkClass}>The Firm</Link></li>
            <li><Link href="/insights" className={linkClass}>Insights</Link></li>
            <li><Link href="/faq" className={linkClass}>FAQ</Link></li>
            <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            <li><Link href="/privacy" className={linkClass}>Privacy</Link></li>
            <li>
              <a href="https://www.linkedin.com/company/lvrgwrks/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 group">
                LinkedIn
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-brand-gold group-hover:text-white transition-colors">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className={headingClass}>Headquarters</h4>
          <p className="text-sm text-gray-400">Calgary, AB</p>
          <p className="text-sm text-gray-400">Canada</p>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} LVRGWRKS (LeverageWorks)</p>
        <BookCallButton variant="linkOnDark" />
      </div>
    </div>
  </footer>
);
