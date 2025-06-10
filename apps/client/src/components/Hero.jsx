import { Element } from 'react-scroll'
const Hero = () => {
  return (
    <Element name='Home'>
      <div className='lg:h-fit max-w-[2000px] m-auto'>  
        <section>
          <div className=" -z-1 flex items-center justify-center mt-20 mx-10 py-40 md:my-25 md:py-35 md:mx-40 lg:py-35 lg:mx-55 xl:mt-25 xl:mx-50 xl:py-45 xl:px-0">
            <div className="relative w-full -z-10 max-w-2xl flex items-center justify-center">
              <div className="absolute xl:-top-20 xl:left-20 xl:w-72 xl:h-72  md:w-50 md:h-50 md:left-40 w-45 h-45 left-8 rounded-full bg-p1 mix-blend-multiply filter blur-xl animate-gradient-blob opacity-50 "></div>
              <div className="absolute xl:-top-20 xl:right-20 xl:w-72 xl:h-72  md:w-50 md:h-50 md:right-40 w-45 h-45 right-8 rounded-full bg-p2 mix-blend-multiply filter blur-xl animate-gradient-blob [animation-delay:2s] opacity-50 "></div>
              <div className="absolute xl:-bottom-40 xl:w-72 xl:h-72 md:w-50 md:h-50 md:-bottom-23 w-45 h-45 -bottom-13 rounded-full bg-p3 mix-blend-multiply filter blur-xl animate-gradient-blob [animation-delay:6s] opacity-50 "></div>
              <div className='flex w-xl items-center justify-center'>
                  <span className='px-7 max-w-xl xl:text-5xl xl:leading-13 lg:text-4xl lg:leading-10 md:text-[34px] md:leading-8 text-3xl leading-7 font-bold tracking-tight animate-fade-in'>
                    Managing <span className='text-[#f72585]'>Tenancies</span> <br/>Made Simple And Efficient!
                  </span>
              </div>
            </div>
          </div>
        </section>
      </div>  
    </Element>
  )
}

export default Hero
