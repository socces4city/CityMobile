import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-slate-300">Investor inquiry, partnership requests, and general contact channels.</p>
      </section>
      <ContactForm />
    </>
  );
}
