import React from 'react';
import BackgroundImg from "../../Images/Girlsittingatcomputercoding.jpg";
import "./GetAQuote.css";

const GetAQuote = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Thank you for your inquiry! We will contact you shortly.');
    };

    return (
        <div className="GAQ-container">
            {/* Background image with fixed positioning */}
            <div
                className="GAQ-background"
                style={{ backgroundImage: `url(${BackgroundImg})` }}
            ></div>

            {/* Content container */}
            <div className="GAQ-content">
                <h1 className="GAQ-title">Get a Free Quote!</h1>
                <p className="GAQ-subtitle">Fill out the form below and we'll get back to you shortly</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="frm-name">Name:</label>
                        <input id="frm-name" type="text" placeholder="Enter your full name" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="frm-number">Cell Number:</label>
                        <input id="frm-number" type="tel" placeholder="Enter your phone number" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="frm-email">Email:</label>
                        <input id="frm-email" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="frm-message">Message:</label>
                        <textarea id="frm-message" placeholder="Tell us about your project needs" required></textarea>
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