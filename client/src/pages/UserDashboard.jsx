import React from 'react'
import SidebarDashboard from './SidebarDashboard'
import HeaderDashboard from './HeaderDashboard'

const UserDashboard = () => {
  return (
    <div className='flex h-screen w-full'>
      <SidebarDashboard/>
      <div className={`flex-1`}> 
        <HeaderDashboard/>
      </div>
    </div>
  )
}

export default UserDashboard
