import React from 'react';
import ChessBoard from './components/ChessBoard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import GameRoom from './components/GameRoom';

function App() {
    // Placeholder for rendering components, modify as per the application logic
    return (
        <div>
            <Login />
            <SignUp />
            <ChessBoard />
            <GameRoom />
        </div>
    );
}

export default App;
