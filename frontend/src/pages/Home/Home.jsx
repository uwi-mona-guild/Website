import { useEffect, useState } from 'react';
import * as assets from '../../assets';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error connecting to backend :(', err));
  }, []);

  return (
    <div className="main-container">
      <div>
        <img src={assets.hero_section_icon} alt='hero-section-icon'/>
      </div>
      <div>
        <h1>Testing Backend Connection...</h1>
        <p>{message}</p>
      </div>
      {/* <div className="search">
        <input type="text" name="search" placeholder="Search..." />

      </div>
      <div className="folder-tab">
            <div className="hero-content">
              <h1>LOREM IPSUM DOLOR<br />SIT AMET</h1>
              <p>Lorem ipsum dolor sit amet.</p>
                  <button>See more</button>
          </div>
      </div> */}
    </div>
  )
}

export default Home
