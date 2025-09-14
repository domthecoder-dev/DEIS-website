import React from 'react';
import './BookCall.css';

function BookCall() {
    
  return (
    <div className="BookCall-Main-Container">
      <h2 className="BookCall-Header">Book A Call With Us Now</h2>
      <div className="BC-Form-Container">
        <form action="https://formsubmit.co/dominic3lliott@gmail.com" method="POST">
                    <div className="form-field">
                        <label htmlFor="frm-name">Name:</label>
                        <input id="frm-name" type="text" placeholder="Enter your full name" name="Client Name: "required />
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
                        <textarea id="frm-message" placeholder="Tell us about your project needs" name="Client Message: "required></textarea>
                    </div>
                    <button type="submit" className="GAQ-cta-button">Get Started</button>
                </form>
                <p className="contact-methods">
                  We are also contactable on:
                  <ul className='contact-methods-ul'>
                    <li>Whatsapp:<br className="mobile-br"/> <a href="https://wa.me/27747685793" target="_blank" alt="whatsapp link for custom web design">+27 074 768 5793</a></li>
                    <li>Instagram:<br className="mobile-br"/>  <a href="https://www.instagram.com/deinnovativesolutions?igsh=MWw0aXU0NzhvbHRkMg%3D%3D&utm_source=qr" target="_blank" alt="link to web designer's instagram">@DEinnovativesolutions</a></li>
                    <li>Phone Us:<br className="mobile-br"/> <a href="tel:0747685793" alt="Phone number for custom web design south african number">+27 074 768 5793</a></li>
                  </ul>
                </p>
      </div>
    </div>
  )
}

export default BookCall
