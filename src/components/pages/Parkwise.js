import React from 'react';
import '../../App.css';
import UiSection from '../ui/UiSection';
import Grid from '../ui/Grid';
import Btn from '../Buttons/Btn';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import './Parkwise.css'
import Typography from "@mui/material/Typography";

//Parkwise Page

export default function Parkwise() {

    return (
     <div style={{background: 'green'}}>
     {/* <img className='backW' src='/images/B1.jpg'/> */}
          <div className='parkw'><h1>Click on Available Parking for Parking Directions</h1></div>

          {/* <Typography>Current Available Parking Spots: </Typography> */}
          <div >
         <Grid/>
         </div>
         
        <div id= "right" class ="pic">
            <img src='/images/ParkingSatE.png' className='pic'/>
        </div>
      </div>
      
    );

}

function spotAvailable(){
    return "green";
}

function spotUnavailable(){
    return "red";
}