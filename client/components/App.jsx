import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { socket } from '../socket';

import SocketTester from './SocketTester';
import LoginPage from './LoginPage';
import GameContainer from '../containers/GameContainer';

// gameboard path currently giving 404, looking into client side vs server side rendering

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      // event listeners registered in the setup function
      // above (via calls to `.on()`) must be removed in this
      // cleanup callback to prevent duplicate event registrations
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/gamepage' element={<GameContainer/>}/> 
      </Routes>
      <SocketTester
        isConnected={isConnected ? 'true' : 'false'}
      />
    </div>
  );
};

export default App;
