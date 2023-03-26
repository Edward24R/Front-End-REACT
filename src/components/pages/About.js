import React from 'react';
import '../../App.css';
import HeroSection from '../ui/HeroSection';
import Cards from '../ui/Cards';
import './About.css';
import OurCards from '../ui/OurCards';
import Footer from '../ui/Footer';

export default function About() {


  return (
    <> 
<div className='hero-container'>

  <img src='/images/rum-pillars2.jpg' />
  <h1>What is Parkwise?</h1>
  <p>Parkwise is a Smart Parking Assist System. It is focused on solving the UPRM’s transit 
      issue of unreliable parking by using AI Deep Learning to track vehicle positioning and parking 
      vacancy within the campus parking areas. All of this while also having the functionality of alerting users of spot availability via the Parkwise web and mobile application. </p>
  <div className='hero-btns'></div>
</div>


<div>
<OurCards/>
<Footer/>
</div>

    
</>
  );

}
