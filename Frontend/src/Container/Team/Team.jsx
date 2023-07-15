import React, {useState, useEffect} from 'react';
import { Preloader } from '../../Components';
import { images } from '../../Constants';
import './Team.css'

const Team = () => {

     const [teamData, setTeamData] = useState([]);

     useEffect(() => {
          fetchTeamData();
     }, []);

     const fetchTeamData = async () => {
          try {
               const response = await fetch(' http://127.0.0.1:5000/team')
               const data = await response.json();
               setTeamData(data);
          } catch (error) {
               console.log('Error fetching team data:', error);
          }             
     };

  return (
    <>
    <Preloader/>
    <section id="team" data-stellar-background-ratio="1">
          <div class="container">
               <div class="row">

                    <div class="col-md-6 col-sm-6">
                         <div class="about-info">
                              <h2 class="wow fadeInUp" data-wow-delay="0.1s">Our Doctors</h2>
                         </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="col-md-4 col-sm-6">
                         <div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                              <img src={images.medicare6} class="img-responsive" alt=""/>

                                   <div class="team-info">
                                        <h3>Nate Baston</h3>
                                        <p>Surgeon</p>
                                        <div class="team-contact-info">
                                             <p><i class="fa fa-phone"></i> +254 764372891</p>
                                             <p><i class="fa fa-envelope-o"></i> <a href="#">carebridge@company.com</a></p>
                                        </div>
                                        <ul class="social-icon">
                                             <li><a href="#" class="fa fa-linkedin-square"></a></li>
                                             <li><a href="#" class="fa fa-envelope-o"></a></li>
                                        </ul>
                                   </div>

                         </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                         <div class="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                              <img src={images.medicare7} class="img-responsive" alt=""/>

                                   <div class="team-info">
                                        <h3>Jason Stewart</h3>
                                        <p>Neurologist</p>
                                        <div class="team-contact-info">
                                             <p><i class="fa fa-phone"></i> +254 716536271</p>
                                             <p><i class="fa fa-envelope-o"></i> <a href="#">carebridge@company.com</a></p>
                                        </div>
                                        <ul class="social-icon">
                                             <li><a href="#" class="fa fa-facebook-square"></a></li>
                                             <li><a href="#" class="fa fa-envelope-o"></a></li>
                                             <li><a href="#" class="fa fa-flickr"></a></li>
                                        </ul>
                                   </div>

                         </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                         <div class="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                              <img src={images.medicare1} class="img-responsive" alt="" />

                                   <div class="team-info">
                                        <h3>Miasha Nakahara</h3>
                                        <p>Cardiologist</p>
                                        <div class="team-contact-info">
                                             <p><i class="fa fa-phone"></i> +254 790134921</p>
                                             <p><i class="fa fa-envelope-o"></i> <a href="#">carebridge@company.com</a></p>
                                        </div>
                                        <ul class="social-icon">
                                             <li><a href="#" class="fa fa-twitter"></a></li>
                                             <li><a href="#" class="fa fa-envelope-o"></a></li>
                                        </ul>
                                   </div>

                         </div>
                    </div>
                    
               </div>
          </div>
     </section>
    </>
  )
}

export default Team