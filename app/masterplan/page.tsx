import dynamic from 'next/dynamic';

const Masterplan3D = dynamic(() => import('@/components/Masterplan3D'), {
  ssr: false,
  loading: () => <section className="section">Loading 3D masterplan...</section>
});

export default function MasterplanPage() {
  return (
    <>
      <section className="section pb-0">
        <h1 className="text-4xl font-bold">Integrated 3D Masterplan</h1>
        <p className="mt-3 text-slate-300">Interactive terrain, district zoning, infrastructure layers, and flythrough controls.</p>
      </section>
      <Masterplan3D />
    </>
  );
}
