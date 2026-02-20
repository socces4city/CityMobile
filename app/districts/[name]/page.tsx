import { districtMap, districts } from '@/data/districts';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return districts.map((district) => ({ name: district.slug }));
}

export default function DistrictPage({ params }: { params: { name: string } }) {
  const district = districtMap[params.name];
  if (!district) return notFound();

  return (
    <section className="section">
      <h1 className="text-4xl font-bold">{district.name}</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-2 text-slate-300">{district.overview}</p>
          <p className="mt-4">Size: {district.size}</p>
          <p>Investment Value: {district.investmentValue}</p>
          <p>ROI: {district.roi}</p>
        </article>
        <article className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Key Facilities</h2>
          <ul className="mt-3 space-y-1 text-slate-300">{district.keyFacilities.map((item) => <li key={item}>• {item}</li>)}</ul>
          <h3 className="mt-5 font-semibold">Infrastructure</h3>
          <ul className="mt-3 space-y-1 text-slate-300">{district.infrastructure.map((item) => <li key={item}>• {item}</li>)}</ul>
        </article>
      </div>
      <div className="glass mt-6 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold">Image / Gallery</h2>
        <div className="mt-4 grid h-48 place-items-center rounded-xl border border-dashed border-white/20 text-sm text-slate-400">3D Model Reference: {district.modelRef}</div>
        <a href="/contact" className="mt-5 inline-block rounded-full bg-neon-cyan px-5 py-2 text-slate-900">Discuss Investment</a>
      </div>
    </section>
  );
}
