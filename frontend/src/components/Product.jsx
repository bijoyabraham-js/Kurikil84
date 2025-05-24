import React from 'react';
import './Product.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import tshirt1 from '../assets/ts1.webp';
import tshirt2 from '../assets/ts2.webp';
import tshirt3 from '../assets/ts3.webp';
import tshirt4 from '../assets/ts4.webp';
import tshirt5 from '../assets/ts5.webp';

const products = [
  {
    title: 'T-Shirt 1',
    description: 'Echo the vibe. Wear Kurikil.',
    image: tshirt1,
  },
  {
    title: 'T-Shirt 2',
    description: 'Echo the vibe. Wear Kurikil.',
    image: tshirt2,
  },
  {
    title: 'T-Shirt 3',
    description: 'Echo the vibe. Wear Kurikil.',
    image: tshirt3,
  },
  {
    title: 'T-Shirt 4',
    description: 'Echo the vibe. Wear Kurikil.',
    image: tshirt4,
  },
  {
    title: 'T-Shirt 5',
    description: 'Echo the vibe. Wear Kurikil.',
    image: tshirt5,
  },
];

function Product() {
  return (
    <section className="product-section">
      <h2 className="section-title">Our Products</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },        // Mobile
          768: { slidesPerView: 2 },      // Tablet
          1024: { slidesPerView: 4 },     // Desktop
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a
                  className="buy-button"
                  href={`https://wa.me/8075949498?text=Hi, I am interested in buying the ${encodeURIComponent(product.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Product;
