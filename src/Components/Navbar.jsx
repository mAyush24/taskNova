import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="branding">TaskNova</div>
      <nav className="main-nav" aria-label="Main navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
} 