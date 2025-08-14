import {useState, useEffect} from 'react'
import styles from './Initiatives.module.scss';
import { Link, useLocation } from 'react-router-dom';
import * as assets from '../../assets';
const LDL = () => {
      const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
  return (
      <div className={styles.initiatives}>
      {/* Main Banner */}
      <div className={styles.banner}>
        <img src={assets.event3} alt="Fresher's Series Banner" />
        <div className={styles.bannerText}>
          {/* ✏️ CHANGE THIS TEXT */}
          <h2>Fresher's Series</h2>
          <p>Welcome to the UWI Mona Fresher's Series – your introduction to campus life, culture, and opportunities!</p>
        </div>
      </div>

      {/* Section 1 */}
      <section className={styles.section}>
        <div className={styles.text}>

          <h3>The Fresher Experience </h3>
          <p>
           The Fresher’s Series is a vibrant Guild-led initiative crafted to welcome and immerse our
 newest Pelicans into the dynamic culture and energy of The University of the West Indies.
  Over the course of three unforgettable days, new students will experience a high-energy
 lineup of signature events designed to connect, celebrate, and kick start their UWI
 journey.
          </p>
        </div>
        <div className={styles.image}>
          <img src={assets.event1} alt="Fresher Activities" />
        </div>
      </section>

      {/* Section 2 */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.text}>
          {/* ✏️ CHANGE THIS TEXT */}
          <h3>Fresher Series</h3>
          <ul>
            <li>Fresher’s Concert – A showcase of talent, music, and unforgettable performances</li>
            <li> Fresher’s Cocktail – A classy mixer to mingle, meet fellow students, and network in style.</li>
            <li> Fresher’s Fete – The grand finale: a full-blown party with vibes, music, and the true UWI
 spirit.</li>
          </ul>
        </div>
        <div className={styles.image}>
          <img src={assets.event2} alt="Crowd enjoying Fresher's Series" />
        </div>
      </section>

      {/* Closing */}
      <section className={styles.section}>
        <div className={styles.text}>
          {/* ✏️ CHANGE THIS TEXT */}
          <h3>Join the Experience</h3>
          <p>Don't miss out on the events that kickstart your UWI journey with excitement and connection!
            Get ready to make memories, form friendships, and experience what being a Pelican is all about.
          </p>
        </div>
      </section>

    <section className={`${styles.section} ${styles.centered}`}>
        <div className={styles.text}>
          <h3>See Upcoming Events</h3>
          <p>Explore the full list of events happening during the Fresher's Series and beyond.</p>
          <Link to="/events" className={styles.eventsButton}>
            View Events
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LDL
