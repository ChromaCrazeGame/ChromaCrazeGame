import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import GameBoard from './GameBoard';

// gameboard path currently giving 404, looking into client side vs server side rendering

import { io } from 'socket.io-client';
const socket = io();

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/gameboard' element={<GameBoard/>}/> 
      </Routes>
    </div>
  );
};

export default App;
