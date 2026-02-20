import Link from 'next/link';
import { districts } from '@/data/districts';

export default function DistrictCardGrid() {
  return (
    <section id="districts" className="section">
      <h2 className="text-3xl font-bold">Districts</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {districts.map((district) => (
          <article key={district.slug} className="glass rounded-2xl p-5">
            <h3 className="text-xl font-semibold">{district.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{district.overview}</p>
            <p className="mt-3 text-sm">Value: {district.investmentValue} · ROI: {district.roi}</p>
            <Link className="mt-4 inline-block text-neon-cyan" href={`/districts/${district.slug}`}>View District →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
