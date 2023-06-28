import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';
import images from '../../Constants/images';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: 'Mark Huff',
      position: 'Students',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      name: 'Rodel Golez',
      position: 'Striper',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      name: 'Ken Bosh',
      position: 'Manager',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="ftco-section testimony-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ftco-animate fadeInUp ftco-animated">
            <span className="subheading">Testimonials</span>
            <h2 className="mb-4">Our Patients Say About Us</h2>
            <p>
              Separated they live in. A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country.
            </p>
          </div>
        </div>
        <div className="row ftco-animate justify-content-center fadeInUp ftco-animated">
          <div className="col-md-8">
            <Slider {...settings} className="slick-slider">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-item" key={index}>
                  <div className="text">
                    <p><img src={images.quote1}/>{testimonial.text}</p>
                    <p className="name">  <img src={images.person}/>{testimonial.name}</p>
                    <span className="position">{testimonial.position}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
