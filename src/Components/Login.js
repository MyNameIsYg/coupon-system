import { useNavigate } from 'react-router-dom';
import urls from './BaseUrl';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action/registerAction';
import { useState } from 'react';

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const response = await axios.post(`${urls.BASE_URL}/login`, 
        {
            email: email,
            password: password
        });

        if (response.status === 200) {
            dispatch(login(response.data));
            navigate('/home');
        } else {
            setMsg("email or password incorrect, please try again");
        }
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
            <button onClick={() => navigate('/signup')}>Not have an account? Signup</button>
            <p>{msg}</p>
        </div>
    )
};