import React from 'react';
import '../../App.css';
import Cards from '../ui/Cards';
import UiSection from '../ui/UiSection';
import Footer from '../ui/Footer';

//Home page for Application
function Home() {
  return (
    <>
    <div>
      <UiSection />
      <Cards />
      <Footer />
    </div>
    
    </>
  );
}

export default Home;
