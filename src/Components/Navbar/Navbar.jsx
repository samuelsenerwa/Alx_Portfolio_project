import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../Constants/images';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
        <p className='app__navbar__logo logo_text'> Care Bridge</p>
      </div>
      <ul className='app__navbar-links'>
        <li className='link-text'><Link to="/">Home</Link></li>
        <li className='link-text'><Link to="/about">AboutUs</Link></li>
        <li className='link-text'><Link to="/team">Doctors</Link></li>
        <li className='link-text'><Link to="/news">News</Link></li>
        <li className='link-text'><Link to="/contact">Contact</Link></li>
        <li className='appointment-btn'><Link to="/appointment">Make an appointment</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
