// src/components/Weather.js

import { useState } from 'react';
import WeatherSearchBar from './WeatherSearchBar';
import LoadingModal from './LoadingModal'; // Import the LoadingModal component
import { getWeatherData } from '../controllers/weatherController';


function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const data = await getWeatherData(city);
      setWeather(data);
      setError(null);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="sec-body">
      <WeatherSearchBar onSearch={handleSearch} />
      {loading && <LoadingModal />} {/* Conditionally render loading modal */}
      {error ? <p>{error}</p> : null}
      {weather ? (
        <div className="dashboard">
          <div className="current-weather">
            <div>
              <h1>{weather.location.name}</h1>
              <p className="temp">{weather.current.temp_c}°C</p>
              <p className="condition">{weather.current.condition.text}</p>
            </div>
            <div className="details">
              <p>Humidity: {weather.current.humidity}%</p>
              <p>Wind: {weather.current.wind_kph} km/h</p>
              <p>Pressure: {weather.current.pressure_mb} hPa</p>
              <p>UV Index: {weather.current.uv}</p>
            </div>
          </div>
          {weather.forecast && weather.forecast.forecastday ? (
            <div className="forecast">
              <div className="forecast-days">
                {weather.forecast.forecastday.map((day, index) => (
                  <div className="forecast-day" key={index}>
                    <p>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                    <img src={day.day.condition.icon} alt="weather icon" />
                    <p>{day.day.avgtemp_c}°C</p>
                  </div>
                ))}
              </div>
              <div className="additional-info">
                <h3>Additional Information</h3>
                <p>Sunrise: {weather.forecast.forecastday[0].astro.sunrise}</p>
                <p>Sunset: {weather.forecast.forecastday[0].astro.sunset}</p>
                <p>Air Quality Index: Good</p>
                <p>Precipitation: {weather.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Weather;