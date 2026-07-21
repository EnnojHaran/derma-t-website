import React from 'react';

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Derma-T</h1>
          <p>Our mission, vision, and values</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-block">
              <h2>Our Purpose</h2>
              <p>Derma-T is a student-led nonprofit advancing skin health education, hygiene, and dermatology awareness on campus and beyond Kingston.</p>
              <p>We believe that accessible, evidence-based skin health information should be available to everyone. Our mission is to create a community of informed, compassionate leaders who champion inclusive skin health.</p>
            </div>
            <div className="content-block">
              <h2>Our Values</h2>
              <div className="content-list">
                <div className="list-item">✓ <strong>Accessible</strong> - Information for all students</div>
                <div className="list-item">✓ <strong>Independent</strong> - Student-led, unbiased perspective</div>
                <div className="list-item">✓ <strong>Free</strong> - No cost to join or access resources</div>
                <div className="list-item">✓ <strong>Authoritative</strong> - Evidence-based, dermatologist-reviewed</div>
              </div>
            </div>
          </div>

          <div className="content-block full-width">
            <h2>Our Three Pillars</h2>
            <div className="goals-list">
              <div className="goal-item">
                <h3>📚 Education</h3>
                <p>Evidence-based workshops and guest speakers featuring dermatologists and medical students sharing their expertise.</p>
              </div>
              <div className="goal-item">
                <h3>🤝 Outreach</h3>
                <p>Hygiene kit assembly, skin health campaigns, and community partnerships to make real impact.</p>
              </div>
              <div className="goal-item">
                <h3>💡 Awareness</h3>
                <p>Debunk myths, promote sun protection, and advance inclusive skin health education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
