import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './pages/Home';
import Product from './components/Product';
import Songs from './components/Songs';
import EventList from './components/EventList';

import band from './assets/cover_compressed.webp'; // preload this

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = band;
    img.onload = () => setImageLoaded(true);
  }, []);

  const handleLoaderFinish = () => {
    setShowLoader(false);
  };

  const isReady = !showLoader && imageLoaded;

  if (!isReady) {
    return <Loader onFinish={handleLoaderFinish} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buynow" element={<Product />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/events" element={<EventList />} />
    </Routes>
  );
}

export default App;
