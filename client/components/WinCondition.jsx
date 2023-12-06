import React , { useState, useEffect } from 'react';

function WinCondition(){
  const player = {
    Player1 : 10,
    Player2 : 18,
    Player3 : 15,
    Player4 : 24,
    Player5 : 8,
    Player6 : 10,
    Player7 : 18,
    Player8 : 15,
    Player9 : 18,
    Player10 : 8,
    Player11 : 10,
    Player12 : 18,
    Player13 : 15,
    Player14 : 4,
    Player15 : 8,
    Player16 : 10,
    Player17 : 18,
    Player18 : 15,
    Player19 : 24,
    Player20 : 8,
    Player21 : 10,
    Player22 : 18,
    Player23 : 15,
    Player24 : 4,
    Player25 : 38,
    Player26 : 10,
    Player27 : 18,
    Player28 : 15,
    Player29 : 4,
    Player30 : 38,
  };
  const playerArray = Object.entries(player);
  const winningScore = playerArray.sort((a, b) => b[1] - a[1])[0][1];
  const winningPlayers = playerArray.filter((player) => player[1] === winningScore).map((player) => player[0]);
  let multipleWinner = true;
  if (winningPlayers.length === 1) {multipleWinner = false;}
  return (
    <>
      {multipleWinner ? ( <p id='winAnnouncement'>The Winners Are: {winningPlayers.join(', ')} with a score of {winningScore}!</p>
      ) : (
        <p id='winAnnouncement'>The Winner is: {winningPlayers} with a score of {winningScore}</p>
      )}
    </>
  );
}
export default WinCondition;
