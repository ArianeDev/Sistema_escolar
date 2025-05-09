import axios from 'axios';
import { ACCESS_TOKEN } from './token';

const apiUrl = 'http://127.0.0.1:8000/';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl
})

api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
},(error) => {
    return Promise.reject(error);
});

export default api;