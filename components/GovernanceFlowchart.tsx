export default function GovernanceFlowchart() {
  const nodes = ['State Authority', 'SPV Governance Board', 'PPP/BOT Operators', 'REIT & Institutional Investors'];
  return (
    <section className="section">
      <h2 className="text-3xl font-bold">Governance Architecture</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {nodes.map((node, index) => (
          <div key={node} className="glass rounded-2xl p-4 text-center">
            <p className="text-sm text-slate-400">Step {index + 1}</p>
            <p className="mt-2 font-medium">{node}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
