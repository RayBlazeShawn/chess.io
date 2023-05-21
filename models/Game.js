// Import Mongoose library to create the database schema
const mongoose = require('mongoose');

// Create a Schema object to structure our documents in the database
const Schema = mongoose.Schema;

// Define the schema for Game collection
const GameSchema = new Schema({
    players: [{
        type: String, // Players is an array of strings, each representing a player's username
        required: true // The players field is required
    }],
    currentTurn: {
        type: String, // The datatype of currentTurn is string, representing whose turn it is
        required: true // The currentTurn field is required
    },
    boardState: {
        type: Array, // BoardState is an array that will store the current state of the chess board
        required: true // The boardState field is required
    },
    moveHistory: [{
        type: String // moveHistory is an array of strings, each representing a move made during the game
    }]
});

// Export the Game model, so it can be used in other files
module.exports = mongoose.model('Game', GameSchema);
