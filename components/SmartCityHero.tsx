'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SmartCityHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,247,255,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(138,109,255,0.25),transparent_35%)]" />
      <div className="section relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
        >
          Creating Africa&apos;s Next Smart City
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          A state-of-the-art urban ecosystem fostering innovation, sustainability, and economic growth.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/masterplan" className="rounded-full bg-neon-cyan px-6 py-3 text-slate-900">Explore Masterplan</Link>
          <Link href="/investment" className="glass rounded-full px-6 py-3">Invest Now</Link>
          <Link href="/contact" className="glass rounded-full px-6 py-3">Partner With Us</Link>
        </div>
      </div>
    </section>
  );
}
