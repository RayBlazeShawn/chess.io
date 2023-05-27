import React from 'react';
import { Link } from 'react-router-dom';

function GameRoomList() {
    const rooms = ['Room 1', 'Room 2', 'Room 3'];  // This would usually come from  server but using as dummy data temporary

    return (
        <div>
            <h1>Game Rooms</h1>
            <ul>
                {rooms.map((room, index) => (
                    <li key={index}>
                        <Link to={`/game/${room}`}>{room}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GameRoomList;
