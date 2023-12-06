import React from 'react';
import { useSelector } from 'react-redux';
import Row from './Row';

const GameBoard = () => {
  const boardState = useSelector(store => store.board.board);

  const rows = [];
  for (let row = 0; row < boardState.length; row++) {
    rows.push(<Row
      key={`row-${row}`}
      row={row}
    />);
  }

  return (
    <div id="gameboard">
      {rows}
    </div>
  );
};

export default GameBoard;
