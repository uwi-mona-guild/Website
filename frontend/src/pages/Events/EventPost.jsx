// frontend/src/pages/Events/EventPost.jsx
import React from 'react';
import { FiX, FiCheckSquare, FiSquare } from 'react-icons/fi';
import styles from './Events.module.scss';

const EventPost = ({ date, events, onClose }) => {
  return (
    <div className={styles.cardOverlay}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3>
            {date.toLocaleString('default', { month: 'long' })} {date.getDate()}
          </h3>
          <button onClick={onClose} className={styles.closeButton}>
            <FiX size={20} />
          </button>
        </div>

        <div className={styles.eventCardContent}>
          {events && events.length > 0 ? (
            events.map((event) => (
              <div key={event._id} className={styles.eventCardItem}>

                {/* ✅ Cover Image */}
                {event.imageUrl && (
                  <div className={styles.eventCover}>
                    <img src={event.imageUrl} alt={event.title} />
                  </div>
                )}

                <h4>{event.title}</h4>
                <p>{event.description}</p>

                {/* ✅ Tasks */}
                {event.tasks?.length > 0 && (
                  <div className={styles.eventTasks}>
                    {event.tasks.map((task, index) => (
                      <div key={index} className={styles.taskItem}>
                        {task.completed ? (
                          <FiCheckSquare className={`${styles.taskIcon} ${styles.completed}`} />
                        ) : (
                          <FiSquare className={styles.taskIcon} />
                        )}
                        <span className={styles.taskTime}>{task.time}</span>
                        <span className={styles.taskText}>{task.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className={styles.eventCardItem}>
              <p>No events for this day.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPost;
