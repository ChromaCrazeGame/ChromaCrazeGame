import React from 'react';
import Row from './Row';
import Timer from './timer';

const GameBoard = () => {
    return (
        <div>
            <Timer />
            <Row/>
        </div>
    );
};

export default GameBoard;
