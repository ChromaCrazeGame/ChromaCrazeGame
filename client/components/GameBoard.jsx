import React from 'react';
import Row from './Row';
import Timer from './Timer';

const GameBoard = () => {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<Row key={`row${i}`}/>);
    }
    return (
        <div>
            <Timer />
            {rows}
        </div>
    );
};

export default GameBoard;
