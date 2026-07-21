import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import Botanicals from '../components/Botanicals'
import { benefits, stats } from '../data/content'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="route-page">
      <section className="hero">
        <Botanicals />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <span className="hero-eyebrow">Welcome to</span>
              <div className="hero-badge">🎯 Student-Led Initiative</div>
              <h1>Launch the Next Generation of Skin Health Leaders</h1>
              <div className="flourish">✦ ❖ ✦</div>
              <p className="hero-subtitle">
                Student-led nonprofit dedicated to advancing skin health,
                dermatology education, and community wellness.
              </p>
              <div className="hero-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate('/contact')}
                >
                  Join Our Mission
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate('/about')}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-logo-display">
                <img src={logo} alt="Derma-T Logo" className="hero-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="section-head">
            <h2>Why Join Derma-T?</h2>
            <p className="section-subtitle">
              We&apos;re more than just an organization — we&apos;re a community
              of passionate student leaders.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b) => (
              <div className="benefit-card" key={b.title}>
                <div className="benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
