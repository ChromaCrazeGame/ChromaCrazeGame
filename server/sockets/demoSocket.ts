import { Server, Socket } from 'socket.io';
import GameState from '../GameState';

const demoSocket = (io: Server, state: GameState) => {
  io.on('connection', (socket: Socket) => {
    // once a client is connected, we have the server start listening
    // for 'demo button pressed' events.
    socket.on('demo button pressed', () => {
      // when one of those events comes in -- from any client -- we
      // update the number of times that event has happened...
      state.demoButtonPresses += 1;
      // ...and "emit" the updated value to ALL clients, including
      // the one that sent it in the first place. This is a nice
      // way of only updating the original sender's UI once we know
      // the server has processed the event, which can keep all
      // clients in sync (if that's important to your situation).
      io.emit('demo button pressed', { presses: state.demoButtonPresses });
    });
  });
};

export default demoSocket;
