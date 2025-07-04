import React, { useState, useEffect } from 'react';
import './Events.css';
import { Link } from 'react-router-dom';
import Grid from './Grid';
import List from './List';
import EventCard from './EventPost';
import { FiGrid, FiList, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8)); // Sept 2025
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const fetchEvents = async () => {
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const res = await axios.get(`/api/events?month=${month}&year=${year}`);
      setEvents(res.data);
    };
    fetchEvents();
  }, [currentDate]);

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(new Date(newDate));
    setSelectedDate(null);
  };

  return (
    <div className="events-container">

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
    </div>
  );
};

export default Events;