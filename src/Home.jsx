import React from 'react';
import { Link } from 'react-router-dom';
import CustomerCarousel from './CustomerCarousel';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-grid" aria-hidden="true" />
      <div className="home-body">
        <div className="container">
          <div className="home-inner">
            <p className="home-title">
              Master Your Case Files Instantly!
            </p>
            <p className="home-lead">
              Canadian Lawyers can upload complex legal documents to instantly extract key facts, timelines, and critical details.
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
        </div>
        <CustomerCarousel />
      </div>
    </section>
  );
};

export default Home;
