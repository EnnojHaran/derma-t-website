import { useState } from 'react'
import PageHero from '../components/PageHero'
import { roleOptions, CONTACT_EMAIL } from '../data/content'

const EMPTY_FORM = { name: '', email: '', role: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `Derma-T Interest - ${form.role}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nInterested In: ${form.role}\n\nMessage:\n${form.message}`

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    setForm(EMPTY_FORM)
  }

  return (
    <div className="route-page">
      <PageHero
        accent="say hello"
        title="Get Involved"
        subtitle="Join the Derma-T community"
      />

      <section className="content-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Connect With Us</h2>
            <p>
              Interested in joining Derma-T? Have questions? We&apos;d love to
              hear from you!
            </p>

            <div className="info-block">
              <h3>📧 Email</h3>
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
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
              <p>Queen&apos;s University, Kingston</p>
              <p>
                <strong>Launch Date:</strong> January 14, 2026
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Express Interest</h2>

            {sent && (
              <div className="form-success" role="status">
                Thanks! Your email app should have opened with your message
                ready to send.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Interested In</label>
                <select
                  id="role"
                  value={form.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a role...</option>
                  {roleOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us why you're interested..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
