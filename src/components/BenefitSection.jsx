import { Zap, Shield, Globe, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Fast-Loading',
    desc: 'Do not lose customers to slow loading speeds.',
    highlight: false,
    border: true,
  },
  {
    icon: Globe,
    title: 'Uniquely Yours',
    desc: 'Break free from generic templates.',
    highlight: false,
    border: true,
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Secure, stable and scalable code.',
    highlight: false,
    border: true,   // ← NEW: Border + hover
  },
  {
    icon: Smartphone,
    title: 'Mobile-Perfect',
    desc: 'Flawless on Every Device',
    highlight: false,
    border: true,   // ← NEW: Border + hover
  },
];

export default function BenefitSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tired of a website that is <span className="text-accent">slow, insecure, and looks just like your competitor's</span>?
          </h2>
          <p className="text-xl text-gray-700">We build custom websites that are:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`
                text-center p-6 rounded-lg transition-all duration-300
                ${benefit.highlight
                  ? 'bg-white shadow-lg border-2 border-accent'
                  : benefit.border
                  ? 'bg-white shadow border-2 border-transparent hover:border-accent hover:shadow-xl hover:-translate-y-1'
                  : 'bg-white shadow'
                }
              `}
            >
              <benefit.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}