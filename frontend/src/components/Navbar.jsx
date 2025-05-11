import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Topbar({ homeRef, productsRef, eventsRef, songsRef,videoRef,albumRef }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to the section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <h1 className="logo">
          <a href="#">Kurikil</a>
        </h1>

        <nav className="navbar-links">
          <ul>
            <li>
              <button className="transparent-button" onClick={() => scrollToSection(homeRef)}>Home</button>
            </li>
            <li>
              <button className="transparent-button"onClick={() => scrollToSection(productsRef)}>Products</button>
            </li>
            <li>
              <button className="transparent-button" onClick={() => scrollToSection(eventsRef)}>Events</button>
            </li>
            <li>
              <button  className="transparent-button" onClick={() => scrollToSection(songsRef)}>Our Songs</button>
            </li>
             <li>
              <button className="transparent-button" onClick={() => scrollToSection(videoRef)}>HighLights</button>
            </li>
            <li>
              <button className="transparent-button" onClick={() => scrollToSection(albumRef)}>Album</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Topbar;
