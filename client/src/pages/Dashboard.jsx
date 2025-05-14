import React, { useEffect, useState } from 'react'
import Button from '../components/Button.jsx'
import { useNavigate } from 'react-router-dom'
import { fetchUser, logout } from '../../controllers/user.js';

const Dashboard = () => {
  const [user,setUser] = useState('')

  const navigate = useNavigate();

  useEffect(()=>{
    const getUser = async() => await fetchUser(setUser, navigate);
    getUser();
  },[])

  return <>
    <div className='min-h-screen flex justify-center items-center'>
      <span>{user.firstName}</span>
      <Button title='Logout' fn={logout} para={navigate}/>
    </div>
    
  </>
}

export default Dashboard
