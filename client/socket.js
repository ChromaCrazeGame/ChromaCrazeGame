// here we import the client-side socket.io libraries...
import { io } from 'socket.io-client';

// ...and export an initialized socket connection to the
// server.
export const socket = io();

// Any other frontend module that needs to
// send/recieve socket traffic can import this module
// to get started.
