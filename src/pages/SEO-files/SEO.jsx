import React from 'react';
import "./SEO.css";

function SEO() {
  return (
    <div className="SEO-page-container">
      <div className="SEO-hero">
        <div className="SEO-hero-content">
          <h1>Get Found by the Customers Who Are Searching for You</h1>
        </div>
        
      </div>
      <div className="What-is-SEO">
        <h1>What is SEO?</h1>
        <p>SEO (Search Engine Optimization) is the process of improving your website's visibility in search engines like Google. It's how you attract organic (free) traffic.</p>
      </div>
      <div className="section-normalbackground">
        <div className="SEO-philo">
          <h1>Our SEO Philosophy</h1>
          <p>We don't use shady tricks or black-hat techniques. We build sustainable, white-hat SEO strategies that provide long-term results.</p>
        </div>

        <div className="SEO-audit">
          <h1 className="Audit-title">Our SEO Audit Process</h1>
          <ul className="Audit-ul">
            <li className="Audit-li">Technical SEO Audit: We analyze your site's health: speed, mobile-friendliness, indexation, and site structure.</li>
            <li className="Audit-li">On-Page SEO: We optimize your page content, titles, headings (H1, H2s), and meta descriptions with targeted keywords.</li>
            <li className="Audit-li">Content Analysis: We advise on a content strategy that answers your audience's questions and targets valuable keywords.</li>
            <li className="Audit-li">Local SEO (if applicable): We optimize your Google Business Profile and local citations to help you win local customers.</li>
          </ul>
        </div>
      </div>
      <h1 className="SEO-packages-title">Packages</h1>
      <div className="SEO-packages">
        <div className="package">
          <h1 className="package-title">One-Time SEO Audit:</h1>
          <p className="package-description">A comprehensive report with actionable recommendations.</p>
        </div>
        <div className="package">
          <h1 className="package-title">Ongoing SEO Management:</h1>
          <p className="package-description">Monthly reporting, continuous optimization, and content strategy.</p>
        </div>
      </div>
      <div className="SEO-FAQ">
        <h1>SEO FAQ</h1>
        <div className="FAQ-item">
          <div className="FAQ-item-c FAQ-question-c">
            <p className="FAQ-icon">Q:</p>
            <p className="FAQ-question">How long until I see results?</p>
          </div>
          <div className="FAQ-item-c FAQ-answer-c">
            <p className="FAQ-icon">A:</p>
            <p className="FAQ-answer">Realistic answer: 3-6 months</p>
          </div>
        </div>
        <div className="FAQ-item">
          <div className="FAQ-item-c FAQ-question-c">
            <p className="FAQ-icon">Q:</p>
            <p className="FAQ-question">Will you guarantee a #1 ranking?</p>
          </div>
          <div className="FAQ-item-c FAQ-answer-c">
            <p className="FAQ-icon">A:</p>
            <p className="FAQ-answer">Answer: No ethical SEO can guarantee a ranking, but we guarantee to implement best practices.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SEO














