import { createStore } from 'redux';

const initialState = {
  myVariable: "18.217454442274484, -67.14313830349626" // Set initial value of the variable
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return {...state, myVariable: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;