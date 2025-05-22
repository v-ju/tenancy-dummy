import React from 'react'
import { useSidebarStore, useUserStore } from '../../controllers/globalState.js'
import { color,logout } from '../../controllers/user.js';
import Button from '../components/Button.jsx';
import { useNavigate } from 'react-router-dom';

const colors = ['bg-pink-500', 'bg-pink-600', 'bg-pink-800', 'bg-pink-700'];
const bgcolor = color(colors);

const SidebarDashboard = () => {
    const user = useUserStore((state) => state.user)
    const initial = user?.firstName?.charAt(0).toUpperCase()
    const {sidebar, toggleSidebar} = useSidebarStore();
    const navigate = useNavigate();

  return (
    
    <div className={`border-r h-full relative flex flex-col justify-between border-gray-200 group max-md:hidden ${sidebar ? 'md:w-50': 'md:w-15 '}`}>
        <div >
            <div className='flex my-2 px-2 justify-center items-center'>
                <div className={`flex border-transparent mr-1 justify-center items-center rounded-full ${bgcolor} w-6 h-6 ${sidebar ? '' : 'hidden'}`}><span className='text-[10px] text-white'>{initial}</span></div>
                <span className={`flex-1 text-md font-medium  ${sidebar ? '' : 'hidden'}`}>{user?.firstName} </span>
                <button onClick={toggleSidebar} className='border-transparent rounded hover:transition hover:duration-200 hover:shadow-md hover:shadow-gray-500 cursor-pointer'>
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
      
)}

export default SidebarDashboard
