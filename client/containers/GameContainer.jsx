import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

import { socket } from '../socket';

import Timer from '../components/Timer';
import GameBoard from '../components/GameBoard';
import SocketTester from '../components/SocketTester';

const GameContainer = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [gameState, setGameState] = useState({});
  const dispatch = useDispatch();

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

    const onUpdateSquare = ({ row, column, color }) => {
      console.log('got new square data from server');
      dispatch(actions.updateColorActionCreator(row, column, color));
    };

    // 2) next, we set up the actual event listeners for
    //    each socket event we want to handle, and assign
    //    the functions we declared above.
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('init state', onInitGameState);
    socket.on('demo button pressed', onDemoButtonPress);
    socket.on('update square', onUpdateSquare);

    // 3) finally, we return a cleanup function.
    return () => {
      // event listeners registered in the setup function
      // above (via calls to `.on()`) must be removed in this
      // cleanup callback to prevent duplicate event registrations.
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('demo button pressed', onDemoButtonPress);
      socket.off('update square', onUpdateSquare);
    };
  }, [dispatch]);

  return (
    <div>
      <Timer/>
      <GameBoard />
    </div>
  );
};

export default GameContainer;
