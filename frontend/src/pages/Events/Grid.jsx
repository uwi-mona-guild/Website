// This file is part of the frontend/src/pages/Events directory
// It handles the display of events in a calendar format, allowing users to view events by month

import React from 'react';
import { Link } from 'react-router-dom';
import gridStyles from './Grid.module.scss';


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
      calendarCells.push(<div key={`blank-${i}`} className={gridStyles.empty} />);
    } else {
      const dayEvents = getEventsForDay(day);
      calendarCells.push(
        <div key={day} className={gridStyles.calDay} onClick={() => onDateClick(day)}>
          <div className={gridStyles.dayNum}>{day}</div>
          {dayEvents.length > 0 && (
            <img
              src={dayEvents[0].image}
              alt="event"
              className={gridStyles.dayEventThumb}
            />
          )}
        </div>
      );
    }
  });

  return (
    <div>
    <div className={gridStyles.container}>
        
      <div className={gridStyles.header}>
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
