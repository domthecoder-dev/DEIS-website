// src/pages/PricingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Collapsible from '../compontents/Collapsible'; // NEW: Import Collapsible component
import '../styles/PricingPage.css';
import '../styles/Collapsible.css'; // NEW: Import Collapsible CSS

function PricingPage() {
  return (
    <main id="indexpage-main" className="pricing-main">
      <section id="title">
        <h1>Pricing and Packages</h1>
      </section>

      <section id="tier">
        <div className="tier-container">

          {/* Foundation Tier */}
          <div className="tier-column Foundation">
            <h3>Foundation</h3>
            <p className="tier-description">
              Ideal for very small businesses, startups or individuals needing a basic online presence.
              Foundation focuses on a clean, responsive design with essential information.
            </p>
            <div className="tier-features"> {/* NEW: Wrapper for main features list */}
              <ul>
                <li>Up to 5 static pages</li>
                <Collapsible title="Pages Included"> {/* Use Collapsible */}
                  <ul className="normal-list">
                    <li className="normal-list-item">Home page</li>
                    <li className="normal-list-item">About Us page</li>
                    <li className="normal-list-item">Services page</li>
                    <li className="normal-list-item">Contact page</li>
                    <li className="normal-list-item">Gallery Page</li>
                  </ul>
                </Collapsible>
                <li>Standard layout with your hardcoded HTML, CSS and Javascript</li>
                <li>Contact Form</li>
                <li>Basic SEO setup</li>
                <Collapsible title="SEO Details"> {/* Use Collapsible */}
                  <ul className="normal-list">
                    <li className="normal-list-item">Meta Descriptions</li>
                    <li className="normal-list-item">Title tags</li> {/* Corrected typo */}
                    <li className="normal-list-item">Image alt texts</li>
                  </ul>
                </Collapsible>
                <li>Mobile-responsive design</li>
                <li>Integration of client-provided text and images</li>
                <li>Up to 2 months of Free post-launch support</li>
                <Collapsible title="Support Includes"> {/* Use Collapsible */}
                  <ul className="normal-list">
                    <li className="normal-list-item">Bug fixes</li>
                    <li className="normal-list-item">Content editing</li>
                  </ul>
                </Collapsible>
              </ul>
            </div> {/* End tier-features */}
            <div className="tier-price-range foundation-price"> {/* NEW: Dedicated div for price */}
              <p>From R2'000 to R8'000</p>
            </div>
          </div>

          {/* Growth Tier */}
          <div className="tier-column recommended growth">
            <span className="badge">Recommended</span>
            <h3>Growth</h3>
            <p className="tier-description">
              Suited for growing small to medium-sized businesses needing a more professional and feature-rich
              website.
            </p>
            <div className="tier-features">
              <ul>
                <li>Up to 15 pages with more complex layouts</li>
                <li>Custom design elements and branding integration</li>
                <li>Contact forms with more fields or specific functionality</li>
                <li>Basic blog setup or news section</li>
                <li>Social media integration</li> {/* Corrected typo */}
                <li>Enhanced SEO Optimization</li>
                <Collapsible title="SEO Details"> {/* Use Collapsible */}
                  <ul className="normal-list">
                    <li className="normal-list-item">Keyword research basics</li>
                    <li className="normal-list-item">Sitemap creation</li>
                  </ul>
                </Collapsible>
                <li>Mobile-responsive design</li>
                <li>Integration of client-provided content</li>
                <li>Up to 4 months of FREE post-launch support and minor updates</li>
              </ul>
            </div>
            <div className="tier-price-range growth-price">
              <p>From R9'000 to R19'000</p>
            </div>
          </div>

          {/* Evolved Tier */}
          <div className="tier-column evolved">
            <h3>Evolved</h3>
            <p className="tier-description">
              For businesses requiring advanced features, custom functionality or e-commerce capabilities.
            </p>
            <div className="tier-features">
              <ul>
                <li>15+ pages with unique and complex designs</li>
                <li>Custom-built features using PHP and potentially Python for backend logic.</li>
                <li>E-commerce integration</li>
                <Collapsible title="E-commerce Features"> {/* Use Collapsible */}
                  <ul className="normal-list">
                    <li className="normal-list-item">Shopping cart</li>
                    <li className="normal-list-item">Product listing</li>
                    <li className="normal-list-item">Payment gateway setup (this option is complex and can
                      raise the cost)</li>
                  </ul>
                </Collapsible>
                <li>Content Management System integration for easier client updates</li>
                <li>Advanced SEO strategies</li>
                <li>Database integration</li>
                <li>Mobile-responsive design</li>
                <li>Up to 6 months of post-launch support and maintenance options</li>
              </ul>
            </div>
            <div className="tier-price-range evolved-price">
              <p>From R20'000+</p>
            </div>
          </div>
        </div> {/* End tier-container */}
      </section>

      <section className="get-a-quote">
        <Link to="/quote" className="button primary large">Get Your Free Quote</Link>
      </section>
    </main>
  );
}

export default PricingPage;