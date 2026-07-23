import PageHero from '../components/PageHero'
import { Mail, Instagram, Target, MapPin } from '../components/Icons'
import { CONTACT_EMAIL } from '../data/content'

const audience = [
  'Healthcare & dermatology students',
  'Wellness and self-care enthusiasts',
  'Community-minded leaders',
  'Anyone passionate about skin health',
]

export default function Contact() {
  return (
    <div className="route-page">
      <PageHero
        accent="say hello"
        title="Get Involved"
        subtitle="Join the Derma-T community"
      />

      <section className="content-section">
        <div className="container">
          <div className="contact-cta">
            <Mail className="contact-cta-icon" />
            <h2>Say hello</h2>
            <p>
              Interested in joining Derma-T, volunteering, or just have a
              question? Send us an email: we&apos;d love to hear from you.
            </p>
            <a className="btn btn-primary btn-large" href={`mailto:${CONTACT_EMAIL}`}>
              Email {CONTACT_EMAIL}
            </a>
          </div>

          <div className="contact-tiles">
            <div className="contact-tile">
              <Instagram className="contact-tile-icon" />
              <h3>Follow Us</h3>
              <p>
                <a
                  href="https://instagram.com/projectdermat"
                  target="_blank"
                  rel="noreferrer"
                >
                  @projectdermat
                </a>
              </p>
            </div>

            <div className="contact-tile">
              <MapPin className="contact-tile-icon" />
              <h3>Location</h3>
              <p>Queen&apos;s University, Kingston</p>
              <p className="contact-tile-meta">Launch: January 14, 2026</p>
            </div>
          </div>

          <div className="audience-block">
            <div className="audience-head">
              <Target className="audience-icon" />
              <h3>Who this is for</h3>
            </div>
            <div className="audience-tags">
              {audience.map((a) => (
                <span className="tag" key={a}>{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
