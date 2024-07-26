// src/models/weatherModel.js

const API_KEY = 'fae6c38fdc5e4ae89a485711242507'; // Replace with your actual API key

export const fetchWeather = async (city) => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    console.log(data);
    return data;
};
