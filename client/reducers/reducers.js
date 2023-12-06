import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import playersReducer from './playersReducer';

const reducers = combineReducers({
  board: boardReducer,
  players: playersReducer,
});

export default reducers;
