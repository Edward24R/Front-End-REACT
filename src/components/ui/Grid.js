import React from 'react';
import './Grid.css'
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import { useState } from 'react';

// const [newArr, setNewArr] = useState(jsonArr);


//     Parkwise Grid Component composed of a button grid

function Grid() {
    // const [myConstant, setMyConstant] = useState('34');
    return (
<>

<div><p className='trans'>Current Available Parking Spots: {totalSpaces()}</p> 
<p className='trans2'>Parking Area and Location Number </p> </div>

<div className="grid grid-cols-4 grid-row-30" >
{/* Grid Header */}
<div style={{backgroundColor: 'magenta', color: 'black'}}> #D </div>
<div style={{backgroundColor: 'yellow', color: 'black'}}> #C </div>
<div style={{backgroundColor: 'magenta', color: 'black'}}> #B </div>
<div style={{backgroundColor: 'yellow', color: 'black'}}> #A </div>

{/* Grid Buttons in #D #C #B #A order.
Buttons on in use are commented out at the moment.
*/}
<div> <Link to={`/${validLink(parkingD,1)}`} >
         <Button type={spotAvailable(parkingD,1)} text="1" />
         </Link></div>
<div> <Link to={`/${validLink(parkingC,1)}`} >
         <Button type={spotAvailable(parkingC,1)} text="1" />
         </Link></div>
<div> <Link to={`/${validLink(parkingB,1)}`}>
         <Button type={spotAvailable(parkingB,1)} text="1" />
         </Link></div>
<div> <Link to={`/${validLink(parkingA,1)}`}>
         <Button type={spotAvailable(parkingA,1)} text="1" /> 
         </Link></div> 
<div> <Link to={`/${validLink(parkingD,2)}`}>
         <Button type={spotAvailable(parkingD,2)} text="2" />
         </Link></div>
<div> <Link to={`/${validLink(parkingC,2)}`}>
         <Button type={spotAvailable(parkingC,2)} text="2" />
         </Link></div>
<div> <Link to={`/${validLink(parkingB,2)}`}>
         <Button type={spotAvailable(parkingB,2)} text="2" />
         </Link></div>
<div> <Link to={`/${validLink(parkingA,2)}`}>
         <Button type={spotAvailable(parkingA,2)} text="2" />
         </Link></div>
<div> <Link to={`/${validLink(parkingD,3)}`}>
         <Button type={spotAvailable(parkingD, 3)} text="3" />
         </Link></div>
<div> <Link to={`/${validLink(parkingC,3)}`}>
         <Button type={spotAvailable(parkingC, 3)} text="3" />
         </Link></div>
<div> <Link to={`/${validLink(parkingB,3)}`}>
         <Button type={spotAvailable(parkingB, 3)} text="3" />
         </Link></div>
<div> <Link to={`/${validLink(parkingA,3)}`}>
         <Button type={spotAvailable(parkingA, 3)} text="3" />
         </Link></div>
<div> <Link to={`/${validLink(parkingD,4)}`}>
         <Button type={spotAvailable(parkingD,4)} text="4" />
         </Link></div>
<div> <Link to={`/${validLink(parkingC,4)}`}>
         <Button type={spotAvailable(parkingC,4)} text="4" />
         </Link></div>
<div> <Link to={`/${validLink(parkingB,4)}`}>
         <Button type={spotAvailable(parkingB,4)} text="4" />
         </Link></div>
<div> <Link to={`/${validLink(parkingA,4)}`}>
         <Button type={spotAvailable(parkingA,4)} text="4" />
         </Link></div>
<div> <Link to='/gmaps'>
         <Button type={spotAvailable()} text="5" />
         </Link></div>
<div> <Link to='/gmaps'>
         <Button type={spotAvailable()} text="5" />
         </Link></div>
<div> <Link to='/gmaps'>
         <Button type={spotAvailable()} text="5" />
         </Link></div>
<div> <Link to='/gmaps'>
         <Button type={spotAvailable()} text="5" />
         </Link></div>
<div> <Link to='/gmaps'>
         <Button type={spotAvailable()} text="6" />
         </Link></div>
<div> <Link to='/gmaps'>
         <Button type={spotAvailable()} text="6" />
         </Link></div>
<div> <Link to='/gmaps'>
         <Button type={spotAvailable()} text="6" />
         </Link></div>
<div> <Link to='/gmaps'>
         <Button type={spotAvailable()} text="6" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="7" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="7" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="7" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="7" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="8" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="8" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="8" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="8" />
</Link></div><div> <Link to='/home'>
         <Button type={spotAvailable()} text="9" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="9" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="9" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="9" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="10" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="10" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="10" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="10" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="11" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="11" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="11" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="11" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="12" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="12" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="12" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="12" />
</Link></div><div> <Link to='/home'>
         <Button type={spotAvailable()} text="13" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="13" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="13" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="13" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="14" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="14" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="14" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="14" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="15" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="15" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="15" />
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="15" /> */}
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="16" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="16" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="16" />
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="16" /> */}
</Link></div><div> <Link to='/home'>
         <Button type={spotAvailable()} text="17" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="17" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="17" />
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="17" /> */}
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="18" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="18" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="18" />
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="18" /> */}
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="19" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="19" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="19" />
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="19" /> */}
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="20" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="20" />
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="20" /> */}
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="20" /> */}
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="21" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="21" />
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="21" /> */}
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="21" /> */}
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="22" />
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="22" />
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="22" /> */}
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="22" /> */}
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="23" /> */}
         </Link></div>
