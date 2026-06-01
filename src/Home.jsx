import React from 'react';
import { Link } from 'react-router-dom';
import CustomerCarousel from './CustomerCarousel';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-grid" aria-hidden="true" />
      <div className="home-body">
        <div className="container home-inner">
          <p className="home-title">
            Canadian AI Legal Workspace for Research, Drafting, and Case Contextualization
          </p>
          <p className="home-lead">
            Draft faster, research smarter, and work securely with AI trained around Canadian legal workflows.
          </p>
          <div className="home-actions">
            <Link to="/contact" className="btn btn-primary">
              Book a Demo
            </Link>
            <Link to="/signup" className="btn btn-secondary">
              Sign Up
            </Link>
          </div>
        </div>
        <CustomerCarousel />
      </div>
    </section>
  );
};

export default Home;
