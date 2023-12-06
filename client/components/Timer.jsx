import React, { useState, useEffect} from 'react';
import WinCondition from './WinCondition';


const Timer = () => {
  //setting state for how many seconds we want to start game at
  const [seconds, setSeconds] = useState(15);
  //setting state if the game is currently running
  const [gameRunning, setGameRunning] = useState(false);
  //setting state to return winning team result when true
  const [gameOver, setGameOver] = useState(false);
    
  //proof of concept to display back winner-> should be modified to the state change of winning player
  const winner = <WinCondition />;
  
  useEffect(() => {
    let interval;
  
    if (gameRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            //when timer runs out, clearing timer, changing game state and displaying result
            clearInterval(interval);
            setGameOver(true);
            setGameRunning(false);
            //pass game state in here to end game as a boolean to end game
            return 15; // Reset the timer to 15 seconds
          } else {
            //decrementing the timer
            return prevSeconds - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
  
    return () => clearInterval(interval);
  }, [gameRunning]);
  
  const startGame = () => {
    setGameRunning(true);
    setGameOver(false);
    //insert function that starts gameplay
  };
    //displaying the remaining time in counterdown
  //if the timer is over and game has ended, displaying the winner
  //if the game state is not over, displaying start button to start game
  return (
    <header id="game_header">
      <h1 id='gameTimeRemaining' >Game Time Remaining: {seconds} seconds</h1>
      {gameOver ? (
        <>
          <h2 id='gameHasEnded' >Game has ended! {winner}</h2>
          <button id='startGameButton' onClick={startGame}>Start New Game</button>
        </>
      ) : (
        <button id='startGameButton' onClick={startGame}>Start Game</button>
      )}
    </header>
  );
};

export default Timer;
