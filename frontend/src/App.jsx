import React, { useState } from 'react';
import Loader from './components/Loader';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? <Loader onFinish={() => setLoading(false)} /> : <Home />}
    </div>
  );
}

export default App;
