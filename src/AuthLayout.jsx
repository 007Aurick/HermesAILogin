import React from 'react';
import { Link } from 'react-router-dom';
import logo from './hermesailogo.jpg';
import './AuthLayout.css';

const AuthLayout = ({
  title,
  subtitle,
  children,
  footerLink,
  visualBadge,
  visualTitle,
  visualText,
  visualImage = '/Lawyer2.png',
}) => (
  <section className="auth-page">
    <div className="auth-shell">
      <div className="auth-panel">
        <Link to="/" className="auth-brand">
          <img src={logo} alt="" className="auth-brand-img" />
          <span>HermesAI</span>
        </Link>

        <div className="auth-panel-body">
          <h1>{title}</h1>
          <p className="auth-subtitle">{subtitle}</p>
          {children}
        </div>

        {footerLink && (
          <div className="auth-panel-footer">
            <p>
              {footerLink.text}{' '}
              <Link to={footerLink.to}>{footerLink.label}</Link>
            </p>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        )}
      </div>

      <aside
        className="auth-visual"
        style={{ backgroundImage: `url('${visualImage}')` }}
        aria-hidden="true"
      >
        <div className="auth-visual-overlay" />
        <div className="auth-visual-content">
          <div className="auth-float auth-float--badge">{visualBadge}</div>
          <div className="auth-float auth-float--card auth-float--top">
            <span className="auth-float-label">CanLII Research</span>
            <p>3 relevant cases summarized for your matter</p>
          </div>
          <div className="auth-float auth-float--card auth-float--middle">
            <span className="auth-float-label">Document Vault</span>
            <p>12 firm precedents indexed and ready</p>
          </div>
          <div className="auth-float auth-float--card auth-float--bottom">
            <span className="auth-float-label">Draft Ready</span>
            <p>First memo draft generated in seconds</p>
          </div>
          <div className="auth-visual-copy">
            <h2>{visualTitle}</h2>
            <p>{visualText}</p>
          </div>
        </div>
      </aside>
    </div>
  </section>
);

export default AuthLayout;
