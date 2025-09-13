import React from 'react';
import BackgroundImg from "../../Images/Meetingbetweenclientandwebdev.jpg";
import "./OurMission.css";

const OurMission = () => {
  return (
    <div className="hero-container4">
      {/* Background image with fixed positioning */}
      <div
        className="hero-background4"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      ></div>

      {/* Content container */}
      <div className="hero-content4">
        <h1 className="hero-title4">Our <b>Mission</b></h1>
        <p className="hero-subtitle4">
          At DE Innovative Solutions, our mission is to break the mold of generic web design. 
          We hand-code custom, high-performance websites that are meticulously crafted to elevate your brand, 
          ensure lightning-fast speed, and provide a seamless user experience—because your business deserves 
          a digital presence that is as unique and reliable as you are.
        </p>
      </div>
    </div>
  );
};

export default OurMission;