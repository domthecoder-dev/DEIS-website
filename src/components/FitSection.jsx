export default function FitSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          Is DEIS <span className="text-accent">Right For You</span>?
        </h2>
        <p className="text-xl max-w-3xl mx-auto">
          We are the perfect fit for businesses that:
        </p>
        <ul className="mt-6 space-y-3 text-lg">
          <li><strong>Value quality and customization</strong> over cheap, quick fixes.</li>
          <li>See their website as a <strong>key investment</strong> in their growth.</li>
          <li>Are ready to <strong>upgrade from a generic template</strong> or outdated site.</li>
          <li>Want a <strong>true partner</strong>, not just a coder.</li>
        </ul>
      </div>
    </section>
  );
}