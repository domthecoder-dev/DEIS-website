// src/pages/AboutPage.js
import React from 'react';
import SamImg from '../Images/Samantha-Avatar.jpg';
import DomImg from '../Images/Dominic-Avatar.jpg';
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
        <div className="AB-ContentSeciton1">
        <h2 className="CS1-Header">Meet the Team!</h2>
        {/*
          This is the single flex container that will hold all the people.
          The CSS you wrote for CS1-Person-Container will now apply to all the items inside it.
        */}
        <div className="CS1-Person-Container">
          <div className="CS1-Person">
            <p className="Person-Name">Dominic E.</p>
            <div className="PImage-Container">
              <img className="Image" src={DomImg} alt="cartoon drawing of a men"></img>
            </div>
            <div className="Person-Description">
              <p className="role">Founder and Lead Website Developer</p>
              <p className="details">The expert behind the code, crafting personalized and cutting-edge websites that perfectly reflect your vision and goals.</p>
            </div>
          </div>
          {/*New Person Code*/}
          <div className="CS1-Person">
            <p className="Person-Name">Samantha N.</p>
            <div className="PImage-Container">
              <img className="Image" src={SamImg} alt="cartoon drawing of a women"></img>
            </div>
            <div className="Person-Description">
              <p className="role">Client Liaison & Admin</p>
              <p className="details">Your dedicated point of contact, ensuring seamless communication and a smooth web development journey from start to finish.</p>
            </div>
          </div>
        </div>
      </div>

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
        </section>

        <section className="what-sets-apart">
          <div className="image-column">
            <img src={Image3} className="coding-laptop-img" alt="Hands coding on a laptop" />
          </div>
          <div className="text-column">
            <h1 className="section-header">What Sets Us Apart:</h1>
            <ul className="features-list">
              <li><b>Expert WordPress Development:</b> Robust and scalable websites.</li>
              <li><b>Reliable Xneelo Hosting:</b> Fast, secure, always accessible.</li>
              <li><b>Personalized Customization:</b> Unique designs, tailored functionalities.</li>
              <li><b>SEO Optimization:</b> Strategic meta tags, improved search visibility.</li>
              <li><b>Responsive Design:</b> Flawless across all devices.</li>
              <li><b>Dedicated Customer Care:</b> Exceptional support, every step.</li>
              <li><b>Proven Experience:</b> Over five years delivering successful solutions.</li>
            </ul>
          </div>
        </section>  
      </div>
    </div>
  );
}

export default AboutPage;