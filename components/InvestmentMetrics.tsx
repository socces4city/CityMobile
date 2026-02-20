'use client';

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { phase: 'Y1', irr: 16, equity: 2.8 },
  { phase: 'Y3', irr: 18, equity: 3.0 },
  { phase: 'Y6', irr: 20, equity: 3.3 },
  { phase: 'Y10', irr: 22, equity: 3.5 }
];

export default function InvestmentMetrics() {
  return (
    <section className="section">
      <div className="mb-8 flex flex-wrap gap-6">
        {['IRR: 16–22%', 'Equity Multiple: 2.8x–3.5x', 'Payback Period: 8–12 years'].map((metric) => (
          <div key={metric} className="glass rounded-2xl px-6 py-4 text-sm">{metric}</div>
        ))}
      </div>
      <div className="glass h-80 rounded-2xl p-6">
        <h3 className="mb-4 text-xl font-semibold">ROI Metrics Dashboard</h3>
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart data={data}>
            <XAxis dataKey="phase" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip />
            <Area type="monotone" dataKey="irr" stroke="#2DF7FF" fill="#2DF7FF33" />
            <Area type="monotone" dataKey="equity" stroke="#8A6DFF" fill="#8A6DFF33" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
