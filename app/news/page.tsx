import NewsGrid from '@/components/NewsGrid';

export default function NewsPage() {
  return (
    <>
      <section className="section">
        <h1 className="text-4xl font-bold">News / Updates</h1>
        <p className="mt-4 text-slate-300">Track milestones, partnerships, construction updates, and investor announcements.</p>
      </section>
      <NewsGrid />
    </>
  );
}
