const steps = [
  { title: 'Planning: We Listen', desc: 'We dive deep to understand your brand and goals.' },
  { title: 'Development: We Build', desc: 'You see your vision come to life with weekly updates.' },
  { title: 'Testing: We Perfect', desc: 'We rigorously test every detail on all devices.' },
  { title: 'Deployment: We Launch', desc: 'Your new website goes live, hassle-free.' },
];

export default function ProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Our <span className="text-accent">Stress-Free Process</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}