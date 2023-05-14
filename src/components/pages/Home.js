/*
Home:
Parkwise web application home page for greeting users and establish a navigational point for the rest of the
page views. Composed by the UiSection component which provides the visual elements apart from the background
blur and the Cards component that allows users to navigate to currently available Parkwise locations.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/
import React from 'react';
import '../../App.css';
import UiSection from '../ui/UiSection';
import Footer from '../ui/Footer';

/* Home page component for web application */
function Home() {
  return (
    <>
    <div >
    <h1 className='blur'></h1> 
      <UiSection />
      <Footer/>
    </div>
    
    </>
  );
}

export default Home;
