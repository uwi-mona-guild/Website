// This file is part of the frontend/src/pages/Events directory
// It handles the display of events in a calendar format, allowing users to view events by month
import React, { useEffect, useState } from 'react';
import gridStyles from './Grid.module.scss';

const Grid = ({ year, month, onDateClick }) => {
  const [events, setEvents] = useState([]);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch events from backend, optionally filter by year/month if your backend supports query params
        const res = await fetch(`http://localhost:5170/api/events`);
        if (!res.ok) throw new Error('Failed to fetch events'); //error handling
        // Assuming the response is an array of events
        const data = await res.json();
        setEvents(data);
        console.log('Events fetched:', data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
  }, [year, month]); // Refetch when year or month changes

const getEventsForDay = (day) => {
  // Build the target date as YYYY-MM-DD in UTC
  const targetDate = new Date(Date.UTC(year, month, day))
    .toISOString()
    .split("T")[0]; // 'YYYY-MM-DD'
  
  return events.filter(e =>
    {//console.log("date:", e.start_date);// debugging
      //console.log("type", typeof e.start_date); // debugging
      return new Date(e.start_date).toISOString().split("T")[0] === targetDate}

  );
};

  const calendarCells = [];
  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1); /* Create an array of days in the month */

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
              src={dayEvents[0].imageUrl}
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
