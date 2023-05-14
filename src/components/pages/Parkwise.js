/*
Parkwise:
Parkwise system page which displays the grid component and the parking area background for user interaction.
This page is intended to be used for observing available parking spots within the supported lot, choosing the desired 
parking space from the grid component, and to be directed towards the Google Maps API once a parking spot has been 
chosen.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/
import React from 'react';
import '../../App.css';
import MyGrid from '../ui/Grid';
import './pagesCSS/Parkwise.css'

//Parkwise Page

export default function Parkwise() {

    return (
    //Page Background Color  
     <div className= 'page-containerSC' style={{height: "300vh", background: '#0cb9c2' }   }>
     
          <div className='parkw'><h1>ADMI Building: Click on 
          a available parking spot for instant parking directions</h1></div>
          
          <div >
         <MyGrid top="10%" left="20%"  />
          </div>
         
        <div id= "right" >
            <img src='/images/parkingBaseTemp.png' className='pic'/>
        </div>
      </div>
      
    );

}
