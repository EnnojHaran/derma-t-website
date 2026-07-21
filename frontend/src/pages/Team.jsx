import React from 'react';
import { useNavigate } from 'react-router-dom';

const roles = [
  { title: 'Co-Founders', count: 2, desc: 'Vision & Leadership - Sarah and Rojan lead our strategic direction and overall mission.' },
  { title: 'Outreach Coordinators', count: 2, desc: 'Community & Partnerships - Ashley and Hasti build relationships and plan community initiatives.' },
  { title: 'Event Coordinators', count: 2, desc: 'Workshops & Logistics - Rayyan and Kiana organize speakers, events, and operational details.' },
  { title: 'Content Managers', count: 2, desc: 'Resources & Social Content - Prisha and Benjamin create educational materials and social posts.' },
  { title: 'Finance Manager', count: 1, desc: 'Budget & Funding - Chloe manages finances and fundraising efforts.' },
  { title: 'Web Managers', count: 2, desc: 'Platform & Accessibility - Ennoj and Kyan maintain our digital presence and website.' },
  { title: 'Head of D&I', count: 1, desc: 'Inclusive Skin Health - Salma ensures our content and initiatives are inclusive for all.' },
];

function Team() {
  const navigate = useNavigate();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Team</h1>
          <p>Meet the leaders driving Derma-T forward</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="roles-grid">
            {roles.map((role, i) => (
              <div className="role-card" key={i}>
                <div className="role-header">
                  <h3>{role.title}</h3>
                  <div className="role-count">{role.count}</div>
                </div>
                <p>{role.desc}</p>
              </div>
            ))}
          </div>

          <div className="team-call">
            <h2>Join Our Team</h2>
            <p>We're always looking for passionate student leaders to join us. Whether you have experience or are eager to learn, there's a role for you in Derma-T.</p>
            <button className="btn btn-primary btn-large" onClick={() => navigate('/contact')}>Express Interest</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
