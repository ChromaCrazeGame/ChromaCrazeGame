import { CHANGE_COLOR } from '../constants/actionTypes';

export const changeColorActionCreator = (row, column, color) => ({
  type: CHANGE_COLOR,
  payload: { row: row, column: column, color: color }
});
