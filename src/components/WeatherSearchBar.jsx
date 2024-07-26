// src/components/WeatherSearchBar.js

import { useState } from 'react';

function WeatherSearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="search-bar">
        <input
          style={{ backgroundColor: "#fff", border: "1px solid #ccc", color: "black" }}
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default WeatherSearchBar;
