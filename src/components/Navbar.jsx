import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/activities', label: 'Activities' },
  { to: '/team', label: 'Team' },
  { to: '/facts', label: 'Fun Facts' },
]

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="topbar">
      <div className="container">
        <div className="topbar-inner">
          <button
            type="button"
            className="logo"
            onClick={() => navigate('/')}
            aria-label="Go to home"
          >
            <img src={logo} alt="Derma-T Logo" className="logo-img" />
            <span className="logo-name">Derma-T</span>
          </button>

          <div className="nav">
            {links.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end}>
                {label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn-nav">
              Join Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
