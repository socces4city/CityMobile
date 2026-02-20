import InfrastructureStack from '@/components/InfrastructureStack';

export default function InfrastructurePage() {
  return (
    <>
      <section className="section">
        <h1 className="text-4xl font-bold">Infrastructure</h1>
        <p className="mt-4 text-slate-300">Integrated physical and digital utility systems for resilient growth.</p>
      </section>
      <InfrastructureStack />
    </>
  );
}
