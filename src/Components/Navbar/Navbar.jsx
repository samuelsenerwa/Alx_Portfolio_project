import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../Constants/images';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light position-sticky fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src={images.logo} alt='logo' className='navbar-logo' />
          Care Bridge
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' id='link-text' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' id='link-text' to='/about'>
                AboutUs
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'  id='link-text' to='/team'>
                Doctors
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' id='link-text' to='/news'>
                News
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' id='link-text' to='/contact'>
                Contact
              </Link>
            </li>
            <li className='nav-item btn-text'>
              <Link className='nav-link' id='appointment-btn' to='/appointment'>
                Make an appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;