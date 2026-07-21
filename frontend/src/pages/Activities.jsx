import React from 'react';

const activities = [
  { icon: '🎤', title: 'Guest Speaker Series', desc: 'Dermatologists and healthcare professionals share insights on patient care, treatment approaches, and wellness.' },
  { icon: '🎁', title: 'Hygiene Kit Assembly', desc: 'Community outreach events where we assemble and distribute hygiene kits with educational materials to underserved populations.' },
  { icon: '📱', title: 'Social Media Myth-Busting', desc: 'Weekly Instagram posts debunking common skin myths and sharing evidence-based skin health facts (#projectdermat).' },
  { icon: '💰', title: 'Fundraising Campaigns', desc: 'Supporting local skin health initiatives and organizations through strategic fundraising efforts.' },
  { icon: '☀️', title: 'Sun Protection Awareness', desc: 'Campaigns promoting sun safety, UV protection, and skin cancer prevention education.' },
  { icon: '🌈', title: 'Inclusive Skin Health', desc: 'Resources and education celebrating skin health across all skin tones and types.' },
];

function Activities() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Activities</h1>
          <p>Making a real difference in skin health</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="activities-grid">
            {activities.map((activity, i) => (
              <div className="activity-card" key={i}>
                <div className="activity-icon">{activity.icon}</div>
                <h3>{activity.title}</h3>
                <p>{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Activities;
