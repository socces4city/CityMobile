import SmartCityHero from '@/components/SmartCityHero';
import DistrictCardGrid from '@/components/DistrictCardGrid';
import InvestmentMetrics from '@/components/InvestmentMetrics';
import InvestorCTA from '@/components/InvestorCTA';

export default function HomePage() {
  return (
    <>
      <SmartCityHero />
      <section className="section">
        <h2 className="text-3xl font-bold">Strategic Objectives</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          <li className="glass rounded-2xl p-5">10,000-hectare land unlock</li>
          <li className="glass rounded-2xl p-5">$2.5B follow-on investment trigger</li>
          <li className="glass rounded-2xl p-5">Attraction of universities, hospitals, tech firms</li>
        </ul>
      </section>
      <section className="section">
        <h2 className="text-3xl font-bold">Revenue Streams</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {['Land sales', 'PPP contracts', 'Joint ventures', 'Utilities provision', 'Property leases', 'Tourism development'].map((item) => (
            <span key={item} className="glass rounded-full px-4 py-2 text-sm">{item}</span>
          ))}
        </div>
      </section>
      <InvestmentMetrics />
      <DistrictCardGrid />
      <InvestorCTA />
    </>
  );
}
