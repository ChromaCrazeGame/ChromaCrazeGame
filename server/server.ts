import path from 'path';
import { createServer } from 'node:http';
import express, { Response, Request } from 'express';
import { Server as SocketIOServer } from 'socket.io';

const PORT = 3000;

const app = express();
const server = createServer(app);
const io = new SocketIOServer(server);

app.use(express.json());
app.use(express.urlencoded());

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// socket.io event handling
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.emit('connected', { message: 'a new client connected' });
  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

app.use((req, res) => res.status(404).send('Page Not Found'));

app.use((err: Error, req: Request, res: Response) => {
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
