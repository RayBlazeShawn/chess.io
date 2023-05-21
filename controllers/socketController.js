module.exports = (io, socket) => {
    socket.on('join room', (roomId) => {
        socket.join(roomId);
    });

    socket.on('leave room', (roomId) => {
        socket.leave(roomId);
    });

    socket.on('make move', (roomId, move) => {
        socket.to(roomId).emit('move made', move);
    });

    socket.on('send chat message', (roomId, message) => {
        socket.to(roomId).emit('chat message', message);
    });
};
