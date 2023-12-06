import React from 'react';
import { socket } from '../socket';

const SocketTester = ({ isConnected, demoButtonPresses }) => {
  const handleButtonClick = () => {
    socket.emit('demo button pressed');
  };

  return (
    <div>
      <h2>Socket.io test component</h2>
      <p>Connected: {isConnected}</p>
      <button onClick={handleButtonClick}>Tell The World I Was Here</button>
      <p>Presses: {demoButtonPresses}</p>
    </div>
  );
};

export default SocketTester;
