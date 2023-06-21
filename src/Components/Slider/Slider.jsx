import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import { Carousel } from 'react-responsive-carousel';
import images from '../../Constants/images';

import './Slider.css';

const Slider = () => {
  return (
    <div className="slider">
      <Carousel showThumbs={false} autoPlay infiniteLoop={true} showStatus={false}>
        <div>
          <img src={images.slider1} alt="Slide 1" />
        </div>
        <div>
          <img src={images.slider2} alt="Slide 2" />
        </div>
        <div>
          <img src={images.slider3} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
