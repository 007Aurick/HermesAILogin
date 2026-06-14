import React, { useState } from 'react';
import AuthLayout from './AuthLayout';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
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
        email: '',
        password: '',
        confirmPassword: '',
      });
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 800);
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join HermesAI and start working in a secure Canadian legal workspace built for research, drafting, and case context."
      visualImage="/Lawyer2.png"
      visualBadge="Built for Law Firms"
      visualTitle="Your firm knowledge, organized"
      visualText="Upload precedents, research with CanLII, and draft with context-aware AI."
      footerLink={{
        text: 'Already have an account?',
        label: 'Log in',
        to: '/login',
      }}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="signup-name">Full name</label>
          <input
            id="signup-name"
            type="text"
            name="name"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </div>

        <div className="auth-field">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            name="email"
            placeholder="you@lawfirm.ca"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>

        <div className="auth-field">
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />
        </div>

        <div className="auth-field">
          <label htmlFor="signup-confirm">Confirm password</label>
          <input
            id="signup-confirm"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />
        </div>

        <button type="submit" className="auth-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating account…' : 'Create account'}
        </button>

        {submitStatus === 'success' && (
          <div className="auth-message auth-message--success">
            Account created (UI only — connect your backend when ready).
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="auth-message auth-message--error">
            Passwords do not match. Please try again.
          </div>
        )}
      </form>
    </AuthLayout>
  );
};

export default Signup;
