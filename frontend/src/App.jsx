import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as Frame from './components/Frame';
import { Home, Support, Events } from './pages';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <Frame.Navbar /> 
        {/* Changed from <Frame.Layout /> because the outlet, and hence routes with page content, wasn't loading */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        <Frame.Footer />
      </div>
    </Router>
  );
}

export default App;