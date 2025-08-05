import React from 'react'
import styles from './Guild.module.scss';


const TeamMember = ({ name, role, img, bio }) => {
  return (
    <div className={styles.column}>
      <div className={styles.card}>
        <img src={img} alt={`${name}'s profile`} className={styles['team-img']} />
        <div className={styles.container}>
          <h2>{name}</h2>
          <p className={styles.title}>{role}</p>
          <p>{bio}</p>
          <p><button className={styles.button}>Contact</button></p>
        </div>
      </div>
    </div>
  );
};


export default TeamMember
