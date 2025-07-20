import React, { useState } from 'react';
import styles from './Events.module.scss'; 

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
    formData.append('image', image);

    try {
      setLoading(true);
      const response = await fetch('/api/events', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit event');
      }

      const data = await response.json();
      onEventAdded(data); // Update parent list/grid
      setTitle('');
      setDate('');
      setDescription('');
      setImage(null);
    } catch (err) {
      console.error('Error:', err);
      alert('Error adding event.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Add New Event</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Event'}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
