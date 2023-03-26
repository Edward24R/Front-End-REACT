import React from 'react';
//import '../App.css';
import { GetStarted } from '../Buttons/GetStarted';
import { ButtonLog } from '../Buttons/LogInB';
import { SignUpButton } from '../Buttons/SignUpButton';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <img src='/images/rum-pillars2.jpg' />
      <h1>PARKWISE</h1>
      <p>Find out which facilities have PARKWISE!</p>
      <div className='hero-btns'>

        <GetStarted
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </GetStarted>

        {/* <SignUpButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Sign Up 
        </SignUpButton> */}
        
      </div>
    </div>
  );
}

export default HeroSection;
