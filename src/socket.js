// src/socket.js
let io;

module.exports = {
    init: (httpServer) => {
        // Initialize a new socket.io instance
        io = require('socket.io')(httpServer);
        return io;
    },
    getIO: () => {
        // Function to get the current socket.io instance
        if (!io) {
            throw new Error('Socket.io not initialized!');
        }
        return io;
    },
    broadcastMove: (moveData, roomId) => {
        // Function to broadcast a move to all clients in a room
        io.to(roomId).emit('gameUpdate', moveData);
    },
};
