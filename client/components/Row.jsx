import React from 'react';
import Square from './Square';

const Row = () => {
    const row = [];
    for (let i = 1; i <= 10; i++) {
        row.push(<Square key={`square${i}`}/>);
    }
    return (
        <div id="row">
            {row}
        </div>
    );
};

export default Row;
