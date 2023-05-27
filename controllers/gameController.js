// controllers/gameController.js
const chess = require('chess.js');
const Game = require('../models/Game');
const socket = require('../src/socket');

exports.startGame = async (req, res) => {
    // Add your logic for starting the game here

    // for example
    console.log('Welcome to Chess Online! May the best player win.');
};

exports.makeMove = async (req, res) => {
    const { gameId, move } = req.body;

    // Fetch the current game state from the database
    const game = await Game.findById(gameId);

    // Initialize a chess.js game with the current game state
    const chessGame = new chess.Chess(game.boardState);

    // Validate the move using chess.js
    const moveResult = chessGame.move(move);

    if (moveResult) {
        // If the move is valid, update the game state in the database
        game.boardState = chessGame.fen();
        game.moveHistory.push(move);
        game.currentTurn = chessGame.turn() === 'w' ? game.players[0] : game.players[1];
        await game.save();

        // Emit game update event to all connected sockets in the game room
        const io = socket.getIO();
        io.to(gameId).emit('gameUpdate', game);

        res.send(game);
    } else {
        // If the move is not valid, return an error
        res.status(400).send('Invalid move');
    }
};
