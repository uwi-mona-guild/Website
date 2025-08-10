// This file is part of the frontend/src/pages/Events directory
// It handles the display of events in a calendar format, allowing users to view events by month
import React, { useState, useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom';
import Grid from './Grid';
import List from './List';
import EventCard from './EventPost';
import { FiGrid, FiList, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as assets from '../../assets';
import calendarStyle from './Events.module.scss';
import pastEventsStyle from './PastEvents.module.scss';

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [expandedEventId, setExpandedEventId] = useState(null);

  // Ref for detecting outside clicks on for the yearly event cards
  const modalRef = useRef(null);

  // Handle outside click to close the yearly event modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedEvent(null);
      }
    };

    if (selectedEvent) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedEvent]);

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`http://localhost:5170/api/events?after=2025-06-31&before=2025-08-01`);
        if (!res.ok) throw new Error('Failed to fetch events');
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
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

  const today = new Date();
  const pastEvents = events.filter(e => new Date(e.date) < today);

  const yearlyEvents = [ //data for the yearly events cards (embed links to separate pages)
  {
    id: "carnival",
    title: "Carnival",
    tags: ["Parade", "Music", "Culture"],
    description: "Experience the vibrant energy of Jamaican Carnival with parades, music, and dance!",
    images: [assets.event1, assets.event2, assets.event3]
  },
  {
    id: "inte",
    title: "UWI INTEgration",
    tags: ["Food", "Family", "Entertainment"],
    description: "Sample delicious local and international cuisines in a family-friendly atmosphere.",
    images: [assets.event2, assets.event1]
  },
  {
    id: "sportsday",
    title: "Sports Day",
    tags: ["Athletics", "Competition", "Fun"],
    description: "Join us for a day of friendly competition and athleticism with various sports events.",
    images: [assets.event3, assets.event1, assets.event2]},
    // Add more yearly events as needed
];



  const toggleExpand = (id) => {
    setExpandedEventId(prev => (prev === id ? null : id));
  };

  return (
    <div className={calendarStyle.overrideContainer}>
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
            <FiList size={20} color="white" />
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

        {pastEvents.length > 0 ? (
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

      {/* YEARLY EVENTS */}
<div className={pastEventsStyle.wrapper}>
  <h2 className={pastEventsStyle.heading}>YEARLY EVENTS</h2>
  <div className={pastEventsStyle.list}>
    {yearlyEvents.map((event) => (
      <Link
        key={event.id}
        to={`/events/${event.id}`}
        className={pastEventsStyle.cardLink}
      >
        <div className={pastEventsStyle.card}>
          <img src={event.images[0]} alt={event.title} className={pastEventsStyle.image} />
          <div className={pastEventsStyle.info}>
            <h3>{event.title}</h3>
            <p className={pastEventsStyle.description}>{event.description}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

    </div>
  );
};

export default Events;
