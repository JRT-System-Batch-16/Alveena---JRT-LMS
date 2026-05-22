import React from 'react';

const FreeTrial = () => {
  return (
    <div className="page-container">
      {}
      <div className="freetrial-hero">
        <h1 className="freetrial-title">Free Trial for Online Tutoring</h1>
        <p className="freetrial-subtitle">Start your learning journey with a FREE trial class</p>
      </div>
      {}
      <div className="steps-section">
        <h2 className="steps-heading">Take your FREE Online Trial Class!</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon" style={{ background: '#2563eb' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
            </div>
            <h3 className="step-title">Submit Request</h3>
            <p className="step-desc">Complete our elegant form to begin your journey. All information remains strictly confidential.</p>
          </div>
          <div className="step-card">
            <div className="step-icon" style={{ background: '#7c3aed' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="step-title">Meet Your Tutor</h3>
            <p className="step-desc">Experience a complimentary 30-minute session with your hand-selected expert educator.</p>
          </div>
          <div className="step-card step-card-active">
            <div className="step-icon" style={{ background: '#059669' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="step-title" style={{ color: '#059669' }}>Begin Learning</h3>
            <p className="step-desc">Continue with bespoke educational sessions crafted exclusively for your needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FreeTrial;