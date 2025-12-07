import QuoteForm from '../../components/QuoteSection.jsx';

export default function Hosting() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Stress-Free, Professional<br />
            <span className="text-accent">Hosting & Maintenance</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Focus on your business while we ensure your website is secure, blazing-fast, and always online.
          </p>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '⚡', title: 'Blazing-Fast Performance', desc: 'Our hosting infrastructure is optimized for speed, ensuring your custom site loads in milliseconds to keep visitors engaged.' },
              { icon: '🛡️', title: 'Robust Security & Daily Backups', desc: 'Sleep soundly with enterprise-grade security monitoring, malware scanning, and daily automated backups. Your website is protected and always recoverable.' },
              { icon: '📈', title: 'Reliable 99.9% Uptime', desc: 'Your website is your hardest-working employee. We ensure it\'s always open for business with a guaranteed 99.9% uptime.' },
              { icon: '🎯', title: 'Expert Support', desc: 'Get help from the team who built your site, not a generic support desk. We know your website inside and out.' },
              { icon: '📊', title: 'Scalable Resources', desc: 'Your hosting grows with your business. Handle traffic spikes with ease.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl text-primary mb-2">{item.title}:</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Basic */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Basic Care Plan (R199/pm):</h3>
            <ul className="space-y-2">
              <li>Professional Hosting</li>
              <li>SSL Certificate</li>
              <li>Daily Backups</li>
              <li>Uptime Monitoring</li>
              <li>Basic Security Scanning</li>
            </ul>
          </div>

          {/* Growth */}
          <div className="bg-accent text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Growth Plan (R499/pm):</h3>
            <p className="mb-4">Everything in Basic +</p>
            <ul className="space-y-2">
              <li>Performance Optimization</li>
              <li>Premium Security Suite</li>
              <li>Email Support</li>
              <li>1 hour of minor changes/month (e.g., text updates, new photos)</li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Enterprise Plan (R899/pm):</h3>
            <p className="mb-4">Everything in Growth +</p>
            <ul className="space-y-2">
              <li>Priority Support</li>
              <li>Advanced Performance Monitoring</li>
              <li>3 hours of changes/month</li>
              <li>Monthly Performance Reports</li>
            </ul>
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