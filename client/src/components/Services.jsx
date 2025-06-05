import Card from './Card'
import { servicesData } from '../data'
import { Element } from 'react-scroll'

const Services = () => {
  return (
      <article>
        <Element name='Services'>
          <div className='h-vh max-w-[2000px] flex justify-center'>
            <div className='p-2 mt-11 w-full text-center'>
              <span className='font-extrabold text-xl md:text-2xl xl:text-3xl hover:text-p1 hover:cursor-pointer'>Our Services</span> 
              <div className='relative z-1 md:flex md:flex-wrap md:justify-evenly lg:justify-evenly '>
                {servicesData.map((data) => <Card key={data.id} title={data.title} description={data.description}/> )}
              </div>
            </div>
          </div>
        </Element>
      </article>
    
  )
}

export default Services
