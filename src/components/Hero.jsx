export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-gray-900 text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Business is <span className="text-accent">Unique</span>. Your Website Should Be Too.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          DE Innovative Solutions creates fully custom, hand-coded websites guaranteed to score{' '}
          <strong>90+ on Google Speed Tests</strong>—because your first impression should be fast, secure, and unlike anyone else's.
        </p>
        <a
          href="#quote"
          className="btn-primary text-lg px-8 py-4 inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}