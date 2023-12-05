import React from 'react';

const Square = () => {
    const clickHandler = () => {
        console.log('color changed!');
    };
    return (
        <>
            <div id="square" onClick={clickHandler}></div>
        </>
    );
};

export default Square;
