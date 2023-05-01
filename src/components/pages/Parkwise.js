import React from 'react';
import '../../App.css';
import Grid from '../ui/Grid';
import './Parkwise.css'
import Typography from "@mui/material/Typography";

//Parkwise Page

export default function Parkwise() {

    return (
    //Page Background Color  
     <div className= 'page-containerSC' style={{background: '#0cb9c2'}}>
     
          <div className='parkw'><h1>Click on Available Parking for Parking Directions</h1></div>
          
          <div >
         <img className='backW' src='/images/B1.jpg'/>
         <Grid/>

         </div>
         
        <div id= "right" >
            <img src='/images/ParkingSatE.png' className='pic'/>
            
        </div>
      </div>
      
    );

}
