import QuoteForm from '../../components/QuoteForm.jsx';

export default function Web() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Beyond Templates<br />
            <span className="text-accent">Custom-Built Websites Engineered for Growth</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Our custom web development process bypasses the limitations of off-the-shelf templates and drag-and-drop builders. We write clean, scalable code from the ground up, providing ultimate creative freedom and functionality. This ensures your website is not only visually distinctive but also built to perform flawlessly and evolve with your business.
          </p>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Our Process</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              { title: 'Discovery & Strategy', desc: 'We do not just design pages; we architect digital experiences. We start by understanding your business goals, target audience, and brand voice.' },
              { title: 'Design & Prototyping', desc: 'You will see interactive mockups before a single line of code is written. We design for user experience (UX) and conversion, not just looks.' },
              { title: 'Built with Modern Technology', desc: 'React.js / Vite.js: Faster loading times, smoother interactions, and a more app-like feel for your users.' },
              { title: 'Custom Code', desc: 'Every line of code is written from scratch for your project. This means no bloated, unnecessary code—just lean, efficient, and purposeful functionality.' },
              { title: 'Testing & Quality Assurance', desc: 'We rigorously test on all devices and browsers to ensure flawless performance.' },
              { title: 'Launch & Beyond', desc: 'We handle deployment and provide documentation.' },
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-primary">{step.title}:</h3>
                <p className="mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Table */}
        <div className="mb-16">
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="p-4 font-bold">Fully Responsive Design</td>
                  <td className="p-4">Looks perfect on desktop, mobile and tablet.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold">Lightning-fast Performance</td>
                  <td className="p-4">Lower bounce rates, higher SEO ranking, better user experience.</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-4 font-bold">SEO-Friendly Architecture</td>
                  <td className="p-4">Built with clean code and proper structure for search engines to love.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold">Scalable Code</td>
                  <td className="p-4">Your website can grow with your business without needing a complete rebuild.</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-4 font-bold">Ongoing Support & Maintenance</td>
                  <td className="p-4">Peace of mind with our support plans.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quote */}
        <div id="quote" className="bg-gradient-to-t from-gray-900 to-primary text-white py-16 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a Free Quote!</h2>
            <p className="mb-8 max-w-2xl mx-auto">Fill out the form below and we'll get back to you shortly</p>
            <QuoteForm />
            <p className="text-sm mt-6">We value your privacy and promise to keep your information secure</p>
            <p className="text-xs mt-2">© 2025 DE Innovative Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}