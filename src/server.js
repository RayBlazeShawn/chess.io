// Import necessary modules and files
const express = require('express'); // Express library for handling HTTP requests
const mongoose = require('mongoose'); // Mongoose library for MongoDB interactions
const authRoutes = require('../routes/auth'); // Routes for authentication
const passport = require('passport'); // Authentication library
const session = require('express-session'); // Express session for handling user sessions
const cors = require('cors'); // CORS (Cross-Origin Resource Sharing) for handling resources from different origins

// Initialize Express app
const app = express();

// Database connection
mongoose.connect('mongodb://localhost:27017/chess-game', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));

// Middleware
app.use(express.json()); // For parsing JSON data in request bodies
app.use(cors()); // For handling CORS

// Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use the auth routes for paths starting with /api/auth
app.use('/api/auth', authRoutes);

// Setup http server to attach socket.io
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Server listening on specified port
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
