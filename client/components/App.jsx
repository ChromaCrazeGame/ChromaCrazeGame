import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { socket } from '../socket';

import SocketTester from './SocketTester';
import LoginPage from './LoginPage';
import GameBoard from './GameBoard';

// gameboard path currently giving 404, looking into client side vs server side rendering

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [gameState, setGameState] = useState({});

  useEffect(() => {
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

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('init state', onInitGameState);
    socket.on('demo button pressed', onDemoButtonPress);

    return () => {
      // event listeners registered in the setup function
      // above (via calls to `.on()`) must be removed in this
      // cleanup callback to prevent duplicate event registrations
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('demo button pressed', onDemoButtonPress);
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/gameboard' element={<GameBoard/>}/> 
      </Routes>
      <SocketTester
        isConnected={isConnected ? 'true' : 'false'}
        demoButtonPresses={gameState.demoButtonPresses}
      />
    </div>
  );
};

export default App;
