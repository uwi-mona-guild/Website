import React from 'react'
import TeamMember from '../Guild/TeamMember'; 
import styles from './Guild.module.scss';
import * as assets from '../../assets';
import bgImage from '../../assets/abstract-bg-red.png';


const Guild = () => {
  // Sample team data
  const team = [
    {
      name: "Alex Rivers",
      role: "Founder & Visionary",
      img: assets.event1,
      bio: "Passionate about building community and fostering innovation.",
    },
    {
      name: "Morgan Lee",
      role: "Lead Developer",
      img: assets.event1,
      bio: "Code whisperer and coffee enthusiast.",
    },
    {
      name: "Jamie Cruz",
      role: "Community Manager",
      img: assets.event1,
      bio: "Connector of people, builder of bridges.",
    },
    {
      name: "Jamie Cruz",
      role: "Community Manager",
      img: assets.event1,
      bio: "Connector of people, builder of bridges.",
    },

    {
      name: "Jamie Cruz",
      role: "Community Manager",
      img: assets.event1,
      bio: "Connector of people, builder of bridges.",
    },

    {
      name: "Jamie Cruz",
      role: "Community Manager",
      img: assets.event1,
      bio: "Connector of people, builder of bridges.",
    },

    {
      name: "Jamie Cruz",
      role: "Community Manager",
      img: assets.event1,
      bio: "Connector of people, builder of bridges.",
    },

  ];

  return (
    <> 
      {/* 🔹 HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>
              A <br />
              BETTER <br />
              Student SYSTEM
            </h1>
            <p>
              Helping Good People <br />
              Achieve Good Things.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src ={assets.head} alt="Confident Leader" />
          </div>
        </div>
      </section>

      {/* 🔹 MEET THE TEAM SECTION */}
    <div className="pageContainer">
    <div className={styles['guild-heading']}>
      <h2 className={styles['guild-title']}>Meet the Guild Team</h2>

      {/* This is the important row container */}
      <div className={styles.row}>
        {team.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </div>
    </div>
    </div>
    </>
    );
};


export default Guild
