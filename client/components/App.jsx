import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import GameBoard from './GameBoard';

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