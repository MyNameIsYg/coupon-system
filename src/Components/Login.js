// import BASE_URL from './BaseUrl';
// import axios from 'axios';

// export default async function Login(email, password) {
//     try {
//         const response = await axios.post(`${BASE_URL}/login`, { email, password });
//         return response.data;
//     } catch (error) {
//         throw error.response.data.message;
//     }
// };

// components/LoginPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        // Implement login logic here, possibly making an API call
        // If successful, navigate to Home page
        history.push('/home');
    };

    const handleSignup = () => {
        // Implement signup logic here, possibly making an API call
        // If successful, navigate to Home page
        history.push('/home');
    };

    return (
        <div>
            <h1>Login/Sign-up Page</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default LoginPage;
