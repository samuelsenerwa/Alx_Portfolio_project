import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { Preloader } from '../../Components';
import AboutUs from '../AboutUS/AboutUs';

const Home = () => {
  return (
    <>
      <Preloader/>
      <Slider/>
      <AboutUs/>
      </>
  )
}

export default Home