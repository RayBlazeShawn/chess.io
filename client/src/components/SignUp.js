import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        // Basic validation
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        // Send a POST request to the server
        fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Error: " + response.statusText);
                }
            })
            .then(data => {
                console.log('Signup successful');
                // Redirect to Home page
                navigate('/home');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <br/>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <br/>
            <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </label>
            <br/>
            <input type="submit" value="Sign Up" />
        </form>
    );
}

export default SignUp;
