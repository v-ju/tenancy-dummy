import { Element } from 'react-scroll'
const Footer = () => {
  return (
    <Element name='Contact Us'>
      <div className='h-fit pt-10 flex justify-center'>
        <div>
          <p className='text-center text-lg pb-5 font-bold md:text-2xl xl:text-3xl'>Contact Information</p>
          <div className='mx-2 my-3 py-3 border-transparent justify-evenly rounded-2xl h-82 w-95 md:w-120 lg:w-160 xl:w-180 bg-s2'>
            <div className='flex px-4 py-4 text-md'> 
              <img src="twitter.svg"  />
              <span className='pl-2'>@TenancyPassport</span>
            </div>
            <div className='flex px-4 py-4 text-md'> 
              <img src="call.svg"  />
              <span className='pl-2'>40200401103</span>
            </div>
            <div className='flex px-4 py-4 text-md'> 
              <img src="msg.svg"  />
              <a target='blank' href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tenancypassport@gmail.com'  className='pl-2'>tenancypassport@gmail.com</a>
            </div>
            <div className='flex px-4 py-4 text-md'> 
              <img src="location.svg"  />
              <span className='pl-2'>London, United Kingdom, 24th Baker Street</span>
            </div>
            <div className='flex px-4 py-4 text-md'> 
              <img src="instagram.svg"  />
              <span className='pl-2'>@TenancyPassport</span>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Footer
