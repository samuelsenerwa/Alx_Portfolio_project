import React, { useState } from 'react';
import { Preloader, Navbar, Footer, Slider } from './Components';
import { Home, AboutUs, Team, News, Contact, Appointment, Header, SignUp } from './Container';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewsDetail from './Container/NewsDetail/NewsDetail';


const App = () => {
  // const [user, setUser] = useState(null);

  // const handleSignUp = (userData) => {
  //   setUser(userData);
  // };

  return (
    // <div>
    //   {user ? (
    //     <div>
    //       <Preloader />
    //       <Navbar />
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<AboutUs />} />
    //         <Route path="/team" element={<Team />} />
    //         <Route path="/news" element={<News />} />
    //         <Route path="/contact" element={<Contact />} />
    //         <Route path="/appointment" element={<Appointment />} />
    //         {/* <Route path="/news-detail" element={<NewsDetail />} /> */}
    //         {/* <Route path="/news-detail/:index" element={<NewsDetail />} /> */}
    //       </Routes>
    //       <Footer/>
    //     </div>
    //   ) : (
    //     <SignUp onSignUp={handleSignUp} />
    //   )}
    // </div>
    <div>
      <Team/>
    </div>
  );
};

export default App;
