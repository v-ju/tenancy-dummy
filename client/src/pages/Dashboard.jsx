import React, { useEffect, useState } from 'react'
import Button from '../components/Button.jsx'
import { Outlet, useNavigate } from 'react-router-dom'
import { color, fetchUser, logout } from '../../controllers/user.js';
const colors = ['bg-pink-500', 'bg-pink-600', 'bg-pink-800', 'bg-pink-700'];
const bgcolor = color(colors);


const Dashboard = () => {
  const [user,setUser] = useState('')
  const [sidebar,setSidebar] = useState(true)
  const navigate = useNavigate();
  const initial = user?.firstName?.charAt(0).toUpperCase()
  
  useEffect(()=>{
    const getUser = async() => await fetchUser(setUser, navigate);
    getUser();
  },[])

  return <>
    <div className='flex h-screen w-full'>
      <div className={`border-r h-full relative flex flex-col justify-between border-gray-200 group max-md:hidden ${sidebar ? 'md:w-50': 'md:w-15 '}`}>
        <div >
          <div className='flex my-2 px-2 justify-center items-center'>
            <div className={`flex border-transparent mr-1 justify-center items-center rounded-full ${bgcolor} w-6 h-6 ${sidebar ? '' : 'hidden'}`}><span className='text-[10px] text-white'>{initial}</span></div>
            <span className={`flex-1 text-md font-medium  ${sidebar ? '' : 'hidden'}`}>{user.firstName} </span>
            <button onClick={()=>setSidebar(prevState => !prevState)} className='border-transparent rounded hover:transition hover:duration-200 hover:shadow-md hover:shadow-gray-500 cursor-pointer'>
              <img src={sidebar ? '/arrow.svg' : '/arrow-right.svg'} width={25} height={25}/>   
            </button>
          </div>
          <div className={`text-sm px-2 pt-4 pb-2 hover:text-p1 cursor-pointer font-medium ${sidebar ? '' : 'hidden'}`}>Home</div>
          <div className={`text-sm px-2 pt-4 pb-2 hover:text-p1 cursor-pointer font-medium ${sidebar ? '' : 'hidden'}`}>My Workspaces</div>
          
          <div className={`text-sm px-2 pt-4 pb-2 hover:text-p1 cursor-pointer font-medium ${sidebar ? '' : 'hidden'}`}>Settings</div>
        </div>
        {sidebar && 
          <div className={`px-2 py-3 mt-auto`}>
          <Button  title='Logout' fn={logout} para={navigate}/>
        </div>}
      </div>
      <div className={`flex-1`}> 
        <div className='flex flex-col w-full h-screen'>
          <div className='top-0 p-2 border-b border-gray-200'>
            <header className="flex justify-between"> 
              <img className='max-h-16 ' src='/biglogo.svg' width={150} height={150}/>
              <img className='mx-2 my-3 p-1 cursor-pointer hover:transition hover:duration-200 hover:shadow-md hover:shadow-gray-500 border-transparent rounded' src='/settings.svg' width={27} height={20}/>
            </header>
          </div>
          <Outlet/>
        </div>   
      </div>
    </div>
  </>
}

export default Dashboard
