import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: '', confirmPassword: '' });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const validate = () => {
    const errs = {};
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 8) errs.password = 'At least 8 characters required';
    if (!form.confirmPassword) errs.confirmPassword = 'Please confirm your password';
    else if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    return errs;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setDone(true); setLoading(false); }, 1000);
  };
  const getStrength = () => {
    if (!form.password) return null;
    if (form.password.length < 6) return { label: 'Weak', color: '#ef4444', pct: '33%' };
    if (form.password.length < 10) return { label: 'Medium', color: '#f59e0b', pct: '66%' };
    return { label: 'Strong', color: '#10b981', pct: '100%' };
  };
  const strength = getStrength();
  if (done) {
    return (
      <div className="au-page au-page-centered">
        <div className="au-card au-card-solo">
          <div className="au-success">
            <div className="au-success-ring">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h1 className="au-title">Password Updated!</h1>
            <p className="au-subtitle">Your password has been reset successfully. You can now sign in with your new password.</p>
            <button className="au-btn-submit" style={{ marginTop: '8px' }} onClick={() => navigate('/login')}>
              Go to Sign In <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="au-page au-page-centered">
      <div className="au-card au-card-solo">
        <div className="au-solo-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h1 className="au-title">Set New Password</h1>
        <p className="au-subtitle">Create a strong password to keep your account secure</p>
        <form onSubmit={handleSubmit} className="au-form" noValidate>
          <div className="au-field">
            <label className="au-label">New Password</label>
            <div className={`au-input-wrap ${errors.password ? 'au-error' : ''}`}>
              <svg className="au-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input type={showPass ? 'text' : 'password'} name="password" placeholder="Min. 8 characters"
                value={form.password} onChange={e => { setForm({ ...form, password: e.target.value }); setErrors({ ...errors, password: '' }); }}
                className="au-input" />
              <button type="button" className="au-eye" onClick={() => setShowPass(!showPass)}>
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
            <label className="au-label">Confirm New Password</label>
            <div className={`au-input-wrap ${errors.confirmPassword ? 'au-error' : ''}`}>
              <svg className="au-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input type={showConfirm ? 'text' : 'password'} name="confirmPassword" placeholder="Repeat your password"
                value={form.confirmPassword} onChange={e => { setForm({ ...form, confirmPassword: e.target.value }); setErrors({ ...errors, confirmPassword: '' }); }}
                className="au-input" />
              <button type="button" className="au-eye" onClick={() => setShowConfirm(!showConfirm)}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
            {errors.confirmPassword && <span className="au-err-msg">{errors.confirmPassword}</span>}
          </div>
          <button type="submit" className="au-btn-submit" disabled={loading}>
            {loading
              ? <><span className="au-spinner" /> Updating...</>
              : <>Reset Password <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg></>
            }
          </button>
        </form>
        <p className="au-switch">
          <Link to="/login" className="au-link au-link-bold">← Back to Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
