import React, { useEffect,useState } from 'react';
import * as assets from '../../assets';
import styles from './Home.module.scss';
import hero from './Hero.module.scss';
import services from './Services.module.scss';
import update from './Update.module.scss';

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
  <div>
    <div className="pageContainer">  {/* global style */}

      <div className={hero.folderFrame}>
        <div className={hero.imgMask}>
          
          {/* Image Silder */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`${hero.slide} ${index === currentSlide ? hero.slideActive : ''}`}
            />
          ))}

          {/* Red overlay folder (on top) */}
          <img
            src={assets.folder_icon}
            alt="Folder Overlay"
            className={hero.folderOverlay}
          />
          <img
            src={assets.folder_icon}
            alt="Folder Overlay"
            className={`${hero.folderOverlay} ${hero.folderOverlay2}`}
          />

          {/* Slider Dots */}
          <div className={hero.sliderDots}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${hero.dot} ${index === currentSlide ? hero.dotActive : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        
        </div>
        
        {/* Welcome */}
        <div className={hero.welcomeContent}>
          <div className={hero.greeting}>
            <h1>Welcome to the</h1>
            <h1>UWI Mona Guild</h1>
            <p>This is a simple website created for the FST guild.</p>
          </div>
          <a href="/" className="button">Find Out More</a>
        </div>

      </div>

      {/*!-- Services Section --*/}
      <div className={services.section}>
        <h1>See What The Hype Is About</h1>

        <div className={services.container}>
            <div className={services.card}>
                <h2>Get to know your guild</h2>
                <p>Discover the latest in technology and innovation.</p>
                <button>Learn More</button>
            </div>
            <div className={services.card}>
                <h2>Are You Ready</h2>
                <p>Discover the latest in technology and innovation.</p>
                <button>Learn More</button>
            </div>
        </div>
      </div>

      {/*!-- Update Section --*/}
      <div className={update.section}>
        <h2 className={update.title}>KEEP UP-TO-DATE</h2>
        <div className={update.cardContainer}>
          <div className={update.card}>
            <img src={assets.monaTimesImage} alt="Mona Times" />
            <div className={update.textOverlay}>
              <h3><span className="script-font">Mona</span> TIMES</h3>
            </div>
          </div>
          <div className={update.card}>
            <img src={assets.guildTV} alt="Guild TV" />
            <div className={update.textOverlay}>
              <h3><span className="bold-font">GUILD</span><span className="regular-font">TV</span></h3>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Wavy red bottom */}
    <div className={styles.updateBottomWave}>
        <svg viewBox="0 0 1440 320" className={styles.waveSvg}>
          <path fill="var(--color-primary)" fillOpacity="1" d="M0,64L60,96C120,128,240,192,360,208C480,224,600,192,720,165.3C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
    </div>
    <div className={styles.redSection} />
  </div>

  );
};

export default Home;
