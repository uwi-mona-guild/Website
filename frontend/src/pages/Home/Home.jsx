import React, { useEffect,useState } from 'react';
import * as assets from '../../assets';
import styles from './Home.module.scss';

const Home = () => {
  // Slider functionality
  const images = [assets.event1, assets.event2, assets.event3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="main-container">
      <div className="search">
        <input type="text" name="search" placeholder="Search..." />

      </div>
      <div className="folder-tab grid-layout">
        {/* LEFT SIDE */}
        <div className="main__content">
          <h1>Welcome to the FST Website</h1>
          <h2>What's New!</h2>
          <p>This is a simple website created for the FST guild.</p>
          <a href="/" className="main__btn">Find Out More</a>
        </div>

        {/* RIGHT SIDE: SLIDER */}
        <div className="main__img--container">
          <div className="slider">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              />
            ))}

            <div className="slider-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*!-- Services Section --*/}
      <div className="services">
        <h1>See What the hype is about</h1>
        <div className="services__container">
            <div className="services__card">
                
                <h2>Get to know you guild</h2>
                <p>Discover the latest in technology and innovation.</p>
                <button>Learn More</button>
            </div>
            <div className="services__card">
                
                <h2>Are you Ready</h2>
                <p>Discover the latest in technology and innovation.</p>
                <button>Learn More</button>
            </div>
        </div>
      </div>

      {/*!-- Update Section --*/}
      <div className="update">
        <h2 className="update-title">KEEP UP-TO-DATE</h2>
        <div className="update-cards">
          <div className="card">
            <img src={assets.monaTimesImage} alt="Mona Times" />
            <div className="overlay">
              <h3><span className="script-font">Mona</span> TIMES</h3>
            </div>
          </div>
          <div className="card">
            <img src={assets.guildTV} alt="Guild TV" />
            <div className="overlay">
              <h3><span className="bold-font">GUILD</span><span className="regular-font">TV</span></h3>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy red bottom */}
      <div className="update-bottom-wave">
        <svg viewBox="0 0 1440 320" className="wave-svg">
          <path fill="#7b0000" fillOpacity="1" d="M0,64L60,96C120,128,240,192,360,208C480,224,600,192,720,165.3C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <div className="red-section"></div>
      </div>
    </div>

  );
};

export default Home;
