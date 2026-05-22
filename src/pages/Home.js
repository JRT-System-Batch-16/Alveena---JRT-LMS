import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = target / (duration / 16);
      const tick = () => {
        start += step;
        if (start >= target) { setCount(target); return; }
        setCount(Math.floor(start));
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return [count, ref];
}

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const [students, studentsRef] = useCountUp(18000, 1600);
  const [courses,  coursesRef]  = useCountUp(320,   1400);
  const [experts,  expertsRef]  = useCountUp(45,    1200);
  const [success,  successRef]  = useCountUp(96,    1000);

  return (
    <div className="home">

      {}
      <section className="hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
        <div className="hero-content reveal">
          <span className="hero-badge">🎓 Pakistan's Premier Digital Learning Hub</span>
          <h1 className="hero-title">
            Unlock Your <span className="gradient-text">Full Potential</span><br />
            with Smarter Education
          </h1>
          <p className="hero-desc">
            From school curricula to cutting-edge tech skills — JRT System brings
            expert-led learning right to your screen. Study at your pace, grow at your speed.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn-primary">Start Learning Free</Link>
            <Link to="/freetrialreq" className="btn-outline">Book a Free Class</Link>
          </div>
          <div className="hero-tags">
            <span className="tag">✓ SSC &amp; HSSC</span>
            <span className="tag">✓ Coding &amp; AI</span>
            <span className="tag">✓ Live &amp; Recorded</span>
            <span className="tag">✓ Expert Instructors</span>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-card-stack">
            <div className="float-card card-a">
              <span className="card-icon">📚</span>
              <div>
                <strong>150k+</strong>
                <small>Lessons Available</small>
              </div>
            </div>
            <div className="float-card card-b">
              <span className="card-icon">🏆</span>
              <div>
                <strong>Top Rated</strong>
                <small>by Students</small>
              </div>
            </div>
            <div className="hero-circle">
              <div className="hero-circle-inner">
                <span className="hero-circle-icon">🌍</span>
                <p>Learn Anywhere</p>
              </div>
            </div>
            <div className="float-card card-c">
              <span className="card-icon">⚡</span>
              <div>
                <strong>Live Sessions</strong>
                <small>Daily Classes</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="stats-section reveal">
        <div className="stats-grid">
          <div className="stat-item" ref={studentsRef}>
            <span className="stat-num">{students.toLocaleString()}+</span>
            <span className="stat-label">Enrolled Students</span>
          </div>
          <div className="stat-item" ref={coursesRef}>
            <span className="stat-num">{courses}+</span>
            <span className="stat-label">Active Courses</span>
          </div>
          <div className="stat-item" ref={expertsRef}>
            <span className="stat-num">{experts}+</span>
            <span className="stat-label">Expert Instructors</span>
          </div>
          <div className="stat-item" ref={successRef}>
            <span className="stat-num">{success}%</span>
            <span className="stat-label">Success Rate</span>
          </div>
        </div>
      </section>
      {}
      <section className="pillars-section">
        <div className="section-header reveal">
          <span className="section-badge">What We Offer</span>
          <h2>Everything You Need to <span className="gradient-text">Succeed</span></h2>
          <p>Four pillars that define the JRT learning experience</p>
        </div>
        <div className="pillars-grid">
          {[
            { icon: '🗺️', title: 'Learning Tracks', sub: '150k+ Lessons Available', desc: 'Structured roadmaps from beginner to advanced — follow a guided path or build your own journey.' },
            { icon: '🎯', title: 'Specializations', sub: '25k+ Programs Offered', desc: 'Deep-dive certifications in tech, sciences, and professional skills that employers actually value.' },
            { icon: '🛠️', title: 'Live Workshops', sub: 'Monthly Workshops', desc: 'Hands-on sessions with industry experts where you build real projects and get instant feedback.' },
            { icon: '🔓', title: 'Open Enrollment', sub: 'Year-Round Access', desc: 'No fixed semesters. Start today, study at your pace, and revisit lessons whenever you need.' },
          ].map((p, i) => (
            <div className="pillar-card reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <span className="pillar-sub">{p.sub}</span>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="vision-section reveal">
        <div className="vision-image">
          <div className="vision-img-placeholder">
            <span className="vision-emoji">🌱</span>
            <div className="vision-img-ring" />
          </div>
        </div>
        <div className="vision-text">
          <span className="section-badge">Our Vision</span>
          <h2>Knowledge That <span className="gradient-text">Transforms Lives</span></h2>
          <p>
            We believe education is more than memorizing facts — it's about developing the
            mindset and skills to tackle real challenges. JRT System was built to bridge the
            gap between classroom learning and practical application.
          </p>
          <p>
            Whether you're a student chasing grades or a professional leveling up your career,
            we're here to make that journey structured, affordable, and genuinely impactful.
          </p>
          <Link to="/register" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
            Join Our Community →
          </Link>
        </div>
      </section>
      {}
      <section className="categories-section">
        <div className="section-header reveal">
          <span className="section-badge">Browse Categories</span>
          <h2>Courses Tailored for <span className="gradient-text">Every Path</span></h2>
          <p>School, college, or career — we have a course for every stage</p>
        </div>
        <div className="categories-grid">
          {[
            { icon: '💻', title: 'Coding & Development', color: '#6366f1', items: ['Python', 'Web Dev', 'Computer Science'] },
            { icon: '🤖', title: 'AI & Technology', color: '#0ea5e9', items: ['ChatGPT', 'Cybersecurity', 'DevOps'] },
            { icon: '🔬', title: 'SSC Sciences', color: '#10b981', items: ['Biology', 'Computer Science', 'Physics'] },
            { icon: '📐', title: 'HSSC Programs', color: '#f59e0b', items: ['Pre-Medical', 'Pre-Engineering', 'ICS'] },
            { icon: '📖', title: 'Humanities', color: '#ec4899', items: ['Arts', 'Commerce', 'Languages'] },
            { icon: '🎓', title: 'Career Prep', color: '#8b5cf6', items: ['Interviews', 'Portfolios', 'Freelancing'] },
          ].map((cat, i) => (
            <div className="cat-card reveal" key={i} style={{ '--cat-color': cat.color }}>
              <div className="cat-icon" style={{ background: cat.color + '18' }}>{cat.icon}</div>
              <h3>{cat.title}</h3>
              <ul>
                {cat.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
              <a href="#" className="cat-link" style={{ color: cat.color }}>Explore →</a>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="testimonials-section">
        <div className="section-header reveal">
          <span className="section-badge">Student Stories</span>
          <h2>Real Results, <span className="gradient-text">Real People</span></h2>
        </div>
        <div className="testimonials-grid">
          {[
            { name: 'Hamza Raza', role: 'Matric Student, Lahore', text: 'JRT made my board prep so much easier. The recorded lectures helped me study at midnight before exams!', stars: 5 },
            { name: 'Sana Fatima', role: 'Software Intern', text: 'I learned Python from scratch through JRT\'s coding track. Within 4 months I landed my first internship.', stars: 5 },
            { name: 'Ahmed Khalid', role: 'Pre-Engineering Student', text: 'The live workshops are amazing. Instructors actually answer questions and explain concepts multiple times without judgment.', stars: 5 },
          ].map((t, i) => (
            <div className="testi-card reveal" key={i}>
              <div className="testi-stars">{'★'.repeat(t.stars)}</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.name[0]}</div>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="cta-section reveal">
        <div className="cta-inner">
          <h2>Ready to Start Your <span className="gradient-text-light">Learning Journey?</span></h2>
          <p>Join thousands of students already growing with JRT System</p>
          <div className="cta-actions">
            <Link to="/register" className="btn-white">Create Free Account</Link>
            <Link to="/freetrialreq" className="btn-outline-white">Try a Free Class</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
