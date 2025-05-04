import React from 'react';
import './Video.css';

function Video() {
  return (
    <section className="video-section">
      <div className="video-overlay">
        <h2 style={{color:'black'}}>Watch Our Highlight</h2>
        <div className="video-container">
        <iframe
  src="https://www.youtube.com/embed/Yqf_CMcnWco"
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
