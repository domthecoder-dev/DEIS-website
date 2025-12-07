import QuoteForm from './QuoteForm.jsx';

export default function QuoteSection() {
  return (
    <section id="quote" className="py-16 bg-gradient-to-t from-gray-900 to-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get a <span className="text-accent">Free Quote!</span>
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Fill out the form below and we'll get back to you shortly
        </p>
        <QuoteForm />
        <p className="text-sm mt-6">
          We value your privacy and promise to keep your information secure
        </p>
        <p className="text-xs mt-2">© 2025 DE Innovative Solutions</p>
      </div>
    </section>
  );
}