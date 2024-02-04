import BASE_URL from './BaseUrl';
import axios from 'axios';

export default async function Signup(email, password){
    try {
        const response = await axios.post(`${BASE_URL}/signup`, { email, password });
        return response.data;
    } catch (error) {
        return error.response.data.message;
    }
};