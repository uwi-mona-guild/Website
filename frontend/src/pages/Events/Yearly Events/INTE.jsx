// This file is part of the frontend/src/pages/Events/Yearly Events directory
// It handles the display of the INTE event page, including images and descriptions"
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../Events.module.scss";
import * as assets from "../../../assets";

export default function INTE() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumb */}
      <p>
        <Link to="/events">Events</Link> <span>•</span> UWI Integration
      </p>

      {/* Header */}
      <div className={styles.header}>
        <h1>
          UWI Integration{" "}
          {/* <span className={styles.highlight}>Integration Week</span> */}
        </h1>
      </div>

      {/* Intro text */}
      <div className={styles.introText}>
        Celebrate unity, collaboration, and the spirit of togetherness during
        our annual Integration event. Experience engaging activities, cultural
        showcases, team challenges, and performances that bring students and
        the community together in harmony.
      </div>

      {/* Image Gallery for event pages */}
      <div className="galleryWrapper">
        <div className={styles.imageGallery}>
          <img src={assets.event1} alt="Inte 1" className={styles.img1} />
          <img src={assets.event2} alt="Inte 2" className={styles.img2} />
          <img src={assets.event3} alt="Inte 3" className={styles.img3} />
          <img src={assets.event1} alt="Inte 4" className={styles.img4} />
          <img src={assets.event2} alt="Inte 5" className={styles.img5} />
          <img src={assets.event3} alt="Inte 6" className={styles.img6} />
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
