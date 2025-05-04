import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Topbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [suvOpen, setSuvOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    document.body.classList.toggle('mobile-nav-active');
  };

  return (
    <header className={`navbar-custom ${mobileNavOpen ? 'navbar-mobile' : ''}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <h1 className="logo me-auto me-lg-0">
          <Link to="/">Kurikil</Link>
        </h1>

        <nav className={`navbar order-last order-lg-0`}>
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/aboutus">About</Link></li>
            <li><Link className="nav-link" to="/joinus">Join</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileNav} />
        </nav>
      </div>
    </header>
  );
}

export default Topbar;
