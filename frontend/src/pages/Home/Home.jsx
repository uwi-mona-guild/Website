import React from 'react';
import '../index.css';

const Home = () => {
  return (
    <div className="main-container">
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="folder-tab">
        <Navbar/>
            <div className="hero-content">
              <h1>LOREM IPSUM DOLOR<br />SIT AMET</h1>
              <p>Lorem ipsum dolor sit amet.</p>
                  <button>See more</button>
          </div>
      </div>
    </div>
  );
};

export default Home;
