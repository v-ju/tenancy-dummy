import axios from "axios";
import api from "../axios.js";
import { useUserStore } from "./globalState.js";

export const login = async(data) => {
    
    const response = await api.post('/user/login',data);
    const token = response.data.token;
    localStorage.setItem('token',token);

    return response
}

export const logout = async(navigate)=>{
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    useUserStore.persist.clearStorage();
    useUserStore.getState().clearUser();
    localStorage.removeItem('auth');
    
    navigate('/');
}

export const color = (colors)=>{
  let i = Math.floor(Math.random() * colors.length)
  return colors[i];
}