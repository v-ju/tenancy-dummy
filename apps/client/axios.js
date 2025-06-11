import axios from "axios";
import { isTokenExpired } from "./controllers/token.js";
import NProgress from "nprogress";
import "nprogress/nprogress.css"

const api = axios.create({baseURL: import.meta.env.VITE_API_URL});

api.interceptors.request.use(
    (config) => {
        setTimeout(()=> NProgress.start(),300);
        const token = localStorage.getItem('token');
        if(token && !isTokenExpired(token)){
            config.headers.Authorization = `Bearer ${token}`
        } else if (token && isTokenExpired(token)){
            localStorage.removeItem('token');
            window.location.href='/';
            return Promise.reject({ expired: true, message: 'Token expired' });
        }
        return config;
    },(error) => {
        setTimeout(()=> NProgress.done(),300);
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
  (response) => {
    setTimeout(()=> NProgress.done(),300); // stop progress on successful response
    return response;
  },
  (error) => {
    setTimeout(()=> NProgress.done(),300); // stop progress on response error too
    return Promise.reject(error);
  }
);

export default api;