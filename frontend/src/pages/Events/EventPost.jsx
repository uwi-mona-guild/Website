// This file is part of the frontend/src/pages/Events directory
// It handles the display of individual event posts, showing details like date, title, description, and tasks with completion status.
// It also includes a close button to exit the event view.
import React from 'react';
import { FiX, FiCheckSquare, FiSquare } from 'react-icons/fi';
import styles from './Events.module.css';

const EventPost = ({ date, events, onClose }) => {
  return (
    <div className="event-card-overlay">
      <div className="event-card">
        <div className="event-card-header">
          <h3>
            {date.toLocaleString('default', { month: 'long' })} {date.getDate()}
          </h3>
          <button onClick={onClose} className="close-button">
            <FiX size={20} />
          </button>
        </div>

        <div className="event-card-content">
          {events && events.length > 0 ? (
            events.map((event) => (
              <div key={event._id} className="event-card-item">
                <h4>{event.title}</h4>
                <p>{event.description}</p>

                {event.tasks?.length > 0 && (
                  <div className="event-tasks">
                    {event.tasks.map((task, index) => (
                      <div key={index} className="task-item">
                        {task.completed ? (
                          <FiCheckSquare className="task-icon completed" />
                        ) : (
                          <FiSquare className="task-icon" />
                        )}
                        <span className="task-time">{task.time}</span>
                        <span className="task-text">{task.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="event-card-item">
              <p>No events for this day.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPost;
