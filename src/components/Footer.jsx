import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { CONTACT_EMAIL } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="Derma-T Logo" className="footer-logo-img" />
            <div className="footer-branding">
              <h3>Derma-T</h3>
              <p>Advancing skin health through student-led education.</p>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <p>
              A student-led nonprofit dedicated to advancing skin health
              education and dermatology awareness.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/team">Team</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>Email Us</a></li>
              <li>
                <a
                  href="https://instagram.com/projectdermat"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li><Link to="/contact">Contact Form</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Location</h4>
            <p>Queen&apos;s University<br />Kingston, Ontario<br />Canada</p>
            <p><strong>Launch:</strong> January 14, 2026</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 Derma-T. All rights reserved. | Student-led dermatology
            initiative. Content for educational use.
          </p>
        </div>
      </div>
    </footer>
  )
}
