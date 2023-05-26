// Import necessary modules and files
const express = require('express'); // Express library for handling routes
const router = express.Router(); // Router object
const gameController = require('../controllers/gameController'); // Controller logic for game

// Route for making a move, use the makeMove controller logic
router.post('/makeMove', gameController.makeMove);

// Export the router so that it can be used in other files
module.exports = router;
