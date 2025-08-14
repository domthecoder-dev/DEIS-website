// src/pages/AboutPage.js
import React from 'react';
import Sam from '../Images/Samantha-Avatar.jpg';
import Dom from '../Images/Dominic-Avatar.jpg';
import Image2 from '../Images/Girlsittingatcomputercoding.jpg';
import Image3 from '../Images/HandsCodingOnLaptop.jpg';
import { Link } from 'react-router-dom';
import '../styles/AboutPage.css';
import RevealOnScroll from '../compontents/RevealOnScroll'; // For 'Websites We Build' mobile animation
import '../styles/RevealOnScroll.css';
import FlipCard from '../compontents/FlipCard'; // NEW: Import FlipCard
import '../styles/FlipCard.css'; // NEW: Import FlipCard CSS
import useMediaQuery from '../compontents/hooks/useMediaQuery'; // Import useMediaQuery for conditional rendering

function AboutPage() {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint

  return (
    <div id="aboutuspage-main-wrapper" className="about-us-main">
      <div className="container">
        <section id="Meet-the-team">
          <h1 className="section-header">Meet the Team</h1>
          <div className="team-members-grid"> {/* NEW: Grid for team members */}
            {/* Samantha's Card */}
            <FlipCard
              className="team-flip-card" // Specific class for team cards
              frontContent={
                <>
                  <div className="avatar-container">
                    <img src={Sam} className='avatar' alt="Samantha Avatar" />
                  </div>
                  <h3>Samantha</h3>
                  <p>Client Liaison & Admin</p>
                </>
              }
              backContent={
                <>
                  <p>Your dedicated point of contact, ensuring seamless communication and a smooth web development journey from start to finish.</p>
                </>
              }
            />

            {/* Dominic's Card */}
            <FlipCard
              className="team-flip-card" // Specific class for team cards
              frontContent={
                <>
                  <div className="avatar-container">
                    <img src={Dom} className="avatar" alt="Dominic Avatar" />
                  </div>
                  <h3>Dominic</h3>
                  <p>Lead Website Developer</p>
                </>
              }
              backContent={
                <>
                  <p>The expert behind the code, crafting personalized and cutting-edge websites that perfectly reflect your vision and goals.</p>
                </>
              }
            />
          </div>
        </section>

        <section className="about-intro">
          <div className="image-column">
            <img src={Image2} id="Img-GirlCoding" alt="Girl coding on a computer" />
          </div>
          <div className="text-column">
            <h1 className="page-header">Crafting Your Digital Presence with Expertise and Care</h1>
            {/* CONDENSED TEXT */}
            <p className="body-text">
              At DE Innovative Solutions, we craft stunning, effective websites tailored to your online goals.
              We offer a personalized, hands-on approach, leveraging powerful platforms like WordPress and reliable
              hosting to create your unique digital presence.
            </p>
            <p className="body-text">
              With over five years dedicated to web development, Dominic (founder of DE Innovative Solutions), believes a
              website is a crucial tool for growth and brand identity. We go beyond basics, using advanced coding
              (CSS, HTML) for enhanced SEO and truly customized, standout designs.
            </p>
            <p className="body-text">
              Backed by certifications in Responsive Web Design and JavaScript, we ensure your site is beautiful,
              user-friendly across all devices, and built to modern web standards. Our commitment extends to
              exceptional customer care, with dedicated support throughout your website journey.
            </p>
          </div>
        </section>

        <section className="what-sets-apart">
          <div className="text-column">
            <h1 className="section-header">What Sets Us Apart:</h1>
            <ul className="features-list">
              <li>**Expert WordPress Development:** Robust and scalable websites.</li>
              <li>**Reliable Xneelo Hosting:** Fast, secure, always accessible.</li>
              <li>**Personalized Customization:** Unique designs, tailored functionalities.</li>
              <li>**SEO Optimization:** Strategic meta tags, improved search visibility.</li>
              <li>**Responsive Design:** Flawless across all devices.</li>
              <li>**Dedicated Customer Care:** Exceptional support, every step.</li>
              <li>**Proven Experience:** Over five years delivering successful solutions.</li>
            </ul>
          </div>
          <div className="image-column">
            <img src={Image3} className="coding-laptop-img" alt="Hands coding on a laptop" />
          </div>
        </section>

        <section className="websites-we-build">
          <h1 className="section-header">What Websites Do we Build?</h1>
          <p className="body-text">
            We build all kinds of websites, including:
          </p>
          <div className="websites-grid"> {/* NEW: Grid for website types */}
            {/* Using FlipCard for desktop, RevealOnScroll + basic li for mobile */}
            {/* Blog Card */}
            {isMobile ? (
              <RevealOnScroll delay={0}>
                <li className="list-item mobile-website-item">
                  <span className="website-icon">📄</span> Blogs
                </li>
              </RevealOnScroll>
            ) : (
              <FlipCard
                className="website-flip-card"
                frontContent={<h3>Blogs</h3>}
                backContent={<p>Share your stories, expertise, and updates with a beautifully designed, easy-to-manage blog.</p>}
              />
            )}

            {/* Personal Profiles Card */}
            {isMobile ? (
              <RevealOnScroll delay={200}>
                <li className="list-item mobile-website-item">
                  <span className="website-icon">👤</span> Personal Profiles
                </li>
              </RevealOnScroll>
            ) : (
              <FlipCard
                className="website-flip-card"
                frontContent={<h3>Personal Profiles</h3>}
                backContent={<p>Showcase your portfolio, resume, or personal brand with a sleek and professional online presence.</p>}
              />
            )}

            {/* Galleries Card */}
            {isMobile ? (
              <RevealOnScroll delay={300}>
                <li className="list-item mobile-website-item">
                  <span className="website-icon">🖼️</span> Galleries
                </li>
              </RevealOnScroll>
            ) : (
              <FlipCard
                className="website-flip-card"
                frontContent={<h3>Galleries</h3>}
                backContent={<p>Visually stunning galleries to highlight your photography, artwork, or product showcases effectively.</p>}
              />
            )}

            {/* E-Commerce Card */}
            {isMobile ? (
              <RevealOnScroll delay={400}>
                <li className="list-item mobile-website-item">
                  <span className="website-icon">🛒</span> E-Commerce
                </li>
              </RevealOnScroll>
            ) : (
              <FlipCard
                className="website-flip-card"
                frontContent={<h3>E-Commerce</h3>}
                backContent={<p>Launch your online store with secure payment gateways and a seamless shopping experience for your customers.</p>}
              />
            )}

            {/* Contact Forms Card */}
            {isMobile ? (
              <RevealOnScroll delay={500}>
                <li className="list-item mobile-website-item">
                  <span className="website-icon">✉️</span> Contact Forms
                </li>
              </RevealOnScroll>
            ) : (
              <FlipCard
                className="website-flip-card"
                frontContent={<h3>Contact Forms</h3>}
                backContent={<p>Customized and efficient contact forms to connect with your audience and streamline inquiries directly to you.</p>}
              />
            )}

            {/* And More! Card */}
            {isMobile ? (
              <RevealOnScroll delay={600}>
                <li className="list-item mobile-website-item">
                  <span className="website-icon">➕</span> And More!
                </li>
              </RevealOnScroll>
            ) : (
              <FlipCard
                className="website-flip-card"
                frontContent={<h3>And More!</h3>}
                backContent={<p>We're versatile! If you have a unique idea, we can build a custom solution to bring your vision to life online.</p>}
              />
            )}
          </div> {/* End websites-grid */}
          <p className="body-text">
            Contact us for your <Link to="/quote">personalised quote</Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;