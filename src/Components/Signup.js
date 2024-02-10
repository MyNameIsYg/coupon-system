import { useState } from 'react';
import urls from './BaseUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/action/registerAction';

export default function Signup(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => {

        const response = await axios.post(`${urls.BASE_URL}/signup`, 
        {
            name: name,
            email: email,
            password: password
        })
        if (response.status === 200) {
            dispatch(signup(response.data));
            navigate('/home');
        } else {
            setMsg("email or password incorrect, please try again");
        }
    }

    return(
        <div>
            Signup
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Signup</button>
            <button onClick={() => navigate('/login')}>have an account? Login</button>
            <p>{msg}</p>
            
        </div>
    )
};