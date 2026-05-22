import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) { setError('Email is required'); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Invalid email address'); return; }
    setLoading(true);
    setTimeout(() => { setSent(true); setLoading(false); }, 1200);
  };
  return (
    <div className="au-page au-page-centered">
      <div className="au-card au-card-solo">
        {!sent ? (
          <>
            <div className="au-solo-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h1 className="au-title">Forgot Password?</h1>
            <p className="au-subtitle">No worries — enter your email and we'll send you a reset link right away.</p>
            <form onSubmit={handleSubmit} className="au-form" noValidate>
              <div className="au-field">
                <label className="au-label">Email Address</label>
                <div className={`au-input-wrap ${error ? 'au-error' : ''}`}>
                  <svg className="au-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <input type="email" placeholder="you@example.com" value={email}
                    onChange={e => { setEmail(e.target.value); setError(''); }} className="au-input" />
                </div>
                {error && <span className="au-err-msg">{error}</span>}
              </div>
              <button type="submit" className="au-btn-submit" disabled={loading}>
                {loading
                  ? <><span className="au-spinner" /> Sending...</>
                  : <>Send Reset Link <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>
                }
              </button>
            </form>
            <p className="au-switch">
              Remember it? <Link to="/login" className="au-link au-link-bold">Back to Sign In</Link>
            </p>
          </>
        ) : (
          <div className="au-success">
            <div className="au-success-ring">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h1 className="au-title">Check Your Inbox</h1>
            <p className="au-subtitle">
              We've sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the instructions.
            </p>
            <Link to="/login" className="au-btn-submit" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Back to Sign In
            </Link>
            <p className="au-switch" style={{ marginTop: '16px' }}>
              Didn't receive it?{' '}
              <button onClick={() => setSent(false)} className="au-link au-link-bold" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 'inherit' }}>
                Try again
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ForgotPassword;
