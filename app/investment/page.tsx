import InvestmentMetrics from '@/components/InvestmentMetrics';
import InvestorCTA from '@/components/InvestorCTA';
import DownloadAllResources from '@/components/DownloadAllResources';

export default function InvestmentPage() {
  return (
    <>
      <section className="section">
        <h1 className="text-4xl font-bold">Investment</h1>
        <p className="mt-4 text-slate-300">Investment vehicles: PPP, BOT, REITs, and Joint Ventures built on transparent governance.</p>
      </section>
      <InvestmentMetrics />
      <InvestorCTA />
      <DownloadAllResources />
    </>
  );
}
