import React from 'react'
import images from '../../Constants/images';
import './SignUp.css'

function SignUp() {
  return (
    <div className="sign-up  section__padding">
    <div className="sign-up-left">
      <img src={images.medicare4} alt="chef_image"/>
    </div>
    
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="sign-up-right">
        </div>
    </div> 
  </div>
  );
}

export default SignUp
