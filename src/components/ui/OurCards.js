import React from 'react';
import './OurCards.css';
import OurCardItem from './OurCardItem';


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
