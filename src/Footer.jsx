import React from 'react';
import { Link } from 'react-router-dom';
import logo from './hermesailogo.jpg';
import { platformNavItems } from './platformPages';
import './Footer.css';

const quickLinks = [
  ...platformNavItems,
  { to: '/Industry-Solutions', label: 'Industry Solutions' },
  { to: '/contact', label: 'Contact' },
];
const supportLinks = [
  { to: '/contact', label: 'Contact Us' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms and Conditions' },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="" className="footer-logo-img" />
            <span>HermesAI</span>
          </Link>
          <p className="footer-tagline">
            Canadian AI legal workspace for research, drafting, and case contextualization.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links">
            {supportLinks.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 HermesAI. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://www.linkedin.com/company/hermes-ai-canada" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
         

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
