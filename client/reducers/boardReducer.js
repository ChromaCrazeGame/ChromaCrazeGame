// here we want initialState declared for the board
// do i want to stuff every piece of state in here tho...

import { CHANGE_COLOR } from '../constants/actionTypes';

// create a 2d array that represents the gameboard
const board = [];
for (let i = 0; i < 10; i++) {
  board.push(new Array(10).fill('inherit'));
}

const initialState = {
  board: board,
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
