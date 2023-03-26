import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check our Locations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Try out Parkwise at our Primary Location at UPRM'
              label='Available'
              path='/uprm'
            />
            <CardItem
              src='images/img-2.jpg'
              text='UPRM: Area Blanca Parking Lot'
              label='Primary'
              path='/parkwise'
            />
            <CardItem
              src='images/img-5.jpg'
              text='UPRM: Biology Parking Lot'
              label='Coming Soon'
              path='/uprm'
            />
          </ul>
          <ul className='cards__items'>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
