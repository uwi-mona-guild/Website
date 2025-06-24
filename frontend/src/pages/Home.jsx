import React from 'react';
import Navbar from "../components/Navbar";
import '../index.css';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="main-container">
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="folder-tab">
        <Navbar/>
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
