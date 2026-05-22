import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 8) errs.password = 'Password must be at least 8 characters';
    if (!form.confirmPassword) errs.confirmPassword = 'Please confirm your password';
    else if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    if (!agreed) errs.agreed = 'You must agree to the Terms and Conditions';
    return errs;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      register({ name: form.name, email: form.email });
      navigate('/dashboard');
      setLoading(false);
    }, 1000);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };
  const getStrength = () => {
    if (!form.password) return null;
    if (form.password.length < 6) return { label: 'Weak', color: '#ef4444', pct: '33%' };
    if (form.password.length < 10) return { label: 'Medium', color: '#f59e0b', pct: '66%' };
    return { label: 'Strong', color: '#10b981', pct: '100%' };
  };
  const strength = getStrength();

  return (
    <div className="au-page">
      {}
      <div className="au-left">
        <div className="au-left-content">
          <Link to="/" className="au-brand">
            <span className="au-brand-jrt">JRT</span>
            <span className="au-brand-sys"> System</span>
          </Link>
          <h2 className="au-left-title">Your learning<br />journey starts here</h2>
          <p className="au-left-desc">
            Create your free account and get instant access to hundreds of courses, live sessions, and expert instructors.
          </p>
          <div className="au-features">
            {['Access 150k+ lessons instantly','Live workshops every month','Learn at your own pace','Expert instructors, real results'].map((f, i) => (
              <div className="au-feature-item" key={i}>
                <span className="au-check-circle">✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div className="au-left-bubbles">
            <div className="au-bubble b1">🎓 Free to Start</div>
            <div className="au-bubble b2">📱 Learn Anywhere</div>
          </div>
        </div>
      </div>
      {}
      <div className="au-right au-right-scroll">
        <div className="au-card au-card-wide">
          <div className="au-card-header">
            <div className="au-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
            </div>
            <h1 className="au-title">Create Account</h1>
            <p className="au-subtitle">Join JRT System and start learning today</p>
          </div>
          <form onSubmit={handleSubmit} className="au-form" noValidate>
            <div className="au-grid-2">
              <div className="au-field">
                <label className="au-label">Full Name</label>
                <div className={`au-input-wrap ${errors.name ? 'au-error' : ''}`}>
                  <svg className="au-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} className="au-input" />
                </div>
                {errors.name && <span className="au-err-msg">{errors.name}</span>}
              </div>
              <div className="au-field">
                <label className="au-label">Email Address</label>
                <div className={`au-input-wrap ${errors.email ? 'au-error' : ''}`}>
                  <svg className="au-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className="au-input" />
                </div>
                {errors.email && <span className="au-err-msg">{errors.email}</span>}
              </div>
            </div>
            <div className="au-field">
              <label className="au-label">Password</label>
              <div className={`au-input-wrap ${errors.password ? 'au-error' : ''}`}>
                <svg className="au-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Min. 8 characters" value={form.password} onChange={handleChange} className="au-input" />
                <button type="button" className="au-eye" onClick={() => setShowPassword(!showPassword)}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
              {strength && (
                <div className="au-strength">
                  <div className="au-strength-bar"><div style={{ width: strength.pct, background: strength.color }} /></div>
                  <span style={{ color: strength.color, fontSize: '12px', fontWeight: 600 }}>{strength.label}</span>
                </div>
              )}
              {errors.password && <span className="au-err-msg">{errors.password}</span>}
            </div>
            <div className="au-field">
              <label className="au-label">Confirm Password</label>
              <div className={`au-input-wrap ${errors.confirmPassword ? 'au-error' : ''}`}>
                <svg className="au-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input type={showConfirm ? 'text' : 'password'} name="confirmPassword" placeholder="Repeat your password" value={form.confirmPassword} onChange={handleChange} className="au-input" />
                <button type="button" className="au-eye" onClick={() => setShowConfirm(!showConfirm)}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
              {errors.confirmPassword && <span className="au-err-msg">{errors.confirmPassword}</span>}
            </div>
            <div className="au-field">
              <label className="au-check">
                <input type="checkbox" checked={agreed} onChange={e => { setAgreed(e.target.checked); setErrors({ ...errors, agreed: '' }); }} />
                <span>I agree to the <a href="#" className="au-link">Terms & Conditions</a> and <a href="#" className="au-link">Privacy Policy</a></span>
              </label>
              {errors.agreed && <span className="au-err-msg">{errors.agreed}</span>}
            </div>
            <button type="submit" className="au-btn-submit" disabled={loading}>
              {loading
                ? <><span className="au-spinner" /> Creating Account...</>
                : <>Create Account <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg></>
              }
            </button>
          </form>
          <p className="au-switch">
            Already have an account? <Link to="/login" className="au-link au-link-bold">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
