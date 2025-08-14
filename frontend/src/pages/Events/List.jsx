import React, { useEffect, useState } from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';
import styles from './List.module.scss';

const List = ({ year, month, day, onClose }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchEvents = async () => {
    try {
      setLoading(true);
      // Fetch all events from backend
      console.log(`Fetching events for ${year}-${month + 1}-${day}`);
      const res = await fetch('http://localhost:5170/api/events');
      if (!res.ok) throw new Error('Failed to fetch events');
      const data = await res.json();
      console.log('Fetched events:', data);

      // Filter events for the selected month & year
      const filtered = data.filter(event => {
        const eventDate = new Date(event.start_date);
        return (
          eventDate.getFullYear() === year &&
          eventDate.getMonth() === month
        );
      });

      setEvents(filtered);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  fetchEvents();
}, [year, month]);
  

  const weekday = new Date(year, month, day).toLocaleDateString('en-US', {
    weekday: 'short'
  });

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.dateNum}>{String(day).padStart(2, '0')}</span>
        <span className={styles.weekday}>{weekday.toUpperCase()}</span>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
      </div>

      {loading ? (
        <div className={styles.noEvents}>Loading events...</div>
      ) : events.length === 0 ? (
        <div className={styles.noEvents}>No events for this day.</div>
      ) : (
        events.map(event => {
          const eventDate = new Date(event.start_date);
          const timeString = eventDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }).toLowerCase();

          return (
            <div key={event._id} className={styles.card}>
              {/* Left image */}
              <div className={styles.imageWrapper}>
                {event.imageUrl && (
                  <img src={event.imageUrl} alt={event.title} />
                )}
              </div>

              {/* Right content */}
              <div className={styles.content}>
                <h3 className={styles.title}>{event.title}</h3>
                <p className={styles.description}>{event.description}</p>
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <FiClock className={styles.icon} /> {timeString}
                  </div>
                  <div className={styles.metaItem}>
                    <FiMapPin className={styles.icon} /> {event.location || 'TBA'}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default List;
