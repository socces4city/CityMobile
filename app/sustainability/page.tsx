import ESGScorecard from '@/components/ESGScorecard';

export default function SustainabilityPage() {
  return (
    <>
      <section className="section">
        <h1 className="text-4xl font-bold">Sustainability (ESG)</h1>
        <p className="mt-4 text-slate-300">Urban forests, flood-resilient wetlands, solar grids, green parks, and carbon reduction strategy embedded in every district phase.</p>
      </section>
      <ESGScorecard />
    </>
  );
}
