/*
Main Ui component for the Home page. Contains the background visual elements of the page and the
Cards component which navigates users to their desired Parkwise supported parking lot.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/

import React from 'react';
import './uiCSS/UiSection.css';
import Cards from './Cards';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTypo3 } from "@fortawesome/free-solid-svg-icons";

function UiSection() {
  return (
    
    <div className='hero-container'>
      <img className= 'back' src='/images/colegio-wide.jpg'/>
      <div className='hero-container'>
        <h1 className='blur'></h1> 
          <h1>PARKWISE
          
          
          </h1>
          
          <p>Find out which campus areas have PARKWISE!</p>
              <Cards/>
      
      </div>
      
      
    </div>
    
  );
}

export default UiSection;
