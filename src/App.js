import React from 'react';
import { Preloader } from './Components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AboutUs, Header, Home, News, Team, Appointment } from './Container';
import { Navbar, Footer } from './Components';



const App = () => {
  return (
  <div id='root'>
        <Navbar/>
  {/* //   <Router>
  //   <div>
  //     <Preloader/>
  //     <Navbar />
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/about' element={<AboutUs />} />
  //       <Route path='/team' element={<Team />} />
  //       <Route path='/news' element={<News />} />
  //     </Routes>
  //     <Footer />
  //   </div>
  // </Router> */}
  </div>
  );
};
export default App;
