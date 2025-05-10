import React from 'react'
import { aboutUsData } from '../data'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name='About Us'>
        <div className='h-vh max-w-[2000px] md:mt-5'>
            <h1 className='text-center font-extrabold text-xl md:text-2xl xl:text-3xl'>About Us</h1>
            <div className='md:flex '>
                <div className='border-transparent md:flex-1 bg-p5 text-white  rounded-2xl mx-4 my-8 p-4 md:mr-2 md:ml-8 lg:ml-20 xl:ml-50 md:w-[40%]'>
                    <div className='flex justify-evenly md:justify-around pb-2'>
                        <p className='flex-1 text-xl font-bold p-1'>{aboutUsData[0].title}</p>
                        <img src={aboutUsData[0].img} alt="target" width={50} height={50} />
                    </div>
                
                    <ul className='text-[15px] font-medium block leading-8'>
                        
                    {aboutUsData[0].description.map((data,index) => (
                        <li key={index}>{data}</li>
                    ))}
                    
                    </ul>
                </div>
                <div className='md:w-[60%]'>
                    <div className='border-transparent bg-p5 text-white rounded-2xl mx-4 my-8 p-4 md:ml-2 md:mr-8 lg:mr-20 xl:mr-50'>
                        <div className='flex justify-evenly pb-2'>
                            <p className='flex-1 text-xl font-bold'>{aboutUsData[1].title}</p>
                            <img src={aboutUsData[1].img} alt="target" width={50} height={50} />
                        </div>
                        
                        <span className='text-[15px] font-medium'>{aboutUsData[1].description}</span>
                        
                    </div>
                    <div className='border-transparent bg-p5 text-white rounded-2xl mx-4 my-8 p-4 md:ml-2 md:mr-8 lg:mr-20 xl:mr-50'>
                    
                        <div className='flex justify-evenly pb-2'>
                            <p className='flex-1 text-xl font-bold'>{aboutUsData[2].title}</p>
                            <img src={aboutUsData[2].img} alt="target" width={50} height={50} />
                        </div>
                        
                        <span className='text-[15px] '>{aboutUsData[2].description}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Element>
    
  )
}

export default About
