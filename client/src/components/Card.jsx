import React from 'react'

const Card = ({title,description}) => {
  return (
    <div className='bg-s1 md:w-80 md:h-80 lg:w-100 lg:h-90 lg:px-5 lg:text-sm border-transparent my-10 md:my-8 mx-2 lg:mx-0 py-10 px-3 font-medium text-xs rounded-4xl scroll-appear hover:cursor-pointer hover:text-p1'>
      <div className='text-lg font-bold'>{title}</div>
      <br/>
    </div>
  )
}

export default Card
