import React, { useState } from 'react';
import styles from './Events.module.scss';
import * as assets from '../../assets';

// Component to add a new event 

const AddEvent = ({ onEventAdded }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('date', date);
    formData.append('description', description);
    //formData.append('image', image); // Uncomment if you want to send the image file
    formData.append('imageUrl', 'https://ik.imagekit.io/7u04rj9lk/Freshers-Series-Flyer1.jpg?updatedAt=1754794088526'); // For preview purposes

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5170/api/events', {
        method: 'POST',
        body: JSON.stringify({ title, start_date: date, description, imageUrl: 'https://ik.imagekit.io/7u04rj9lk/Freshers-Series-Flyer1.jpg?updatedAt=1754794088526', location: "UWI" }), // Send the form data
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }

      });

      if (!response.ok) {
        throw new Error('Failed to submit event');
      }

      const data = await response;
      //onEventAdded(data); // Update parent list/grid
      setTitle('');
      setDate('');
      setDescription('');
      setImage(null);
    } catch (err) {
      console.error('Error:', err);
      alert('Error adding event.');
    } finally {
      setLoading(false); // Reset loading state
      console.log('Event added successfully:', formData);
    }
  };

  return (
    <div className={styles.addEventContainer}>
      <h3>Add New Event</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className={styles.inputField}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <textarea
          className={styles.textArea}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className={styles.fileInput}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button className={styles.submitButton} type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Event'}
        </button>
      </form>
    </div>

  );
};

export default AddEvent;
