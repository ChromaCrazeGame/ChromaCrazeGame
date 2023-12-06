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
  case CHANGE_COLOR: {
    const board = state.board.slice();
    const row   = action.payload.row;
    const col   = action.payload.column;

    board[row][col] = action.payload.color;

    return {
      ...state,
      board,
    };
  }
  default:
    return state;
  }
};

export default boardReducer;
