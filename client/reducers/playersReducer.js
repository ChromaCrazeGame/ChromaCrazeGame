const initialState = {};

import * as types from '../constants/actionTypes';

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.PLAYER_ENTER: {
    return;
  }
  case types.PLAYER_EXIT: {
    return;
  }
  default:
    return state;
  }
};

export default playersReducer;
