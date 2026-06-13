import React from 'react';
import { Link } from 'react-router-dom';
import './PlatformPage.css';

const PlatformPage = ({ page }) => (
  <main className="platform-page">
    <section className="platform-hero">
      <div className="container">
        <p className="platform-eyebrow">HermesAI Platform</p>
        <h1>{page.title}</h1>
        <p className="platform-subtitle">{page.subtitle}</p>
        <p className="platform-intro">{page.intro}</p>
        <div className="platform-actions">
          <Link to="/contact" className="btn btn-primary">
            Book a Demo
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            Try the Platform
          </Link>
        </div>
      </div>
    </section>

    <section className="platform-highlights">
      <div className="container">
        <div className="platform-grid">
          {page.highlights.map(({ title, text }) => (
            <article key={title} className="platform-card">
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="platform-outcomes">
      <div className="container platform-outcomes-inner">
        <h2>What this means for your firm</h2>
        <ul>
          {page.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="platform-cta">
      <div className="container platform-cta-inner">
        <h2>Ready to see {page.title} in action?</h2>
        <p>Book a demo and explore how HermesAI fits Canadian legal workflows.</p>
        <Link to="/contact" className="btn btn-primary">
          Book a Demo
        </Link>
      </div>
    </section>
  </main>
);

export default PlatformPage;
