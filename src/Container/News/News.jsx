import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../Constants/images';
import { Preloader} from '../../Components';
import './News.css';

const News = () => {
  return (
    <>
    <Preloader/> 
    <section id="news" data-stellar-background-ratio="2.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-12 col-sm-12">
                         <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
                              <h2>Latest News</h2>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                         <div class="news-thumb wow fadeInUp" data-wow-delay="0.4s">
                              <Link to="/news-detail">
                                   <img src= {images.medicare4} id="img-responsive" alt=""/>
                              </Link>
                              <div class="news-info">
                                   <span>March 08, 2018</span>
                                   <h3><Link to="/news-detail">About Amazing Technology</Link></h3>
                                   <p>Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis.</p>
                                   <div class="author border-top">
                                        <img src={images.author} class="img-responsive" alt=""/>
                                        <div class="author-info">
                                             <h5>Jeremie Carlson</h5>
                                             <p>CEO / Founder</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                         <div class="news-thumb wow fadeInUp" data-wow-delay="0.6s">
                              <a href="news-detail.html">
                                   <img src={images.medicare2} id="img-responsive" alt=""/>
                              </a>
                              <div class="news-info">
                                   <span>February 20, 2018</span>
                                   <h3><a href="news-detail.html">Introducing a new healing process</a></h3>
                                   <p>Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.</p>
                                   <div class="author border-top">
                                        <img src={images.author} class="img-responsive" alt=""/>
                                        <div class="author-info">
                                             <h5>Jason Stewart</h5>
                                             <p>General Director</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                         <div class="news-thumb wow fadeInUp" data-wow-delay="0.8s">
                              <a href="news-detail.html">
                                   <img src={images.medicare3} id="img-responsive" alt=""/>
                              </a>
                              <div class="news-info">
                                   <span>January 27, 2018</span>
                                   <h3><a href="news-detail.html">Review Annual Medical Research</a></h3>
                                   <p>Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim.</p>
                                   <div class="author border-top">
                                        <img src={images.author} class="img-responsive" alt=""/>
                                        <div class="author-info">
                                             <h5>Andrio Abero</h5>
                                             <p>Online Advertising</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     </section>

    </>   
  );
};

export default News