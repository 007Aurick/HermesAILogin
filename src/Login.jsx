import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import { siteImages } from './platformPages';

const GOOGLE_CLIENT_ID =
  '796576422248-tengokkli1m2feli8lk1gu35j7678une.apps.googleusercontent.com';

const Login = () => {
  const googleButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('');

    if (!formData.email.trim() || !formData.password) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ email: '', password: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 800);
  };

  useEffect(() => {
    const handleGoogleCredential = (response) => {
      console.log('Google credential received (connect your backend):', response.credential);
      setSubmitStatus('success');
    };

    const renderGoogleButton = () => {
      if (!window.google?.accounts?.id || !googleButtonRef.current) return;

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleCredential,
      });

      window.google.accounts.id.renderButton(googleButtonRef.current, {
        theme: 'outline',
        size: 'large',
        text: 'signin_with',
        width: googleButtonRef.current.offsetWidth || 360,
      });
    };

    const existingScript = document.getElementById('google-gsi-script');
    if (existingScript) {
      renderGoogleButton();
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-gsi-script';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = renderGoogleButton;
    document.body.appendChild(script);
  }, []);

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to your Canadian legal workspace for drafting, research, and secure case context."
      visualImage={siteImages.loginAuth}
      visualBadge="Canadian Legal AI"
      visualTitle="Practice smarter with secure AI"
      visualText="Draft faster, research Canadian case law, and keep firm knowledge in one place."
      footerLink={{
        text: "Don't have an account?",
        label: 'Create account',
        to: '/signup',
      }}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
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
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit" className="auth-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in…' : 'Log in'}
        </button>

        {submitStatus === 'success' && (
          <div className="auth-message auth-message--success">
            Logged in (UI only — connect your auth API when ready).
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="auth-message auth-message--error">
            Please enter your email and password.
          </div>
        )}
      </form>

      <div className="auth-divider">
        <span>or continue with</span>
      </div>

      <div ref={googleButtonRef} className="auth-google" />
    </AuthLayout>
  );
};

export default Login;
