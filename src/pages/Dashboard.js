import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <div className="page-container">
      <div className="dashboard-hero">
        <div className="dashboard-welcome">
          <div className="dashboard-avatar">
            {user?.name ? user.name[0].toUpperCase() : 'U'}
          </div>
          <div>
            <h1 className="dashboard-title">Welcome back, <span className="text-blue">{user?.name || 'Student'}</span>!</h1>
            <p style={{ color: '#6b7280', marginTop: '4px' }}>{user?.email}</p>
          </div>
        </div>
        <button className="btn-outline-red" onClick={handleLogout}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Logout
        </button>
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="dashboard-card-icon" style={{ background: '#dbeafe' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <h3>My Courses</h3>
          <p>You have no enrolled courses yet.</p>
          <button className="btn-card-action" style={{ background: '#2563eb' }}>Browse Courses</button>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-icon" style={{ background: '#d1fae5' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
          </div>
          <h3>Live Lectures</h3>
          <p>No upcoming live sessions.</p>
          <button className="btn-card-action" style={{ background: '#059669' }}>View Schedule</button>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-icon" style={{ background: '#ede9fe' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>
          </div>
          <h3>Free Trial</h3>
          <p>Book your free tutoring session.</p>
          <button className="btn-card-action" style={{ background: '#7c3aed' }} onClick={() => navigate('/freetrialreq')}>Book Now</button>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-icon" style={{ background: '#fef3c7' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <h3>Contact Support</h3>
          <p>Get help from our expert team.</p>
          <button className="btn-card-action" style={{ background: '#d97706' }} onClick={() => navigate('/contactus')}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
