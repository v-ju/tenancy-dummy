import React from 'react'

const Button = ({title,goTo=()=>{} ,path='./login'}) => {
  return (
    <button onClick={() => goTo(path)} className="xl:w-25 xl:h-10 lg:w-20 lg:h-9 md:w-20 md:h-9 max-md:m-2 w-20 h-9 nav-btn cursor-pointer">
        <span className='nav-span'> {title} </span>
    </button>
  )
}

export default Button
