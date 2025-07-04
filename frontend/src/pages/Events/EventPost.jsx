import React from 'react';
import { FiX, FiCheckSquare, FiSquare } from 'react-icons/fi';
import './Events.css';

const EventPost = ({ date, events, onClose }) => {
  if (!events || events.length === 0) return null;

  return (
    <div className="event-card-overlay">
      <div className="event-card">
        <div className="event-card-header">
          <h3>{date.toLocaleString('default', { month: 'long' })} {date.getDate()}</h3>
          <button onClick={onClose} className="close-button">
            <FiX size={20} />
          </button>
        </div>
        
        <div className="event-card-content">
          {events.map((event) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPost;