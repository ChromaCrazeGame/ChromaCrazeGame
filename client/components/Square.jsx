import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';


const Square = (props) => {
  // console.log(props);
  const squareId = `r${props.row}c${props.column}`;
  // console.log('squareId', squareId);
  const squareColor = useSelector(store => store.board.square.color);
  // console.log('log color state', squareColor);
  const dispatch = useDispatch();
  const changeColor = () => dispatch(actions.changeColorActionCreator(squareId));
  // const [color, setColor] = useState('white');
  // const clickHandler = () => {
  //   setColor('red');
  // };


  return (
    <div className="square" style={ { backgroundColor: squareColor } } onClick={changeColor}></div>
  );
};

export default Square;
