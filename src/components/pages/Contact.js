/*
Contact:
The Contact Page component is a functional component written in React. 
It renders the contact information and a logo. It can be navigated to via the
navigation bar or by clicking on the development team cards within the About information
page.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/
import React from 'react';
import Footer from '../ui/Footer';
import './pagesCSS/Contact.css'

// Contact Info page
export default function Contact() {

  return (
    <>

  <div className='contact-container'>
  
  <h1>Contact Us at</h1>
  <p>For questions or more information about our Parkwise system, contact us at:</p>
  <p>instinct.parkwise@gmail.com</p>
  <div><img src='/images/InstinctLOGO.png' className='picLogoR'/></div>
 

  </div>
  <div>
    <Footer/>
  </div>


  </>
  );
}
