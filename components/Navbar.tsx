import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const links = [
  ['About', '/about'],
  ['Masterplan', '/masterplan'],
  ['Districts', '/#districts'],
  ['Investment', '/investment'],
  ['Governance', '/governance'],
  ['Infrastructure', '/infrastructure'],
  ['Sustainability', '/sustainability'],
  ['News', '/news'],
  ['Contact', '/contact']
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-xl font-semibold tracking-wider text-neon-cyan">CITI X</Link>
        <div className="hidden gap-5 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-slate-200 hover:text-neon-cyan">
              {label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
