
import store from './store';

let myVariable = "18.217454442274484, -67.14313830349626";

export function changeCoord(arr, pos) {
    
    if(isArrayIdentical(arr, parkingA) ){
        // change constant
        myVariable = (getValueAtPosition(coordA,pos-1));
        store.dispatch({ type: 'UPDATE_MESSAGE', payload: getValueAtPosition(coordA,pos-1) }); // Update myVariable 

    } else if(isArrayIdentical(arr, parkingB) ){
        // change constant
        myVariable = (getValueAtPosition(coordB,pos-1));
        store.dispatch({ type: 'UPDATE_MESSAGE', payload: getValueAtPosition(coordB,pos-1) }); // Update myVariable 
    } else if(isArrayIdentical(arr, parkingC) ){
        // change constant
        myVariable = (getValueAtPosition(coordC,pos-1));
        store.dispatch({ type: 'UPDATE_MESSAGE', payload: getValueAtPosition(coordC,pos-1) }); // Update myVariable 
    } else 
        // change constant
        myVariable = (getValueAtPosition(coordD,pos-1));
        store.dispatch({ type: 'UPDATE_MESSAGE', payload: getValueAtPosition(coordD,pos-1) }); // Update myVariable 
    return myVariable;
}

export function getMyVariable (){
    return myVariable;
}

export { myVariable };




export const parkingA = [1,0,1,0];
export const parkingB = [0,1,0,1];
export const parkingC = [1,0,1,0];
export const parkingD = [0,1,0,1];

const position = 2;

export const coordA= [
"18.217597681837834,  -67.14288145560002", 
"18.21757284111633,  -67.14287340897359",
"18.217555006749976,  -67.14286133903393",
"18.217534624614764,  -67.14284926909426"
];
export const coordB=[  
   " 18.217527694857605,  -67.14297094830032",
    "18.217506675777337,  -67.14296223112166",
    "18.217486930578414,  -67.14295686670404",
    "18.217465274551206,  -67.14295083173421"    
];
export const coordC=[  
   " 18.217503327362838,  -67.1430278171088",
    "18.217478486627872,  -67.14301909993016",
    "18.217461289193878,  -67.14300568888608",
    "18.2174409070477,  -67.14300032446846 "   
];
export const coordD=[  
    "18.217454442274484,  -67.14313830349626",
    "18.217432149301096,  -67.14312958631761",
    "18.21741367797814,  -67.14312019858677",
    "18.217390111114952,  -67.14311215196032"

];

let coordinates = "18.217597681837834,  -67.14288145560002";


//spotAvailable function for determining whether a spot is available
// Returns the color for the availability of the spot
function spotAvailable(park, pos){
    if(getValueAtPosition(park, pos-1) == 1){
        return "red";
    } else 
            return "green";
}

function isArrayIdentical(arr, arrB) {
    if (arr.length !== arrB.length) {
      return false;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arrB[i]) {
        return false;
      }
    }
    return true;
  }

function coordAvailable(arr, posN){
    if(getValueAtPosition(arr, posN-1) == 1){
        return "red";
    } else 
            return getValueAtPosition(arr, posN-1);
}

//validLink function for determining whether a link should send the user
//to the coordinated google maps page or do nothing is spot is unavailable
function validLink(parkN, posM, condition){
    if(getValueAtPosition(parkN, posM-1) == 1){
        return "parkwise";
    } else 

    if(isArrayIdentical(parkN, parkingA) && condition == true){
        // change constant
        coordinates = getValueAtPosition(coordA,posM-1);
    } else if(isArrayIdentical(parkN, parkingB) && condition == true){
        // change constant
        coordinates = getValueAtPosition(coordB,posM-1);
    } else if(isArrayIdentical(parkN, parkingC) && condition == true){
        // change constant
        coordinates = getValueAtPosition(coordC,posM-1);
    } else if(isArrayIdentical(parkN, parkingD) && condition == true){
        // change constant
        coordinates = getValueAtPosition(coordD,posM-1);
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
