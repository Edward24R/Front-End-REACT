import React from 'react';
import '../../App.css';
import Cards from '../ui/Cards';
import HeroSection from '../ui/HeroSection';
import Footer from '../ui/Footer';

function Home() {
  return (
    <>
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
    
    </>
  );
}

export default Home;
