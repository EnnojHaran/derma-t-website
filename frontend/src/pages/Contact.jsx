import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(data.message);
        setFormData({ name: '', email: '', role: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Could not reach the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Get Involved</h1>
          <p>Join the Derma-T community</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Connect With Us</h2>
            <p>Interested in joining Derma-T? Have questions? We'd love to hear from you!</p>

            <div className="info-block">
              <h3>📧 Email</h3>
              <p><a href="mailto:projectdermat@gmail.com">projectdermat@gmail.com</a></p>
            </div>

            <div className="info-block">
              <h3>📱 Follow Us</h3>
              <p>@projectdermat</p>
            </div>

            <div className="info-block">
              <h3>🎯 Target Audience</h3>
              <ul>
                <li>Students interested in healthcare and dermatology</li>
                <li>Wellness and self-care enthusiasts</li>
                <li>Community-minded leaders</li>
                <li>Anyone passionate about skin health education</li>
              </ul>
            </div>

            <div className="info-block">
              <h3>📍 Location</h3>
              <p>Queen's University, Kingston</p>
              <p><strong>Launch Date:</strong> January 14, 2026</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Express Interest</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="role">Interested In</label>
                <select id="role" value={formData.role} onChange={handleChange} required>
                  <option value="">Select a role...</option>
                  <option value="cofounder">Co-Founder</option>
                  <option value="outreach">Outreach Coordinator</option>
                  <option value="events">Event Coordinator</option>
                  <option value="content">Content Manager</option>
                  <option value="finance">Finance Manager</option>
                  <option value="web">Web Manager</option>
                  <option value="di">Head of D&I</option>
                  <option value="general">General Interest</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" rows="5" placeholder="Tell us why you're interested..." value={formData.message} onChange={handleChange}></textarea>
              </div>

              {error && <p style={{ color: 'red', marginBottom: '16px' }}>{error}</p>}
              {success && <div className="form-success">{success}</div>}

              <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
