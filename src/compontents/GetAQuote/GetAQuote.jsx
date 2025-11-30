import React from 'react';
import LazyImage from "../Hooks/LazyIMage"
import BackgroundImg from "../../Images/Girlsittingatcomputercoding.jpg";
import "./GetAQuote.css";

const GetAQuote = () => {
    return (
        <div className="GAQ-container">
            {/* Background image with fixed positioning */}
            <LazyImage
                className="GAQ-background"
                style={{ backgroundImage: `url(${BackgroundImg})` }}
            ></LazyImage>

            {/* Content container */}
            <div className="GAQ-content">
                <h1 className="GAQ-title">Get a Free Quote!</h1>
                <p className="GAQ-subtitle">Fill out the form below and we'll get back to you shortly</p>

                <form action="https://formsubmit.co/c3b2341dd7554351377e17d1af07ab90" method="POST">
                    <div className="form-field">
                        <label htmlFor="frm-name">Name:</label>
                        <input id="frm-name" type="text" placeholder="Enter your full name" name="Client Name: " required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="frm-number">Cell Number:</label>
                        <input id="frm-number" type="tel" placeholder="Enter your phone number" name="Client Phone Number: " required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="frm-email">Email:</label>
                        <input id="frm-email" type="email" placeholder="Enter your email address" name="Client Email: " required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="frm-message">Message:</label>
                        <textarea id="frm-message" placeholder="Tell us about your project needs" name="Client Message: " required></textarea>
                    </div>
                    <button type="submit" className="GAQ-cta-button">Get Started</button>
                </form>

                <div className="form-footer">
                    <p>We value your privacy and promise to keep your information secure</p>
                </div>
            </div>
        </div>
    );
};

export default GetAQuote;