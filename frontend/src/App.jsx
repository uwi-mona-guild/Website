import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Frame from './components/Frame';
import { Home, Support, Events } from './pages';


const App = () => {
  return (
    <Router>
      <div className='App'>
        {/* <Frame.Navbar /> */}
        <Routes>
          {/* Routes WITH Layout (Navbar + Footer) */}
          <Route element={<Frame.Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          </Route>
        </Routes>
        {/* <Frame.Footer /> */}
      </div>
    </Router>
  );
}

export default App;