import React from 'react';
import './Hosting.css';
import GetAQuote from '../../compontents/GetAQuote/GetAQuote';

function Hosting() {
  return (
    <div className="Hosting-page-container">
      <div className="Hosting-hero">
        <div className='Hosting-hero-content'>
          <h1>Stress-Free, Professional Hosting & Maintenance</h1>
          <p>Focus on your business while we ensure your website is secure, blazing-fast, and always online.</p>
        </div>
      </div>
      <div className="What-you-get">
        <h1>What You Get</h1>
        <p>We handle the technical complexities of hosting so you do not have to. Every client enjoys a managed hosting environment optimized for the custom websites we build, featuring:</p>
        <ul>
          <li>⚡ Blazing-Fast Performance: Our hosting infrastructure is optimized for speed, ensuring your custom site loads in milliseconds to keep visitors engaged.</li>
          <li>🛡️ Robust Security & Daily Backups: Sleep soundly with enterprise-grade security monitoring, malware scanning, and daily automated backups. Your website is protected and always recoverable.</li>
          <li>🔒 Reliable 99.9% Uptime: Your website is your hardest-working employee. We ensure it's always open for business with a guaranteed 99.9% uptime.</li>
          <li>🤝 Expert Support: Get help from the team who built your site, not a generic support desk. We know your website inside and out.</li>
          <li>📈 Scalable Resources: Your hosting grows with your business. Handle traffic spikes with ease.</li>
        </ul>
      </div>
      <div className="Packages-container">
        <div className="host-package">
          <h1 className="package-title">Basic Care Plan (R199/pm):</h1>
          <p className="package-benefits">
            <ul className="package-benefits-ul">
              <li className="benefit">Professional Hosting</li>
              <li className="benefit"> SSL Certificate</li>
              <li className="benefit">Daily Backups</li>
              <li className="benefit">Uptime Monitoring</li>
              <li className="benefit">Basic Security Scanning</li>
            </ul>
          </p>
        </div>
        <div className="host-package">
          <h1 className="package-title">Growth Plan (R499/pm):</h1>
          <p className="package-benefits">
            <ul className="package-benefits-ul">
              <li className="benefit">Everything in Basic +</li>
              <li className="benefit">Performance Optimization</li>
              <li className="benefit">Premium Security Suite</li>
              <li className="benefit">Email Support</li>
              <li className="benefit">1 hour of minor changes/month (e.g., text updates, new photos)</li>
            </ul>
          </p>
        </div>
        <div className="host-package">
          <h1 className="package-title">Enterprise Plan (R899/pm):</h1>
          <p className="package-benefits">
            <ul className="package-benefits-ul">
              <li className="benefit">Everything in Growth +</li>
              <li className="benefit">Priority Support</li>
              <li className="benefit">Advanced Performance Monitoring</li>
              <li className="benefit">3 hours of changes/month</li>
              <li className="benefit">Monthly Performance Reports</li>
            </ul>
          </p>
        </div>
      </div>
      <GetAQuote />
    </div>
  )
}

export default Hosting
