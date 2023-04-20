import React from "react";
import './Button.css';
import { Link } from "react-router-dom";
import { parkingA, parkingB, parkingC, parkingD , coordAvailable} from '.././ui/Grid';


//Grid Single Button Component

function Button({ type, text, clk }) {
// const coordinates = coordAvailable(text);

  return <button className={type} onClick={clk}>
  {text}
  {/* <Link> {coord}</Link> */}
  {/* <Link to= '/home'></Link> */}
  </button>;
}

export default Button;