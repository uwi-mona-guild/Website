// This file is part of the frontend/src/pages/Events/Yearly Events directory
// It handles the display of the Sports event page, including images and descriptions
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../Events.module.scss";
import * as assets from "../../../assets";

export default function Sports() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumb */}
      <p>
        <Link to="/events">Events</Link> <span>•</span> UWI Sports Day
      </p>

      {/* Header */}
      <div className={styles.header}>
        <h1>UWI Sports Day</h1>
      </div>

      {/* Intro text */}
      <div className={styles.introText}>
        Cheer on your favorite teams and enjoy the excitement of UWI’s annual
        Sports Day. Experience thrilling track and field events, team games,
        and spirited competitions that bring together students, staff, and the
        wider community in celebration of athletic talent and camaraderie.
      </div>

      {/* Image Gallery */}
      <div className="galleryWrapper">
        <div className={styles.imageGallery}>
          <img src={assets.event1} alt="Sports Event 1" className={styles.img1} />
          <img src={assets.event2} alt="Sports Event 2" className={styles.img2} />
          <img src={assets.event3} alt="Sports Event 3" className={styles.img3} />
          <img src={assets.event1} alt="Sports Event 4" className={styles.img4} />
          <img src={assets.event2} alt="Sports Event 5" className={styles.img5} />
          <img src={assets.event3} alt="Sports Event 6" className={styles.img6} />
        </div>
      </div>
            {/* Hall Rankings */}
      <div className={styles.hallRankings}>
  <h2>HALL RANKINGS</h2>
  <ul className={styles.hallList}>
    {[
      { name: "COMMUTERS", points: 85, logo: assets.commutersLogo, color: "#FFD700" },
      { name: "AZ PRESTON", points: 72, logo: assets.azPrestonLogo, color: "#5A2D82" },
      { name: "LESLIE ROBINSON HALL", points: 68, logo: assets.leslieRobinsonLogo, color: "#50C9C3" },
      { name: "REX NETTLEFORD HALL", points: 95, logo: assets.rexLogo, color: "#800020" },
      { name: "IRVINE HALL", points: 60, logo: assets.irvineLogo, color: "#2E8B57" },
      { name: "GEORGE ALLEYNE HALL", points: 54, logo: assets.georgeAlleyneLogo, color: "#1B4FA1" },
      { name: "CHANSEA", points: 40, logo: assets.chanseaLogo, color: "#000000" },
      { name: "ELSA LEO RHYNIE HALL", points: 78, logo: assets.elsaLogo, color: "#E31B23" },
      { name: "TAYLOR HALL", points: 50, logo: assets.taylorLogo, color: "#0046B3" },
    ]
      .sort((a, b) => b.points - a.points)
      .map((hall, index) => (
        <li
          key={hall.name}
          className={styles.hallCard}
          style={{ backgroundColor: hall.color, color: "white" }}
        >
          {index + 1} {/* Rank number */}
          {hall.name} {/* Hall name */}
          <div className={styles.hallRight}>
            {hall.points} {/* Points */}
            <img src={hall.logo} alt={hall.name} className={styles.hallLogo} />
          </div>
        </li>
      ))}
  </ul>
</div>


      {/* Other events */}
      <div className={styles.otherEvents}>
        <h2>OTHER EVENTS</h2>
        <div className={styles.otherEventsList}>
          <div className={styles.eventCard}>
            <h3>CARNIVAL</h3>
          </div>
          <div className={styles.eventCard}>
            <h3>HEALTH &<br />WELLNESS FAIR</h3>
          </div>
          <div className={styles.eventCard}>
            <h3>UNIFORM DAY</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