<div> <Link to='/home'>
         <Button type={spotAvailable()} text="23" />
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="23" /> */}
         </Link></div>
<div> <Link to='/home'>
         {/* <Button type={spotAvailable()} text="23" /> */}
         </Link></div>
         
</div>
</>
        );
}
export default Grid;



export const parkingA = [1,0,1,0];
export const parkingB = [0,1,0,1];
export const parkingC = [1,0,1,0];
export const parkingD = [0,1,0,1];

const position = 2;

export const coordA= [
"18.217597681837834, -67.14288145560002", 
"18.21757284111633,-67.14287340897359",
"18.217555006749976,-67.14286133903393",
"18.217534624614764, -67.14284926909426"
];

const myCoord = "18.217597681837834, -67.14288145560002";


//spotAvailable function for determining whether a spot is available
// Returns the color for the availability of the spot
export function spotAvailable(park, pos){
    if(getValueAtPosition(park, pos-1) == 1){
        return "red";
    } else 
            return "green";
}

// function coordAvailable(arr, pos){
//     if(getValueAtPosition(arr, pos-1) == 1){
//         return "red";
//     } else 
//             return getValueAtPosition(arr, pos-1);
// }

//validLink function for determining whether a link should send the user
//to the coordinated google maps page or do nothing is spot is unavailable
function validLink(parkN, posM){
    if(getValueAtPosition(parkN, posM-1) == 1){
        return "parkwise";
    } else 

            return "gmaps";
}

//Returns Total Number of Zeros within a Array, a 0 is counted as available parking space
function countZeros(arr) {
    let count = 0; // 0 = availble space
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        count++; 
      }
    }
    return count; // return the total count of 0's
  }

//Returns Total Available Parking Spaces
function totalSpaces(){
    return countZeros(parkingA) + countZeros(parkingB) +countZeros(parkingC) + countZeros(parkingD);
}

//Returns the specific value of an array depending on the given position
  function getValueAtPosition(array, position) {
    if (position >= 0 && position < array.length) {
      return array[position];
    } else {
      return null; // or any other value you want to return for an invalid position
    }
  }


  // function parkingUpdater(arrayN, positionsArr, value) {
//     for (let pos of positionsArr) {
//       if (pos >= 0 && pos < arrayN.length) {
//         arrayN[pos] = value;
//       }
//     }
//     return arrayN;
//   }