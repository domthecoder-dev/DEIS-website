import React from 'react';
import BackgroundImg from "../../Images/HeroSect.webp";
import LazyImage from "../../compontents/Hooks/LazyIMage"
import { Link } from 'react-router-dom';
import "./Sect1-Hero.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background image with fixed positioning */}
      <LazyImage
        className="hero-background"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      ></LazyImage>
      
      {/* Content container */}
      <div className="hero-content">
        <h1 className="hero-title">Your Business is Unique. Your Website Should Be Too.</h1>
        <p className="hero-subtitle">
          DE Innovative Solutions creates fully custom, hand-coded websites guaranteed to score 
          95+ on Google Speed Tests—because your first impression should be fast, secure, and unlike 
          anyone else's.
        </p>
        <button className="cta-button"><Link to="/book-a-call" className="no-textdecor">Get Started</Link></button>
      </div>
    </div>
  );
};

export default HeroSection;