import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='main-nav '>
            <div className="navbar ">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/calculator"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Calculator
                </NavLink>
                <NavLink
                    to="/todo"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    ToDo
                </NavLink>

                <NavLink
                    to="/weather"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    WeatherDashboard
                </NavLink>
                <NavLink
                    to="/foodrecipe"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Food Recipe App
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;