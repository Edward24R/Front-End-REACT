/*
OCards:
Component that displays card images of the the development team and provides a link functionality for the 
Contact page. Uses CSS for styling and positioning. The Images are stored in the the public folder file which 
are called to as a src attribute.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/

import React from 'react';
import './uiCSS/OurCards.css';
import OurCardItem from './helpers/OurCardItem';


// Development Team member cards component for About Page
function OurCards() {
  return (
    <div className='ocard'>
      <h1 className='ocardTxt'>The Development Team</h1>
      <div className='ocard__container'>
        <div className='ocard__wrapper'>
          <ul className='ocard__items'>
            
            <OurCardItem
              src='images/javier.jpg'
              text='Javier - Project Leader, Full Stack Developer'
              path='/contact'
            />
            <OurCardItem
              src='images/eduardo_profile2.jpeg'
              text='Eduardo Rivera - Full Stack Developer'
              path='/contact'
            />
            <OurCardItem
              src='images/genesisA.jpg'
              text='Genesis - Full Stack Developer'
              path='/contact'
            />
            <OurCardItem
              src='images/johnathan.jpg'
              text='Jonathan - Full Stack Developer'
              path='/contact'
            />
          </ul>
          <ul className='ocard__items'>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurCards;
