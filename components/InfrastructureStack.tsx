const physical = ['Roads', 'Water systems', 'Power backbone', 'Flood control', 'Land grading'];
const digital = ['Fiber backbone', 'Smart grid', 'Connectivity systems', 'Utility ducting', 'Smart integration tech'];

export default function InfrastructureStack() {
  return (
    <section className="section grid gap-6 md:grid-cols-2">
      <div className="glass rounded-2xl p-6">
        <h3 className="text-2xl font-semibold">Physical Infrastructure</h3>
        <ul className="mt-4 space-y-2 text-slate-300">{physical.map((item) => <li key={item}>• {item}</li>)}</ul>
      </div>
      <div className="glass rounded-2xl p-6">
        <h3 className="text-2xl font-semibold">Digital Infrastructure</h3>
        <ul className="mt-4 space-y-2 text-slate-300">{digital.map((item) => <li key={item}>• {item}</li>)}</ul>
      </div>
    </section>
  );
}
