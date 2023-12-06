import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Timer from '../components/Timer';
import GameBoard from '../components/GameBoard';
import * as actions from '../actions/actions';

const GameContainer = () => {
  // const squareColor = useSelector(store => store.board.color);
  // console.log('log color state', squareColor);
  // const dispatch = useDispatch();
  // const changeColor = () => dispatch(actions.changeColorActionCreator());

  return (
    <div>
      <Timer/>
      <GameBoard /*changeColor={changeColor} squareColor={squareColor}*/ />
    </div>
  );
};

export default GameContainer;
