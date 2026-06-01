import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('');

    if (formData.password !== formData.confirmPassword) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 800);
  };

  return (
    <section className="signup section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h1 className="section-title">Sign up</h1>
          <p className="section-subtitle">Create an account to get started.</p>
        </div>

        <div className="signup-content">
          <div className="signup-form-container fade-in-up">
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name: *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username: *"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email: *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password: *"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password: *"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing up…' : 'Sign Up'}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  Account created (UI only — connect your backend when ready).
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="submit-error">
                  Passwords do not match. Please try again.
                </div>
              )}
            </form>

            <p className="signup-footer">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
