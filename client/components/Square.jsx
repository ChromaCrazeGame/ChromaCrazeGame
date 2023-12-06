import React, { useState } from 'react';

const Square = () => {
  const [color, setColor] = useState('white');
  const clickHandler = () => {
    setColor('red');
  };

  return (
    <div id="square" style={ { backgroundColor: color } } onClick={clickHandler}></div>
  );
};

export default Square;
