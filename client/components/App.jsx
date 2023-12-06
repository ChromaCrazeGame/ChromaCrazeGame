import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import GameContainer from '../containers/GameContainer';

const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/gamepage' element={<GameContainer/>}/> 
      </Routes>
      {/* <SocketTester
        isConnected={isConnected ? 'true' : 'false'}
        demoButtonPresses={gameState.demoButtonPresses}
      /> */}
    </div>
  );
};

export default App;
