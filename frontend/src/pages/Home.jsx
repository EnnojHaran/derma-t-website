import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge">🎯 Student-Led Initiative</div>
              <h1>Launch the Next Generation of Skin Health Leaders</h1>
              <p className="hero-subtitle">Student-led nonprofit dedicated to advancing skin health, dermatology education, and community wellness.</p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => navigate('/contact')}>Join Our Mission</button>
                <button className="btn btn-secondary" onClick={() => navigate('/about')}>Learn More</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-logo-display">
                <img src="/logo.png" alt="Derma-T Logo" className="hero-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <h2>Why Join Derma-T?</h2>
          <p className="section-subtitle">We're more than just an organization — we're a community of passionate student leaders.</p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Medical Education</h3>
              <p>Gain deep insight into dermatology and skin health from expert guest speakers and workshops.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Community Impact</h3>
              <p>Make a real difference through educational outreach, hygiene kit distribution, and community initiatives.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Leadership Skills</h3>
              <p>Develop teamwork, organizational, and leadership abilities in a collaborative environment.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Professional Network</h3>
              <p>Connect with healthcare professionals, dermatologists, and like-minded students.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>7</h3>
              <p>Executive Leadership Roles</p>
            </div>
            <div className="stat-card">
              <h3>6+</h3>
              <p>Community Initiatives</p>
            </div>
            <div className="stat-card">
              <h3>January 14, 2026</h3>
              <p>Official Launch Date</p>
            </div>
            <div className="stat-card">
              <h3>Kingston & Beyond</h3>
              <p>Community Reach</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
