import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { COUNTRIES } from './Countries';
import { ORGANIZATIONS } from './Organizations';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    country: '',
    phoneNumber: '',
    organizationType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

   
    const serviceID = "";
    const templateID = "";
    const publicKey = "";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          country: '',
          phoneNumber: '',
          organizationType: '',
          message: '',
        });

        setTimeout(() => setSubmitStatus(''), 3000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setIsSubmitting(false);
        setSubmitStatus('error');
      });
  };

  const contactInfo = [
    {
      icon: "✉️",
      title: "Email",
      value: "HermesAI@gmail.com",
      link: "mailto:aurick.anwar2260biga@gmail.com"
    },
    
    {
      icon: "📍",
      title: "Location",
      value: "Toronto, Ontario, Canada",
      link: "#"
    },
    {
    
      icon: "🔗",
      title: "LinkedIn",
      value: "HermesAI Canada",
      link: "https://www.linkedin.com/company/hermes-ai-canada"
    },
   
  ];

  return (
    <section className="contact section">
      <div className="contact-banner" aria-hidden="true">
        <img src="/Lawyer.jpg" alt="" />
        <div className="contact-banner-overlay">
          <p className="contact-banner-eyebrow">Get in touch</p>
          <h2>Book a demo or ask a question</h2>
        </div>
      </div>
      <div className="container">
        <div className="section-header fade-in-up">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            Ask any questions or book a demo.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in-up">
           
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-item"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container fade-in-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name: *"
                  value={formData.name}
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
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number: "
                  value={formData.phoneNumber}
                  onChange={handleChange}
                
                />
              </div>
            
              <div className="form-group">
                <select
                  id="country"
                  name = "country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Country... *
                  </option>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <select
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Organization Type... *
                  </option>
                  {ORGANIZATIONS.map((organization) => (
                    <option key={organization} value={organization}>
                      {organization}
                    </option>
                  ))}
                </select>
              </div>
              
              
               <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject: *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message: *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              
              <button 
                type="submit" 
                className={`btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Book a Demo'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="submit-success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="submit-error">
                  ❌ Oops, something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

