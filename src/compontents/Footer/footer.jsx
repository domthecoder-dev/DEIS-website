// src/components/Footer.js
import React from 'react'; // React is needed to write JSX
import { Link, NavLink } from 'react-router-dom';
import './footer.css'; // Import the Footer-specific CSS we broke down earlier

function Footer() {
  // Get the current year dynamically for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    // 'id' and 'class' become 'id' and 'className' in JSX
    <footer id="indexpage-footer" className="footer">
      <div id="made-by">
        {/* Using a JavaScript expression {currentYear} to dynamically display the year */}
        <p>&copy; {currentYear} <span className="orange-DE"> DE </span><span className="blue-rest">Innovative Solutions</span></p>
      </div>
    </footer>
  );
}

export default Footer; // Export the component so it can be used in App.js