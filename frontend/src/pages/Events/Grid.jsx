// This file is part of the frontend/src/pages/Events directory
// It handles the display of events in a calendar format, allowing users to view events by month

import React from 'react';
import styles from './Events.module.scss';
import { Link } from 'react-router-dom';


const Grid = ({ year, month, events, onDateClick }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const getEventsForDay = (day) => {
    const dateStr = new Date(year, month, day).toDateString();
    return events.filter(e => new Date(e.date).toDateString() === dateStr);
  };

  const calendarCells = [];
  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  [...blanks, ...days].forEach((day, i) => {
    if (day === null) {
      calendarCells.push(<div key={`blank-${i}`} className="calendar-day empty" />);
    } else {
      const dayEvents = getEventsForDay(day);
      calendarCells.push(
        <div key={day} className="calendar-day" onClick={() => onDateClick(day)}>
          <div className="day-number">{day}</div>
          {dayEvents.length > 0 && (
            <img
              src={dayEvents[0].image}
              alt="event"
              className="day-event-thumb"
            />
          )}
        </div>
      );
    }
  });

  return (
    <div>
    <div className="calendar-grid-container">
        
      <div className="calendar-days-header">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      {calendarCells}
    </div>
    </div>
  );
};

export default Grid;
