import React from 'react'
import images from '../../Constants/images';
import './SignUp.css'
import '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../firebase';


firebase.initializeApp(firebaseConfig);

function SignUp({onSignUp}) {


  //emails
  function handleEmailSignIn(event) {
    event.preventDefault(); ///prevent the form from submitting normally

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //Login Successful
      const user = userCredential.user;
      onSignUp(user);
    })
    .catch((error) => {
      console.log(error);
    });
  }


//google sign in

function handleGoogleSignIn(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    const user = result.user;
    onSignUp(user);
  })
  .catch((error) => {
    console.log(error)
  });

}

  return (
    <div className="sign-up  section__padding">
    <div className="sign-up-left">
      <img src={images.medicare4} alt="medical attendant_image"/>
    </div>
    
    <div className="sign-up-right ">
        <div className='sign-up-logo'>
          <img src={images.logo} alt='sign-up logo'/>
        </div>
        <div className='sign-up-text'>
          <h3>Login to your account</h3>
          <p>Join Care Bridge Today!</p>
        </div>
        <div className='google-btn' onClick={handleGoogleSignIn}>
          <img src={images.google} alt='google logo'/>
          <p>Connect With Google</p>
        </div>
        <div className='span-text'>
          <span style={{color: '#DDDDDD'}}>-------------</span><span> or Sign in with Email </span><span style={{color : '#DDDDDD'}}>------------- </span>
          </div>
        <form onSubmit={handleEmailSignIn}>
              <div className='form-group'>
                <label className='label-text'>Email:</label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  placeholder='@mail.com'
                  required
                />
              </div>
              <div className='form-group'>
                <label className='label-text'>Password:</label>
                <input
                  type='password'
                  name='password'
                  className='form-control'
                  placeholder='........'
                  required
                />
                <div className='forgot-password'></div>
              </div>
              <button type='submit' className='submit-btn'>
                Login
              </button>
            </form>
    </div> 
  </div>
  );
}

export default SignUp
