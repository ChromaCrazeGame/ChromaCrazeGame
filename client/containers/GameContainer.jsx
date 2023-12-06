import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import { socket } from '../socket';

import Timer from '../components/Timer';
import GameBoard from '../components/GameBoard';
import Sidebar from '../components/Sidebar';
import SocketTester from '../components/SocketTester';
import '../styles.css';

const GameContainer = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [gameState, setGameState] = useState({});

  useEffect(() => {
    // socket.io setup
    // ========================================================
    // this useEffect is (currently) completely devoted to
    // getting our socket-based functionality set up.
    //
    // 1) the first thing we do is declare any functions that
    //    need to run when events come in from the server.
    //    these generally make updates to state.
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onInitGameState = ({ state }) => {
      setGameState(state);
    };

    const onDemoButtonPress = ({ presses }) => {
      setGameState(gameState => ({
        ...gameState,
        demoButtonPresses: presses,
      }));
    };

    // 2) next, we set up the actual event listeners for
    //    each socket event we want to handle, and assign
    //    the functions we declared above.
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('init state', onInitGameState);
    socket.on('demo button pressed', onDemoButtonPress);

    // 3) finally, we return a cleanup function.
    return () => {
      // event listeners registered in the setup function
      // above (via calls to `.on()`) must be removed in this
      // cleanup callback to prevent duplicate event registrations.
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('demo button pressed', onDemoButtonPress);
    };
  }, []);

  return (
    <div id="game">
      <Timer/>
      <main>
        <GameBoard />
        <Sidebar />
      </main>
    </div>
  );
};

export default GameContainer;
