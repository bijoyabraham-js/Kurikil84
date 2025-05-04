import React from 'react';
import './Product.css';
import casette from '../assets/casette.jpg';
import mic from '../assets/mic.jpg';
import guitar from '../assets/guitar.jpg';
import remix from '../assets/remix.jpg';

const products = [
  {
    title: 'Retro Cassette',
    description: 'Classic audio with vintage charm.',
    image: casette
  },
  {
    title: 'Electric Guitar',
    description: 'Rock your world with clean tones.',
    image: guitar
  },
  {
    title: 'Studio Mic',
    description: 'Perfect vocals with studio precision.',
    image: mic
  },
  {
    title: 'DJ Remix Set',
    description: 'Mix beats like a pro.',
    image: remix
  }
];

function Product() {
  return (
    <section className="product-section">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a
                className="buy-button"
                href={`https://wa.me/919876543210?text=Hi, I am interested in buying the ${encodeURIComponent(product.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
