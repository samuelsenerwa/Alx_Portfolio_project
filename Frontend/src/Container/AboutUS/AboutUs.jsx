import React from 'react';
import images from '../../Constants/images';
import './AboutUs.css';
import { Preloader, Testimonials } from '../../Components';
import images from '../../Constants/images';

function AboutUs() {
  return (
    <>
    <Preloader/>
    <section id="about">
    <div class="container">
         <div class="row">

              <div class="col-md-6 col-sm-6">
                   <div class="about-info">
                        <h2 className="wow animate_fadeInUp" data-wow-delay="0.5s">Welcome to <img src={images.logo}/>Care-Bridge</h2>
                        <div class="wow fadeInUp" data-wow-delay="0.8s">
                             <p>A place dedicated to your overall well-being. Our team of professionals is committed to providing personalized care and support that caters to your specific health needs..</p>
                             <p>From preventive screenings to advanced treatments, we strive to empower you with the knowledge and resources necessary to achieve optimal health. Trust us to be your partner on your wellness journey, offering compassionate care in a welcoming environment.</p>
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
<Testimonials/>
</>
  )
}

export default AboutUs