import React, { useState } from 'react';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(username, password, confirmPassword);
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
