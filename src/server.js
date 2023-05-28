// Import necessary modules and files
require('dotenv').config();
const express = require('express'); // Express library for handling HTTP requests
const mongoose = require('mongoose'); // Mongoose library for MongoDB interactions
const authRoutes = require('../routes/auth'); // Routes for authentication
const gameRoutes = require('../routes/game'); // Game routes
const roomRoutes = require('../routes/room'); // Room routes
const path = require('path'); // built-in Node.js module for handling file paths

const passport = require('passport'); // Authentication library
const session = require('express-session'); // Express session for handling user sessions
const cors = require('cors'); // CORS (Cross-Origin Resource Sharing) for handling resources from different origins
const socket = require('./socket');

// Initialize Express app
const app = express();

// Setup http server to attach socket.io
const http = require('http').createServer(app);
const io = socket.init(http);

// Database connection
mongoose.connect(process.env.MONGODB_URL, {
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
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('move', (data) => {
        // TODO: Implement a way to know which room the socket is in
        // roomId should be retrieved from the current socket's room
        const roomId = '';

        // Save the move to database here

        // Broadcast the move to the other player
        socket.broadcastMove(data, roomId);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.get('/', (req, res) => {
    res.send('Welcome to Chess Online! May the best player win.');
});


// Use the auth routes for paths starting with /api/auth
app.use('/api/auth', authRoutes);

app.use('/api/game', gameRoutes); // Use the game routes for paths starting with /api/game

app.use('/api/room', roomRoutes); // Use the room routes for paths starting with /api/room

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')));

// The "catchall" handler: for any request that doesn't
// match one already above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'build', 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Server listening on specified port
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
