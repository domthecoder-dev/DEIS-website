// src/components/Navbar.js
import React, { useState } from 'react'; // Import useState for managing component state (e.g., hamburger menu open/close)
import Logo from '../Images/Logo-Rect.png';
import MobileLogo from '../Images/mobile-logo.png';
import carticon from '../Images/cart-icon.png';
import { Link, NavLink } from 'react-router-dom'; // Import Link/NavLink for navigation
import { useCart } from '../Logic/CartContents'; // Import the useCart hook
import '../styles/navbar.css'; // Import the Navbar-specific CSS we broke down

// If your images are in 'public/Images', you can directly reference them like this:
// (No need to import if directly in public)
// const logoRect = '/Images/Logo-Rect.png';

function Navbar() {
  // State to control the visibility of the mobile menu (hamburger menu functionality)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { getCartTotalItems } = useCart(); // Get the function to read total items

  const totalItems = getCartTotalItems(); // Get the current number of items in the cart

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // 'id' and 'class' become 'id' and 'className' in JSX
    <header id="indexpage-header" className="header">
      {/* Renamed 'container' class to 'header-inner-container' for clarity as discussed */}
      <div className="Nav-containter header-inner-container">
        <div className="logo-container">
          {/* 'src' path needs to be correct for your React project setup */}
          {/* 'alt' attribute is crucial for accessibility */}
          <Link to="/"> {/* Use Link for navigation to home page */}
            <img src={Logo} className="nav-top-logo" alt="DE Innovative Solutions Logo" />
          </Link>
        </div>

        {/* Dynamically add the 'open' class based on 'isMobileMenuOpen' state */}
        <nav className={`main-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {/* NavLink is used here. It adds an 'active' class when the URL matches. */}
            {/* 'onClick' closes the menu when a link is clicked (useful for mobile) */}
            {/* 'end' prop ensures exact match for the home route, preventing it from being active on all paths */}
            <li><NavLink to="/" onClick={toggleMobileMenu} end>Home</NavLink></li>
            {/* For 'About Us', I've removed the id="current-page" as NavLink handles active state */}
            <li><NavLink to="/about" onClick={toggleMobileMenu}>About Us</NavLink></li>
            <li><NavLink to="/Shop" onClick={toggleMobileMenu}>Shop</NavLink></li>
            {/* The commented out 'Tech Support' link remains commented in JSX */}
            {/*<li><a href="">Tech Support</a></li>*/}
            <li className="Cart-icon">
              {/* Note: If this button is purely for navigation, Link is appropriate */}
              <Link to="/cart" className="cart-icon-btn" onClick={toggleMobileMenu}>
              <img src={carticon}/>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Toggle - controlled by React state */}
        {/* Dynamically add the 'open' class and attach 'onClick' handler */}
        <div className={`hamburger-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar; // Export the component so it can be used in App.js