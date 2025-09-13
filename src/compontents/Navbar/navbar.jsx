// src/components/Navbar.js
import React, { useState } from 'react';
import Logo from '../../Images/DEIS-Logo.svg';
import MobileLogo from '../../Images/mobile-logo.svg';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to open dropdown on hover
  const openDropdownOnHover = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  // Function to close dropdowns when mouse leaves
  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <header id="indexpage-header" className="header">
      <div className="Nav-containter header-inner-container">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} className="nav-top-logo" alt="DE Innovative Solutions Logo" />
          </Link>
        </div>

        <nav className={`main-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="main-menu-ul">
            <li className="main-menu-li"><NavLink to="/" className="nav-links" onClick={toggleMobileMenu} end>Home</NavLink></li>

            {/* --- Services Dropdown --- */}
            <li
              className="dropdown-container main-menu-li"
              onMouseEnter={() => openDropdownOnHover('services')}
              onMouseLeave={closeDropdowns}
            >
              <div className="nav-links dropdown-toggle">
                Services ▾ 
              </div>
              <ul className={`dropdown-menu ${openDropdown === 'services' ? 'dropdown-open' : ''}`} style={{ right: '0' }}>
                <li className="DropDown-li"><NavLink to="/services/web-design" className="DropDown-li-a" onClick={toggleMobileMenu}>Web Design</NavLink></li>
                <li className="DropDown-li"><NavLink to="/services/seo-optimization" className="DropDown-li-a" onClick={toggleMobileMenu}>SEO Optimization</NavLink></li>
                <li className="DropDown-li"><NavLink to="/services/hosting" className="DropDown-li-a" onClick={toggleMobileMenu}>Hosting</NavLink></li>
                <li className="DropDown-li"><NavLink to="/services/password-generators" className="DropDown-li-a" onClick={toggleMobileMenu}>Password Generators</NavLink></li>
              </ul>
            </li>

            <li className="main-menu-li"><NavLink to="/about" className="nav-links" onClick={toggleMobileMenu}>About Us</NavLink></li>

            {/* --- Articles Dropdown --- */}
            <li
              className="dropdown-container main-menu-li"
              onMouseEnter={() => openDropdownOnHover('articles')}
              onMouseLeave={closeDropdowns}
            >
              <div className="nav-links dropdown-toggle">
                Articles ▾
              </div>
              <ul className={`dropdown-menu ${openDropdown === 'articles' ? 'dropdown-open' : ''}`} style={{ right: '0' }}>
                <li className="DropDown-li"><NavLink to="/articles/blogs" className="DropDown-li-a" onClick={toggleMobileMenu}>Blogs</NavLink></li>
                <li className="DropDown-li"><NavLink to="/articles/faq" className="DropDown-li-a" onClick={toggleMobileMenu}>FAQ</NavLink></li>
              </ul>
            </li>

            <li className="Cart-icon">
              <Link to="/book-a-call" className="cart-icon-btn" onClick={toggleMobileMenu}>
                Book A Call
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`hamburger-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;