import React from 'react';
//import '../App.css';
import { GetStarted } from '../Buttons/GetStarted';
import { ButtonLog } from '../Buttons/LogInB';
import { SignUpButton } from '../Buttons/SignUpButton';
import './UiSection.css';
import Btn from '../Buttons/Btn';


function UiSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      {/* <img src='/images/rum-pillars2.jpg' /> */}
      <img src='/images/colegio-wide.jpg'/>

        <h1 className='blur'></h1>
      <h1>PARKWISE</h1>
      <p>Find out which campus areas have PARKWISE!</p>

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

export default UiSection;
