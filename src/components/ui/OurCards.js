import React from 'react';
import './OurCards.css';
import CardItem from './CardItem';

function OurCards() {
  return (
    <div className='card'>
      <h1>Development Team</h1>
      <div className='card__container'>
        <div className='card__wrapper'>
          <ul className='card__items'>
            
            <CardItem
              src=''
              text='Javier - Project Leader, Full Stack Developer'
              path='/contact'
            />
            <CardItem
              src='images/eduardo_profile2.jpeg'
              text='Eduardo Rivera - Full Stack Developer'
              path='/contact'
            />
            <CardItem
              src=''
              text='Genesis - Full Stack Developer'
              path='/contact'
            />
            <CardItem
              src=''
              text='Jonathan - Full Stack Developer'
              path='/contact'
            />
          </ul>
          <ul className='card__items'>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurCards;
