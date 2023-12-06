import { CHANGE_COLOR } from '../constants/actionTypes';

export const changeColorActionCreator = (squareId) => ({
  type: CHANGE_COLOR,
  payload: ['red', squareId]
});

