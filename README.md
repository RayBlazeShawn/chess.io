# chess.io
# Real-time Multiplayer Chess

A real-time multiplayer chess game built with Node.js, Express.js, MongoDB, Socket.io, and React.js (to be added). This game allows users to play chess with friends in real-time.

## Features

- User Authentication: Sign Up, Log In.
- Multiplayer Gameplay: Create a game room, share link to invite a friend.
- Real-time Updates: Make moves in real-time.
- (Upcoming) Interactive UI: A user-friendly, intuitive interface to play the game.

## Project Structure

- `/models` contains schema definitions for our database models.
- `/controllers` contains the logic to handle routes.
- `/routes` contains definitions for route handlers.
- `server.js` sets up the server, database connection, and socket.io

## Setup Instructions

To run this project locally:

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`
4. Visit `localhost:3000` in your browser

(Note: MongoDB must be set up locally and the connection string must be correctly configured in `server.js`)


