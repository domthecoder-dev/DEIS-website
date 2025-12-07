import QuoteForm from '../../components/QuoteSection.jsx';
import { useState } from 'react';

const faqs = [
  { q: 'How long until I see results?', a: 'Realistic answer: 3-6 months' },
  { q: 'Will you guarantee a #1 ranking?', a: 'Answer: No ethical SEO can guarantee a ranking, but we guarantee to implement best practices.' },
];

export default function SEO() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get Found by the Customers<br />
            <span className="text-accent">Who Are Searching for You</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            SEO (Search Engine Optimization) is the process of improving your website's visibility in search engines like Google. It's how you attract organic (free) traffic.
          </p>
        </div>

        {/* Philosophy */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Our SEO Philosophy</h2>
          <p className="text-center">
            We do not use shady tricks or black-hat techniques. We build sustainable, white-hat SEO strategies that provide long-term results.
          </p>
        </div>

        {/* Audit Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Our SEO Audit Process</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              'Technical SEO Audit: We analyze your site\'s health: speed, mobile-friendliness, indexation, and site structure.',
              'On-Page SEO: We optimize your page content, titles, headings (H1, H2s), and meta descriptions with targeted keywords.',
              'Content Analysis: We advise on a content strategy that answers your audience\'s questions and targets valuable keywords.',
              'Local SEO (if applicable): We optimize your Google Business Profile and local citations to help you win local customers.',
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">One-Time SEO Audit:</h3>
            <p>A comprehensive report with actionable recommendations.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Ongoing SEO Management:</h3>
            <p>Monthly reporting, continuous optimization, and content strategy.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">SEO FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                >
                  <span className="font-medium">Q: {faq.q}</span>
                  <span>{openIndex === i ? '−' : '+'}</span>
                </button>
                {openIndex === i && (
                  <div className="p-4 bg-white">
                    <p>A: {faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div id="quote" className="bg-gradient-to-t from-gray-900 to-primary text-white py-16 rounded-lg">
            <QuoteForm />
        </div>
      </div>
    </div>
  );
}