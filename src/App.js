import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Preloader, Navbar, Footer } from './Components';
import { Home, AboutUs, Team, News, Contact, Appointment } from './Container';

const App = () => (
  <Router>
    <Preloader />
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
