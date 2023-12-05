import React from 'react';
import Square from './Square';

const Row = () => {
  const rows = [];
  for (let i = 0; i < 100; i++) {
    rows.push(<Square key={i}/>);
  }
  return (
    <div>
      {rows}
    </div>
  );
};

export default Row;
