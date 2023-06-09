import React, { useState } from 'react';
import axios from 'axios';

function GameRoom() {
    const [roomId, setRoomId] = useState('');
    const [error, setError] = useState(null);

    const createRoom = async () => {
        try {
            // Create a new game room by making a POST request to /api/room/create.
            const res = await axios.post('/api/room/create');
            setRoomId(res.data._id);
        } catch (err) {
            // Handle error.
            setError("Unable to create room");
        }
    };

    const joinRoom = async () => {
        try {
            // Join a game room by making a POST request to /api/room/join/:id.
            const res = await axios.post(`/api/room/join/${roomId}`);
            if (res.data.players.length === 2) {
                alert('Joined room successfully');
            } else {
                alert('Failed to join room');
            }
        } catch (err) {
            // Handle error.
            setError("Unable to join room");
        }
    };

    return (
        <div>
            {error && <div>{error}</div>}
            <button onClick={createRoom}>Create Room</button>
            <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Room ID" />
            <button onClick={joinRoom}>Join Room</button>
        </div>
    );
}

export default GameRoom;
