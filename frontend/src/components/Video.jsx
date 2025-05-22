import React, { useState, useEffect } from 'react';
import './Video.css';

function Video() {
  const videos = [
    "https://www.youtube.com/embed/EDo1ehOMYXo", 
    "https://www.youtube.com/embed/rmGsvSqCsp0",
    "https://www.youtube.com/embed/_lV55GSlyCo"
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change video every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="video-section">
      <div className="video-overlay">
        <h2 style={{color: 'white'}}>Watch Our Highlight</h2>
        <div className="video-container">
          <iframe
            src={videos[currentIndex]}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Video;
