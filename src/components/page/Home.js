import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../ui/HeroSection';
import Footer from '../Footer';

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
