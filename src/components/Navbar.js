import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {}
        <Link to="/" className="nav-brand">
          <span className="brand-jrt">JRT</span>
          <span className="brand-system"> System</span>
        </Link>
        {}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
        {}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Home
          </Link>
          <div className="nav-dropdown" onMouseEnter={() => setCoursesOpen(true)} onMouseLeave={() => setCoursesOpen(false)}>
            <button className="nav-link dropdown-trigger">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Courses
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            {coursesOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <p className="dropdown-heading">Technical Skills</p>
                  <a href="#" className="dropdown-item">ChatGPT</a>
                  <a href="#" className="dropdown-item">Coding</a>
                  <a href="#" className="dropdown-item">Computer Science</a>
                  <a href="#" className="dropdown-item">Cybersecurity</a>
                  <a href="#" className="dropdown-item">DevOps</a>
                </div>
                <div className="dropdown-section">
                  <p className="dropdown-heading">SSC Courses</p>
                  <a href="#" className="dropdown-item">SSC with Biology</a>
                  <a href="#" className="dropdown-item">SSC with Computer Science</a>
                </div>
                <div className="dropdown-section">
                  <p className="dropdown-heading">HSSC Courses</p>
                  <a href="#" className="dropdown-item">Pre-Medical</a>
                  <a href="#" className="dropdown-item">Pre-Engineering</a>
                  <a href="#" className="dropdown-item">ICS</a>
                  <a href="#" className="dropdown-item">Humanities</a>
                </div>
              </div>
            )}
          </div>
          <a href="#" className="nav-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            About Us
          </a>
          <Link to="/contactus" className={`nav-link ${isActive('/contactus') ? 'active' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Contact
          </Link>
          <Link to="/freetrialreq" className={`nav-link ${isActive('/freetrialreq') ? 'active' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Online Tutoring (Free Trial)
          </Link>
          {user ? (
            <div className="nav-user">
              <span className="nav-username">👋 {user.name || user.email}</span>
              <button className="btn-joinnow" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Link to="/register" className="btn-joinnow">Join Now</Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
