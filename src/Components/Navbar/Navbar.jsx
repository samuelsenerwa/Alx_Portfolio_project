import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import images from '../../Constants/images';

import './Navbar.css';

const  Navbar = () => {

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt='logo' />
            <p className='app__navbar__logo logo_text'> Care Bridge</p>
            </div>
        <ul className='app__navbar-links'>
        {/* <li><a href="#top" class="smoothScroll">Home</a></li>
        <li><a href="#about" class="smoothScroll">About Us</a></li>
        <li><a href="#team" class="smoothScroll">Doctors</a></li>
        <li><a href="#news" class="smoothScroll">News</a></li>
        <li><a href="#google-map" class="smoothScroll">Contact</a></li>
        <li class="appointment-btn"><a href="#appointment">Make an appointment</a></li> */}
        <li className='link-text'><Link to="/">Home</Link></li>
        {/* <li className='link-text'><Link to="/about">AboutUs</Link></li>
        <li className='link-text'><Link to="/services">Doctors</Link></li>
        <li className='link-text'><Link to="/clients">News</Link></li>
        <li className='link-text'><Link to="/contact">Contact</Link></li> */}
        </ul>
        {/* <div className='app__navbar-smallscreen'>
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <ul className='app__navbar-smallscreen-links'>
        <li className='link-text'><Link to="/">Home</Link></li>
        <li className='link-text'><Link to="/about">AboutUs</Link></li>
        <li className='link-text'><Link to="/team">Doctors</Link></li>
        <li className='link-text'><Link to="/new">News</Link></li>
        <li className='link-text'><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
        </div> */}
    </nav>
  );
};

export default Navbar;