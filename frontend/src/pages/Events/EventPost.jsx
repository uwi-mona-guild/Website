// frontend/src/pages/Events/EventPost.jsx
import React, { useState, useEffect } from 'react';
import { FiX, FiCheckSquare, FiSquare } from 'react-icons/fi';
import styles from './Events.module.scss';

const EventPost = ({ date, events, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Collect all images from events
  const imageList = events
    ?.filter(e => e.imageUrl)
    .map(e => ({ url: e.imageUrl, title: e.title })) || [];

  // Auto-cycle through images if more than one
  useEffect(() => {
    if (imageList.length > 1) {
      const interval = setInterval(() => {
        setFade(false); // Start fade-out
        setTimeout(() => {
          setCurrentImageIndex(prev => (prev + 1) % imageList.length);
          setFade(true); // Fade back in
        }, 300); // fade-out duration
      }, 3000); // time per image
      return () => clearInterval(interval);
    }
  }, [imageList.length]);

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

        {/* ✅ Slider for event images */}
        {imageList.length > 0 && (
          <div className={`${styles.eventCover} ${fade ? styles.fadeIn : styles.fadeOut}`}>
            <img
              src={imageList[currentImageIndex].url}
              alt={imageList[currentImageIndex].title}
            />
          </div>
        )}

        {/* ✅ Show each event details for the day */}
        <div className={styles.eventCardContent}>
          {events && events.length > 0 ? (
            events.map((event) => (
              <div key={event._id} className={styles.eventCardItem}>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <p><strong>Location:</strong> {event.location}</p>
                {event.price?.amount > 0 && (
                  <p><strong>Price:</strong> {event.price.amount} {event.price.currency}</p>
                )}

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
