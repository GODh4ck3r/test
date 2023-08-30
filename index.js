// Import required modules
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import {resolve} from 'path'

// Create an Express app
const app = express();
const server = http.createServer(app);

// Create a Socket.io instance
const io = new Server(server);

// Set up a route for serving the HTML file
app.get('/', (req, res) => {
  res.sendFile(resolve('./index.html'));
});

// Socket.io logic
io.on('connection', (socket) => {
    
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 4444;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
