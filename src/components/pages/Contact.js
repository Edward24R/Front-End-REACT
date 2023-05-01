import React from 'react';
// import '../../App.css';
import Footer from '../ui/Footer';
import './Contact.css'

// Contact Info page
export default function Contact() {
  return (
    <>

  <div className='contact-container'>
  
  <h1>Contact Us at</h1>
  <p>For questions or more information about our Parkwise system, contact us at:</p>
  <p>instinct.parkwise@gmail.com</p>
  <div><img src='/images/InstinctLOGO.png' className='picLogoR'/></div>
  <div><img src='/images/InstinctLOGO.png' className='picLogoL'/></div>
  </div>
  <div>
    <Footer/>
  </div>


  </>
  );
}
