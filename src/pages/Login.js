import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    return errs;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      login({ email: form.email, name: form.email.split('@')[0] });
      navigate('/dashboard');
      setLoading(false);
    }, 1000);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };
  return (
    <div className="au-page">
      {}
      <div className="au-left">
        <div className="au-left-content">
          <Link to="/" className="au-brand">
            <span className="au-brand-jrt">JRT</span>
            <span className="au-brand-sys"> System</span>
          </Link>
          <h2 className="au-left-title">Start learning with<br />the best platform</h2>
          <p className="au-left-desc">
            Join thousands of students who are growing their skills, improving grades, and building careers through JRT System.
          </p>
          <div className="au-left-stats">
            <div className="au-stat"><strong>18k+</strong><span>Students</span></div>
            <div className="au-stat"><strong>320+</strong><span>Courses</span></div>
            <div className="au-stat"><strong>96%</strong><span>Success Rate</span></div>
          </div>
          <div className="au-left-bubbles">
            <div className="au-bubble b1">📚 150k+ Lessons</div>
            <div className="au-bubble b2">🏆 Top Rated</div>
            <div className="au-bubble b3">⚡ Live Classes</div>
          </div>
        </div>
      </div>
      {}
      <div className="au-right">
        <div className="au-card">
          <div className="au-card-header">
            <div className="au-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
            </div>
            <h1 className="au-title">Welcome Back</h1>
            <p className="au-subtitle">Sign in to continue your learning journey</p>
          </div>
          <form onSubmit={handleSubmit} className="au-form" noValidate>
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
            <div className="au-field">
              <label className="au-label">Password</label>
              <div className={`au-input-wrap ${errors.password ? 'au-error' : ''}`}>
                <svg className="au-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="••••••••" value={form.password} onChange={handleChange} className="au-input" />
                <button type="button" className="au-eye" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword
                    ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
              {errors.password && <span className="au-err-msg">{errors.password}</span>}
            </div>
            <div className="au-row-between">
              <label className="au-check">
                <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="au-link">Forgot password?</Link>
            </div>
            <button type="submit" className="au-btn-submit" disabled={loading}>
              {loading
                ? <><span className="au-spinner" /> Signing In...</>
                : <>Sign In <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg></>
              }
            </button>
          </form>
          <p className="au-switch">
            Don't have an account? <Link to="/register" className="au-link au-link-bold">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
