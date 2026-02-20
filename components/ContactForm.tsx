'use client';

export default function ContactForm() {
  return (
    <section className="section grid gap-6 lg:grid-cols-2">
      <form className="glass space-y-4 rounded-2xl p-6">
        <h2 className="text-3xl font-bold">Contact CITI X</h2>
        {['Name', 'Email', 'Organization', 'Interest Type'].map((field) => (
          <input key={field} className="w-full rounded-lg border border-white/20 bg-slate-900/40 p-3" placeholder={field} required />
        ))}
        <textarea className="h-28 w-full rounded-lg border border-white/20 bg-slate-900/40 p-3" placeholder="Message" required />
        <button className="rounded-full bg-neon-cyan px-6 py-3 text-slate-900" type="submit">Submit Inquiry</button>
      </form>
      <div className="glass rounded-2xl p-6">
        <h3 className="text-2xl font-semibold">Visit & Tour</h3>
        <p className="mt-2 text-slate-300">Book a guided site tour and investment briefing.</p>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/20">
          <iframe
            className="h-64 w-full"
            src="https://maps.google.com/maps?q=Ogun%20State%20Nigeria&t=&z=8&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            title="CITI X Map"
          />
        </div>
      </div>
    </section>
  );
}
