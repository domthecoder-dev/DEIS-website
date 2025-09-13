// src/pages/AboutPage.js
import React from 'react';
import SamImg from '../../Images/Team-Avatars/Samantha-Avatar.jpg';
import DomImg from '../../Images/Team-Avatars/Dominic-Avatar.jpg';
import Image2 from '../../Images/Girlsittingatcomputercoding.jpg';
import Image3 from '../../Images/HandsCodingOnLaptop.jpg';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import RevealOnScroll from '../../compontents/RevealOnScroll/RevealOnScroll'; // For 'Websites We Build' mobile animation
import '../../compontents/RevealOnScroll/RevealOnScroll.css';
import FlipCard from '../../compontents/FlipCard/FlipCard'; // NEW: Import FlipCard
import '../../compontents/FlipCard/FlipCard.css'; // NEW: Import FlipCard CSS
import useMediaQuery from '../../compontents/Hooks/useMediaQuery'; // Import useMediaQuery for conditional rendering
import WhatSetsUsApart from '../../compontents/WSUA/WSUA';
import OurMission from "../../compontents/OurMission/OurMission"

function AboutPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div id="aboutuspage-main-wrapper" className="about-us-main">
      <OurMission />
      <div className="OurStory">
        <h1>Our Story: More Than Just Code</h1>
        <p>
          &nbsp;&nbsp; It all started with a passion for problem-solving. As a student, I spent countless hours mastering the languages of the web—HTML, CSS, JavaScript—not as a homework assignment, but out of a genuine love for building things from scratch. 
        </p>
        <p>
          &nbsp;&nbsp;That passion turned professional when I began freelancing for businesses using popular platforms. But I quickly grew frustrated. I kept bumping into the same walls: templates that limited creativity, plugins that slowed sites down, and an inability to create something truly unique for a client.
        </p>
        <p>
          &nbsp;&nbsp;That frustration sparked an idea. I founded DE Innovative Solutions on a simple principle: businesses deserve better. They deserve websites with unlimited freedom of design, blistering speed, and rock-solid security—the kind you can only get from custom, hand-coded craftsmanship.
        </p>
        <p>
          &nbsp;&nbsp;Today, that principle is at the heart of every project. We don't just write code; we build strategic digital assets that help our clients stand out, connect with their audience, and grow their business. I'm proud to still partner with my first clients and excited to bring that same dedication to your project.
          Let's build something amazing, together.
        </p>
      </div>
      <WhatSetsUsApart />
      <div className="AB-ContentSeciton1">
        <h2 className="CS1-Header">Meet the Team!</h2>
        {/*
          This is the single flex container that will hold all the people.
          The CSS you wrote for CS1-Person-Container will now apply to all the items inside it.
        */}
        <div className="CS1-Person-Container">
          <div className="CS1-Person">
            <div className="PImage-Container">
              <img className="Image" src={DomImg} alt="cartoon drawing of a men"></img>
            </div>
            <p className="Person-Name">Dominic E.</p>
            <div className="Person-Description">
              <p className="role">Founder and Lead Website Developer</p>
              <p className="details">The expert behind the code, crafting personalized and cutting-edge websites that perfectly reflect your vision and goals.</p>
            </div>
          </div>
          {/*New Person Code*/}
          <div className="CS1-Person">
            <div className="PImage-Container">
              <img className="Image" src={SamImg} alt="cartoon drawing of a women"></img>
            </div>
            <p className="Person-Name">Samantha N.</p>
            <div className="Person-Description">
              <p className="role">Client Liaison & Admin</p>
              <p className="details">Your dedicated point of contact, ensuring seamless communication and a smooth web development journey from start to finish.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

