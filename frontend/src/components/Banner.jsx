import React from "react";
import './Banner.css';
import band from "../assets/for_small_print.jpg";

function Banner() {
  const backgroundImageStyle = {
    backgroundImage: `url(${band})`,
  };

  return (
    <div className="about">
      <div className="banner-container" style={backgroundImageStyle}></div>
      
      <div className="about-section">
        <h2 className="about-title">About the Kurikil</h2>
        <p className="about-text">
          Thaikkudam Bridge the rock band with a soundscape built upon elements of folk and classical
          sounds of India interspersed, at times, with layers of progressive, pop, ambient and
          electronic textures. 10 years, 650+ shows, 100+ international shows in 25 countries, it
          truly has been a stupendous journey for the band. With a 15 member ensemble cast the band's
          strength lies in its versatility and unpredictability thanks to nine vocalists and six
          instrumentalists from the length and breadth of the country, each of whom brings on board,
          a wealth of diverse musical, linguistic and cultural influences thus creating a unique
          musical experience that is truly global in nature yet local in idea.
          <br /><br />
          Navarasam, the debut album was released in 2016 and it has 10 songs in all ( 9 + 1 bonus
          track). Navarasam is an assortment of songs that talks of dreary existentialism,
          socio-political commentaries, rebellion, freedom and of the human spirit of oneness! The
          second album, Namah, a dream project released to the delight of music lovers in 2019, and is
          a collaborative featuring legendary artists from around the globe. With legendary
          associations such as Guthrie Govan, Chris Adler, Marco Minnemann, Jordan Ruddess, Pandit Ram
          Narayan, Pandit Viswamohan Bhat, Padmabhushan Umayalpuram K Sivaraman, Ustad Rashid Khan,
          Niladri Kumar, Anand Raj Benjamin Paul, the album was a milestone in Indian Independent
          Music.
        </p>
      </div>
    </div>
  );
}

export default Banner;
