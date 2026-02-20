const updates = [
  ['Milestone', 'Primary access corridor reaches 65% completion'],
  ['Partnership', 'University consortium signs Education City MoU'],
  ['Construction', 'Flood-resilient wetland package commissioned'],
  ['Investor', 'Phase II private capital expressions exceed target']
];

export default function NewsGrid() {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold">News & Updates</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {updates.map(([tag, title]) => (
          <article key={title} className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-widest text-neon-cyan">{tag}</p>
            <h3 className="mt-2 text-xl">{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
