import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { Preloader } from '../../Components';
import AboutUs from '../AboutUS/AboutUs';
import Team from '../Team/Team';

const Home = () => {
  return (
    <>
      <Preloader/>
      <Slider/>
      <AboutUs/>
      <Team/>
      </>
  )
}

export default Home