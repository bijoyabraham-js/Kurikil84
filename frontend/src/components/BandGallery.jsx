import React, { useState } from 'react';
import './BandGallery.css';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import img1 from '../assets/casette.jpg';
import img2 from '../assets/mic.jpg';
import img3 from '../assets/guitar.jpg';
import img4 from '../assets/remix.jpg';

const initialImages = [img1, img2, img3, img4];

function BandGallery() {
  const [index, setIndex] = useState(0);
  const stackSize = 3; // Show top 3 cards

  const handleSwipe = () => {
    setIndex((prev) => (prev + 1) % initialImages.length);
  };

  const cardsToShow = Array.from({ length: stackSize }).map((_, i) => {
    const imgIndex = (index + i) % initialImages.length;
    return {
      image: initialImages[imgIndex],
      key: `${imgIndex}-${i}`
    };
  });

  return (
    <section className="gallery-container">
      <h2>Band Gallery</h2>
      <div className="swipe-stack">
        {cardsToShow
          .reverse() // reverse so top card is last in DOM
          .map((card, i) => (
            <SwipeCard
              key={card.key}
              image={card.image}
              onSwipe={i === 0 ? handleSwipe : null}
              index={i}
            />
          ))}
      </div>
      <div className="gallery-indicator">
        {initialImages.map((_, i) => (
          <span key={i} className={i === index ? 'active' : ''}></span>
        ))}
      </div>
    </section>
  );
}

function SwipeCard({ image, onSwipe, index }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);

  const scale = 1 - index * 0.05;
  const translateY = index * 8;

  return (
    <motion.div
      className="swipe-card"
      style={{
        x,
        rotate,
        scale,
        y: translateY,
        backgroundImage: `url(${image})`,
        zIndex: 100 - index,
      }}
      drag={index === 0 ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      whileTap={{ scale: 1.05 }}
      onDragEnd={(event, info) => {
        if (onSwipe && Math.abs(info.offset.x) > 150) {
          x.set(info.offset.x > 0 ? 1000 : -1000);
          setTimeout(onSwipe, 300);
        } else {
          x.set(0);
        }
      }}
    />
  );
}

export default BandGallery;
