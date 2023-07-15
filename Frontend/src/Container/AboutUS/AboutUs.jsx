import React from 'react';
import images from '../../Constants/images';
import './AboutUs.css';
import { Preloader, Testimonials } from '../../Components';

function AboutUs() {
  return (
    <>
    <Preloader/>
    <section id="about">
    <div class="container">
         <div class="row">

              <div class="col-md-6 col-sm-6">
                   <div class="about-info">
                        <h2 className="wow animate_fadeInUp" data-wow-delay="0.5s">Welcome to <img src={images.logo}/>are-Bridge</h2>
                        <div class="wow fadeInUp" data-wow-delay="0.8s">
                             <p>Our goal is to connect patients with doctors seamlessly through a digital platform, revolutionizing the healthcare experience.</p>
                             <p> We tackle challenges like long wait times, limited specialist access, and manual appointment scheduling. Join us for a convenient and efficient healthcare journey!</p>
                        </div>
                        <figure class="profile wow fadeInUp" data-wow-delay="1s">
                             <img src={images.author} class="img-responsive" alt=""/>
                             <figcaption>
                                  <h3>Dr. Neil Jackson</h3>
                                  <p>Surgeon</p>
                             </figcaption>
                        </figure>
                   </div>
              </div>
         </div>
    </div>
</section>
<Testimonials/>
</>
  )
}

export default AboutUs