// Import necessary modules and files
const express = require('express'); // Express library for handling routes
const router = express.Router(); // Router object
const authController = require('../controllers/authController'); // Controller logic for authentication

// Route for user signup, use the signup controller logic
router.post('/signup', authController.signup);

// Route for user login, use the login controller logic
router.post('/login', authController.login);

// Export the router so that it can be used in other files
module.exports = router;
