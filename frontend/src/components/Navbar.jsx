import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Topbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <h1 className="logo">
          <Link to="/">Kurikil</Link>
        </h1>

        <nav className="navbar-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About</Link></li>
            <li><Link to="/joinus">Join</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Topbar;
