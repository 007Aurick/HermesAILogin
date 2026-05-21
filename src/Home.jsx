import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-grid" aria-hidden="true" />
      <div className="container home-inner">
        <p className="home-title">
          Canadian AI Legal Workspace for Research, Drafting, and Case Contextualization
        </p>
        <p className="home-lead">
          Draft faster, research smarter, and work securely with AI trained around Canadian legal workflows.
         
        </p>
        <div className="home-actions">
          <a
            href="contact"
            target="_self"

            className="btn btn-primary"
          >
            Book a Demo
          </a>
          <a
            href="PlaceholderPage.jsx"
            className="btn btn-secondary"
          >
            Sign Up
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default Home;
