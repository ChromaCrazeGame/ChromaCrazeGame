import React from 'react';
import Row from './Row';

const GameBoard = () => {
  const rows = [];
  for (let i = 1; i <= 10; i++) {
    rows.push(<Row key={`row${i}`} row={i}/>);
  }
  return (
    <div>
      {rows}
    </div>
  );
};

export default GameBoard;
