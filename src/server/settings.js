import axios from 'axios';
import { API_URl } from './api-url';

const instance = axios.create({
    baseURL: API_URl,
    headers: {
        "Content-Type":"application/json"
    }
})

export default instance;