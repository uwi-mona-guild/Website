import React, { useState } from 'react';
import styles from './Events.module.scss';
import * as assets from '../../assets';

const AddEvent = ({ onEventAdded }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('TBA');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [priceAmount, setPriceAmount] = useState(0);
  const [priceCurrency, setPriceCurrency] = useState('JMD');
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

    const imageUrl = 'https://ik.imagekit.io/7u04rj9lk/Freshers-Series-Flyer1.jpg?updatedAt=1754794088526';

    const eventData = {
      title,
      start_date: startDate,
      end_date: endDate || null,
      location,
      description,
      imageUrl,
      price: {
        amount: Number(priceAmount),
        currency: priceCurrency
      }
    };

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5170/api/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });

      if (!response.ok) {
        throw new Error('Failed to submit event');
      }

      const data = await response.json();
      if (onEventAdded) onEventAdded(data);

      // Reset form
      setTitle('');
      setStartDate('');
      setEndDate('');
      setLocation('TBA');
      setDescription('');
      setImage(null);
      setPriceAmount(0);
      setPriceCurrency('JMD');

    } catch (err) {
      console.error('Error:', err);
      alert('Error adding event.');
    } finally {
      setLoading(false);
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
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <input
          className={styles.inputField}
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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
        <input
          className={styles.inputField}
          type="number"
          placeholder="Price Amount"
          value={priceAmount}
          onChange={(e) => setPriceAmount(e.target.value)}
        />
        <select
          className={styles.inputField}
          value={priceCurrency}
          onChange={(e) => setPriceCurrency(e.target.value)}
        >
          <option value="JMD">JMD</option>
          <option value="USD">USD</option>
        </select>
        <button className={styles.submitButton} type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Event'}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
