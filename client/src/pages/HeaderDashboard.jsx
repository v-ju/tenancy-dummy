import React from 'react'
import { Outlet } from 'react-router-dom'


const HeaderDashboard = () => {
    
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className='top-0 p-2 border-b border-gray-200'>
        <header className="flex justify-between"> 
            <img className='max-h-16 ' src='/biglogo.svg' width={150} height={150}/>
            <img className='mx-2 my-3 p-1 cursor-pointer hover:transition hover:duration-200 hover:shadow-md hover:shadow-gray-500 border-transparent rounded' src='/settings.svg' width={27} height={20}/>
        </header>
        </div>
        <Outlet/>
    </div>   
     
  )
}

export default HeaderDashboard
