import React from 'react'
import images from '../../Constants/images';
import './SignUp.css'

function SignUp() {
  return (
    <div className="sign-up  section__padding">
    <div className="sign-up-left">
      <img src={images.medicare4} alt="medical attendant_image"/>
    </div>
    
    <div className="sign-up-right app__wrapper_info">
        <div className='sign-up-logo'>
          <img src={images.logo} alt='sign-up logo'/>
        </div>
        <div className='sign-up-text'>
          <h3>Login to your account</h3>
          <p>Join Care Bridge Today!</p>
        </div>
        <div className='google-btn'>
          <img src={images.google} alt='google logo'/>
          <p>Connect With Google</p>
        </div>
        <span><p>or Sign in with Email</p></span>
        <form>
              <div className='form-group'>
                <label>Email:</label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='@mail.com'
                  required
                />
              </div>
              <div className='form-group'>
                <label>Password:</label>
                <input
                  type='password'
                  className='form-control'
                  required
                />
                <div className='forgot-password'></div>
              </div>
              <button type='submit'>
                Login
              </button>
            </form>
    </div> 
  </div>
  );
}

export default SignUp
