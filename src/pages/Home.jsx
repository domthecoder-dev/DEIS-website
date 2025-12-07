import Hero from '../components/Hero.jsx';
import BenefitSection from '../components/BenefitSection.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import FitSection from '../components/FitSection.jsx';
import QuoteSection from '../components/QuoteSection.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitSection />
      <ProcessSection />
      <FitSection />
      <QuoteSection />
    </>
  );
}