import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate();


  return (
    <div className='flex-1 flex '>
        <div className='flex flex-col w-full justify-center items-center'>
            <img className='pb-2' src='house.jpg' width={200} height={200} />
            <div className='text-lg font-bold pb-10 text-center  leading-8'>
            No listings yet..<br/>
            <span className='text-xl text-center font-normal tracking-wider'>Let's Get Started !</span>
            </div>
            <button className='flex bg-[#0070d7] text-white border rounded-lg px-3 py-2 cursor-pointer ' onClick={() => navigate('/dashboard/listings')} >
            <img src='plus.svg' width={22} height={22} className='mr-1'/>Listing
            </button>
        </div>     
    </div>
  )
}

export default Homepage
