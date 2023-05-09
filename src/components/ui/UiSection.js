import React from 'react';
import './uiCSS/UiSection.css';
import Cards from './Cards';


function UiSection() {
  return (
    
    <div className='hero-container'>
      <img className= 'back' src='/images/colegio-wide.jpg'/>
      <div className='hero-container'>
        {/* <h1 className='blur'></h1>  */}
          <h1>PARKWISE</h1>
          
          <p>Find out which campus areas have PARKWISE!</p>
              <Cards/>
      {/* <h1 className='blur2'></h1> */}
      
      </div>
      
      
    </div>
    
  );
}

export default UiSection;
