import React from 'react';

const SocketTester = ({ isConnected }) => {
  return (
    <div>
      <h2>Socket.io test component</h2>
      <p>Connected: {isConnected}</p>
    </div>
  );
};

export default SocketTester;
