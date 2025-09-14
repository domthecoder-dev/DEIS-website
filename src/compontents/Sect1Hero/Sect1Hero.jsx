import React from 'react';
import BackgroundImg from "../../Images/HeroSect.webp";
import { Link } from 'react-router-dom';
import "./Sect1-Hero.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background image with fixed positioning */}
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      ></div>
      
      {/* Content container */}
      <div className="hero-content">
        <h1 className="hero-title">Your Business is Unique. Your Website Should Be Too.</h1>
        <p className="hero-subtitle">
          DE Innovative Solutions creates fully custom, hand-coded websites 
          that are faster, more secure, and designed to perfectly reflect your 
          brand, because your first impression should not look like everyone else's.
        </p>
        <button className="cta-button"><Link to="/book-a-call" className="no-textdecor">Get Started</Link></button>
      </div>
    </div>
  );
};

export default HeroSection;