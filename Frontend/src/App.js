import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Preloader, Navbar, Footer, Slider, SignUp} from './Components';
import { Home, AboutUs, Team, News, Contact, Appointment, Header } from './Container';

import './App.css';
import NewsDetail from './Container/NewsDetail/NewsDetail';

const App = () => (
  <Router>
    <Preloader />
    <div>
      {/* <Header/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        {/* <Route path="/news-detail" element={<NewsDetail />} /> */}
        {/* <Route path="/news-detail/:index" element={<NewsDetail />} /> */}
      </Routes>
      <Footer/>
    </div>
  </Router>
);

export default App;
