import axios from "axios";
import { isTokenExpired } from "./controllers/token.js";


const api = axios.create({baseURL: '/api/v1'});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token && !isTokenExpired(token)){
            config.headers.Authorization = `Bearer ${token}`
        } else if (token && isTokenExpired(token)){
            localStorage.removeItem('token');
            window.location.href='/';
            return Promise.reject({ expired: true, message: 'Token expired' });
        }
        return config;
    }


)

export default api;