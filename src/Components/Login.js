import { useNavigate } from 'react-router-dom';
import urls from './BaseUrl';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action/registerAction';
import { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {


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
        } catch (error) {
            console.error(error);
            setMsg("An error occurred. Please try again later.");

        }
    }
    return (
        <div>
            <h1>Login</h1>
            <InputGroup>
                <InputGroup.Text id="basic-addon1"
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputGroup.Password id="basic-addon1"
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputGroup>
            <Button
                onClick={handleSubmit}
            >Login
            </Button>
            <Button
                onClick={() => navigate('/signup')}>
                Not have an account? Signup
            </Button>
            <p>{msg}</p>
        </div>
    )
};