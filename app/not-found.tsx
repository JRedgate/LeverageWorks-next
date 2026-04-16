import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-display font-bold text-6xl text-brand-navy mb-4">404</h1>
      <p className="text-brand-slate text-lg mb-8">This page does not exist.</p>
      <Link href="/" className="bg-brand-navy text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-slate transition-all">
        Back to Home
      </Link>
    </div>
  );
}


