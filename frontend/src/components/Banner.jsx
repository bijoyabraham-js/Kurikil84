import React from "react";
import './Banner.css';
import band from "../assets/frontCover.webp";

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
          Kurikil '84 started as a spark—three artists trying to make room for others like them. It’s a space built by artists, for artists. 
          A place where expression isn’t just welcomed, it’s celebrated.
          We’re here for the quiet sketches, the midnight melodies, the shaky first takes and the stories that don’t always get told. 
          Because we believe it’s the little things that matter. No piece of art is ever too small to be meaningful.
          At the heart of it all is community—people who show up for each other, lift each other, and grow together. 
          This is our safe space. Our soundboard. Our shared canvas. <br />
          Kurikil '84 ,where art meets heart. And everyone’s invited.
        </p>
      </div>
    </div>
  );
}

export default Banner;
