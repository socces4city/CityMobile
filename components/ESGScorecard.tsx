'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { metric: 'Urban Forest', score: 84 },
  { metric: 'Flood Resilience', score: 80 },
  { metric: 'Solar Grid', score: 88 },
  { metric: 'Green Parks', score: 82 },
  { metric: 'Carbon Reduction', score: 86 }
];

export default function ESGScorecard() {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold">ESG Scorecard</h2>
      <div className="glass mt-6 h-80 rounded-2xl p-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="metric" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip />
            <Bar dataKey="score" fill="#40FFB4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
