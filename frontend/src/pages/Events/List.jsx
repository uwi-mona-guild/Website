// This file is the List component for displaying events in a list format.
// It shows the event date, title, description, and tasks with completion status.
import React, { useEffect, useState } from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import listStyles from './List.module.scss';

const List = ({ year, month }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Optional: you can filter by year and month if your backend supports query params
        const res = await fetch(`/api/events`);
        if (!res.ok) throw new Error('Failed to fetch events');
        const data = await res.json();

        // Filter events for the selected month and year
        const filtered = data.filter(event => {
          const eventDate = new Date(event.date);
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

  if (loading) return <p className={listStyles.noEvents}>Loading events...</p>;
  if (!events.length) return <p className={listStyles.noEvents}>No events this month.</p>;

  return (
    <div className={listStyles.container}>
      {events.map((event) => {
        const eventDate = new Date(event.date);
        const day = eventDate.getDate();
        const weekday = eventDate.toLocaleString('default', { weekday: 'short' }).toUpperCase();

        return (
          <div key={event._id} className={listStyles.item}>
            <div className={listStyles.breadcrumb}>
              <Link to="/events">Events</Link>
              <span>•</span>
              <span className="text-blue-800">List</span>
            </div>
            <div className={listStyles.eventDate}>
              <span className={listStyles.eventDay}>{day}</span>
              <span className={listStyles.eventWeekday}>{weekday}</span>
            </div>

            <div className={listStyles.eventContent}>
              <h3 className={listStyles.eventTitle}>{event.title}</h3>
              <p className={listStyles.eventDescription}>{event.description}</p>

              <div className={listStyles.eventTasks}>
                {event.tasks?.map((task, index) => (
                  <div key={index} className={listStyles.taskItem}>
                    {task.completed ? (
                      <FiCheckSquare className={`${listStyles.taskIcon} ${listStyles.completed}`} />
                    ) : (
                      <FiSquare className={listStyles.taskIcon} />
                    )}
                    <span className={listStyles.taskTime}>{task.time}</span>
                    <span className={listStyles.taskText}>{task.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
