import React from "react";
import './ButtonsCSS/GridButton.css';

//Grid Single Button Component

function GridButton({ type, text, clk }) {

  return <button className={type} onClick={clk}>
  {text}
  </button>;
}

export default GridButton;