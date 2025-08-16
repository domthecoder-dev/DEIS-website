import React from 'react';
import SecHero from '../compontents/hero';
import physicalImg from '../Images/Products/Camera-3-img1.png';
import serviceImg from '../Images/services.png';
import { Link } from 'react-router-dom';
import "../styles/homepage.css";

function newHomepage() {
    return (
        <div className="Homepage-body">
            <SecHero />
            <div className="content-section1">
                <div className="cs1-side cs1-left">
                    <div className="cs1-card">
                        <div className="cs1-photo">
                            <img src={physicalImg} alt="A white security camera with two antennas and a solar panel on top." />
                        </div>
                        <div className="cs1-header">
                            Security Products
                        </div>
                        <div className="cs1-description">
                            Protect your home and business with our range of <b>smart security cameras, 
                            surveillance drones, and advanced security systems.</b> Our cutting-edge <b>technology 
                            solutions</b> are designed to give you peace of mind and full control.
                        </div>
                        <Link to="/Shop" className="no-link">
                        <div className="cs1-button">
                            Explore Our Products
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="cs1-side cs1-right">
                    <div className="cs1-card">
                        <div className="cs1-photo">
                            <img src={serviceImg} />
                        </div>
                        <div className="cs1-header">
                            Services
                        </div>
                        <div className="cs1-description">
                            Elevate your brand with our expert 
                            <b>website design and development services.</b>
                             We create custom, <b>mobile-friendly websites</b> 
                             that are optimized for performance and built
                              to grow your business online.
                        </div>
                        <br/>
                        <Link to="/Shop?category=services" className="no-link">
                            <div className="cs1-button">
                                Explore Our Services
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="content-section2">
                <div className="cs2-benefits">
                    <div className="cs2-header">Why Choose Us?</div>
                    <div className="cs2-benefit">
                        <div className="cs2-icon">✓</div>
                        <div className="cs2-benefit-content">
                            <div className="cs2-ben-header">Dedicated Expert Support</div>
                            <div className="cs2-ben-description">As your tech partner, we are personally committed to your success. From initial setup to ongoing support, we bring hands-on technical expertise to ensure you get the most out of our products and services. We are actively pursuing industry certifications to further enhance the value we bring to every client.</div>
                        </div>
                    </div>
                    <div className="cs2-benefit">
                        <div className="cs2-icon">✓</div>
                        <div className="cs2-benefit-content">
                            <div className="cs2-ben-header">Quality and Durability</div>
                            <div className="cs2-ben-description">We stand behind every product we offer and website we build. We personally ensure each solution meets a high standard of excellence, backed by a clear satisfaction guarantee and a commitment to providing reliable, long-lasting results.</div>
                        </div>
                    </div>
                    <div className="cs2-benefit">
                        <div className="cs2-icon">✓</div>
                        <div className="cs2-benefit-content">
                            <div className="cs2-ben-header">Your One-Stop Tech Shop</div>
                            <div className="cs2-ben-description"> Why juggle multiple vendors? We provide a comprehensive range of solutions to meet your needs. Whether you're looking for premium security hardware or a custom-designed website to grow your brand, you can find everything you need right here.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-section3">
                <div className="cs3-content">
                    <div className="cs3-header">Get In Touch</div>
                    <div className="cs3-contact">
                        <div className="cs3-con-icon">✓</div>
                        <div className="cs3-con-link">Email:<br className="mobile-br"/> deinnovativesolutions@gmail.com</div>
                    </div>
                    <div className="cs3-contact">
                        <div className="cs3-con-icon">✓</div>
                        <div className="cs3-con-link">Phone:<br className="mobile-br"/> +27 064 321 2426</div>
                    </div>
                    <div className="cs3-contact">
                        <div className="cs3-con-icon">✓</div>
                        <div className="cs3-con-link">Instagram:<br className="mobile-br"/> @deinnovativesolutions</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newHomepage
