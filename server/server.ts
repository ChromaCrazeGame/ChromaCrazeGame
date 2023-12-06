import path from 'path';
import { createServer } from 'node:http';
import express, { Response, Request } from 'express';
import { Server as SocketIOServer, Socket } from 'socket.io';
import GameState from './GameState';

const PORT = 3000;
const gameState = new GameState();

const app = express();
const server = createServer(app);
const io = new SocketIOServer(server);


app.use(express.json());
app.use(express.urlencoded());

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req: Request, res: Response): void => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// socket.io event handling
// =========================================================================
//
// 'connection' is a built in event that fires when a client
// initiates a new websocket connection
io.on('connection', (socket: Socket): void => {
  console.log('A game client connected');
  
  // `.emit()` can be used server-side to broadcast something
  // to all connected clients, including the original sender
  // of the 'connection' event we're currently handling.
  //
  // if you want to leave the original sender out, you can
  // call `socket.broadcast.emit()`.
  socket.emit('init state', { state: gameState });
  
  // 'disconnect' is also a built-in event, which fires when a client
  // connection terminates
  socket.on('disconnect', (): void => {
    console.log('client disconnected');
  });
});

// this is how we can organize out socket-based event logic
// into their own files, much like express routers:
import demoSocket from './sockets/demoSocket';
demoSocket(io, gameState);

// =========================================================================


app.use((req, res): Response => res.status(404).send('Page Not Found'));

app.use((err: Error, req: Request, res: Response): Response => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


server.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;
