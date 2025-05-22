import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import img1 from '../assets/g1.webp';
import img2 from '../assets/g2.webp';
import img3 from '../assets/g3.webp';
import img4 from '../assets/g4.webp';
import img5 from '../assets/g5.webp';
import img6 from '../assets/g6.webp';
import img7 from '../assets/e3y.webp';

const images = [img7, img1, img2, img3, img4,img5,img6];

export default function Spring3DCarousel() {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = images.map((img, index) => ({
    key: uuidv4(),
    content: (
      <img
        src={img}
        alt={`img-${index}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        }}
      />
    ),
    onClick: () => setGoToSlide(index),
  }));

  const nextSlide = () => {
    setGoToSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setGoToSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      style={{
        textAlign: "center",
        paddingInline: "clamp(1rem, 5vw, 3rem)",
        marginTop: "3rem",
        marginBottom: "3rem",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(1.5rem, 2vw + 1rem, 2.5rem)",
          marginBottom: "2rem",color:'white'
        }}
      >
        Band Gallery
      </h2>

      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "clamp(300px, 50vw, 400px)",
          marginInline: "auto",
          position: "relative",
        }}
      >
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={false}
          animationConfig={{ tension: 120, friction: 14 }}
        />

        {/* Custom Nav Buttons */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            background: "#fff",
            border: "none",
            fontSize: "2rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "0 10px 10px 0",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            zIndex: 1,
          }}
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            background: "#fff",
            border: "none",
            fontSize: "2rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "10px 0 0 10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            zIndex: 1,
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}
