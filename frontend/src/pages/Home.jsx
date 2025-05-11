import React, { useRef } from 'react';
import Topbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Songs from '../components/Songs';
import Video from '../components/Video';
import EventList from '../components/EventList';
import Spring3DCarousel from '../components/Album';

function Home() {
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const eventsRef = useRef(null);
  const songsRef = useRef(null);
  const videoRef = useRef(null);
  const albumRef = useRef(null);

  return (
    <div>
      <Topbar
        homeRef={homeRef}
        productsRef={productsRef}
        eventsRef={eventsRef}
        songsRef={songsRef}
        videoRef={videoRef}
        albumRef={albumRef}
      />
      <section ref={homeRef}>
        <Banner />
      </section>
      <section ref={eventsRef}>
        <EventList />
      </section>
      <section ref={productsRef}>
        <Product />
      </section>
      <section ref={songsRef}>
        <Songs />
      </section>
      <section ref={videoRef}>
      <Video />
      </section>
      <section ref={albumRef}>
      <Spring3DCarousel/>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
