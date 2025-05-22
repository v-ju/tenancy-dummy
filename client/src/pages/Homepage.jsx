import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = ({imgpath1, imgpath2, title1, title2,nav, btntext}) => {

  const navigate = useNavigate();

  return (
    <div className='flex-1 flex '>
        <div className='flex flex-col w-full justify-center items-center'>
            <img className='pb-2' src={imgpath1} width={200} height={200} />
            <div className='text-lg font-bold pb-10 text-center  leading-8'>
            {title1}<br/>
            <span className='text-xl text-center font-normal tracking-wider'>{title2}</span>
            </div>
            <button className='flex bg-[#1663C8] text-white border rounded-lg px-3 py-2 cursor-pointer hover:bg-[#0070D7]' onClick={() => navigate(nav)} >
              <img src={imgpath2}  className={`mr-1 ${imgpath2 ? 'w-5 h-5' : '' }`} />{btntext}
            </button>
        </div>     
    </div>
  )
}

export default Homepage
