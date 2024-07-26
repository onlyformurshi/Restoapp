import React from 'react'
import ToDo from './components/ToDo'
import Calculator from './components/Calculator'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Weather from './components/Weather';
import Menu from './components/foodrecipe/Menu';
import Section from './components/Section';
function App() {
  return (
    <>

      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/foodrecipe" element={<Menu />} />
        </Routes>

        

      </Router >


    </>
  )
}

export default App
