// This file is part of the frontend/src/pages/Events directory
// It handles the display of events in a calendar format, allowing users to view events by month
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';
import List from './List';
import EventCard from './EventPost';
import { FiGrid, FiList, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as assets from '../../assets';
import calendarStyle from './Events.module.scss';
import pastEventsStyle from './PastEvents.module.scss';

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Initialize with current date
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  //Handle the view mode state
useEffect(() => {
  const fetchEvents = async () => {
    try {
      //const month = currentDate.getMonth() + 1;
      //const year = currentDate.getFullYear();
      const res = await fetch(`http://localhost:5170/api/events?after=2025-06-31&before=2025-08-01`);
      if (!res.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error); // Error handling
    }
  };
  fetchEvents();
}, [currentDate]);

  // Fetch events whenever currentDate changes
  const handleDateClick = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
  };
// Handle date click to set selected date
  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(new Date(newDate));
    setSelectedDate(null);
  };
// Function to change the month displayed in the calendar
  const today = new Date();
  const pastEvents = events.filter(e => new Date(e.date) < today); // Filter past events

  return (
    <div className={calendarStyle.overrideContainer}>
        {/*<div className={calendarStyle.bkgImage}>
          <img src={assets.pelican} alt="Pelican" />
        </div>*/}
<div className={calendarStyle.topHeader}>
  <div className={calendarStyle.titleContainer}>
    <h2 className={calendarStyle.title}>
      {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
    </h2>
    <div className={calendarStyle.monthNavigation}>
      <button onClick={() => changeMonth(-1)} className={calendarStyle.overrideButton}>
        <FiChevronLeft size={20} />
      </button>
      <button onClick={() => changeMonth(1)} className={calendarStyle.overrideButton}>
        <FiChevronRight size={20} />
      </button>
    </div>
  </div>
  {/* Month navigation and View Option */}
  <div className={calendarStyle.viewToggle}>
    <button 
      onClick={() => setViewMode('grid')} 
      className={`${calendarStyle.overrideButton} ${viewMode === 'grid' ? calendarStyle.active : ''}`}
    >
      <FiGrid size={20} />
    </button>
    <button 
      onClick={() => setViewMode('list')} 
      className={`${calendarStyle.overrideButton} ${viewMode === 'list' ? calendarStyle.active : ''}`}
    >
      <FiList size={20} color="white"/>
    </button>
  </div>
</div>

      {viewMode === 'grid' ? (
        <Grid
          year={currentDate.getFullYear()}
          month={currentDate.getMonth()}
          events={events}
          onDateClick={handleDateClick}
        />
      ) : (
        <List
  events={events.filter(
    (e) =>
      selectedDate &&
      new Date(e.date).toDateString() === selectedDate.toDateString()
  )}
  selectedDate={selectedDate}
  onDateClick={handleDateClick}
/>
      )}

      {selectedDate && (
        <EventCard
          date={selectedDate}
          events={events.filter(
            (e) => new Date(e.date).toDateString() === selectedDate.toDateString()
          )}
          onClose={() => setSelectedDate(null)}
        />
      )}
      {/* PAST EVENTS */}
      <div className={pastEventsStyle.wrapper}>
  <h2 className={pastEventsStyle.heading}>PAST EVENTS</h2>

  {pastEventsStyle.length > 0 ? (
    <div className={pastEventsStyle.list}>
      {pastEvents.map((event) => (
        <Link
          to={`http://localhost:5170/api/event/${event._id}`}
          key={event._id}
          className={pastEventsStyle.cardLink}
        >
          <div className={pastEventsStyle.card}>
            <img src={event.image} alt={event.title} className={pastEventsStyle.image} />
            <div className={pastEventsStyle.info}>
              <h3>{event.title}</h3>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p className={pastEventsStyle.description}>{event.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div className={pastEventsStyle.noEventsMessage}>
      <p>No past events.</p>
    </div>
  )}
</div>
    </div>
    
  );
};

export default Events;