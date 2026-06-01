import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './Navbar.css';

const navItemsAfterWhatWeDo = [
  { to: '/Industry-Solutions', label: 'Industry Solutions' },
  { to: '/contact', label: 'Contact' },
];

const whatWeDoItems = [
  { to: '/what-we-do', label: 'Research' },
  { to: '/what-we-do', label: 'Drafting' },
  { to: '/what-we-do', label: 'Case Contextualization' },
  { to: '/what-we-do', label: 'Legal Research' },
  { to: '/what-we-do', label: 'Legal Drafting' },
  { to: '/what-we-do', label: 'Legal Case Contextualization' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const isWhatWeDoActive = location.pathname === '/what-we-do';

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          HermesAI
        </Link>

        <div className={`nav-right ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="nav-links" aria-label="Main">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <div className={`nav-dropdown-wrap ${isDropdownOpen ? 'open' : ''}`}>
              <button
                type="button"
                className={`nav-link nav-dropdown-trigger ${isWhatWeDoActive ? 'active' : ''}`}
                aria-expanded={isDropdownOpen}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                What we do
                <ChevronDown size={14} className="nav-dropdown-icon" aria-hidden="true" />
              </button>
              <ul className="nav-dropdown">
                {whatWeDoItems.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} onClick={closeMobileMenu}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {navItemsAfterWhatWeDo.map(({ to, label }) => (
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

          <Link to="/signup" className="nav-cta" onClick={closeMobileMenu}>
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
