import api from "../axios.js";
import { useUserStore} from "./globalState.js";

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

export const fetchListings = async(role,setListings,listingChecker) => {
    try {
      const response = await (api.get(`/${role}/listings`));
      const {listings , hasListings} = response.data
      setListings(listings);
      listingChecker(hasListings);
    }catch(err){
      return ('Error fetching listings', err)}
}

export const getGreetingMsg = () => {
  const hours = new Date().getHours();

  if (hours < 12) return "Good Morning, ";
  if (hours < 18) return "Good Afternoon, ";
  return "Good Evening, ";

}

export const color = (colors)=>{
  let i = Math.floor(Math.random() * colors.length)
  return colors[i];
}