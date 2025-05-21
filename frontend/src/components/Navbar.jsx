import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Topbar({ homeRef, productsRef, eventsRef, songsRef, videoRef, albumRef }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <header className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <h1 className="logo">
          <a href="#">Kurikil</a>
        </h1>

        <div className="icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><button className="transparent-button" onClick={() => scrollToSection(homeRef)}>Home</button></li>
            <li><button className="transparent-button" onClick={() => scrollToSection(productsRef)}>Products</button></li>
            <li><button className="transparent-button" onClick={() => scrollToSection(eventsRef)}>Events</button></li>
            <li><button className="transparent-button" onClick={() => scrollToSection(songsRef)}>Our Songs</button></li>
            <li><button className="transparent-button" onClick={() => scrollToSection(videoRef)}>HighLights</button></li>
            <li><button className="transparent-button" onClick={() => scrollToSection(albumRef)}>Album</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Topbar;
