import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="topbar">
      <div className="container">
        <div className="topbar-inner">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Derma-T Logo" className="logo-img" />
            <span className="logo-name">Derma-T</span>
          </Link>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/team">Team</Link>
            <Link to="/facts">Fun Facts</Link>
            <Link to="/contact" className="btn-nav">Join Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
