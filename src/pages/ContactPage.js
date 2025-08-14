// src/pages/ContactPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/quote.css';

const ContactPage = () => {
    const [selectedOption, setSelectedOption] = useState(''); // 'Website Quote' or 'General Enquiry'
    const [websiteType, setWebsiteType] = useState(''); // 'Foundation', 'Growth', 'Evolved'
    const [hasInspoWebsite, setHasInspoWebsite] = useState(false);
    const [hasExistingDomain, setHasExistingDomain] = useState(false);
    const [messagePlaceholder, setMessagePlaceholder] = useState('Enter Message Here...');

    useEffect(() => {
        // This effect runs whenever selectedOption or websiteType changes
        let newPlaceholder = 'Please enter your Enquiry...'; // Default for general enquiry

        if (selectedOption === 'Website Quote') {
            if (websiteType === 'Foundation') {
                newPlaceholder = 'What are you looking for in this Foundation Website? Please give us as much details as you can!';
            } else if (websiteType === 'Growth') {
                newPlaceholder = 'What are you looking for in this Growth Website? Please give us as much details as you can!';
            } else if (websiteType === 'Evolved') {
                newPlaceholder = 'What are you looking for in this Evolved Website? Please give us as much details as you can!';
            } else {
                // If "Website Quote" is selected but no specific type, prompt for general website details
                newPlaceholder = 'Please provide details about your desired website (e.g., type, features, goals).';
            }
        }
        setMessagePlaceholder(newPlaceholder);
    }, [selectedOption, websiteType]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        // We need to store the current form display state in React state
        // to properly manage hiding it after submission.
        // For simplicity for now, we'll keep the direct DOM manipulation for success message.
        document.getElementById('form').style.display = 'none';
        document.getElementById('form-response').textContent = 'Form Submitted Successfully!';
        document.getElementById('form-header-head').textContent = 'Thank You!';

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzuPGMp9Kl_i1mAkld-rAe3yktZA12jDm_MxS1HwcB50uHqAsLPC-BrMBRw8evVCdK4/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            });
            const data = await response.text();
            document.getElementById('form-response').textContent = data;
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            document.getElementById('form-response').textContent = 'There was an error submitting your form. Please try again.';
        }
    };

    const handleReset = () => {
        setSelectedOption('');
        setWebsiteType('');
        setHasInspoWebsite(false);
        setHasExistingDomain(false);
        setMessagePlaceholder('Enter Message Here...');

        // Restore display for elements that were hidden on submit
        // Note: This relies on the 'form' div having an ID.
        const formDiv = document.getElementById('form');
        if (formDiv) {
            formDiv.style.display = 'block';
        }
        document.getElementById('form-response').textContent = '';
        document.getElementById('form-header-head').textContent = 'Get A Quote OR Contact Us';
    };


    return (
        <main id="indexpage-main" className="main quote-page-main">
            <div className="container">
                <div id="form-header" className="form-header">
                    <h1 id="form-header-head">Get A Quote OR Contact Us</h1>
                    <br />
                    <p className="formheader-content">Have a question or need a website quote? Simply fill out the form!</p>
                    <p className="formheader-content">Select the relevant option, and we'll get back to you with the information you need.</p>
                </div>

                <div id="form-container" className="form">
                    <h2 id="formheader"><u>Tell Us About Your Needs</u></h2>
                    <div id="form"> {/* This div has an ID 'form' */}
                        <form id="myForm" method="post" onSubmit={handleSubmit} onReset={handleReset}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="user_name" placeholder="e.g John" />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="user_email" placeholder="e.g user@gmail.com" />

                            <label htmlFor="number">Phone Number</label>
                            <input type="text" id="number" name="user_phonenumber" placeholder="e.g +27 012 345 6789" />

                            {/* Radio Button Title */}
                            <p>
                                <b id="radio-button-title"
                                   style={{ display: selectedOption ? 'block' : 'none' }}>
                                    {selectedOption === 'Website Quote' ? 'Website Quote' : 'General Enquiry'}
                                </b>
                            </p>

                            {/* Enquire or Quote Radio Buttons */}
                            <div id="radio-button" className="enquire-or-quote"
                                 style={{ display: selectedOption ? 'none' : 'block' }}> {/* Hide this div when an option is selected */}
                                <label htmlFor="website-quote">
                                    <input
                                        type="radio"
                                        id="website-quote"
                                        name="group_name"
                                        value="Website Quote"
                                        checked={selectedOption === 'Website Quote'}
                                        onChange={() => setSelectedOption('Website Quote')}
                                    /> Website Quote
                                </label><br />
                                <label htmlFor="enquiry">
                                    <input
                                        type="radio"
                                        id="enquiry"
                                        name="group_name"
                                        value="General Enquiry"
                                        checked={selectedOption === 'General Enquiry'}
                                        onChange={() => setSelectedOption('General Enquiry')}
                                    /> General enquiry
                                </label>
                            </div>

                            {/* Website Type Inputs - Visible only if "Website Quote" is selected */}
                            {selectedOption === 'Website Quote' && (
                                <div className="website-type-inputs" id="website-type-inputs" style={{ display: 'block' }}>
                                    <label htmlFor="website-type-foundation">
                                        <input
                                            type="radio"
                                            id="website-type-foundation"
                                            name="website-type"
                                            value="Foundation"
                                            checked={websiteType === 'Foundation'}
                                            onChange={() => setWebsiteType('Foundation')}
                                        /> Foundation Website
                                    </label><br />
                                    <label htmlFor="website-type-growth">
                                        <input
                                            type="radio"
                                            id="website-type-growth"
                                            name="website-type"
                                            value="Growth"
                                            checked={websiteType === 'Growth'}
                                            onChange={() => setWebsiteType('Growth')}
                                        /> Growth Website
                                    </label><br />
                                    <label htmlFor="website-type-evolved">
                                        <input
                                            type="radio"
                                            id="website-type-evolved"
                                            name="website-type"
                                            value="Evolved"
                                            checked={websiteType === 'Evolved'}
                                            onChange={() => setWebsiteType('Evolved')}
                                        /> Evolved Website
                                    </label><br />
                                </div>
                            )}

                            {/* Website Questionnaire - Visible based on website type or if general enquiry */}
                            {((selectedOption === 'Website Quote' && websiteType) || selectedOption === 'General Enquiry') && (
                                <div className="website-questionaire" id="website-questionaire" style={{ display: 'block', marginTop: selectedOption === 'Website Quote' ? '0px' : '' }}>
                                    <label htmlFor="compname">Company Name:</label>
                                    <input type="text" id="compname" name="company-name" placeholder="e.g DE Innovative Solutions" />

                                    <div className="yn-website-inspo-container">
                                        <p><b>Do you have any reference websites that showcase the kind of look and feel you envision for your project?</b></p>
                                        <label htmlFor="y-website-inspo">
                                            <input type="radio" id="y-website-inspo" name="yn-website-inspo" value="Yes" checked={hasInspoWebsite === true} onChange={() => setHasInspoWebsite(true)} /> Yes
                                        </label><br />
                                        <label htmlFor="n-website-inspo">
                                            <input type="radio" id="n-website-inspo" name="yn-website-inspo" value="No" checked={hasInspoWebsite === false} onChange={() => setHasInspoWebsite(false)} /> No
                                        </label>
                                    </div>

                                    {hasInspoWebsite && (
                                        <div className="inspo-website" id="inspo-website" style={{ display: 'block' }}>
                                            <label htmlFor="inspo-website-url">Enter the website you would like your website to feature?</label>
                                            <input type="text" id="inspo-website-url" name="inspo-website" placeholder="examplewebsite.com" />
                                            <label htmlFor="features-copy">What features do you like about this website?</label>
                                            <textarea id="features-copy" className="feature-textarea" name="features-copy" rows="5" cols="30" placeholder="e.g. I like the gallery set up..."></textarea>
                                        </div>
                                    )}

                                    <div className="domain-name-yn">
                                        <p><b>Do you have an existing website?</b></p>
                                        <label htmlFor="y-domain-name">
                                            <input type="radio" id="y-domain-name" name="yn-domain-name" value="yes" checked={hasExistingDomain === true} onChange={() => setHasExistingDomain(true)} /> Yes
                                        </label>
                                        <label htmlFor="n-domain-name">
                                            <input type="radio" id="n-domain-name" name="yn-domain-name" value="no" checked={hasExistingDomain === false} onChange={() => setHasExistingDomain(false)} /> No
                                        </label>
                                    </div>

                                    {hasExistingDomain && (
                                        <div className="domain-name" id="domain-name" style={{ display: 'block' }}>
                                            <label htmlFor="web-url">Please enter your website link below:</label>
                                            <input type="text" id="web-url" name="web-url" placeholder="examplewebsite.com" />
                                        </div>
                                    )}

                                    {/* These fields are only relevant for Website Quote, not General Enquiry */}
                                    {selectedOption === 'Website Quote' && (
                                        <>
                                            <label htmlFor="page-num">How many pages do you want on your website?</label>
                                            <input
                                                type="number"
                                                id="page-num"
                                                name="page-num"
                                                placeholder={
                                                    websiteType === 'Foundation' ? 'Up to 5 pages' :
                                                    websiteType === 'Growth' ? 'Up to 15 pages' :
                                                    websiteType === 'Evolved' ? 'Up to 15+ pages' : 'Page amount number'
                                                }
                                                max={
                                                    websiteType === 'Foundation' ? 5 :
                                                    websiteType === 'Growth' ? 15 : '' // No max for Evolved
                                                }
                                            />
                                            <label htmlFor="num-month-support">How many months of support do you want after launch? </label>
                                            <input
                                                type="number"
                                                id="num-month-support"
                                                name="num-month-support"
                                                placeholder={
                                                    websiteType === 'Foundation' ? 'Up to 2 months of FREE Support' :
                                                    websiteType === 'Growth' ? 'Up to 4 months of FREE support' :
                                                    websiteType === 'Evolved' ? 'Up to 6 months of FREE support' : 'Up to 12 months'
                                                }
                                                max={
                                                    websiteType === 'Foundation' ? 2 :
                                                    websiteType === 'Growth' ? 4 :
                                                    websiteType === 'Evolved' ? 6 : '' // No max beyond 6 for general
                                                }
                                            />
                                        </>
                                    )}
                                </div>
                            )}

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="user_message" rows="5" cols="30" placeholder={messagePlaceholder}></textarea>

                            <div className="buttons">
                                <button className="formbtns" type="submit">Submit</button>
                                <button className="formbtns" type="reset">Restart</button>
                            </div>

                            <div id="form-response"></div>
                        </form>
                    </div>
                </div>

                <div className="contact-details">
                    <div id="contact-header">
                        <h1><u>Other Contact Methods</u></h1>
                    </div>
                    <div id="contact-content">
                        <p>Whatsapp: <a className="link-whatsapp" href="https://wa.me/0839525645" target="_blank" rel="noopener noreferrer">Whatsapp/DEInnovativeSolutions</a></p>
                        <p>Phone Number: +27 083 952 5645</p>
                        <p>Email: Dominic3lliott@gmail.com</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;