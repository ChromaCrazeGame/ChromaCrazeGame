import { CLICK_SQUARE, UPDATE_SQUARE } from '../constants/actionTypes';

export const changeColorActionCreator = (row, column, color) => ({
  type: CLICK_SQUARE,
  payload: { row: row, column: column, color: color }
});

export const updateColorActionCreator = (row, column, color) => ({
  type: UPDATE_SQUARE,
  payload: { row: row, column: column, color: color }
});
