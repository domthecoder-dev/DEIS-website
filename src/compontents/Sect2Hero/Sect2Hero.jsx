import React from 'react';
import BackgroundImg from "../../Images/background-color.jpg";
import LazyImage from "../Hooks/LazyIMage"
import "./Sect2-Hero.css";

const HeroSection2 = () => {
  return (
    <div className="hero-container2">
      {/* Background image with fixed positioning */}
      <LazyImage
        className="hero-background2"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      ></LazyImage>

      {/* Content container */}
      <div className="hero-content2">
        <h1 className="hero-title2">The <b>DEIS</b> Difference</h1>
        <ul className="hero-subtitle2">
          <li><b>Grow Your Credibility</b> - A professional site builds instant trust.</li>
          <li><b> Win More Business</b> - A fast, easy-to-use site converts visitors into customers.</li>
          <li><b>Save Time & Money</b> - A stable, well-built site avoids costly fixes down the road.</li>
          <li><b>Stand Out from Competitors</b> - A custom design ensures you're memorable.</li>
        </ul>
      </div>
      <div className="hero-content2">
        <h1 className="hero-title2">Our Stress-Free Process</h1>
        <ul className="hero-subtitle2">
          <li><b>Planning</b>: We Listen | We dive deep to understand your brand and goals.</li>
          <li><b>Development</b>: We Build | You see your vision come to life with weekly updates.</li>
          <li><b>Testing</b>: We Perfect | We rigorously test every detail on all devices.</li>
          <li><b>Deployment</b>: We Launch | Your new website goes live, hassle-free.</li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection2;