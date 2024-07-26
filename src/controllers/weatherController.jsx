// src/controllers/weatherController.js

import { fetchWeather } from '../models/weatherModel';

export const getWeatherData = async (city) => {
  try {
    const data = await fetchWeather(city);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
