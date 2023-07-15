import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import { Carousel } from 'react-responsive-carousel';
import images from '../../Constants/images';
import { Link } from 'react-router-dom';

import './Slider.css';

const Slider = () => {
  return (
    <div className="slider">
      <Carousel showThumbs={false} autoPlay infiniteLoop={true} showStatus={false}>
        <div>
          <img src={images.slider1} alt="Slide 1" />
          <div class="caption">
            <div class="col-md-offset-1 col-md-10">
            <h3>Let's make your life happier</h3>
            <h1>Healthy Living</h1>
            <Link to="/team" class="section-btn btn btn-default btn-green smoothScroll">Meet Our Doctors</Link>
            </div>
    </div>
        </div>
        <div>
          <img src={images.slider2} alt="Slide 2" />
          <div class="caption">
            <div class="col-md-offset-1 col-md-10">
                <h3>Feel every moment of your life</h3>
                <h1>New Lifestyle</h1>
                <Link to="/about" class="section-btn btn btn-default btn-gray smoothScroll">More About Us</Link>
            </div>
        </div>
        </div>
        <div>
          <img src={images.slider3} alt="Slide 3" />
          <div class="caption">
            <div class="col-md-offset-1 col-md-10">
                <h3>Your wellbeing is our joy</h3>
                <h1>Your Health Benefits</h1>
                <Link to='/news' class="section-btn btn btn-default btn-blue smoothScroll">Read Stories</Link>
            </div>
        </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
