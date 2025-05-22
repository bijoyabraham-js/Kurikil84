import React from "react";
import './Banner.css';
import band from "../assets/cover_compressed.webp";

function Banner() {
  const backgroundImageStyle = {
    backgroundImage: `url(${band})`,
  };

  return (
    <div className="about">
      <div className="banner-container" style={backgroundImageStyle}></div>
      
      <div className="about-section">
        <h2 className="about-title">About Kurikil</h2>
        <p className="about-text">
          Kurikil '84 is not a band.
It’s a collective of creative people,
Artists, musicians, storytellers,
who dream of growing together and helping others rise too.
We started with just three friends who wanted to make space for people like us. 
A place where anyone can share their work, find support, and feel seen.
We believe every idea matters, whether it’s a rough sketch, a late-night melody, or a small story that means a lot.
At the core, Kurikil is about community. We lift each other up, fly together, and reach for the skies,
not alone, but side by side.
        </p>
      </div>
    </div>
  );
}

export default Banner;
