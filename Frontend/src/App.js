import React, { useState } from 'react';
import { Preloader, Navbar, Footer, Slider } from './Components';
import { Home, AboutUs, Team, News, Contact, Appointment, Header, SignUp } from './Container';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewsDetail from './Container/NewsDetail/NewsDetail';

const App = () => {
  // User state to track the signed-in user
  const [user, setUser] = useState(null);

  // Function to handle the sign-up process and update the user state
  const handleSignUp = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      {user ? (
        // If user is signed in, render main sections of the application
        <div>
          <Preloader />
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
          <Footer />
        </div>
      ) : (
        // If user is not signed in, render the sign-up form
        <SignUp onSignUp={handleSignUp} />
      )}
    </div>
  );
};

export default App;

