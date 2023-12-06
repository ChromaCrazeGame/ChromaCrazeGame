import { Server, Socket } from 'socket.io';
import GameState from '../GameState';

const squareSocket = (io: Server, state: GameState) => {
  io.on('connection', (socket: Socket) => {
    socket.on('square clicked', (data) => {
      console.log(data);
      state.gameBoard[data.row][data.column] = data.color;
      socket.broadcast.emit('update square', data);
    });
  });
};

export default squareSocket;

