import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, FileText, Search, Database, Shield } from 'lucide-react';
import { platformNavItems, platformPaths } from './platformPages';
import './Navbar.css';

const navIcons = {
  drafting: FileText,
  research: Search,
  vault: Database,
  security: Shield,
};

const navItemsAfterWhatWeDo = [
  { to: '/Industry-Solutions', label: 'Industry Solutions' },
  { to: '/contact', label: 'Contact' },
];

const whatWeDoItems = platformNavItems;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const isWhatWeDoActive = platformPaths.includes(location.pathname);

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

            <div
              className={`nav-dropdown-wrap ${isDropdownOpen ? 'open' : ''}`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`nav-link nav-dropdown-trigger ${isWhatWeDoActive ? 'active' : ''}`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={() => setIsDropdownOpen((open) => !open)}
              >
                What we do
                <ChevronDown size={14} className="nav-dropdown-icon" aria-hidden="true" />
              </button>
              <div className="nav-dropdown nav-dropdown--mega">
                <p className="nav-dropdown-heading">HermesAI Platform</p>
                <ul className="nav-dropdown-grid">
                  {whatWeDoItems.map(({ to, label, description, icon }) => {
                    const Icon = navIcons[icon];
                    return (
                      <li key={label}>
                        <Link to={to} className="nav-dropdown-card" onClick={closeMobileMenu}>
                          <span className="nav-dropdown-card-icon" aria-hidden="true">
                            <Icon size={18} />
                          </span>
                          <span className="nav-dropdown-card-copy">
                            <span className="nav-dropdown-card-title">{label}</span>
                            <span className="nav-dropdown-card-desc">{description}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
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
