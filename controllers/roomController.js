const Game = require('../models/Game');

exports.createRoom = async (req, res) => {
    // Creating a new game room involves creating a new Game instance.
    const game = new Game({
        players: [req.user.username], // The player who creates the room is automatically added.
        currentTurn: req.user.username, // The game creator gets the first turn.
        boardState: 'start', // Start with the initial board state.
    });

    try {
        const savedGame = await game.save();
        res.send(savedGame);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.joinRoom = async (req, res) => {
    // To join a room, a player is added to the game's player array.
    const game = await Game.findById(req.params.id);

    if (game.players.length < 2) {
        game.players.push(req.user.username);
        await game.save();
        res.send(game);
    } else {
        res.status(400).send('Room is full');
    }
};
