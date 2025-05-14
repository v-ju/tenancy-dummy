import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-scroll';
import clsx from 'clsx'
import Button from './Button.jsx';
const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setSidebar(prevState => !prevState)
  }
  const Navlink = ({title}) => (

    <Link  onClick={() => setSidebar(false)} to={title} offset={-90} spy smooth className='xl:text-[16px] lg:text-[14px] md:text-[12px] md:mx-3 lg:mx-5 xl:mx-8  max-md:flex max-md:ml-2  max-md:my-3 max-md:py-3 max-md:pl-1 text-black font-semibold transition-colors duration-200 cursor-pointer hover:text-p1 max-md:hover:bg-s2'>   
        {title}
    </Link>)

  return (
    <div className='w-full flex justify-center'>
      <header className="fixed max-w-[2000px] bg-white flex top-0 w-full z-9999 h-20 md:h-22 ">

        <div className="md:my-auto md:mx-5 md:h-18 mx-auto px-2 w-full flex">

          <a className='flex-1 '>
            <img src='biglogo.svg' alt='logo'className='w-40 h-20 md:w-35 md:h-15 xl:w-40 xl:h-18'></img>
          </a> 

          <button onClick={handleClick} className={clsx(`md:hidden border-1 my-5 rounded-sm`)}>
            <img src={`${sidebar ? 'cross' : 'menu-ham'}.svg`} alt="menu" height={40} width={40}/>
          </button>

          <div className={clsx(`my-auto max-md:pt-10 max-md:sidebar `,sidebar ? 'max-md:opacity-100' : 'max-md:opacity-0 max-md:pointer-events-none max-md:hidden')}>
            <ul className='flex max-md:flex-col max-md:justify-start md:items-center'>
              <li> <Navlink title={"Home"}/></li>
              <li> <Navlink title={"Services"}/> </li> 
              <li> <Navlink title={"About Us"}/></li> 
              <li> <Navlink title={"Contact Us"}/></li>
               <Button title={'Login'} fn={navigate} para='/login' />
            </ul>
              
          </div>
          
        </div>
      </header>
  </div>
    
  )
}

export default Header
