import React from 'react';
import images from '../../Constants/images';
import './AboutUs.css';
import { Preloader } from '../../Components';

function AboutUs() {
  return (
    <>
    <Preloader/>
    <section id="about">
    <div class="container">
         <div class="row">

              <div class="col-md-6 col-sm-6">
                   <div class="about-info">
                        <h2 class="wow fadeInUp" data-wow-delay="0.6s">Welcome to Your <i class="fa fa-h-square"></i>ealth Center</h2>
                        <div class="wow fadeInUp" data-wow-delay="0.8s">
                             <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.</p>
                             <p>Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.</p>
                        </div>
                        <figure class="profile wow fadeInUp" data-wow-delay="1s">
                             <img src={images.author} class="img-responsive" alt=""/>
                             <figcaption>
                                  <h3>Dr. Neil Jackson</h3>
                                  <p>General Principal</p>
                             </figcaption>
                        </figure>
                   </div>
              </div>
              
         </div>
    </div>
</section>
</>
  )
}

export default AboutUs