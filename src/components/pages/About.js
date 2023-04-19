import React from 'react';
import '../../App.css';
import './About.css';
import OurCards from '../ui/OurCards';
import Footer from '../ui/Footer';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

//Info Page about Parkwise and its Members
export default function About() {

  return (
    <> 
<div className='about-container'>
  <img src='/images/portico_rum.jpg' />
  <h1>What is Parkwise?</h1>
  
  <p>Parkwise is a Smart Parking Assist System. It is focused on solving the UPRM’s transit 
      issue of unreliable parking by using AI Deep Learning to track vehicle positioning and parking 
      vacancy within the campus parking areas. All of this while also having the functionality of alerting users of 
      spot availability via the Parkwise web and mobile application. </p> 
  
</div>


<div>
<OurCards/>
<Footer/>
</div>

    
</>
  );

}
