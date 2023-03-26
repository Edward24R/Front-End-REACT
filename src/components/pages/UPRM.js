import React from "react";
import "../../App.css";
import Footer from "../ui/Footer";
import HeroSection from "../ui/HeroSection";
import "./UPRM.css";

// const backgroundPic = new URL()

export default function Uprm() {
  return (
    <>
    <div className="uprm-container">
      <img src='/images/rum-pillars2.jpg' />

      <h1>UPRM</h1>
      <p>Useful Links and University Information</p>

    </div>
    
    <div><Footer/></div>
      </>
    
  );
}
