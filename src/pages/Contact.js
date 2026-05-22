import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ fullName: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.email) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setSent(true); setLoading(false); }, 1200);
  };
  return (
    <div className="page-container">
      <div className="contact-hero">
        <h1 className="contact-title">
          Enquire About Our <span className="text-blue">Courses</span>
        </h1>
        <p className="contact-subtitle">
          Fill out the form below and our team will get back to you shortly.{' '}
          <span className="text-blue font-semibold">Our team is available 10AM - 6PM, Monday to Saturday</span>
        </p>
      </div>
      <div className="contact-form-panel">
        {sent ? (
          <div className="success-state" style={{ padding: '60px 20px', textAlign: 'center' }}>
            <div className="success-circle" style={{ margin: '0 auto 24px' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>Message Sent!</h2>
            <p style={{ color: '#6b7280' }}>Thank you for contacting us. We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="contact-form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className={`form-input-full ${errors.fullName ? 'error' : ''}`} />
                {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className={`form-input-full ${errors.email ? 'error' : ''}`} />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Enter subject" value={form.subject} onChange={handleChange} className={`form-input-full ${errors.subject ? 'error' : ''}`} />
              {errors.subject && <span className="error-msg">{errors.subject}</span>}
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Tell us about your interests and goals..." value={form.message} onChange={handleChange} className={`form-textarea ${errors.message ? 'error' : ''}`} rows={7} />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>
            <button type="submit" className="btn-contact-send" disabled={loading}>
              {loading ? <span className="btn-loading"><span className="spinner-sm"></span> Sending...</span> : 'Send'}
            </button>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '12px', textAlign: 'center' }}>
              We use <a href="#" style={{ color: '#2563eb' }}>OnEarthTech.io</a> to protect email privacy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
export default Contact;