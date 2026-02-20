export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="section flex flex-col justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} CITI X Smart City Development.</p>
        <p className="text-sm text-slate-500">Built for institutional investors, partners, and urban innovators.</p>
      </div>
    </footer>
  );
}
