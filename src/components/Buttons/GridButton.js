/*
Parkwise Grid Button Component: 
Provides an isolated button component that can be customized and is used to form the clickable interface of the Parkwise Grid portion 
of the application. 
The Button Component is styled via the GridButton.css. Its functionality is to demonstrate the availability of a parking spot within the designated
area of the grid by receiving a 'type' for its className attribute that determines the color of the button. Its clickable event is determined by the 
Link component within the Parkwise Grid. 

~Parkwise-Frontend, Developed by Eduardo Rivera
*/

import React from "react";
import './ButtonsCSS/GridButton.css';

//Grid Single Button Component

function GridButton({ type, text, clk }) {

  return <button className={type} onClick={clk}>
  {text}
  </button>;
}

export default GridButton;