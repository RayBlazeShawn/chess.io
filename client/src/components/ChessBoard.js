// client/src/components/ChessBoard.js

import React, { useEffect, useState, useRef } from 'react'; // Import necessary dependencies from react and socket.io-client
import io from 'socket.io-client';
import Chessboard from 'chessboardjsx'; // chessboardjsx is used for rendering the chess board on the UI
const Chess = require('chess.js');

function ChessBoard() {
    const [socket, setSocket] = useState(null); // socket state to maintain socket connection
    const [fen, setFen] = useState('start'); // fen (Forsyth-Edwards Notation) state to maintain current chess board state
    const game = useRef(new Chess()); // chess game instance for handling chess rules and game logic

    const handleMove = (move) => {
        let moveObj = game.current.move({
            from: move.sourceSquare, // The square the piece is moving from
            to: move.targetSquare, // The square the piece is moving to
            promotion: 'q' // if a pawn is promoted, it becomes a queen
        });

        if (moveObj === null) return; // illegal move

        // If the move is legal, emit a move event to the server with the move and the current board state
        socket.emit('move', { move: moveObj, board: game.current.fen() });
    }

    useEffect(() => {
        // Initialize socket connection when component mounts
        const socketIo = io();

        // Listen for game updates
        socketIo.on('gameUpdate', (data) => {
            // Load the current board state and set the fen state
            game.current.load(data.board);
            setFen(game.current.fen());
        });

        setSocket(socketIo); // Set socket state to the socket connection

        // Cleanup when the component unmounts
        return () => {
            socketIo.disconnect(); // disconnect the socket connection
        };
    }, []);

    return (
        // Render the chess board with the current position. onDrop handles move events.
        <Chessboard
            position={fen}
            onDrop={(move) =>
                handleMove(move)
            }
        />
    );
}

export default ChessBoard;
