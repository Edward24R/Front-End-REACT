/*
About Page: 
Informational page that summarizes the functionality of the Pakrwise system and showcases the development team via 
their own display cards. The page is composed of a background image, background blur, the Text Description, and the external
components. The OurCards component provides the development team's presentation in a concise and minimalistic manner, while the Footer 
component provides a visual element that balances the page layout.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/
import './pagesCSS/About.css';
import OurCards from '../ui/OurCards';
import Footer from '../ui/Footer';
import React from 'react';

/*Info Page about Parkwise and its Members*/
export default function About() {

  return (
    <> 
<div className='about-container'>
  <img src='/images/portico_rum.jpg' />
  <h1 className='blurA'></h1>
  <h1>What is Parkwise?</h1>
  
  <p>Parkwise is a Smart Parking Assist System. It is focused on solving the UPRM’s transit 
      issue of unreliable parking by using AI Deep Learning to track vehicle positioning and parking 
      vacancy within the campus parking areas. Try it out! By visiting the home page and choosing a available location.
      </p> 
  

</div>


<div>
<OurCards/>
<Footer/>
</div>

    
</>
  );

}
