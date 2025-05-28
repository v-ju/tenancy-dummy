import React from 'react';
import MainDashboard from './MainDashboard.jsx';
import SidebarDashboard from './SidebarDashboard.jsx';


const AdminDashboard = () => {
  
  return <>
    <div className='flex h-screen w-full'>
      <SidebarDashboard/>
      <div className={`flex-1`}> 
        <MainDashboard/>
      </div>
    </div>
    
  </>
}

export default AdminDashboard
