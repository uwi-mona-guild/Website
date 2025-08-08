//copy format for other events
// This file is part of the frontend/src/pages/Events/Yearly Events directory
// It handles the display of the Carnival event page, including images and descriptions
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../Events.module.scss";
import * as assets from "../../../assets";

export default function Carnival() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumb */}
      <p>
        <Link to="/events">Events</Link> <span>•</span> UWI Carnival
      </p>

      {/* Header */}
      <div className={styles.header}>
        <h1>UWI Carnival</h1>
      </div>

      {/* Intro text */}
      <div className={styles.introText}>
        Experience the vibrant colors, lively music, and rich cultural
        traditions of our annual Carnival. Join us for a spectacular parade,
        dazzling costumes, live performances, and street celebrations that
        bring the community together in joy and unity.
      </div>

      {/* Image Gallery */}
      <div className="galleryWrapper">
        <div className={styles.imageGallery}>
          <img src={assets.event1} alt="Carnival 1" className={styles.img1} />
          <img src={assets.event2} alt="Carnival 2" className={styles.img2} />
          <img src={assets.event3} alt="Carnival 3" className={styles.img3} />
          <img src={assets.event1} alt="Carnival 4" className={styles.img4} />
          <img src={assets.event2} alt="Carnival 5" className={styles.img5} />
          <img src={assets.event3} alt="Carnival 6" className={styles.img6} />
        </div>
      </div>

      {/* Other events */}
      <div className={styles.otherEvents}>
        <h2>OTHER EVENTS</h2>
        <div className={styles.otherEventsList}>
          <div className={styles.eventCard}>
            <h3>HEALTH &<br />WELLNESS FAIR</h3>
          </div>
          <div className={styles.eventCard}>
            <h3>UNIFORM DAY</h3>
          </div>
          <div className={styles.eventCard}>
            <h3>ORIENTATION</h3>
          </div>
        </div>
      </div>
    </div>
  );
}