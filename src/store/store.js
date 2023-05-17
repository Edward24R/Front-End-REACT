/*
Store Function:
Stores a desired value in order to access it across all subsequent files.




~Parkwise-Frontend, Developed by Eduardo Rivera
*/

import { createStore } from 'redux';

// const initialState = {
//   myVariable: "18.217454442274484, -67.14313830349626"// Set initial value of the variable

// };

const initialState = {
  myLatitude: "18.217454442274484", // Set initial value of the variable
  myLongitude: "-67.14313830349626",
  lastSpot: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LAT':
      return { ...state, myLatitude: action.payload };
    case 'UPDATE_LONG':
      return { ...state, myLongitude: action.payload };
    case 'UPDATE_SPOT':
        return { ...state, lastSpot: action.payload }; 
    default:
      return state;
  }
}

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'UPDATE_MESSAGE':
//       return {...state, myVariable: action.payload };
//     default:
//       return state;
//   }
// }

const store = createStore(reducer);

export default store;