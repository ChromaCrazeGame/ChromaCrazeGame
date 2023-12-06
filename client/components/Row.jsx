import React from 'react';
import Square from './Square';

const Row = (props) => {
  // console.log(props)
  const row = [];
  for (let i = 1; i <= 10; i++) {
    row.push(<Square key={`square${i}`} column= {i} row={props.row}/>);
  }
  return (
    <div className="row">
      {row}
    </div>
  );
};

export default Row;
