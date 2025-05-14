import axios from "axios";
import api from "../axios.js";


export const login = async(data) => {
    
    const response = await axios.post('/api/v1/user/login',data);
    const token = response.data.token;
    localStorage.setItem('token',token);
    return response
}

export const logout = async(navigate)=>{
    const token = localStorage.getItem('token')
    localStorage.removeItem('token');
    navigate('/');
}

export const fetchUser = async (setUser, navigate) => {
    try {
      const res = await api.get('/user/dashboard');
      setUser(res.data.user); // assuming backend sends user object
    } catch (err) {
      console.error(err);

      if (err.message === 'Token expired') {
        // already redirected in interceptor
        return;
      }

      if (err.response?.status === 401) {
        // optional fallback
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  };