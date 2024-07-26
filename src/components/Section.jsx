
import React from 'react';
import "./Section.css"
function Section() {

    return (
        <div >
            <div className="container ">
                <div className="dashboard">
                    <div className="current-weather">
                        <div>
                            <h1>New York</h1>
                            <p className="temp">25°C</p>
                            <p className="condition">Sunny</p>
                        </div>
                        <div className="details">
                            <p>Humidity: 60%</p>
                            <p>Wind: 5 km/h</p>
                            <p>Pressure: 1015 hPa</p>
                            <p>UV Index: 6</p>
                        </div>
                    </div>
                    <div className="forecast">

                        <div className="forecast-days">
                            <div className="forecast-day">
                                <p>Mon</p>
                                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />
                                <p>24°C</p>
                            </div>
                            <div className="forecast-day">
                                <p>Tue</p>
                                <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather icon" />
                                <p>26°C</p>
                            </div>
                            <div className="forecast-day">
                                <p>Wed</p>
                                <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="weather icon" />
                                <p>23°C</p>
                            </div>
                            <div className="forecast-day">
                                <p>Thu</p>
                                <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="weather icon" />
                                <p>22°C</p>
                            </div>
                            <div className="forecast-day">
                                <p>Fri</p>
                                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />
                                <p>25°C</p>
                            </div>
                        </div>
                        <div className="additional-info">
                            <h3>Additional Information</h3>
                            <p>Sunrise: 05:30 AM</p>
                            <p>Sunset: 08:15 PM</p>
                            <p>Air Quality Index: Good</p>
                            <p>Precipitation: 0%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section