import React from 'react';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Frame from './components/Frame';
import { Home, Events, Guild, Initiatives, Fresher, AddEvent,Carnival, INTE, SportsDay } from './pages';


const App = () => {
  return (
    <Router>
      <div className='App'>
        {/* <Frame.Navbar /> */}
        <Routes>
          {/* Routes WITH Layout (Navbar + Footer) */}
          <Route element={<Frame.Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/guild" element={<Guild />} />
          <Route path="/events" element={<Events />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/initiatives/fresher" element={<Fresher />} />

          {/* Yearly Events */}
          <Route path="/events/Carnival" element={<Carnival />} />
          <Route path="/events/INTE" element={<INTE />} />
          <Route path="/events/sportsday" element={<SportsDay />} />

          <Route path="/events/add_admin" element={<AddEvent />} />
          
          
          </Route>
        </Routes>
        {/* <Frame.Footer /> */}
      </div>
    </Router>
  
  );
}

export default App;