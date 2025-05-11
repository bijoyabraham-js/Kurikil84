import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './pages/Home';
import Product from './components/Product';
import Songs from './components/Songs';
import EventList from './components/EventList';



function App() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderFinish = () => {
    setShowLoader(false);
  };

  if (showLoader) {
    return <Loader onFinish={handleLoaderFinish} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/buynow' element={<Product/>}/>
      <Route path='/songs' element={<Songs/>}/>
      <Route path='/events' element={<EventList/>}/>
    
    </Routes>
  );
}

export default App;
