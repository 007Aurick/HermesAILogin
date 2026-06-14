import React from 'react';
import { Link } from 'react-router-dom';
import { industrySolutionsPage } from './industrySolutionsData';
import './PlatformPage.css';
import './IndustrySolutions.css';

const IndustrySolutions = () => (
  <main className="platform-page industry-page">
    <section className="platform-hero">
      <div className="container platform-hero-inner">
        <div className="platform-hero-copy">
          <p className="platform-eyebrow">{industrySolutionsPage.eyebrow}</p>
          <h1>{industrySolutionsPage.title}</h1>
          <p className="platform-subtitle">{industrySolutionsPage.subtitle}</p>
          <p className="platform-intro">{industrySolutionsPage.intro}</p>
          <div className="platform-actions">
            <Link to="/contact" className="btn btn-primary">
              Book a Demo
            </Link>
            <Link to="/signup" className="btn btn-secondary">
              Try the Platform
            </Link>
          </div>
        </div>
        <div className="platform-hero-media">
          <img
            src={industrySolutionsPage.heroImage}
            alt={industrySolutionsPage.imageAlt}
          />
        </div>
      </div>
    </section>

    <section className="industry-segments">
      <div className="container">
        <h2 className="industry-section-title">Who we serve</h2>
        <div className="industry-grid">
          {industrySolutionsPage.segments.map(({ title, text, bullets }) => (
            <article key={title} className="industry-card">
              <h3>{title}</h3>
              <p className="industry-card-lead">{text}</p>
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="platform-outcomes">
      <div className="container platform-outcomes-layout">
        <div className="platform-outcomes-media">
          <img src={industrySolutionsPage.outcomeImage} alt="" />
        </div>
        <div className="platform-outcomes-inner">
          <h2>Why Canadian legal teams choose HermesAI</h2>
          <ul>
            {industrySolutionsPage.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="platform-cta">
      <div className="container">
        <div className="platform-cta-inner">
          <h2>See how HermesAI fits your team</h2>
          <p>Tell us about your practice and we&apos;ll walk you through a tailored demo.</p>
          <Link to="/contact" className="btn btn-primary">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default IndustrySolutions;
