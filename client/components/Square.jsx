import React from 'react';
import * as actions from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const Square = ({ row, column }) => {
  const color = useSelector(store => store.board.board[row][column]);

  const dispatch = useDispatch();
  const handleClick = () => dispatch(actions.changeColorActionCreator(row, column, 'dodgerblue'));

  return (
    <div className="square" style={ { backgroundColor: color } } onClick={handleClick}></div>
  );
};

export default Square;
