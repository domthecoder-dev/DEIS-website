// src/pages/PasswordGenPage.js
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './PassGen.css'; // Corrected import: was PassGen.css, now PasswordGen.css

const PasswordGenPage = () => {
    // State variables to control inputs and output
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(16); // Default length from HTML
    const [passwordType, setPasswordType] = useState('complex'); // Default "Complex (Recommended)"
    const [includeUppercase, setIncludeUppercase] = useState(false); // Initial state based on typical checkbox behavior (unchecked)
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    // Character sets as defined in your passgen.js
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-`~[]\\{}|;':\",./<>?"; // Note: Backslash needs escaping in JS string
    const allComplexChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;

    const easyToSaySyllables = ["ap", "ple", "ban", "ana", "cat", "dog", "sun", "moon", "star", "tree", "one", "two", "three", "to", "day", "glo", "bal"];
    const easyToReadChars = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#%^&*"; // Note: This includes symbols, not just easy-to-read letters/numbers.

    // --- Core Password Generation Functions (adapted from your passgen.js) ---

    // Function to generate a random complex password (used as a default or for complex type)
    const generateRandomComplexPassword = useCallback((length) => {
        let generated = "";
        // Ensure at least one of each type if length allows
        if (length > 3) { // Only add if password length is sufficient
            generated += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
            generated += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
            generated += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
            generated += symbolChars.charAt(Math.floor(Math.random() * symbolChars.length));
        }

        for (let i = generated.length; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allComplexChars.length);
            generated += allComplexChars.charAt(randomIndex);
        }
        return generated.split('').sort(() => Math.random() - 0.5).join(''); // Shuffle
    }, [allComplexChars, uppercaseChars, lowercaseChars, numberChars, symbolChars]);

    // Function to generate password with specific character types
    const generatePasswordWithCustomChars = useCallback((length, allowedChars) => {
        let generated = "";
        if (allowedChars.length === 0) return ""; // Prevent infinite loop if no chars allowed

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            generated += allowedChars.charAt(randomIndex);
        }
        return generated;
    }, []);

    // Function for "Easy to Say" password
    const generateEasyToSayPassword = useCallback((length) => {
        let generated = "";
        while (generated.length < length) {
            const randomIndex = Math.floor(Math.random() * easyToSaySyllables.length);
            generated += easyToSaySyllables[randomIndex];
            if (generated.length < length && Math.random() < 0.3) {
                generated += Math.floor(Math.random() * 10);
            } else if (generated.length < length && Math.random() < 0.2) {
                generated += "!@#$%&"[Math.floor(Math.random() * 5)];
            }
        }
        return generated.slice(0, length);
    }, [easyToSaySyllables]);

    // Function for "Easy to Read" password
    const generateEasyToReadPassword = useCallback((length) => {
        let generated = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * easyToReadChars.length);
            generated += easyToReadChars.charAt(randomIndex);
        }
        return generated;
    }, [easyToReadChars]);


    // --- Main Password Generation Logic (adapted from your generatePassword function) ---
    const handleGeneratePassword = useCallback(() => {
        let currentPasswordLength = passwordLength;
        let allowedChars = "";
        let generatedPassword = "";
        let useSpecificChars = false;

        // Determine which character types are selected for custom generation
        if (includeUppercase) allowedChars += uppercaseChars;
        if (includeLowercase) allowedChars += lowercaseChars;
        if (includeNumbers) allowedChars += numberChars;
        if (includeSymbols) allowedChars += symbolChars;

        useSpecificChars = allowedChars.length > 0;

        // Original JS default behavior: if no custom options, generate a random complex password of random length (16-25)
        const isDefaultState = (
            passwordLength === 16 && // Original default length
            passwordType === 'complex' && // Original default radio
            !includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols // Original default checkboxes (unchecked)
        );

        if (isDefaultState) {
            currentPasswordLength = Math.floor(Math.random() * 10) + 16; // Random length between 16 and 25
            generatedPassword = generateRandomComplexPassword(currentPasswordLength);
        } else {
            // Customized password generation based on radio button and checkboxes
            if (passwordType === 'easyToSay') {
                let easySayBase = generateEasyToSayPassword(currentPasswordLength * 0.6); // Use a portion for syllables
                let remainingLength = currentPasswordLength - easySayBase.length;
                let extraChars = "";

                if (useSpecificChars && remainingLength > 0) {
                    extraChars = generatePasswordWithCustomChars(remainingLength, allowedChars);
                } else if (!useSpecificChars && remainingLength > 0) {
                    // If no specific chars selected, use all complex chars for the "extra" part
                    extraChars = generatePasswordWithCustomChars(remainingLength, allComplexChars);
                }
                generatedPassword = easySayBase + extraChars;
                generatedPassword = generatedPassword.slice(0, currentPasswordLength); // Truncate if it exceeds length
            } else if (passwordType === 'easyToRead') {
                if (useSpecificChars) {
                    // If specific chars are selected, override easy-to-read base with custom chars
                    generatedPassword = generatePasswordWithCustomChars(currentPasswordLength, allowedChars);
                } else {
                    generatedPassword = generateEasyToReadPassword(currentPasswordLength);
                }
            } else { // 'complex' type or if only checkboxes selected (original logic's 'else' block)
                if (useSpecificChars) {
                    generatedPassword = generatePasswordWithCustomChars(currentPasswordLength, allowedChars);
                } else {
                    generatedPassword = generateRandomComplexPassword(currentPasswordLength);
                }
            }
        }
        // Always update the displayed length if it changed due to default behavior
        setPasswordLength(currentPasswordLength);
        setPassword(generatedPassword);
    }, [
        passwordLength, passwordType, includeUppercase, includeLowercase,
        includeNumbers, includeSymbols,
        generateRandomComplexPassword, generatePasswordWithCustomChars,
        generateEasyToSayPassword, generateEasyToReadPassword,
        uppercaseChars, lowercaseChars, numberChars, symbolChars,
        allComplexChars
    ]);

    // Removed the useEffect that caused automatic generation.
    // The password will now only be generated when the button is clicked.

    // Handle length input and slider synchronization
    const handleLengthChange = (e) => {
        const newLength = parseInt(e.target.value, 10);
        // Basic validation for min/max from HTML attributes
        if (!isNaN(newLength) && newLength >= 8 && newLength <= 50) {
            setPasswordLength(newLength);
        } else if (isNaN(newLength) || newLength < 8) {
            setPasswordLength(8); // Set to min if invalid or too low
        } else if (newLength > 50) {
            setPasswordLength(50); // Set to max if too high
        }
    };

    // Handle radio button changes
    const handlePasswordTypeChange = (e) => {
        setPasswordType(e.target.value);
    };

    // Handle checkbox changes
    const handleCheckboxChange = (setter) => () => {
        setter(prev => !prev);
    };

    // Disable checkboxes if not 'complex' type
    const areCheckboxesDisabled = passwordType !== 'complex';

    return (
        <main id="passwordgen-main" className="main">
            <div className="passwordgen-container">
                <div className="passwordgen">
                    <h2 className="PG-header">Generate A Strong/Unique Password Now!</h2>
                    <input
                        type="text"
                        id="results"
                        value={password}
                        placeholder="Generate Password, Click The Button!"
                        readOnly // Passwords should not be manually editable
                    />
                    <button id="GenerateBtn" onClick={handleGeneratePassword}>
                        Generate A Password!
                    </button>
                </div>

                <div className="passwordgen-custom">
                    <h2>Customize Password Requirements:</h2>
                    <div className="three-colums">
                        <div className="colum">
                            <div className="password-options-length">
                                <label htmlFor="passwordLengthInput">Password Length:</label>
                                <input
                                    type="number"
                                    id="passwordLengthInput"
                                    value={passwordLength}
                                    onChange={handleLengthChange}
                                    min="8"
                                    max="50"
                                />
                                <input
                                    type="range"
                                    id="passwordLengthSlider"
                                    value={passwordLength}
                                    onChange={handleLengthChange}
                                    min="8"
                                    max="50"
                                />
                            </div>
                        </div>
                        <div className="colum">
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="passwordOption"
                                        value="easyToSay"
                                        checked={passwordType === 'easyToSay'}
                                        onChange={handlePasswordTypeChange}
                                    />{' '}
                                    Easy to Say
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="passwordOption"
                                        value="easyToRead"
                                        checked={passwordType === 'easyToRead'}
                                        onChange={handlePasswordTypeChange}
                                    />{' '}
                                    Easy to Read
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="passwordOption"
                                        value="complex"
                                        checked={passwordType === 'complex'}
                                        onChange={handlePasswordTypeChange}
                                    />{' '}
                                    Complex (Recommended)
                                </label>
                            </div>
                        </div>
                        <div className="colum">
                            <div className="checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="upperCase"
                                        checked={includeUppercase}
                                        onChange={handleCheckboxChange(setIncludeUppercase)}
                                        disabled={areCheckboxesDisabled}
                                    />{' '}
                                    Uppercase
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="lowerCase"
                                        checked={includeLowercase}
                                        onChange={handleCheckboxChange(setIncludeLowercase)}
                                        disabled={areCheckboxesDisabled}
                                    />{' '}
                                    Lowercase
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="numbers"
                                        checked={includeNumbers}
                                        onChange={handleCheckboxChange(setIncludeNumbers)}
                                        disabled={areCheckboxesDisabled}
                                    />{' '}
                                    Numbers
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="Symbols"
                                        checked={includeSymbols}
                                        onChange={handleCheckboxChange(setIncludeSymbols)}
                                        disabled={areCheckboxesDisabled}
                                    />{' '}
                                    Special Characters
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="PG-note">
                    <p>
                        <b>Unlock Stronger Security: Generate Unique and Complex Passwords Instantly!</b>
                        In today's digital landscape, compromised passwords pose a significant risk. Factors like password{' '}
                        <Link to="/blog/mobile-first" title="Learn about Password Complexity">complexity</Link> and the{' '}
                        <Link to="/blog/mobile-first" title="Understand Password Lifetime">lifespan of your passwords</Link> play a crucial role in safeguarding your online accounts. Our free password generator helps you create robust and random passwords tailored to your needs.
                    </p>
                    <p>
                        Want to understand the key principles behind constructing truly secure passwords, including effective password length, the importance of unique character combinations, and why avoiding common password patterns is essential?
                        <Link to="/blog/mobile-first" title="Read Our Comprehensive Guide to Password Security">
                            <b>Learn more in our comprehensive article on password security!</b>
                        </Link>{' '}
                        Discover actionable tips and best practices to fortify your digital life.
                    </p>
                    <p className="security-assurance">
                        <b>Important Security Note:</b> All passwords generated here are created entirely at random. We do not store or log any generated passwords, and they are immediately cleared upon page reload or when you click the generate button again. Your privacy and security are our top priority.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default PasswordGenPage;