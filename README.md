# chess.io (Real-time Multiplayer Chess)

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
- `/src/client` Contains React.js frontend components and logic.

## Setup Instructions

To run this project locally:

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`
4. Visit `localhost:3000` in your browser

(Note: MongoDB must be set up locally and the connection string must be correctly configured in `server.js`)

## Contributing

Contributions are welcome! If you'd like to contribute to the project, feel free to submit a pull request with your proposed changes. We appreciate any improvements, bug fixes, or new features you bring to the table. Let's build this chess game together!

## Changelog
### Added
- Created four React components for the frontend application: ChessBoard.js, GameRoom.js, Login.js, and SignUp.js. These are set up to interact with server-side APIs and respond to real-time updates.
- Introduced concurrently in the project setup to enable simultaneous running of backend and frontend during development.
- Corrected duplicate declaration error in server.js, ensuring the successful start of the server.
- Implemented `createRoom` and `joinRoom` functions in `controllers/roomController.js` for creating and joining game rooms
- Introduced new routes for room creation and joining in `routes/room.js`
- Room routes import and use statement in `server.js`
- Logic in `GameRoom` component to handle room creation and joining
- Real-time updates when a move is made using Socket.IO. This includes:
    - Server-side event emission in `gameController.js`
    - Client-side event listener in `ChessBoard` component

### Changed
- Updated `GameRoom` component in `src/client/components/GameRoom.js` to include room creation and joining functionality
- Added a root endpoint that returns a welcome message.
- Enhanced MongoDB Atlas connection setup to use a connection string from environment variables.
- Integrated `dotenv` to manage environment variables.

