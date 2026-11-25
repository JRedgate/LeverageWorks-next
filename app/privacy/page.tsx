import React from 'react';

const LAST_UPDATED = 'November 24, 2026';

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: 'What we collect',
    body: (
      <>
        <p>We collect what you choose to send us and basic information about how the site is used.</p>
        <ul>
          <li>The contact form and the call page form: your name, work email, company, role, city or region, your message and how you heard about us. Not every form asks for all of these.</li>
          <li>Booking a call: your name, email and the time you choose, entered on our booking page.</li>
          <li>Site use: pages viewed, clicks on our main buttons, approximate location, device and browser, collected by our analytics service. We do not send your name or email to it.</li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Why we collect it',
    body: <p>To reply to your enquiry, to arrange the call you asked for, and to understand how the site is used so we can improve it.</p>,
  },
  {
    heading: 'Who sees it',
    body: <p>LVRGWRKS, and the service providers described below, who process it for us. We do not sell your information or share it with anyone for their own marketing.</p>,
  },
  {
    heading: 'The services that process it for us',
    body: (
      <p>
        We use a small number of service providers to host this site, handle enquiry forms and bookings, and measure how the site is used. Some of them store or process information outside Canada. To ask about our policies and practices for those providers, contact Jeremy Redgate at{' '}
        <a href="mailto:jredgate@lvrgwrks.com" className="text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors">jredgate@lvrgwrks.com</a>.
      </p>
    ),
  },
  {
    heading: 'Where it is stored and for how long',
    body: (
      <p>
        These services store information on their own servers, some of them outside Canada. We keep enquiry details for as long as we are in contact with you and for up to 24 months after our last contact, then delete them.
      </p>
    ),
  },
  {
    heading: 'Access, correction and deletion',
    body: (
      <p>
        You can ask to see the personal information we hold about you, to correct it or to delete it. Email{' '}
        <a href="mailto:jredgate@lvrgwrks.com" className="text-brand-navy font-semibold underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors">jredgate@lvrgwrks.com</a>.
      </p>
    ),
  },
  {
    heading: 'Email',
    body: <p>We do not add you to a mailing list. We send marketing email only if you have expressly agreed to receive it, as Canada&apos;s anti-spam law requires.</p>,
  },
  {
    heading: 'Applicable law',
    body: <p>We handle personal information under Alberta&apos;s Personal Information Protection Act.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <header className="relative pt-24 sm:pt-40 pb-16 md:pt-56 md:pb-20 overflow-hidden bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-gold-text font-bold tracking-widest text-[11px] uppercase mb-6 block">Privacy</span>
            <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              How we handle your information.
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed">
              This page explains what LVRGWRKS collects through this site, why, and what you can ask us to do with it.
            </p>
            <p className="text-brand-slate text-sm mt-6">Last updated {LAST_UPDATED}</p>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl space-y-12 text-brand-slate text-lg leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3 [&_p+ul]:mt-4">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">{s.heading}</h2>
                {s.body}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
