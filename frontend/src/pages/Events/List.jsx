// This file is the List component for displaying events in a list format.
// It shows the event date, title, description, and tasks with completion status.
import React from 'react';
import './Events.css';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const List = ({ events }) => {
  if (!events.length) return <p className="no-events">No events this month.</p>;

  return (
    <div className="event-list-container">
      {events.map((event) => {
        const eventDate = new Date(event.date);
        const day = eventDate.getDate();
        const weekday = eventDate.toLocaleString('default', { weekday: 'short' }).toUpperCase();
        
        return (
            
          <div key={event._id} className="event-list-item">
            <div className="breadcrumb">
            <Link to="/events">Events</Link>
            <span>•</span>
            <span className="text-blue-800">List</span>
                </div>
            <div className="event-date">
              <span className="event-day">{day}</span>
              <span className="event-weekday">{weekday}</span>
            </div>
            
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              
              <div className="event-tasks">
                {event.tasks?.map((task, index) => (
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;