import React from 'react';
import { useSelector } from 'react-redux';

import Square from './Square';

const Row = ({ row }) => {
  const rowState = useSelector(store => store.board.board[row]);
  const squares = [];
  for (let col = 0; col < rowState.length; col++) {
    squares.push(<Square
      key={`square-${row}${col}`}
      row={row}
      column={col}
    />);
  }
  return (
    <div className="row">
      {squares}
    </div>
  );
};

export default Row;
