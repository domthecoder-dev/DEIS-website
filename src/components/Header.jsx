import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services/web', label: 'Web Development' },
    { to: '/services/seo', label: 'SEO' },
    { to: '/services/hosting', label: 'Hosting' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
  ];

  // Reset scroll to top on nav click
  const handleNavClick = (e, to) => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={(e) => handleNavClick(e, '/')}>
            <img
              src="/assets/mobile-logo.svg"
              alt="DEIS Logo"
              className="h-10 w-auto"
              loading="eager"
            />
            <span className="font-display text-xl font-bold hidden sm:inline">
              Innovative Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className="hover:text-accent transition duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/quote"
              className="btn-primary text-sm"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className="hover:text-accent transition"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileOpen(false);
                }}
                className="btn-primary text-center"
              >
                Get Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}