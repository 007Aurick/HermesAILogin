import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/what-we-do', label: 'What we do' },
  { to: '/Industry-Solutions', label: 'Industry Solutions' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          HermesAI
        </Link>

        <div className={`nav-right ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="nav-links" aria-label="Main">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${location.pathname === to ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link to="/PlaceholderPage.jsx" className="nav-cta" onClick={closeMobileMenu}>
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
