import React from 'react';
import LazyBackground from "../../compontents/Hooks/LazyBackground"
import img from '../../Images/Products/services.png';
import GetAQuote from '../../compontents/GetAQuote/GetAQuote';
import './WebDesign.css';

function WebDesign() {
  return (
    <div className="Web-dev-container">
      <div className="Web-dev-hero">
        <div className="Hero-text">
          <h2 className="Hero-title">Beyond Templates</h2>
          <h2 className="Hero-subtitle">Custom-Built Websites Engineered for Growth</h2>
        </div>
      </div>
      <div className="what-we-do">
        <div className="WWD-content">
          <h1 className="WWD-title">What We Do</h1>
          <p className="WWD-description">
            &nbsp;&nbsp; Our custom web development process bypasses the limitations of off-the-shelf templates and drag-and-drop builders. We write clean, scalable code from the ground up, providing ultimate creative freedom and functionality. This ensures your website is not only visually distinctive but also built to perform flawlessly and evolve with your business.
          </p>
        </div>
      </div>
      <div className="our-process">
        <div className="our-process-text">
          <h1 className="OP-title">Our Process</h1>
          <p className="OP-description">
            <ul className="OP-description-ul">
              <li className="OP-description-li"><b>Discovery & Strategy:</b> We do not just design pages; we architect digital experiences. We start by understanding your business goals, target audience, and brand voice.</li>
              <li className="OP-description-li"><b>Design & Prototyping:</b> You will see interactive mockups before a single line of code is written. We design for user experience (UX) and conversion, not just looks.</li>
              <li className="OP-description-li"><b>Built with Modern Technology:</b> <ul className="OP-ul-sublist">
                <li className="OP-description-li"><b style={{ fontWeight: 'normal', textDecoration: 'underline' }}>React.js / Vite.js:</b> Faster loading times, smoother interactions, and a more app-like feel for your users.</li>
                <li className="OP-description-li"><b style={{ fontWeight: 'normal', textDecoration: 'underline' }}>Custom Code:</b> Every line of code is written from scratch for your project. This means no bloated, unnecessary code—just lean, efficient, and purposeful functionality.</li>
              </ul> </li>
              <li className="OP-description-li"><b>Testing & Quality Assurance:</b> We rigorously test on all devices and browsers to ensure flawless performance.</li>
              <li className="OP-description-li"><b>Launch & Beyond:</b> We handle deployment and provide documentation.</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="features-benefits">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Benefits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Fully Responsive Design</b></td>
              <td>Looks perfect on desktop, mobile and tablet.</td>
            </tr>
            <tr>
              <td><b>Lighting-fast Preformance</b></td>
              <td>Lower bounce rates, higher SEO ranking, better user experiance.</td>
            </tr>
            <tr>
              <td><b>SEO-Friendly Architecture</b></td>
              <td>Built with clean code and proper structure for search engines to love.</td>
            </tr>
            <tr>
              <td><b>Scalable Code</b></td>
              <td>Your website can grow with your business without needing a complete rebuild.</td>
            </tr>
            <tr>
              <td><b>Ongoing Support & Maintainance</b></td>
              <td>Peace of mind with our support plans.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <GetAQuote />
    </div>
  )
}

export default WebDesign
