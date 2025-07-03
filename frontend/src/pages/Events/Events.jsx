import React from 'react'
import './Events.css'
 import { useState, useEffect } from 'react'
 import { useParams } from 'react-router-dom'
 import { Link } from 'react-router-dom'

const Events = () => {
  return (
    <div className="events-container">
      {/*Calender Display of events*/}
      <div className="breadcrumb">
        <Link to="/events">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Calendar</span>
      </div>
    </div>
  )
}

export default Events
