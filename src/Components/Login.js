import BASE_URL from './BaseUrl';
import axios from 'axios';

export default async function Login(email, password) {
    try {
        const response = await axios.post(`${BASE_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};