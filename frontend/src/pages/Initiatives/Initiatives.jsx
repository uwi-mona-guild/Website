import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Initiatives.module.scss';
import * as assets from '../../assets';

import Fresher from './Fresher';
import UWICarnival from './UWICarnival';
import LDL from './LDL';
import GuildTV from './GuildTV';
import NAFI from './NAFI';
import UYB from './UYB';
import Integration from './Integration';

const initiativesList = [
  { id: 'fresher', name: "Fresher's Series", component: <Fresher /> },
  { id: 'uwicarnival', name: "UWI Carnival", component: <UWICarnival /> },
  { id: 'integration', name: "Integration", component: <Integration /> },
  { id: 'guildtv', name: "Guild TV", component: <GuildTV /> },
  { id: 'ldl', name: "Level Di Liquor", component: <LDL /> },
  { id: 'uyb', name: "Up Your Brand", component: <UYB /> },
  { id: 'nafi', name: "Not Asking For It", component: <NAFI /> }
];

const Initiatives = () => {
  const [activeId, setActiveId] = useState(null);
  const activeItem = initiativesList.find(init => init.id === activeId);

  const handleClick = (id) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  return (
    <div
      className={styles.initiativesPage}
      style={{
        backgroundImage: `url(${assets.abstractBgRed})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        zIndex: -1,
      }}
    >
      {/* Heading */}
      <h1 className={styles.pageHeading}>Initiatives</h1>

      {/* Navigation Tabs */}
      <div className={styles.initiativesNav}>
        {initiativesList.map(init => (
          <button
            key={init.id}
            onClick={() => handleClick(init.id)}
            className={`${styles.navButton} ${activeId === init.id ? styles.active : ''}`}
          >
            {init.name}
          </button>
        ))}
      </div>

      {/* Show main initiatives page if no tab is selected */}
      {!activeId && (
        <>
          {/* General Overview Image */}
          <div className={styles.generalImage}>
            <img src={assets.pelican} alt="Initiatives Overview" />
          </div>

          {/* Extra Sections */}
          <section className={styles.section}>
            <div className={styles.text}>
              <h3>About Our Initiatives</h3>
              <p>
                The Guild of Students at UWI Mona organizes a variety of initiatives 
                each year to foster community spirit, celebrate culture, and 
                provide opportunities for growth.
              </p>
            </div>
            <div className={styles.image}>
              <img src={assets.event1} alt="Guild Activities" />
            </div>
          </section>

          <section className={`${styles.section} ${styles.reverse}`}>
            <div className={styles.text}>
              <h3>Why They Matter</h3>
              <p>
                From large-scale celebrations like UWI Carnival to educational 
                programs such as Up Your Brand, our initiatives are designed to 
                engage every member of the campus community.
              </p>
            </div>
            <div className={styles.image}>
              <img src={assets.event2} alt="Students enjoying an event" />
            </div>
          </section>

          {/* Link to Events Page */}
          <section className={`${styles.section} ${styles.centered}`}>
            <div className={styles.text}>
              <h3>See Upcoming Events</h3>
              <p>Check out our events calendar for the latest happenings on campus.</p>
              <Link to="/events" className={styles.eventsButton}>
                View Events
              </Link>
            </div>
          </section>
        </>
      )}

      {/* Load selected page content */}
      <div className={styles.initiativeContent}>
        {activeItem?.component}
      </div>
    </div>
  );
};

export default Initiatives;
