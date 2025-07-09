// This file is part of the frontend/src/pages/Events directory
// It handles the display of events in a calendar format, allowing users to view events by month
import React, { useState, useEffect } from 'react';
import styles from './Events.module.scss';
import { Link } from 'react-router-dom';
import Grid from './Grid';
import List from './List';
import EventCard from './EventPost';
import { FiGrid, FiList, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as assets from '../../assets';

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Initialize with current date
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  //Handle the view mode state
  useEffect(() => {
    const fetchEvents = async () => {
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const res = await axios.get(`/api/events?month=${month}&year=${year}`);
      setEvents(res.data);
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
    <div className="events-container">
        {/*<div className='bkg-image'>
          <img src={assets.pelican} alt="Pelican" />
        </div>*/}
<div className="calendar-top-header">
  <div className="calendar-title-container">
    <h2 className="calendar-title">
      {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
    </h2>
    <div className="month-navigation">
      <button onClick={() => changeMonth(-1)} className="nav-button">
        <FiChevronLeft size={20} />
      </button>
      <button onClick={() => changeMonth(1)} className="nav-button">
        <FiChevronRight size={20} />
      </button>
    </div>
  </div>
  {/* Month navigation and View Option */}
  <div className="view-toggle">
    <button 
      onClick={() => setViewMode('grid')} 
      className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
    >
      <FiGrid size={20} />
    </button>
    <button 
      onClick={() => setViewMode('list')} 
      className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
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
      <div className="past-events-wrapper">
  <h2 className="past-events-heading">PAST EVENTS</h2>

  {pastEvents.length > 0 ? (
    <div className="past-events-list">
      {pastEvents.map((event) => (
        <Link
          to={`/event/${event._id}`}
          key={event._id}
          className="past-event-card-link"
        >
          <div className="past-event-card">
            <img src={event.image} alt={event.title} className="past-event-image" />
            <div className="past-event-info">
              <h3>{event.title}</h3>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p className="past-event-description">{event.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="no-past-events-message">
      <p>No past events.</p>
    </div>
  )}
</div>
    </div>
    
  );
};

export default Events;