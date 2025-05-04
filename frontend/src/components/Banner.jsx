import React from "react";
import './Banner.css';
import casette from '../assets/casette.jpg'; // Use the image you want

function Banner() {
  const backgroundImageStyle = {
    backgroundImage: `url(${casette})`,
  };

  return (
    <div className="about">
      <div className="banner-container" style={backgroundImageStyle}>
      </div>
    </div>
  );
}

export default Banner;
