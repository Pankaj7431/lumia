import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Dropdown from './pages/Dropdown.jsx'
import Contacts from './pages/Contacts.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="portfolio" element={<Portfolio/>}/>
            <Route path="testimonials" element={<Testimonials/>}/>
            <Route path="dropdown" element={<Dropdown/>}/>
            <Route path="contacts" element={<Contacts/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;