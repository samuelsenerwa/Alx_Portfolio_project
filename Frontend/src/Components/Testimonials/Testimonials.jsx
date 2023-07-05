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
      text: 'I am extremely grateful for the exceptional care and support I received at Your Health Center. The doctors and staff were knowledgeable, attentive, and genuinely caring. They took the time to listen to my concerns and provided me with personalized treatment options. My experience here has been nothing short of outstanding.',
    },
    {
      name: 'Rodel Golez',
      position: 'Teacher',
      text: 'I have been a patient at Your Health Center for several years now, and I am continually impressed by the level of professionalism and expertise demonstrated by the entire team. From the moment I walk through the door, I am greeted with warmth and kindness. The doctors take the time to explain my diagnosis and treatment plan in a way that I can easily understand. I feel truly valued as a patient here.',
    },
    {
      name: 'Ken Bosh',
      position: 'MD Toyota',
      text: 'As someone who has a fear of doctors and medical settings, I was pleasantly surprised by the welcoming atmosphere at Your Health Center. The staff went above and beyond to make me feel comfortable and at ease during my visits. They patiently addressed all my questions and concerns, ensuring that I had a positive experience. I highly recommend this center for anyone seeking compassionate and quality healthcare.',
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
             This is what our clients say about us from far and wide.Your Health Center exceeded my expectations in every way. The facilities are modern and well-maintained, and the staff is friendly and efficient. 
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
