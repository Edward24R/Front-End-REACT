/*
Cards:
Component that displays card images of the available Parkwise locations and provides the link functionality to 
their desired parking location. Uses CSS for styling and positioning. The Images are stored in the the public
folder file which are called to as a src attribute.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/
import React from 'react';
import './uiCSS/Cards.css';
import CardItem from './helpers/CardItem';

//Card Component for Home Page Locations
function Cards() {
  return (
    <div className='cards'>
      {/* <h1 className='cardsTxt'>Check Out Our Locations!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Try out Parkwise at our Primary Location at UPRM'
              label='Available'
              path='/parkwise'
            />
            <CardItem
              src='images/adem1.jpg'
              text='UPRM: Administración de Empresas Parking Lot'
              label='Primary'
              path='/parkwise'
            />
            <CardItem
              src='images/img-5.jpg'
              text='UPRM: Biology Parking Lot'
              label='Coming Soon'
              path='/home'
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
