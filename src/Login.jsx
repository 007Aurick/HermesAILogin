import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

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
    <section className="login section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h1 className="section-title">Log in</h1>
          <p className="section-subtitle">Welcome back to HermesAI</p>
        </div>

        <div className="login-content">
          <div className="login-form-container fade-in-up">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing in…' : 'Log in'}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  Logged in (UI only — connect your auth API when ready).
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="submit-error">
                  Please enter your email and password.
                </div>
              )}
            </form>

            <div className="login-divider">
              <span>or</span>
            </div>

            <div ref={googleButtonRef} className="login-google-button" />

            <p className="login-footer">
              Don&apos;t have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
