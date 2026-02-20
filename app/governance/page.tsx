import GovernanceFlowchart from '@/components/GovernanceFlowchart';

export default function GovernancePage() {
  return (
    <>
      <section className="section">
        <h1 className="text-4xl font-bold">Governance</h1>
        <p className="mt-4 text-slate-300">CITI X combines Build-Operate-Transfer structures, public-private partnerships, Special Administration Zone mechanics, and REIT layers for capital efficiency.</p>
      </section>
      <GovernanceFlowchart />
    </>
  );
}
