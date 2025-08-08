// This file is part of the frontend/src/pages/Events directory
// It handles the display of individual event posts, showing details like date, title, description, and tasks with completion status.
// It also includes a close button to exit the event view.
import React from 'react';
import { FiX, FiCheckSquare, FiSquare } from 'react-icons/fi';
import styles from './Events.module.scss';

const EventPost = ({ date, events, onClose }) => { // receives date, events for that date, and onClose function as props, also changed from event to events
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
                <h4>{event.title}</h4>
                <p>{event.description}</p>

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
