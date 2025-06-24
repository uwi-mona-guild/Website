import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Support from './pages/Support/Support';
import Events from './pages/Events/Events';



const App = () => {
  return (
    <div>
      <Routes>
        {/* Routes WITH Layout (Navbar + Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;