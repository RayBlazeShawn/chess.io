import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to Chess.io</h1>
            <p>Play chess with your friends in real-time!</p>
            <Link to="/login">Log In</Link>
            <br/>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
}

export default HomePage;
