import React, { useState } from 'react';
import axios from 'axios';

function GameRoom() {
    const [roomId, setRoomId] = useState('');

    const createRoom = async () => {
        // Create a new game room by making a POST request to /api/room/create.
        const res = await axios.post('/api/room/create');
        setRoomId(res.data._id);
    };

    const joinRoom = async () => {
        // Join a game room by making a POST request to /api/room/join/:id.
        const res = await axios.post(`/api/room/join/${roomId}`);
        alert(res.data.players.length === 2 ? 'Joined room successfully' : 'Failed to join room');
    };

    return (
        <div>
            <button onClick={createRoom}>Create Room</button>
            <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Room ID" />
            <button onClick={joinRoom}>Join Room</button>
        </div>
    );
}

export default GameRoom;
