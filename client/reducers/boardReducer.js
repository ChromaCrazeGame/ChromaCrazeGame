import { CLICK_SQUARE, UPDATE_SQUARE } from '../constants/actionTypes';
import { socket } from '../socket';

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
  case CLICK_SQUARE: {
    // socket.emit(
    // 1. event name
    // 2. payload { }
    // 3. callback
    
    const board = state.board.slice();
    const row   = action.payload.row;
    const col   = action.payload.column;

    socket.emit('square clicked', { row: row, column: col, color: action.payload.color } );

    board[row][col] = action.payload.color;

    return {
      ...state,
      board,
    };
  }
  case UPDATE_SQUARE: {
    console.log('trying to update the square in state...');
    console.log(action);
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
