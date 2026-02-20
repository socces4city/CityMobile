import Link from 'next/link';
import { downloadAssets } from '@/data/downloads';

export default function InvestorCTA() {
  return (
    <section className="section">
      <div className="glass rounded-3xl p-8 text-center shadow-glow">
        <h3 className="text-3xl font-bold">Investor Gateway</h3>
        <p className="mt-3 text-slate-300">Streamlined access, partnership opportunities, and transparent governance.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className="rounded-full bg-neon-cyan px-6 py-3 text-slate-900">Request Prospectus</Link>
          <a className="glass rounded-full px-6 py-3" href={downloadAssets[0].file} download>Download Prospectus</a>
        </div>
      </div>
    </section>
  );
}
