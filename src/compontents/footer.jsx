// src/components/Footer.js
import React from 'react'; // React is needed to write JSX
import { Link, NavLink } from 'react-router-dom';
import '../styles/footer.css'; // Import the Footer-specific CSS we broke down earlier

function Footer() {
  // Get the current year dynamically for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    // 'id' and 'class' become 'id' and 'className' in JSX
    <footer id="indexpage-footer" className="footer">
      <div className="footer-container">
        <div className="footer-side1"><span className="orange-DE">DE </span><span className="blue-rest">Innovative Solutions</span></div>
        <div className="footer-side2">
          <div className="side2-colum">
            <ul>
              <li className="List-Header">Articles</li>
              <li><NavLink to="/blog" className="nav-link-footer">Blogs</NavLink></li>
              <li><NavLink to="/faq" className="nav-link-footer">FAQ</NavLink></li>
            </ul>
          </div>
          <div className="side2-colum">
            <ul>
              <li className="List-Header">Services</li>
              <li><NavLink to="/websites" className="nav-link-footer">Websites</NavLink></li>
              <li><NavLink to="/" className="nav-link-footer">Security Technology</NavLink></li>
              <li><NavLink to="/password-gen" className="nav-link-footer">Password Generator</NavLink></li>
              <li><NavLink to="/Shop" className="nav-link-footer">Shop</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="made-by">
        {/* Using a JavaScript expression {currentYear} to dynamically display the year */}
        <p>&copy; {currentYear} Made By <span className="orange-DE">DE </span><span className="blue-rest">Innovative Solutions</span></p>
      </div>
    </footer>
  );
}

export default Footer; // Export the component so it can be used in App.js