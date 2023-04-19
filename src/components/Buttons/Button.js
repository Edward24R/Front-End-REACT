import React from "react";
import './Button.css';
import { Link } from "react-router-dom";
import { parkingA, parkingB, parkingC, parkingD , coordAvailable} from '.././ui/Grid';


//Grid Single Button Component

function Button({ type, text }) {
// const coordinates = coordAvailable(text);

  return <button className={type}>
  {text}
  {/* <Link> {coord}</Link> */}
  {/* <Link to= '/home'></Link> */}
  </button>;
}

export default Button;