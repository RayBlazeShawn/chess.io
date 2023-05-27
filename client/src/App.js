import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import GameRoomList from './components/GameRoomList';
import GameRoom from './components/GameRoom';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/gamerooms" element={<GameRoomList />} />
                <Route path="/gameroom/:id" element={<GameRoom />} />
            </Routes>
        </Router>
    );
}

export default App;
