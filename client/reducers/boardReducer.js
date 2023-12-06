


// here we want initialState declared for the board
// do i want to stuff every piece of state in here tho...

import { CHANGE_COLOR } from '../constants/actionTypes';

const initialState = {
  board: []
  // square: {
  //   color: 'white',
  //   squareId: null,
  // }
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_COLOR:
    // let newSquare = {
    //   color: action.payload[0],
    //   squareId: action.payload[1],
    // }
    // if (state.square.squareId === action.payload[1]) {
    //   return Object.assign({}, state, {square: {color: action.payload[0], squareId: action.payload[1]}});
    // }
    return Object.assign({}, state, {square: {color: action.payload[0], squareId: action.payload[1]}});
  default:
    return state;
  }
};

export default boardReducer;

